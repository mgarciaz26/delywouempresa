<div  data-backdrop="static" data-keyboard="false" class="modal fade" id="modal-report-contrasenia" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg-10">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Cambiar Contraseña</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>            
            <form id="frmCambiarContrasenia" data-parsley-validate novalidate>
            <div class="modal-body">                
                <input type="hidden" id="id" name="id" v-model="id" >                    
                <div class="form-group" >
                    <label class="floating-label" for="contrasenia">Nueva contraseña</label>
                    <input type="password" class="form-control" id="contrasenia" name="contrasenia" placeholder="" data-parsley-minlength="6" data-parsley-maxlength="50" v-model="contrasenia" required>
                </div>                        
                <div class="form-group" >
                    <label class="floating-label" for="repcontrasenia">Repetir contraseña</label>
                    <input type="password" class="form-control" id="repcontrasenia" name="repcontrasenia"  data-parsley-equalto="#contrasenia"  placeholder="" v-model="repcontrasenia" required>
                </div>                        
            </div>
            <!-- v-if="estadonegocio==0" -->
            <div class="modal-footer" id="estado0">                                        
                <button class="btn btn-primary"><i class="feather mr-2 icon-save"></i> Guardar</button>                        
            </div>            

            <div class="modal-footer" id="estado1">                                        
            <!-- v-if="estadonegocio==1" -->
            <button type="button" class="btn btn-primary"  onclick="CambiarContrasenia()"><i class="feather mr-2 icon-save"></i> Guardar</button>
            </div>

            </form>
        </div>
    </div>
</div>

