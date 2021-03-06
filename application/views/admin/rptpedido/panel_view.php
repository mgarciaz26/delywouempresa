<!-- [ Main Content ] start -->

<!-- <div id="app"> -->
    <!-- <div> -->
    <div class="pcoded-main-container">
        <div class="pcoded-content">


        <div id="app">

        

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
                                        <!-- v-on:click="ListarData" -->
                                        <li class="dropdown-item reload-card"><a href="#!"  ><i class="feather icon-refresh-cw"></i> Actualizar</a></li>                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row align-items-center m-l-0">
                                <div class="col-sm-6">
                                </div>
                                <!-- <div class="col-sm-6 text-right">
                                    <button onclick="LimpiarFormulario()" class="btn btn-secondary btn-sm btn-round has-ripple" data-toggle="modal" data-target="#modal-report"><i class="feather icon-plus"></i> Nuevo</button>
                                </div> -->
                                <div class="col-sm-6 text-right">                                
                                        <button type="button" class="btn btn-secondary btn-sm btn-round has-ripple" data-toggle="modal" data-target="#modal-report-filtro"><i class="feather icon-filter"></i> Filtrar Por</button>
                                    </div>
                            </div>                            
                            <?php $this->load->view('admin/rptpedido/listar_view'); ?>
                        </div>
                    </div>
                </div>
                <!-- subscribe end -->
            </div>

            <?php $this->load->view('admin/inicio/filtro_view'); ?>
            
        </div>   

            <!-- < ?php $this->load->view('admin/rptpedido/listar_view'); ?> -->

            <!-- [ Main Content ] end -->        
        </div>
    </div>
    <!-- </div> -->
    
    <!-- Modal de la lista -->
    <!-- < ?php $this->load->view('./admin/rptpedido/listar_view'); ?> -->
    <!-- < ?php $this->load->view('admin/inicio/filtro_view'); ?> -->
<!-- </div> -->
<!-- Button trigger modal -->

<!-- < ?php $this->load->view('admin/pedido/listar_view'); ?> -->
<!-- < ?php $this->load->view('admin/pedido/nuevo_view'); ?> -->
<!-- < ?php $this->load->view('admin/pedido/motivo_view'); ?> -->

<script src="<?php echo URL_JS ?>pages/forms/admin/Pedido.js"></script>