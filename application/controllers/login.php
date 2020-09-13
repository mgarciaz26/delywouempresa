<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Login extends CI_Controller {

    function __construct() {
        parent::__construct();
        //$this->load->model('adminsorteo/inicio_model'); 
    }

    function index() {

        $data['titulo'] = '..:: Altoke | Iniciar sesión ::..';
        $this->load->view('inicio_view',$data);

    }

    // public function enviardatos() {
    //     $txt_usuario = trim($_POST['txt_usuario']);
    //     $txt_contrasena = trim($_POST['txt_contrasena']);

    //     $result = $this->inicio_model->dbenviardatos($txt_usuario, $txt_contrasena);

    //     if ($result) {

    //         $sesion_data = array(
    //             'logeado' => true,
    //             'nidusuario' => $result['nidusuario'],
    //             'cusuario' => $result['cusuario'],
    //             'idlugarventa' => $result['nidlugarventa'],
    //             'idsucursal' => $result['nidsucursal'],
    //         );

    //         $this->session->set_userdata($sesion_data);

    //         echo 1;
    //     } else {

    //         echo 0;
    //     }
    // }

}
