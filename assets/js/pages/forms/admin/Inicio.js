var frmPanel = new Vue({
    el: '#frmPanel',
    data: {
        Table: CrearTable(),
        Combo: CrearCombo(),
        latitudc:'',
        longitudc:'',
        latitudt:'',
        longitudt:''
        // listaClientes:[],
        // listaDireccion:[],
        // listaMedioPago:[]
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
                        frmPanel.latitudc = respuesta.data.pedido.latitudc;
                        frmPanel.longitudc = respuesta.data.pedido.longitudc;
                        frmPanel.latitudt = respuesta.data.pedido.latitudt;
                        frmPanel.longitudc = respuesta.data.pedido.longitudc;                        
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
        // listaClientes:[],  
        // listaDireccion:[],
        // listaMedioPago:[],     
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
});

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

        axios.get(_URL_BASE_API_ + `pedido/listar/` + id, {
            headers: v_headers
            }).then(respuesta => {
                let data = respuesta.data.pedido[0];

                console.log(data);

                $('#modal-report').modal('show');
                frmData.Ver(data);

            });

        // EditarRegistro()
        //     .then((willDelete) => {
        //         if (willDelete) {
                    
        //             axios.get(_URL_BASE_API_ + `pedido/listar/` + id, {
        //             headers: v_headers
        //             }).then(respuesta => {
        //                 let data = respuesta.data.pedido[0];

        //                 console.log(data);

        //                 $('#modal-report').modal('show');
        //                 frmData.Ver(data);

        //             });
                    
        //         } 
        //     });

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



var frmMotivo = new Vue({
    el:'#frmMotivo',
    data:{
        motivo:'',
        id:''        
    },
    methods:{
        LimpiarFormulario: function () {        
            this.motivo = '', 
            this.id = ''    
        },
        GuardarDatos:function(){
    
            let motivo = new FormData($("#frmMotivo")[0]);
    
            axios.post( _URL_BASE_API_ + `pedido/eliminar` , motivo,{
                headers: v_headers
            })
                    .then(respuesta => {                        
    
                        if (respuesta.data.estado){                    
                            let reg = respuesta.data.pedido;
                            console.log(reg);
                            MensajeAlerta('Datos ingresados correctamente','success');   
                            frmPanel.ListarData();                                                    
                        }else{                            
                            MensajeAlerta(respuesta.data.pedido[0].mensaje,'error');
                        }

                        $('#modal-report-comentario').modal('hide');										
                    }).catch(error=>{
                        console.log(error);
                    });
            this.LimpiarFormulario(); 
            // $('#modal-report-comentario').modal('hide');										
        }
    }
    
    });


function Eliminar(id) {

    if(id>0){
        
        frmMotivo.id = id;     
        EliminarRegistro().then((willDelete)=>{
           if(willDelete){            
            $('#modal-report-comentario').modal('show');
            
            $("#frmMotivo").validate({
                submitHandler: function () {
                    frmMotivo.GuardarDatos();                       
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
           }
        });


        // EliminarRegistro()
        //     .then((willDelete) => {
        //         if (willDelete) {
                    
        //             axios.post( _URL_BASE_API_ + `producto/eliminar`, { id: id }, {
        //                 headers: v_headers
        //             })
        //                 .then(respuesta => {
                
        //                     if (respuesta.data.estado) {
                
        //                         frmPanel.Table.clear();
        //                         let lstData = respuesta.data.producto;
        //                         lstData.forEach(producto => {
        //                             frmPanel.AgregarTabla(producto);
        //                         });
                
        //                         frmPanel.Table.draw();
                
        //                     }
                
        //                 }).catch(error => {
        //                     console.log(error);
        //                 });
                    
        //         } 
        //     }).catch(error => {
        //         console.log(error);
        //     });

    }

}

function LimpiarFormulario(){
    frmData.LimpiarFormulario();
}

setInterval('frmPanel.ListarData()',30000);


function VerMapa(){
    $('#modal-report-mapa').modal('show');
    var id = $('#id').val();

    axios.get(_URL_BASE_API_ + `pedido/listar/`+id, {
        headers: v_headers
    }).then(respuesta => {

        if (respuesta.data.estado) {

            let lat = respuesta.data.pedido[0].latitudt==""?0:respuesta.data.pedido[0].latitudt;
            let lon = respuesta.data.pedido[0].longitudt==""?0:respuesta.data.pedido[0].longitudt;
        
            let latc = respuesta.data.pedido[0].latitudc==""?0:respuesta.data.pedido[0].latitudc;
            let lonc = respuesta.data.pedido[0].longitudc==""?0:respuesta.data.pedido[0].longitudc;
        
            var map;
        
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
        
        
            map = new google.maps.Map(document.getElementById("map"), {
              center: { lat: Number(lat), lng: Number(lon) },
              zoom: 14,
            }) ;
        
            directionsDisplay.setMap(map);
        
            var markerIconT = "http://localhost:8081/delywouempresa/assets/images/auth/tiendas.png"; 
            var markerIconC = "http://localhost:8081/delywouempresa/assets/images/auth/Cliente.png"; 
        
            if(lon!=0&&lat!=0){
                var marker = new google.maps.Marker({
                    position: { lat: Number(lat), lng: Number(lon) },
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    draggable: true,
                    icon:markerIconT
                  });
            }    
        
            if(lonc!=0 && latc!=0){
        
                var marker = new google.maps.Marker({
                    position: { lat: Number(latc), lng: Number(lonc) },
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    draggable: true,
                    icon:markerIconC
                  });
        
            }
        
            
        
            directionsService.route({
                origin: { lat: Number(lat), lng: Number(lon) },
                destination: { lat: Number(latc), lng: Number(lonc) },
               // waypoints: waypts,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Ha fallat la comunicació amb el mapa a causa de: ' + status);
                }
            });
        
            console.log(map);
        }
    });   

}


var frmContadores = new Vue({
    el:'#frmContadores',
    data:{
        cantproductos:0,
        cantpedidos :0,
        cantclientes :0
    },
    methods:{
        LimpiarFormulario: function () {        
            this.motivo = '', 
            this.id = ''    
        },
        GuardarDatosCant:function(){

            axios.get(_URL_BASE_API_ + `perfil/listar/`,{
                headers: v_headers
                }).then(respuesta => {                    
                    let data = respuesta.data.perfil;                                       
                    this.cantproductos = data.cantproductos;
                    this.cantpedidos = data.cantpedidos;
                    this.cantclientes = data.cantclientes;                    
                    $("h4#producto").text(''+data.cantproductos);
                    $("h4#pedido").text(''+data.cantpedidos);
                    $("h4#cliente").text(''+data.cantclientes);  
                    
                    // $("h4#producto").text(''+data.cantproductos);
                    // $("h4#pedido").text(''+data.cantpedidos);
                    // $("h4#cliente").text(''+data.cantclientes);  
                });
            
        }
    }
});

frmContadores.GuardarDatosCant();



