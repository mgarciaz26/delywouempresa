$(function () {

    $("#frmLogin").validate({
        submitHandler: function () {
            frmLogin.IniciarSesion();
        },
        rules: {
            'usuario': {
                required: true
            },
            'contrasena': {
                required: true,
                minlength: 6,
                maxlength: 20
            },
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

var frmLogin = new Vue({
    el: '#frmLogin',
    data: {
        usuario: '',
        contrasena: ''
    },
    methods: {
        LimpiarFormulario: function () {
            this.usuario = '',
            this.contrasena = ''
        },
        ObtenerDatos: function () {
            return {
                usuario: this.usuario,
                contrasena: this.contrasena
            }
        },
        IniciarSesion: function () {

            let login = this.ObtenerDatos();
            let url = _URL_BASE_API_ + `usuario/consultar`;
            
            axios.post( url , login)
					.then(respuesta => {
                        
                        if (respuesta.data.estado){
							
                            localStorage.setItem(_TOKEN_ADM_VALOR_, respuesta.data[_TOKEN_ADM_VALOR_]);
                            localStorage.setItem("usuario", login.usuario);
                            
                            location.href= _URL_DOMINIO_ + `admin/inicio`;

                        }else{
                                                        
							document.getElementById("mensaje").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
							                                                    `+ respuesta.data.mensaje +`
							                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						                                                    </div>`
                            localStorage.clear();

                        }
										
					}).catch(error=>{
						console.log(error);
					});
                    
            this.LimpiarFormulario();
            
        }
    }
})