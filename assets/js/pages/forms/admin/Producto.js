
//ValidarSesion().then(x => {

//ValidarSesion();



$(function () {

    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
    }, "Este campo es obligatorio");

    $("#frmData").validate({
        submitHandler: function () {
            frmData.GuardarDatos();
        },
        rules: {
            'categoria': {
                required: true,
                valueNotEquals: "0"              
            },
            'nombre': {
                required: true                
            },
            'imagen': {
                required: true                
            },
            'precio': {
                required: true,
                number: true               
            },
            'descuento': {
                required: true,
                number: true               
            },
            'detalle': {
                required: true                
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
        Table: CrearTable(),
        Combo: CrearCombo()
    },
    methods: {
        AgregarTabla: function (data) {

            console.log(data);

            this.Table.row.add(
                [data.categoria,
                    '<img src="'+ data.imagen + '" with="40px" height="40px" />' ,
                data.nombre,
                data.precio_venta,
                data.estado == 1 ? '<span class="badge badge-success">Activo</span>' : '<span class="badge badge-danger">Inactivo</span>',
                '<a href="#!" id="editar" onClick="Editar(' + data.id + ')" ><i class="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"></i></a>' +
                '<a href="#!" onClick="Eliminar(' + data.id + ')" ><i class="feather icon-trash-2 f-w-600 f-16 text-c-red"></i></a>'
            ]);
        },
        AgregarCombo: function (data) {
            
                console.log(data);

                var option = $("<option/>", {
                   value: data.id,
                   text: data.nombre
                });

                $("#categoria").append(option);

        },
        ListarData: function () {

            axios.get(_URL_BASE_API_ + `producto/listar`, {
                headers: v_headers
            }).then(respuesta => {

                if (respuesta.data.estado) {

                    this.Table.clear();
                    let lstData = respuesta.data.producto;
                    lstData.forEach(producto => {
                        this.AgregarTabla(producto);
                    });

                    this.Table.draw();

                }else{

                    this.Table.clear();
                    
                    this.Table.draw();

                }
            });
        },
        ListarCategoria: function () {

            axios.get(_URL_BASE_API_ + `categoria/listar`, {
                headers: v_headers
            }).then(respuesta => {

                if (respuesta.data.estado) {

                    let lstData = respuesta.data.categoria;                    
                    lstData.forEach(categoria => {
                        this.AgregarCombo(categoria);
                    });

                }else{
                    

                }
            });
        }

    }

});



var frmData = new Vue({
    el: '#frmData',
    data: {
        id: '',
        categoria: '',
        nombre: '',
        imagen: '',
        precio: '0.0',        
        descuento: '0.0',
        detalle: ''
    },
    methods: {        
        LimpiarFormulario: function () {
            this.id = '',
            this.categoria = '',
            this.nombre = '',
            this.imagen = '',
            this.precio = '0.0',            
            this.descuento = '0.0',
            this.detalle = ''
        },
        ObtenerDatos: function () {
            return {
                id: this.id,
                categoria: $("#categoria").val(),
                nombre: this.nombre,
                imagen: this.imagen,
                precio: this.precio,   
                descuento: this.descuento,
                detalle: this.detalle
            }
        },
        FormatoDecimal: function (){

            this.precio = this.precio.toFixed(2);
            this.descuento = this.descuento.toFixed(2);

        },
        GuardarDatos: function () {
            
            //let producto = this.ObtenerDatos();
            //this.FormatoDecimal();

            let producto = new FormData($("#frmData")[0]);
            
            axios.post( _URL_BASE_API_ + `producto/guardar` , producto,{
                headers: v_headers_multipart
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                        
                            let reg = respuesta.data.producto[0];
                            
                            if (producto.id === 0){

                                frmPanel.AgregarTabla(reg);
                                frmPanel.Table.draw();

                            }else{

                                frmPanel.ListarData();

                            }

                            MensajeAlerta('Datos ingresados correctamente','success');
                            
                        }else{
                            
                            MensajeAlerta(respuesta.data.producto[0].mensaje,'error');

                        }

                        $('#modal-report').modal('hide');
										
					}).catch(error=>{
						console.log(error);
					});
            
            this.LimpiarFormulario();

        },
        Ver: function (data) {
            this.id = data.id;
            this.categoria = data.categoria;
            this.nombre = data.nombre; 
            this.imagen = data.imagen;
            this.precio = data.precio.toFixed(2);
            this.descuento = data.descuento.toFixed(2);            
            this.detalle = data.detalle;
            $("#categoria option[value="+ data.categoria_id +"]").attr("selected",true);                     
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

function CrearCombo() {
    
    var combo = $('#ubigeo');

    return combo;

}

frmPanel.ListarCategoria();
frmPanel.ListarData();

function Editar(id) {
    
    if(id>0){

        EditarRegistro()
            .then((willDelete) => {
                if (willDelete) {
                    
                    axios.get(_URL_BASE_API_ + `producto/listar/` + id, {
                    headers: v_headers
                    }).then(respuesta => {
                        let data = respuesta.data.producto[0];
                        $('#modal-report').modal('show');
                        frmData.Ver(data);

                    });
                    
                } 
            });

    }
    

}

function Eliminar(id) {

    if(id>0){

        EliminarRegistro()
            .then((willDelete) => {
                if (willDelete) {
                    
                    axios.post( _URL_BASE_API_ + `producto/eliminar`, { id: id }, {
                        headers: v_headers
                    })
                        .then(respuesta => {
                
                            if (respuesta.data.estado) {
                
                                frmPanel.Table.clear();
                                let lstData = respuesta.data.producto;
                                lstData.forEach(producto => {
                                    frmPanel.AgregarTabla(producto);
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

function LimpiarFormulario(){
    frmData.LimpiarFormulario();
}

//$('.money_example').mask('0.00');

$("#precio").change(function() {
    var $this = $(this);
    $this.val(parseFloat($this.val()).toFixed(2));        
});

$("#descuento").change(function() {
    var $this = $(this);
    $this.val(parseFloat($this.val()).toFixed(2));        
});

//});