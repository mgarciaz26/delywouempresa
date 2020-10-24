
$(function () {

    // $("#frmData").validate({
    //     submitHandler: function () {
    //         frmImagenPortada.GuardarDatos();
    //     },        
    //     errorPlacement: function errorPlacement(error, element) {
    //         var $parent = $(element).parents('.form-group');
    //         if ($parent.find('.jquery-validation-error').length) {
    //             return;
    //         }
    //         $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));
    //     },
    //     highlight: function (element) {
    //         var $el = $(element);
    //         var $parent = $el.parents('.form-group');
    //         $el.addClass('is-invalid');
    //         if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
    //             $el.parent().addClass('is-invalid');
    //         }
    //     },
    //     unhighlight: function (element) {
    //         $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
    //     }
    // });

});

// var frmData = new Vue({
// el:'#frmData',
// data:{
//     id: '',
//     nombre: '',
//     email :'',
//     telefono :'',
//     fechanacimiento :'',  
//     estadodesc:'',      
//     selectchanged: true,
//     imagen:'',
//     imagenportada:''        
// },
// methods:{
//     LimpiarFormulario: function () {
//         this.id = '',
//         this.nombre = ''
//     },
//     ObtenerDatos: function () {
//         return {
//             id: this.id,
//             nombre: this.nombre               
//         }
//     },
//     ListarData :function(){
//         axios.get(_URL_BASE_API_ + `perfil/listar/`,{
//             headers: v_headers
//             }).then(respuesta => {                    
//                 let data = respuesta.data.perfil;                   
//                 this.nombre = data.nombre;
//                 this.telefono = data.telefono;
//                 this.email = data.email;
//                 this.fechanacimiento = data.fechanacimiento                                        
//                 this.selectchanged = data.estado==1?true:false;
//                 this.imagen = data.imagen;
//                 this.imagenportada = data.imagenportada;
//                 this.estadodesc = data.estado==1?"Abierto":"Cerrado";                                          
//             });
            
//     }
// }
// });

var frmImagenPortada = new Vue({
    el: '#frmImagenPortada',
    data: {
        id: '',        
        imagenportada: ''        
    },
    methods: {        
        LimpiarFormulario: function () {
            this.id = '',            
            this.imagen = ''            
        },
        ObtenerDatos: function () {
            return {
                id: this.id,                
                imagenportada: this.imagenportada                
            }
        },        
        GuardarDatos: function () {   

            let perfil = new FormData($("#frmImagenPortada")[0]);

            console.log(perfil);
            
            axios.post( _URL_BASE_API_ + `perfil/guardarimagenportada` , perfil,{
                headers: v_headers_multipart
            })
					.then(respuesta => {                        

                        if (respuesta.data.estado){
                        
                            let reg = respuesta.data.perfil;

                            // console.log(reg);

                            frmData.imagenportada = reg.imagenportada;
                                                      
                            MensajeAlerta('Datos ingresados correctamente','success');
                            
                        }else{                            
                            MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
                        }

                        $('#modalreportportada').modal('hide');
										
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


function CargarImagenPortada(){    
    console.log('estoy en la portada');
    $('#modalreportportada').modal("show");

    $("#frmData").validate({
        submitHandler: function () {
            frmImagenPortada.GuardarDatos();
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

// frmData.ListarData();