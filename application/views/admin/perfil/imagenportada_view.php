<!-- <div class="modal fade" id="mymodal" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <h1>Hola Mundo</h1>
</div> -->

<div class="modal fade" id="modalreportportada" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 id="myExtraLargeModalLabel" class="modal-title"><?php echo $titulo_nuevo ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="frmImagenPortada" >
            <div class="modal-body">
                
                    <input type="hidden" id="id" name="id" v-model="id" >
                    <div class="row">                                                     
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="floating-label" for="icono">Seleccionar imagen</label>
                                <input type="file" class="form-control" name="imagenes" id="imagenes" placeholder="Seleccione icono" >
                            </div>  
                        </div>                      
                    </div>                    
            </div>
            <div class="modal-footer">                        
                            <button type="button"  v-on:click="GuardarDatos()" class="btn btn-primary"><i class="feather mr-2 icon-save"></i> Guardar</button>                        
                    </div>
            </form>
        </div>
    </div>
</div>


