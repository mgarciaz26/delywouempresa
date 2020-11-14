<div class="modal fade" id="modal-report" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><?php echo $titulo_nuevo ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="frmData" >
            <div class="modal-body">
                
                    <input type="hidden" id="id" name="id" v-model="id" >
                    <div class="row">
                    <div class="col-md-6">
                            <div class="form-group">
                                <label class="floating-label">Categoría</label>
                                <select class="form-control" name="categoria" id="categoria" >
                                    <option value="0">Seleccione...</option>
                                </select>
                            </div>
                        </div>                      
                        <div class="col-sm-6">
                            <div class="form-group" >
                                <label class="floating-label" for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese nombre" v-model="nombre" >
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="floating-label" for="icono">Seleccionar imagen</label>
                                <input type="file" class="form-control" name="imagenes" id="imagenes" placeholder="Seleccione icono" >
                            </div>  
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="floating-label" for="precio">Precio</label>
                                <input type="number" class="form-control" v-on:change="FormatPrecio()" id="precio" name="precio" placeholder="Ingresa precio" v-model="precio" >
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="floating-label" for="descuento">Descuento</label>
                                <input type="number"  class="form-control"  v-on:change="FormatDescuento()" id="descuento" name="descuento" placeholder="Ingrese descuento" v-model="descuento" >
                            </div>
                        </div>                        
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label class="floating-label" for="detalle">Detalle</label>
                                <input type="text" class="form-control" id="detalle" name="detalle" placeholder="Ingrese detalle" v-model="detalle">
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