<div class="modal fade" id="modal-report" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><?php echo $titulo_nuevo ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="frmData">
                <div class="modal-body">

                    <input type="hidden" id="id" name="id" v-model="id">
                    <div class="form-row">
                        <div class="col-sm-12">
                            <div class="form-group" id="seleccionar">
                                <label class="floating-label" for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre"
                                    placeholder="Ingrese nombre" v-model="nombre">
                            </div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary"><i class="feather mr-2 icon-save"></i> Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>