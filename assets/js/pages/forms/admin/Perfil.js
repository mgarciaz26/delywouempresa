var frmData = new Vue({
    el: '#frmData',
    data: {
        id: '',
        nombre: '',
        email :'',
        telefono :'',
        fechanacimiento :'',  
        estadodesc:'',      
        selectchanged: true,
        imagen:'',
        imagenportada:'',
        latitud:0,
        longitud:0,
        departamento:'',
        contrasenia:'',
        repcontrasenia:'' ,
        estadonegocio:0,
        cantproductos:0,
        cantpedidos :0,
        cantclientes :0       
    },
    methods: {
        LimpiarFormulario: function () {
            this.id = '',
            this.nombre = ''
        },
        ObtenerDatos: function () {
            return {
                id: this.id,
                nombre: this.nombre               
            }
        },
        ListarData :function(){
            axios.get(_URL_BASE_API_ + `perfil/listar/`,{
                headers: v_headers
                }).then(respuesta => {                    
                    let data = respuesta.data.perfil;                   
                    this.nombre = data.nombre;
                    this.telefono = data.telefono;
                    this.email = data.email;
                    this.fechanacimiento = data.fechanacimiento                                        
                    this.selectchanged = data.estado==1?true:false;
                    this.imagen = data.imagen;
                    this.imagenportada = data.imagenportada;
                    this.estadodesc = data.estado==1?"Abierto":"Cerrado";      
                    this.latitud = data.latitud;
                    this.longitud = data.longitud;
                    this.departamento = data.departamento;   
                    this.estadonegocio = data.estadonegocio;  
                    this.cantproductos = data.cantproductos;
                    this.cantpedidos = data.cantpedidos;
                    this.cantclientes = data.cantclientes;
                    
                    // $("h4#producto").text(''+data.cantproductos);
                    // $("h4#pedido").text(''+data.cantpedidos);
                    // $("h4#cliente").text(''+data.cantclientes);

                    if(data.estadonegocio==1)
                    {                        
                        $("#modal-report-contrasenia").modal('show');
                        $("#estado1").show();
                        $("#estado0").hide();
                    }
                });
                
        },
        CambiarEstado:function(){    
            
            

            CambiarEstado(this.selectchanged == true ? 'Abrir' : 'Cerrar')
            .then((willDelete) => {
                if (willDelete) {                                        
                    let perfil = {
                        estado : this.selectchanged 
                    }
                    axios.post( _URL_BASE_API_ + `perfil/cambiar`,perfil,{
                        headers: v_headers
                    }).then (respuesta => {
                        
                        let data = respuesta.data.perfil;
                        this.nombre = data.nombre;
                        this.telefono = data.telefono;
                        this.email = data.email;
                        this.fechanacimiento = data.fechanacimiento      
                        this.selectchanged = data.estado==1?true:false;  
                        this.imagen = data.imagen;
                        this.imagenportada = data.imagenportada;
                        this.estadodesc = data.estado==1?"Abierto":"Cerrado";                                          
                    }); 
                    
                    
                }
                else if (willDelete==null){

                    if(!this.selectchanged){
                        this.selectchanged = true;  
                        this.estadodesc = "Abierto";              
                    } 
                    else{
                        this.selectchanged = false;               
                        this.estadodesc = "Cerrado"; 
                    }
                    
                }                
            }).catch(error => {                
                console.log(error);
            });
            
                       
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



var frmImagen = new Vue({
    el: '#frmImagen',
    data: {
        id: '',        
        imagen: ''        
    },
    methods: {        
        LimpiarFormulario: function () {
            this.id = '',            
            this.imagen = ''            
        },
        ObtenerDatos: function () {
            return {
                id: this.id,                
                imagen: this.imagen                
            }
        },        
        GuardarDatos: function () {   
        
            let perfil = new FormData($("#frmImagen")[0]);

            console.log(perfil);
            
            axios.post( _URL_BASE_API_ + `perfil/guardarimagen` , perfil,{
                headers: v_headers_multipart
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                        
                            let reg = respuesta.data.perfil;

                            console.log(reg);

                            frmData.imagen = reg.imagen;
                            localStorage.setItem("ruta",reg.imagen);
                            setTimeout(() => location.reload(), 1000);
                            // v_sesion.ruta = reg.imagen;
                            


                            MensajeAlerta('Datos ingresados correctamente','success');                            
                        }else{                            
                            MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
                        }

                        $('#modalreport').modal('hide');										
					}).catch(error=>{
						console.log(error);
					});
            
            this.LimpiarFormulario();

        },
        Ver: function (data) {
            this.id = data.id;            
            this.imagen = data.imagen;            
        }
    }
})


function CargarImagen(){    

    // console.log('estoy en perfil');

    $('#modalreport').modal("show");


    $("#frmData").validate({
        submitHandler: function () {
            frmImagen.GuardarDatos();            
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

frmData.ListarData();

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

// function CargarImagen(){    

//     console.log('estoy en perfil');

//     $('#modalreport').modal("show");


//     $("#frmData").validate({
//         submitHandler: function () {
//             frmImagen.GuardarDatos();            
//         },        
//         errorPlacement: function errorPlacement(error, element) {
//             var $parent = $(element).parents('.form-group');
//             if ($parent.find('.jquery-validation-error').length) {
//                 return;
//             }
//             $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));
//         },
//         highlight: function (element) {
//             var $el = $(element);
//             var $parent = $el.parents('.form-group');
//             $el.addClass('is-invalid');
//             if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
//                 $el.parent().addClass('is-invalid');
//             }
//         },
//         unhighlight: function (element) {
//             $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
//         }
//     });

// }

function LocalizarDireccion() {

    $('#modal-report').modal("show");
    // frmData.ListarData();


    axios.get(_URL_BASE_API_ + `perfil/listar/`,{
        headers: v_headers
        }).then(respuesta => {                    
            let data = respuesta.data.perfil; 

            frmData.departamento = data.departamento;        

    if(frmData.latitud=="" && frmData.longitud==""){

    
      //frmData.ListarData();
      var direccion = frmData.departamento;
      axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:direccion,
        key:'AIzaSyAPHvOG40vPTOQvsifMNZPY_eOW38QJ2c4'
       }
      })
      .then(function(response){         
        let lats = response.data.results[0].geometry.location.lat;
        let lons = response.data.results[0].geometry.location.lng;

        let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: lats, lng: lons },
            zoom: 9
        });
    
        var marker = new google.maps.Marker({
          position: { lat: Number(lats), lng: Number(lons) },
          map: map,
          animation: google.maps.Animation.BOUNCE,
          draggable: true,
        });

      }).catch(function(error){
          console.log(error);
      });
    }
    else {

        lat = frmData.latitud;
        lon = frmData.longitud;


        var map;
        
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: Number(lat), lng: Number(lon) },
          zoom: 17,
        }) ;
    
        var marker = new google.maps.Marker({
          position: { lat: Number(lat), lng: Number(lon) },
          map: map,
          animation: google.maps.Animation.BOUNCE,
          draggable: true,
        });
    
        console.log(map);

    }
});


    // });

    
  
    //   axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    //   params:{
    //     address:direccion,
    //     key:'AIzaSyAPHvOG40vPTOQvsifMNZPY_eOW38QJ2c4'
    //   }
    // })
    // .then(function(response){
  
    //   var lat = response.data.results[0].geometry.location.lat;
    //   var lng = response.data.results[0].geometry.location.lng;
  
    //   let map = new google.maps.Map(document.getElementById("map"), {
    //       center: { lat: lat, lng: lng },
    //       zoom: 10
    //   });
  
    //   google.maps.event.addListener(map, 'click', function(event) {
  
    //       placeMarker(event.latLng) ;
  
    //   });
  
    //   var marker;
  
    //   function placeMarker(location) {
  
    //       if ( marker ) {
    //           marker.setPosition(location);
    //       }else{
    //           marker = new google.maps.Marker({
    //           position: location,
    //           map: map
    //           });
    //       }
  
    //       var lat = marker.getPosition().lat();
    //       var lng = marker.getPosition().lng();
  
    //       console.log(lng);
  
    //   }
  
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
  }

  /* -- Guardar cordenadas ---*/
  var frmUbicacion = new Vue({
    el:'#frmUbicacion',
    data :{        
        lugar:'',
        latitud:'',
        longitud:'',
        nombre:'',
        direccion:'' , 
        departamento:''      
    },
    methods:{
        ObtenerDatosUbicacion: function () {
            return {                                
                lugar:this.lugar,
                latitud:this.latitud,
                longitud:this.longitud ,
                nombre:this.nombre ,
                departamento:this.departamento              
            }
        },
        GuardarDatosUbicacion: function(){
            
            let ubicacion = this.ObtenerDatosUbicacion();

            console.log(ubicacion);
            
            axios.post( _URL_BASE_API_ + `perfil/guardarubicacion` , ubicacion,{
                headers: v_headers
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                        
                            let reg = respuesta.data.perfil;
                            // frmData.latitud = reg.latitud;
                            // frmData.longitud = reg.longitud;
                            frmData.latitud = reg.sedi_latitud;
                            frmData.longitud = reg.sedi_longitud;                            

                            MensajeAlerta('Datos ingresados correctamente','success');
                            
                        }else{                            
                            MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
                        }

                        $('#modal-report').modal('hide');
										
					}).catch(error=>{
						console.log(error);
					});
            
            // this.LimpiarFormulario();
        }
    }
});

  /*---------------------------*/




  function BuscarDireccion(){

    var direccion = $("#direccion").val();

      axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:direccion,
        key:'AIzaSyAPHvOG40vPTOQvsifMNZPY_eOW38QJ2c4'
      }
    })
    .then(function(response){
  
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;

      var departamento = response.data.results[0].address_components[3].long_name;
      var provincia = response.data.results[0].address_components[2].long_name;
      var distrito = response.data.results[0].address_components[1].long_name;
      var pais = response.data.results[0].address_components[4].long_name;
      var codigopostal = response.data.results[0].address_components[5].long_name;

      
    
      frmUbicacion.latitud = lat;
      frmUbicacion.longitud = lng;
      frmUbicacion.lugar = departamento+', '+pais;
      frmUbicacion.nombre = provincia;
      frmUbicacion.departamento = departamento;
      
        
    //   console.log(response.data.results[0]);



    //   console.log(response.data.results[0].address_components[3])
  
      let map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: lat, lng: lng },
          zoom: 17
      });
  
      var marker = new google.maps.Marker({
        position: { lat: Number(lat), lng: Number(lng) },
        map: map,
        animation: google.maps.Animation.BOUNCE,
        draggable: true,
      });

    //   console.log(marker);
  
    })
    .catch(function(error){
      console.log(error);
    });

  }


var frmCambiarContrsenia = new Vue({
el:'#frmCambiarContrasenia',
data:{
    contrasenia:'',
    repcontrasenia:'',
    estadonegocio: 1 
},
methods:{
    LimpiarFormulario: function () {        
        this.contrasenia = '',
        this.repcontrasenia = ''        
    },
    GuardarDatos:function(){

        let contrasenia = new FormData($("#frmCambiarContrasenia")[0]);

        axios.post( _URL_BASE_API_ + `perfil/guardarcontrasenia` , contrasenia,{
            headers: v_headers
        })
                .then(respuesta => {                        

                    if (respuesta.data.estado){                    
                        let reg = respuesta.data.perfil;
                        console.log(reg);
                        MensajeAlerta('Datos ingresados correctamente','success');                          
                        $('#modal-report-contrasenia').modal('hide');										
                    }else{                            
                        MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
                    }                    
                }).catch(error=>{
                    console.log(error);
                });
        this.LimpiarFormulario(); 
    }
}

});
  function CambiarContrasenia(){    
    
    if(frmData.estadonegocio==1){        

        let contrasenia = new FormData($("#frmCambiarContrasenia")[0]);        
        axios.post( _URL_BASE_API_ + `perfil/guardarcontrasenia` , contrasenia,{
            headers: v_headers
        })
                .then(respuesta => {                        

                    if (respuesta.data.estado){                    
                        let reg = respuesta.data.perfil;
                        console.log(reg);
                        MensajeAlerta('Datos ingresados correctamente','success');                          
                        $('#modal-report-contrasenia').modal('hide');										
                    }else{                            
                        MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
                    }                    
                }).catch(error=>{
                    console.log(error);
                });
    }    
    else {

        $("#estado0").show();
        $("#estado1").hide();

        $('#modal-report-contrasenia').modal('show');
    $("#frmCambiarContrasenia").validate({
        submitHandler: function () {
            frmCambiarContrsenia.GuardarDatos();            
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

  }


//   function CambiarContrseñaIncio(){

//   }

