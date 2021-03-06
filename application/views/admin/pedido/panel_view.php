<!-- [ Main Content ] start -->
<div class="pcoded-main-container">
    <div class="pcoded-content">
        <!-- [ breadcrumb ] start -->
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10"><?php echo $titulo ?></h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!"><?php echo $titulo ?></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- [ breadcrumb ] end -->

        <!-- [ Main Content ] start -->
        <div class="row">
            <!-- subscribe start -->
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5><?php echo $titulo_lista ?></h5>
                        <div class="card-header-right">                            
                            <div id="frmPanel" class="btn-group card-option">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="feather icon-more-horizontal"></i>
                                </button>
                                <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li class="dropdown-item full-card"><a href="#!"><span><i class="feather icon-maximize"></i> Maximizar</span><span style="display:none"><i class="feather icon-minimize"></i> Restaurar</span></a></li>                                    
                                    <li class="dropdown-item reload-card"><a href="#!" v-on:click="ListarData" ><i class="feather icon-refresh-cw"></i> Actualizar</a></li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row align-items-center m-l-0">
                            <div class="col-sm-6">
                            </div>
                            <div class="col-sm-6 text-right">
                                <button onclick="LimpiarFormulario()" class="btn btn-secondary btn-sm btn-round has-ripple" data-toggle="modal" data-target="#modal-report"><i class="feather icon-plus"></i> Nuevo</button>
                            </div>
                        </div>
                        
                        <?php $this->load->view('admin/pedido/listar_view'); ?>

                    </div>
                </div>
            </div>
            <!-- subscribe end -->
        </div>
        <!-- [ Main Content ] end -->        
    </div>
</div>
<!-- Button trigger modal -->

<?php $this->load->view('admin/pedido/nuevo_view'); ?>
<?php $this->load->view('admin/pedido/motivo_view'); ?>

<script src="<?php echo URL_JS ?>pages/forms/admin/Pedido.js"></script>