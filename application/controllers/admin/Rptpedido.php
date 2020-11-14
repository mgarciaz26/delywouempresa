<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Rptpedido extends CI_Controller {

    function __construct() {
        parent::__construct();        
    }

    function index() {
        
        $data['main_content'] = 'admin/rptpedido/panel_view';
        $data['titulo'] = 'Reporte de Pedido';
        $data['titulo_nuevo'] = 'Nueva pedido';
        $data['titulo_lista'] = 'Lista de pedidos para hoy';
        $data['titulo_nuevo_mapa'] = 'Agregar mapa producto';
        $data['titulo_filtro'] = 'Filtro de Datos';
        $this->load->view('master/plantilla_view', $data);
        
    }

}
