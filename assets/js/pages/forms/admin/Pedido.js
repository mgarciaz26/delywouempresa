
const frmPanel = new Vue({
    el:'#frmPanel',
    data:{
        id:0,     
         Table:CrearTable(),
        // tableData:[],
        // Combo: CrearCombo(),           
        // categoria: '',      
        // listaClientes
        // :[{}],
        // listaDireccion:[{}],
        // listamediopago:[{}],
        // descripcionD:'',
        // descripcionC:'',
        // descripcionMP:'',
        // mydateInicio:'',        
        // mydateFin:''
        // nombre: '',
        // imagen: '',
        // precio: '0.0',        
        // descuento: '0.0',
        // detalle: ''
    },
    mounted: function(){           
        this.ListarData();
    //    this.ComboCliente();
    //    this.ComboDireccion();
    //    this.ComboMedioPago();
    //    this.$nextTick(function() {
    //     $('#report-table').DataTable();
    //   })
    //    await this.ListarCategoria();
    },
    methods: {
        AgregarTabla: function (data) {
            this.Table.row.add(
                [data.cliente,                    
                data.direccion,
                data.mediopago,
                data.estado == 1 ? '<span class="badge badge-success">Activo</span>' : '<span class="badge badge-danger">Inactivo</span>',
                '<a href="#!" id="editar" onClick="Editar(' + data.id + ')" ><i class="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"></i></a>' +
                '<a href="#!" onClick="Eliminar(' + data.id + ')" ><i class="feather icon-trash-2 f-w-600 f-16 text-c-red"></i></a>'
            ]);            
        },
        
        // AgregarCombo: async function (data) {
            
        //         console.log(data);

        //         var option = $("<option/>", {
        //            value: data.id,
        //            text: data.nombre
        //         });

        //         $("#categoria").append(option);

        // },       
        ListarData: function () {
            axios.get(_URL_BASE_API_ + `pedido/listar`, {
                headers: v_headers
            }).then(respuesta => {                
                if (respuesta.data.estado) {                    
                    this.Table.clear();
                    let lstData = respuesta.data.pedido;                      
                    lstData.forEach(pedido => {
                        this.AgregarTabla(pedido);                                               
                    });
                    this.Table.draw();                                  
                }else {
                    this.Table.clear();                    
                    this.Table.draw();
                }
            });
        },
        // ComboCliente :function(){        
        //     // $("#frmDataFiltro > div.row >div.form-group").addClass("fill");    
        //     axios.get(_URL_BASE_API_ + `pedido/listarclientes`, {
        //         headers: v_headers
        //     }).then(respuesta => {
        //         if (respuesta.data.estado) {                    
        //             this.listaClientes = respuesta.data.clientes;                     
        //         }else{  

        //         }
        //     });
        // } ,                
        // ComboDireccion :function(){
        //     // $("#frmDataFiltro > div.row >div.form-group").addClass("fill");
        //     axios.get(_URL_BASE_API_ + `pedido/listardireccion`, {
        //         headers: v_headers
        //     }).then(respuesta => {
        //         if (respuesta.data.estado) {
        //             this.listaDireccion = respuesta.data.direccion;                                        
        //         }else{                    
        //         }
        //     });            
        // },        
        // ComboMedioPago :function(){
            
        //     axios.get(_URL_BASE_API_ + `pedido/listarmediopago`, {
        //         headers: v_headers
        //     }).then(respuesta => {
        //         if (respuesta.data.estado) {
        //             this.listamediopago = respuesta.data.mediopago;                                        
        //         }else{            
        //         }
        //     });
        // },
        // onChangeDireccion :function(e){
        //     this.descripcionD = e.target.options[e.target.options.selectedIndex].text;        
        // },
        // onChangeCliente :function(e){
        //     this.descripcionC = e.target.options[e.target.options.selectedIndex].text;        
        // },
        onChangeMedioPago :function(e){
            this.descripcionMP = e.target.options[e.target.options.selectedIndex].text;        
        },
        ObtenerDatosCombos:function(){
            return {
                direction:this.descripcionD,
                client:this.descripcionC,
                mediop:this.descripcionMP,
                mydateInicio:this.mydateInicio,
                mydateFin:this.mydateFin,
            }
        }
        // Recepcionar:function(){

        //     let combos = this.ObtenerDatosCombos();
        //     axios.post(_URL_BASE_API_ + `pedido/listarporcampo`,combos,{
        //         headers: v_headers
        //     }).then(respuesta => {

        //         if (respuesta.data.estado) {                
        //             // $('#report-table').DataTable().clear();
        //             let lstData = respuesta.data.pedido;
        //             this.tableData = lstData;
        //             // setTimeout(() => location.reload(), 1000);                      
        //             // lstData.forEach(pedido => {
        //             //     console.log(pedido);
        //             //     this.AgregarTabla(pedido);
        //             // });

        //             // $('#report-table').DataTable().draw();

        //         }else{

        //             // this.Table.clear();
                    
        //             // this.Table.draw();

        //         }
        //         $('#modal-report-filtro').modal('hide');
        //     });

            
        // }
        // EventoNuevo:function(){
        //     $("#frmDataFiltro > div.row >div.form-group").addClass("fill");
        // }



        // ListarCategoria: async function() {

        //     await axios.get(_URL_BASE_API_ + `categoria/listar`, {
        //         headers: v_headers
        //     }).then(respuesta => {

        //         if (respuesta.data.estado) {
        //             let lstData = respuesta.data.categoria;                    
        //             lstData.forEach(categoria => {
        //                 this.AgregarCombo(categoria);
        //             });

        //         }else{
                    

        //         }
        //     });
        // }
        // LimpiarFormulario: function () {
        //     this.id = '',
        //     this.categoria = '',
        //     this.nombre = '',
        //     this.imagen = '',
        //     this.precio = '0.0',            
        //     this.descuento = '0.0',
        //     this.detalle = ''
        // },
        // ObtenerDatos: function () {
        //     return {
        //         id: this.id,
        //         categoria: $("#categoria").val(),
        //         nombre: this.nombre,
        //         imagen: this.imagen,
        //         precio: this.precio,   
        //         descuento: this.descuento,
        //         detalle: this.detalle
        //     }
        // },
        // GuardarDatos: function () {
            
        //     //let producto = this.ObtenerDatos();
        //     //this.FormatoDecimal();

        //     let producto = new FormData($("#frmData")[0]);
            
        //     axios.post( _URL_BASE_API_ + `producto/guardar` , producto,{
        //         headers: v_headers
        //     })
		// 			.then(respuesta => {                        

        //                 if (respuesta.data.estado){
                        
        //                     let reg = respuesta.data.producto[0];
                            
        //                     if (producto.id === 0){

        //                         frmReporte.AgregarTabla(reg);
        //                         frmReporte.Table.draw();

        //                     }else{

        //                         frmReporte.ListarData();

        //                     }

        //                     MensajeAlerta('Datos ingresados correctamente','success');
                            
        //                 }else{
                            
        //                     MensajeAlerta(respuesta.data.producto[0].mensaje,'error');

        //                 }

        //                 $('#modal-report').modal('hide');
										
		// 			}).catch(error=>{
		// 				console.log(error);
		// 			});
            
        //     this.LimpiarFormulario();

        // },
        // Ver: function (data) {
        //     this.id = data.id;
        //     this.categoria = data.categoria;
        //     this.nombre = data.nombre; 
        //     this.imagen = data.imagen;
        //     this.precio = data.precio.toFixed(2);
        //     this.descuento = data.descuento.toFixed(2);            
        //     this.detalle = data.detalle;
        //     $("#categoria option[value="+ data.categoria_id +"]").attr("selected",true);                     
        // }

    }
});

const frmDataFiltro = new Vue({
    el:'#frmDataFiltro',
    data:{       
        listamediopago:[{}],
        mydateInicio:'',
        mydateFin:'',
        ListaEstado:[{'estado':1,'descripcion':'Activo'},{'estado':0,'descripcion':'Inactivo'}],
        descripcionEstado:'',
        estado:1
    },
    mounted: function(){           
        this.ComboMedioPago();
    },
    methods: {
        ComboMedioPago :function(){
            
            axios.get(_URL_BASE_API_ + `pedido/listarmediopago`, {
                headers: v_headers
            }).then(respuesta => {
                if (respuesta.data.estado) {
                    this.listamediopago = respuesta.data.mediopago;                                        
                }else{            
                }
            });
        },
        onChangeMedioPago :function(e){
            this.descripcionMP = e.target.options[e.target.options.selectedIndex].text;        
        },
        onChangeEstado :function(e){
            this.descripcionEstado = e.target.options[e.target.options.selectedIndex].text; 
            this.estado = e.target.options[e.target.options.selectedIndex].value;      
        },
        Recepcionar:function(){

            let combos = this.ObtenerDatosCombos();
            axios.post(_URL_BASE_API_ + `pedido/listarporcampo`,combos,{
                headers: v_headers
            }).then(respuesta => {

                if (respuesta.data.estado) {                
                    $('#report-table').DataTable().clear();
                    let lstData = respuesta.data.pedido;
                    // this.tableData = lstData;
                    // setTimeout(() => location.reload(), 1000);                      
                    lstData.forEach(pedido => {
                        console.log(pedido);
                        frmPanel.AgregarTabla(pedido);
                    });

                    $('#report-table').DataTable().draw();

                }else{

                    // this.Table.clear();
                    
                    // this.Table.draw();

                }
                $('#modal-report-filtro').modal('hide');
            });

            
        },
        ObtenerDatosCombos:function(){
            return {  
                estado:this.estado,                              
                mediop:this.descripcionMP,
                mydateInicio:this.mydateInicio,
                mydateFin:this.mydateFin
            }
        }

    }
});



// $(function () {

//     $.validator.addMethod("valueNotEquals", function(value, element, arg){
//         return arg !== value;
//     }, "Este campo es obligatorio");

//     $("#frmReporte").validate({
//         submitHandler: function () {
//             frmReporte.GuardarDatos();
//         },
//         rules: {
//             'categoria': {
//                 required: true,
//                 valueNotEquals: "0"              
//             },
//             'nombre': {
//                 required: true                
//             },
//             'imagen': {
//                 required: true                
//             },
//             'precio': {
//                 required: true,
//                 number: true               
//             },
//             'descuento': {
//                 required: true,
//                 number: true               
//             },
//             'detalle': {
//                 required: true                
//             }
//         },
//         errorPlacement: function errorPlacement(error, element) {
//             var $parent = $(element).parents('.form-group');
//             if ($parent.find('.jquery-validation-error').length) {
//                 return;
//             }
//             $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));
//         },
//         highlight: function (element) {
//             var $el = $(element);
//             var $parent = $el.parents('.form-group');
//             $el.addClass('is-invalid');
//             if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
//                 $el.parent().addClass('is-invalid');
//             }
//         },
//         unhighlight: function (element) {
//             $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
//         }
//     });

// });

// var frmPanel = new Vue({
//     el: '#frmPanel',
//     data: {
//         Table: CrearTable(),
//         Combo: CrearCombo(),
//         id:0

//         // listaClientes:[],
//         // listaDireccion:[],
//         // listamediopago:[],
//         // descripcionD:'',
//         // descripcionC:'',
//         // descripcionMP:''

//         // listaClientes:[{}],
//         // listaDireccion:[{}],
//         // listamediopago:[{}]
//     },
//     methods: {
//         AgregarTabla: function (data) {
//             this.Table.row.add(
//                 [data.cliente,                    
//                 data.direccion,
//                 data.mediopago,
//                 data.estado == 1 ? '<span class="badge badge-success">Activo</span>' : '<span class="badge badge-danger">Inactivo</span>',
//                 '<a href="#!" id="editar" onClick="Editar(' + data.id + ')" ><i class="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"></i></a>' +
//                 '<a href="#!" onClick="Eliminar(' + data.id + ')" ><i class="feather icon-trash-2 f-w-600 f-16 text-c-red"></i></a>'
//             ]);
//         },
//         AgregarCombo: function (data) {
            
//                 console.log(data);

//                 var option = $("<option/>", {
//                    value: data.id,
//                    text: data.nombre
//                 });

//                 $("#categoria").append(option);

//         },
//         ListarData: function () {

//             axios.get(_URL_BASE_API_ + `pedido/listar`, {
//                 headers: v_headers
//             }).then(respuesta => {

//                 if (respuesta.data.estado) {

//                     this.Table.clear();
//                     let lstData = respuesta.data.pedido;
//                     lstData.forEach(pedido => {
//                         this.AgregarTabla(pedido);
//                     });

//                     this.Table.draw();

//                 }else{

//                     this.Table.clear();
                    
//                     this.Table.draw();

//                 }
//             });
//         },
//         ListarCategoria: function () {

//             axios.get(_URL_BASE_API_ + `categoria/listar`, {
//                 headers: v_headers
//             }).then(respuesta => {

//                 if (respuesta.data.estado) {

//                     let lstData = respuesta.data.categoria;                    
//                     lstData.forEach(categoria => {
//                         this.AgregarCombo(categoria);
//                     });

//                 }else{
                    

//                 }
//             });
//         }

//     }

// });



// var frmData = new Vue({
//     el: '#frmData',
//     data: {
//         id: '',
//         categoria: '',
//         nombre: '',
//         imagen: '',
//         precio: '0.0',        
//         descuento: '0.0',
//         detalle: ''

//         // listaClientes:[],
//         // listaDireccion:[],
//         // listamediopago:[],
//         // descripcionD:'',
//         // descripcionC:'',
//         // descripcionMP:''
//         // listaClientes:[{}],
//         // listaDireccion:[{}],
//         // listamediopago:[{}]
//     },
//     methods: {        
//         LimpiarFormulario: function () {
//             this.id = '',
//             this.categoria = '',
//             this.nombre = '',
//             this.imagen = '',
//             this.precio = '0.0',            
//             this.descuento = '0.0',
//             this.detalle = ''
//         },
//         ObtenerDatos: function () {
//             return {
//                 id: this.id,
//                 categoria: $("#categoria").val(),
//                 nombre: this.nombre,
//                 imagen: this.imagen,
//                 precio: this.precio,   
//                 descuento: this.descuento,
//                 detalle: this.detalle
//             }
//         },
//         FormatoDecimal: function (){

//             this.precio = this.precio.toFixed(2);
//             this.descuento = this.descuento.toFixed(2);

//         },
//         GuardarDatos: function () {
            
//             //let producto = this.ObtenerDatos();
//             //this.FormatoDecimal();

//             let producto = new FormData($("#frmData")[0]);
            
//             axios.post( _URL_BASE_API_ + `producto/guardar` , producto,{
//                 headers: v_headers
//             })
// 					.then(respuesta => {                        

//                         if (respuesta.data.estado){
                        
//                             let reg = respuesta.data.producto[0];
                            
//                             if (producto.id === 0){

//                                 frmPanel.AgregarTabla(reg);
//                                 frmPanel.Table.draw();

//                             }else{

//                                 frmPanel.ListarData();

//                             }

//                             MensajeAlerta('Datos ingresados correctamente','success');
                            
//                         }else{
                            
//                             MensajeAlerta(respuesta.data.producto[0].mensaje,'error');

//                         }

//                         $('#modal-report').modal('hide');
										
// 					}).catch(error=>{
// 						console.log(error);
// 					});
            
//             this.LimpiarFormulario();

//         },
//         Ver: function (data) {
//             this.id = data.id;
//             this.categoria = data.categoria;
//             this.nombre = data.nombre; 
//             this.imagen = data.imagen;
//             this.precio = data.precio.toFixed(2);
//             this.descuento = data.descuento.toFixed(2);            
//             this.detalle = data.detalle;
//             $("#categoria option[value="+ data.categoria_id +"]").attr("selected",true);                     
//         }
//     }
// })


// frmReportes.ListarData();
// frmReportes.ListarCategoria();

function CrearTable() {
    var table = $('#report-table').DataTable(
        {
            //dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });
    return table;
}

// function CrearCombo() {    
//     var combo = $('#ubigeo');
//     return combo;
// }



// setInterval('frmReportes.ListarData()',30000);


// function Editar(id) {
    
//     if(id>0){

//         EditarRegistro()
//             .then((willDelete) => {
//                 if (willDelete) {
                    
//                     axios.get(_URL_BASE_API_ + `producto/listar/` + id, {
//                     headers: v_headers
//                     }).then(respuesta => {
//                         let data = respuesta.data.producto[0];
//                         $('#modal-report').modal('show');
//                         frmReportes.Ver(data);

//                     });
                    
//                 } 
//             });

//     }
    

// }


// var frmMotivo = new Vue({
//     el:'#frmMotivo',
//     data:{
//         motivo:'',
//         id:'' 
        
//         // listaClientes:[],
//         // listaDireccion:[],
//         // listamediopago:[],
//         // descripcionD:'',
//         // descripcionC:'',
//         // descripcionMP:'',
//     },
//     methods:{
//         LimpiarFormulario: function () {        
//             this.motivo = '', 
//             this.id = ''    
//         },
//         GuardarDatos:function(){
    
//             let motivo = new FormData($("#frmMotivo")[0]);
    
//             axios.post( _URL_BASE_API_ + `pedido/eliminar` , motivo,{
//                 headers: v_headers
//             })
//                     .then(respuesta => {                        
    
//                         if (respuesta.data.estado){                    
//                             let reg = respuesta.data.pedido;
//                             console.log(reg);
//                             MensajeAlerta('Datos ingresados correctamente','success');   
//                             frmPanel.ListarData();                                                    
//                         }else{                            
//                             MensajeAlerta(respuesta.data.pedido[0].mensaje,'error');
//                         }

//                         $('#modal-report-comentario').modal('hide');										
//                     }).catch(error=>{
//                         console.log(error);
//                     });
//             this.LimpiarFormulario(); 
//             // $('#modal-report-comentario').modal('hide');										
//         }
//     }
    
//     });

// function Eliminar(id) {

//     if(id>0){
//         // frmMotivo.id = id;     
//         EliminarRegistro().then((willDelete)=>{
//            if(willDelete){    

//             // $('#modal-report-comentario').modal('show');
            
//             // $("#frmMotivo").validate({
//             //     submitHandler: function () {
//             //         frmMotivo.GuardarDatos();                       
//             //     },        
//             //     errorPlacement: function errorPlacement(error, element) {
//             //         var $parent = $(element).parents('.form-group');
//             //         if ($parent.find('.jquery-validation-error').length) {
//             //             return;
//             //         }
//             //         $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));
//             //     },
//             //     highlight: function (element) {
//             //         var $el = $(element);
//             //         var $parent = $el.parents('.form-group');
//             //         $el.addClass('is-invalid');
//             //         if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
//             //             $el.parent().addClass('is-invalid');
//             //         }
//             //     },
//             //     unhighlight: function (element) {
//             //         $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
//             //     }
//             // });

              
//               axios.post( _URL_BASE_API_ + `producto/eliminar`, descripcion,{ id: id }, {
//                   headers: v_headers
//               })
//                   .then(respuesta => {
              
//                       if (respuesta.data.estado) {
              
//                         frmReportes.Table.clear();
//                           let lstData = respuesta.data.producto;
//                           lstData.forEach(producto => {
//                             frmReportes.AgregarTabla(producto);
//                           });
              
//                           frmReportes.Table.draw();

//                         //   $('#modal-report-comentario').modal('hide');
              
//                       }
              
//               }).catch(error => {
//                   console.log(error);
//               });


//            }
//         });



// //         // EliminarRegistro()
// //         //     .then((willDelete) => {
// //         //         if (willDelete) {
                    
// //         //             axios.post( _URL_BASE_API_ + `producto/eliminar`, { id: id }, {
// //         //                 headers: v_headers
// //         //             })
// //         //                 .then(respuesta => {
                
// //         //                     if (respuesta.data.estado) {
                
// //         //                         frmPanel.Table.clear();
// //         //                         let lstData = respuesta.data.producto;
// //         //                         lstData.forEach(producto => {
// //         //                             frmPanel.AgregarTabla(producto);
// //         //                         });
                
// //         //                         frmPanel.Table.draw();
                
// //         //                     }
                
// //         //                 }).catch(error => {
// //         //                     console.log(error);
// //         //                 });
                    
// //         //         } 
// //         //     }).catch(error => {
// //         //         console.log(error);
// //         //     });

//     }

// }

// function LimpiarFormulario(){
//     frmReporte.LimpiarFormulario();
// }

//$('.money_example').mask('0.00');

// $("#precio").change(function() {
//     var $this = $(this);
//     $this.val(parseFloat($this.val()).toFixed(2));        
// });

// $("#descuento").change(function() {
//     var $this = $(this);
//     $this.val(parseFloat($this.val()).toFixed(2));        
// });

//});




// var frmCambiarContrsenia = new Vue({
//     el:'#frmCambiarContrasenia',
//     data:{
//         contrasenia:'',
//         repcontrasenia:'',
//         estadonegocio: 1 
//     },
//     methods:{
//         LimpiarFormulario: function () {        
//             this.contrasenia = '',
//             this.repcontrasenia = ''        
//         },
//         GuardarDatos:function(){
    
//             let contrasenia = new FormData($("#frmCambiarContrasenia")[0]);
    
//             axios.post( _URL_BASE_API_ + `perfil/guardarcontrasenia` , contrasenia,{
//                 headers: v_headers
//             })
//                     .then(respuesta => {                        
    
//                         if (respuesta.data.estado){                    
//                             let reg = respuesta.data.perfil;
//                             console.log(reg);
//                             MensajeAlerta('Datos ingresados correctamente','success');                          
//                             $('#modal-report-contrasenia').modal('hide');										
//                         }else{                            
//                             MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
//                         }                    
//                     }).catch(error=>{
//                         console.log(error);
//                     });
//             this.LimpiarFormulario(); 
//         }
//     }
    
//     });
//       function CambiarContrasenia(){    
        
//         if(frmData.estadonegocio==1){        
    
//             let contrasenia = new FormData($("#frmCambiarContrasenia")[0]);        
//             axios.post( _URL_BASE_API_ + `perfil/guardarcontrasenia` , contrasenia,{
//                 headers: v_headers
//             })
//                     .then(respuesta => {                        
    
//                         if (respuesta.data.estado){                    
//                             let reg = respuesta.data.perfil;
//                             console.log(reg);
//                             MensajeAlerta('Datos ingresados correctamente','success');                          
//                             $('#modal-report-contrasenia').modal('hide');										
//                         }else{                            
//                             MensajeAlerta(respuesta.data.perfil[0].mensaje,'error');
//                         }                    
//                     }).catch(error=>{
//                         console.log(error);
//                     });
//         }    
//         else {
    
//             $("#estado0").show();
//             $("#estado1").hide();
    
//             $('#modal-report-contrasenia').modal('show');
//         $("#frmCambiarContrasenia").validate({
//             submitHandler: function () {
//                 frmCambiarContrsenia.GuardarDatos();            
//             },        
//             errorPlacement: function errorPlacement(error, element) {
//                 var $parent = $(element).parents('.form-group');
//                 if ($parent.find('.jquery-validation-error').length) {
//                     return;
//                 }
//                 $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));
//             },
//             highlight: function (element) {
//                 var $el = $(element);
//                 var $parent = $el.parents('.form-group');
//                 $el.addClass('is-invalid');
//                 if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
//                     $el.parent().addClass('is-invalid');
//                 }
//             },
//             unhighlight: function (element) {
//                 $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
//             }
//         });
    
//         }
    
//       }