<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Producto extends CI_Controller {

    function __construct() {
        parent::__construct();        
    }

    function index() {
        
        $data['main_content'] = 'admin/producto/panel_view';
        $data['titulo'] = 'Producto';
        $data['titulo_nuevo'] = 'Nueva producto';
        $data['titulo_lista'] = 'Lista de productos';
        $data['titulo_nuevo_mapa'] = 'Agregar mapa producto';
        $this->load->view('master/plantilla_view', $data);
        
    }

}
