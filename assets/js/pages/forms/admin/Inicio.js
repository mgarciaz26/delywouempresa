
//ValidarSesion().then(x => {

//ValidarSesion();

var frmPanel = new Vue({
    el: '#frmPanel',
    data: {
        Table: CrearTable(),
        Combo: CrearCombo()
    },
    methods: {
        AgregarTabla: function (data) {
            this.Table.row.add(
                [data.cliente,                    
                data.direccion,
                data.mediopago,
                data.estado == 1 ? '<span class="badge badge-success">Pendiente</span>' : 
                data.estado == 2 ? '<span class="badge badge-danger">Preparando</span>' : 
                data.estado == 3 ? '<span class="badge badge-danger">En camino</span>' : '<span class="badge badge-danger">Llegamos</span>',
                '<a href="#!" onClick="Editar(' + data.id + ')" ><i class="icon feather icon-eye f-w-600 f-16 m-r-15 text-c-yellow"></i></a>' +
                '<a href="#!" onClick="CambiarEstado(' + data.id + ')" ><i class="icon feather icon-check f-w-600 f-16 m-r-15 text-c-green"></i></a>' +
                '<a href="#!" onClick="Eliminar(' + data.id + ')" ><i class="feather icon-trash-2 f-w-600 f-16 text-c-red"></i></a>'
            ]);
        },
        AgregarCombo: function (data) {
            
                var option = $("<option/>", {
                   value: data.id,
                   text: data.nombre
                });

                $("#categoria").append(option);

        },
        ListarData: function () {

            axios.get(_URL_BASE_API_ + `pedido/listar`, {
                headers: v_headers
            }).then(respuesta => {

                if (respuesta.data.estado) {

                    this.Table.clear();
                    let lstData = respuesta.data.pedido;
                    lstData.forEach(pedido => {
                        this.AgregarTabla(pedido);
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
        cliente: '',
        mediopago: '',
        direccion: '',
        precio: '0.0',        
        descuento: '0.0',
        detalle: { nombre: '', imagen: '' }
    },
    methods: {        
        LimpiarFormulario: function () {
            this.id = '',
            this.categoria = '',
            this.nombre = '',
            this.imagen = '',
            this.precio = '0.0',            
            this.descuento = '0.0',
            this.detalle = []
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
        Recepcionar: function (){
          
            let pedido = {id: this.id}
            
            axios.post( _URL_BASE_API_ + `pedido/cambiarestado` , pedido,{
                headers: v_headers
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                                                    
                            frmPanel.Table.clear();
                            let lstData = respuesta.data.pedido;
                            lstData.forEach(pedido => {
                                frmPanel.AgregarTabla(pedido);
                            });

                            frmPanel.Table.draw();

                            MensajeAlerta('Datos ingresados correctamente','success');
                            
                        }else{
                            
                            MensajeAlerta(respuesta.data.producto[0].mensaje,'error');

                        }

                        $('#modal-report').modal('hide');
										
					}).catch(error=>{
						console.log(error);
					});

        },
        GuardarDatos: function () {
            
            //let producto = this.ObtenerDatos();
            //this.FormatoDecimal();

            let producto = new FormData($("#frmData")[0]);
            
            axios.post( _URL_BASE_API_ + `producto/guardar` , producto,{
                headers: v_headers
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
            this.cliente = data.cliente;
            this.mediopago = data.mediopago; 
            this.direccion = data.direccion;                      
            this.detalle = data.detalle;
            console.log(this.detalle[0].nombre);
        }
    }
})


function CrearTable() {
    var table = $('#report-table').DataTable(
        {
            //dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            "order": [[ 3, "desc" ]]
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
                    
                    axios.get(_URL_BASE_API_ + `pedido/listar/` + id, {
                    headers: v_headers
                    }).then(respuesta => {
                        let data = respuesta.data.pedido[0];

                        console.log(data);

                        $('#modal-report').modal('show');
                        frmData.Ver(data);

                    });
                    
                } 
            });

    }    

}

function CambiarEstado (id) {

    if(id>0){

        EditarRegistro()
            .then((willDelete) => {
                if (willDelete) {
                    
                    let pedido = {id: id}
            
            axios.post( _URL_BASE_API_ + `pedido/cambiarestado` , pedido,{
                headers: v_headers
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                                                    
                            frmPanel.Table.clear();
                            let lstData = respuesta.data.pedido;
                            lstData.forEach(pedido => {
                                frmPanel.AgregarTabla(pedido);
                            });

                            frmPanel.Table.draw();

                            MensajeAlerta('Datos ingresados correctamente','success');
                            
                        }else{
                            
                            MensajeAlerta(respuesta.data.producto[0].mensaje,'error');

                        }

                        $('#modal-report').modal('hide');
										
					}).catch(error=>{
						console.log(error);
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

setInterval('frmPanel.ListarData()',30000);