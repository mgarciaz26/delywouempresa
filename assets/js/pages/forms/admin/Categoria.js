//ValidarSesion();

frmPanel.ListarData();

$(function () {

    $("#frmData").validate({
        submitHandler: function () {
            frmData.GuardarDatos();
        },
        rules: {
            'nombre': {
                required: true,
            }
        },
        errorPlacement: function errorPlacement(error, element) {
            var $parent = $(element).parents('.form-group');
            if ($parent.find('.jquery-validation-error').length) {
                return;
            }
            $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));
        },
        highlight: function (element) {
            var $el = $(element);
            var $parent = $el.parents('.form-group');
            $el.addClass('is-invalid');
            if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
                $el.parent().addClass('is-invalid');
            }
        },
        unhighlight: function (element) {
            $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
        }
    });

});

var frmPanel = new Vue({
    el: '#frmPanel',
    data: {
        Table: CrearTable()
    },
    methods: {
        AgregarTabla: function (data) {
            this.Table.row.add(
                [data.nombre,
                data.estado == 1 ? '<span class="badge badge-success">Activo</span>' : '<span class="badge badge-danger">Inactivo</span>',
                '<a href="#!" id="editar" onClick="Editar(' + data.id + ')" ><i class="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"></i></a>' +
                '<a href="#!" onClick="Eliminar(' + data.id + ')" ><i class="feather icon-trash-2 f-w-600 f-16 text-c-red"></i></a>'
                ]);
        },
        ListarData: function () {

            axios.get(_URL_BASE_API_ + `categoria/listar/`, {
                headers: v_headers
            }).then(respuesta => {

                if (respuesta.data.estado) {

                    this.Table.clear();
                    let lstData = respuesta.data.categoria;
                    lstData.forEach(categoria => {
                        this.AgregarTabla(categoria);
                    });

                    this.Table.draw();

                }else{

                    this.Table.clear();
                    
                    this.Table.draw();

                }
            });
        }

    }

});

var frmData = new Vue({
    el: '#frmData',
    data: {
        id: '',
        nombre: ''
    },
    methods: {
        LimpiarFormulario: function () {
            this.id = '',
            this.nombre = '',
            this.icono = ''
        },
        ObtenerDatos: function () {
            return {
                id: this.id,
                nombre: this.nombre               
            }
        },
        GuardarDatos: function () {
            
            let categoria = this.ObtenerDatos();
            
            axios.post( _URL_BASE_API_ + `categoria/guardar` , categoria,{
                headers: v_headers
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                        
                            let reg = respuesta.data.categoria[0];
                            
                            if (categoria.id === 0){

                                frmPanel.AgregarTabla(reg);
                                frmPanel.Table.draw();

                            }else{

                                frmPanel.ListarData();

                            }
                            

                            MensajeAlerta('Datos ingresados correctamente','success');
                            
                        }else{
                            
                            MensajeAlerta(respuesta.data.categoria[0].mensaje,'error');

                        }

                        $('#modal-report').modal('hide');
										
					}).catch(error=>{
						console.log(error);
					});
            
            this.LimpiarFormulario();

        },
        Ver: function (data) {
            this.id = data.id;
            this.nombre = data.nombre;
            this.icono = data.icono;
        }
    }
})


function CrearTable() {
    var table = $('#report-table').DataTable(
        {
            //dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

    return table;

}



function Editar(id) {
    
    if(id>0){

        EditarRegistro()
            .then((willDelete) => {
                if (willDelete) {
                    
                    axios.get(_URL_BASE_API_ + `categoria/listar/` + id, {
                    headers: v_headers
                    }).then(respuesta => {
                        let data = respuesta.data.categoria[0];
                        $('#modal-report').modal('show');
                        frmData.Ver(data);

                    });
                    
                } 
            }).catch(error => {
                console.log(error);
            });

    }

}

function Eliminar(id) {

    if(id>0){

        EliminarRegistro()
            .then((willDelete) => {
                if (willDelete) {
                    
                    axios.post( _URL_BASE_API_ + `categoria/eliminar`, { id: id }, {
                        headers: v_headers
                    })
                        .then(respuesta => {
                
                            if (respuesta.data.estado) {
                
                                frmPanel.Table.clear();
                                let lstData = respuesta.data.categoria;
                                lstData.forEach(categoria => {
                                    frmPanel.AgregarTabla(categoria);
                                });
                
                                frmPanel.Table.draw();
                
                            }
                
                        }).catch(error => {
                            console.log(error);
                        });
                    
                } 
            }).catch(error => {
                console.log(error);
            });

    }

}
