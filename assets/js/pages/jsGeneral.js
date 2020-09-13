
// function ValidarSesion(){
    
//     return new Promise(function(resolve, reject) {
//     axios.post( urlbaseapi + `admin/usuario/verificar`, {}, {
//         headers: v_headers
//     })
//         .then(respuesta => {
    
//             if (!respuesta.data.estado) {
                
//                 location.href= url + `login`;
    
//             }else{
    
//                 console.log(respuesta.data.usuario);
    
//             }
    
//         }).catch(error => {
//             console.log(error);
//     });

//     })
    
// }

ValidarSesion();

function ValidarSesion(){

    if (localStorage.getItem(_TOKEN_ADM_VALOR_)===null){
        location.href= _URL_DOMINIO_ + `login`;
    }

}

function CerrarSesion(){

    localStorage.removeItem(_TOKEN_ADM_VALOR_);
    localStorage.clear();
    location.href= _URL_DOMINIO_  + `login`;

}

function MensajeAlerta(mensaje,tipo){

    swal("delywou", mensaje, tipo);    

}

function EditarRegistro(){

    return swal({
        title: "¿Está seguro de editar registro?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    
}

function EliminarRegistro(){

    return swal({
        title: "¿Está seguro de eliminar registro?",
        text: "",
        icon: "info",
        buttons: true,
        dangerMode: true,
    })
    
}

function Log_Error(data){

    console.log(data);

}