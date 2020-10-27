<div class="modal fade" id="modal-report-comentario" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Motivo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>            
            <!-- data-parsley-validate -->
            <!-- v-model="comentario" -->
            <form id="frmMotivo" data-parsley-validate novalidate>
            <input type="hidden" id="id" name="id" v-model="id" >
            <div class="modal-body">                                
                <div class="form-group" >
                    <label class="floating-label" for="motivo">Descripcion</label>
                    <textarea class="form-control" rows="6" id="motivo" name="motivo" v-model="motivo" ></textarea>
                </div>                                             
            </div>
            <div class="modal-footer">                        
                            <button class="btn btn-primary"><i class="feather mr-2 icon-save"></i> Guardar</button>                        
                    </div>
            </form>
        </div>
    </div>
</div>

