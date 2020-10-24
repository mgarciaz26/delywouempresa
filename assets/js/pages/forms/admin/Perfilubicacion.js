
let lat = -8.079101;
let long = -79.120452;

LocalizarDireccion(lat,long);

// var frmImagenPortada = new Vue({
//     el: '#frmImagenPortada',
//     data: {
//         id: '',        
//         imagen: ''        
//     },
//     methods: {        
//         LimpiarFormulario: function () {
//             this.id = '',            
//             this.imagen = ''            
//         },
//         ObtenerDatos: function () {
//             return {
//                 id: this.id,                
//                 imagen: this.imagen                
//             }
//         },        
//         GuardarDatos: function () {   

//             let perfil = new FormData($("#frmImagenPortada")[0]);

//             console.log(perfil);
            
//             axios.post( _URL_BASE_API_ + `perfil/guardarimagenportada` , perfil,{
//                 headers: v_headers_multipart
//             })
// 					.then(respuesta => {                        

//                         if (respuesta.data.estado){
                        
//                             let reg = respuesta.data.perfil;

//                             // console.log(reg);

//                             // frmData.imagen = reg.imagen;
                                                      
//                             MensajeAlerta('Datos ingresados correctamente','success');
                            
//                         }else{                            
//                             MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
//                         }

//                         $('#modalreportportada').modal('hide');
										
// 					}).catch(error=>{
// 						console.log(error);
// 					});
            
//             this.LimpiarFormulario();

//         },
//         Ver: function (data) {
//             this.id = data.id;            
//             this.imagen = data.imagen;            
//         }
//     }
// })

// var frmUbicacion = new Vue({
//     el:'#frmUbicacion',
//     data :{
//         id:'',
//         departamento_id :'',
//         lugar:'',
//         latitud:'',
//         longitud:''        
//     },
//     methods:{
//         ObtenerDatos: function () {
//             return {
//                 // id: this.id,
//                 // nombre: this.nombre 
                
//                 departamento_id:this.departamento_id,
//                 lugar:this.lugar,
//                 latitud:this.latitud,
//                 longitud:this.longitud                
//             }
//         },
//         GuardarDatos: function(){

//             // let perfil = new FormData($("#frmImagenPortada")[0]);
//             let ubicacion = this.ObtenerDatos();

//             console.log(perfil);
            
//             axios.post( _URL_BASE_API_ + `perfil/guardarubicacion` , ubicacion,{
//                 headers: v_headers_multipart
//             })
// 					.then(respuesta => {                        

//                         if (respuesta.data.estado){
                        
//                             let reg = respuesta.data.perfil;

//                             // console.log(reg);

//                             //frmData.imagenportada = reg.imagenportada;
                                                      
//                             MensajeAlerta('Datos ingresados correctamente','success');
                            
//                         }else{                            
//                             MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
//                         }

//                         $('#modalreportportada').modal('hide');
										
// 					}).catch(error=>{
// 						console.log(error);
// 					});
            
//             this.LimpiarFormulario();
//         }
//     }
// });

function LocalizarDireccion(lat,long ) {

    var map;
  
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: Number(lat), lng: Number(lon) },
      zoom: 14,
    }) ;
  
    var marker = new google.maps.Marker({
      position: { lat: Number(lat), lng: Number(lon) },
      map: map,
      animation: google.maps.Animation.BOUNCE,
      draggable: true,
    });
  
    console.log(map);
  
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

