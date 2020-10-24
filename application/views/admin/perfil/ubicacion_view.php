


<div class="modal fade" id="modal-report" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">        
            <div class="modal-header">
                <h5 class="modal-title"><?php echo $titulo_nuevo ?></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
                    
            <div  class="form-inline" id="frmUbicacion" >
                <div class="modal-body">                    
                    <div class="container">
                        <div class="form-group row" style="margin-left: auto;">                                                                                                
                            <label class="floating-label" for="nombre">Dirección</label>
                            <input type="text" class="form-control col-sm-8" id="direccion" name="direccion" placeholder="Ingrese dirección" v-model="direccion" >
                            <button class="btn btn-primary" onclick="BuscarDireccion()"><i class="feather mr-1 icon-search"></i> Buscar</button>                                                        
                        </div> 
                        <div class="form-group" style="margin-top: 10px;">
                            <div id="map" style="width: 100%;height: 400px;" ></div>
                        </div>
                        <div class="form-group" style="margin-top: 10px;">
                            <button type="button"  class="btn btn-primary"   v-on:click="GuardarDatosUbicacion()"><i class="feather mr-1 icon-save"></i> Guardar</button>                        
                        </div>                            
                    </div>
                </div>
            </div>                            
        </div>
    </div>
</div>

<!-- onclick="GuardarDireccion()" -->


<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHvOG40vPTOQvsifMNZPY_eOW38QJ2c4"
      defer
></script>
