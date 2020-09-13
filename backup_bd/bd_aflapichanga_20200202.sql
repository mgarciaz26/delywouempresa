/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 10.1.38-MariaDB : Database - bd_aflapichanga
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bd_aflapichanga` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `bd_aflapichanga`;

/*Table structure for table `alumno` */

DROP TABLE IF EXISTS `alumno`;

CREATE TABLE `alumno` (
  `alumno_id` int(11) NOT NULL AUTO_INCREMENT,
  `persona_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `saluapoderado` varchar(500) DEFAULT NULL,
  `naluestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`alumno_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

/*Data for the table `alumno` */

insert  into `alumno`(`alumno_id`,`persona_id`,`categoria_id`,`saluapoderado`,`naluestado`) values (20,2,0,'[{\"apoderado_id\":\"12\"}]',1),(21,1,0,'[{\"apoderado_id\":\"12\"}]',1);

/*Table structure for table `apoderado` */

DROP TABLE IF EXISTS `apoderado`;

CREATE TABLE `apoderado` (
  `apoderado_id` int(11) NOT NULL AUTO_INCREMENT,
  `persona_id` int(11) DEFAULT NULL,
  `tipoapoderado_id` int(11) DEFAULT NULL,
  `napoestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`apoderado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

/*Data for the table `apoderado` */

insert  into `apoderado`(`apoderado_id`,`persona_id`,`tipoapoderado_id`,`napoestado`) values (1,8,10,1),(2,9,10,1),(3,10,11,1),(4,11,10,1),(5,12,11,1),(6,13,11,1),(7,14,11,1),(8,15,11,1),(9,16,11,1),(10,17,11,1),(11,18,11,1),(12,19,11,1),(13,20,11,1),(14,21,11,1),(15,0,10,1),(16,0,10,1),(17,0,10,1),(18,0,10,1),(19,0,10,1),(20,0,10,1),(21,0,10,1),(22,0,10,1),(23,0,10,1),(24,0,10,1),(25,0,10,1),(26,0,10,1),(27,0,10,1),(28,0,10,1),(29,0,10,1),(30,0,10,1),(31,0,10,1);

/*Table structure for table `apoderado_alumno` */

DROP TABLE IF EXISTS `apoderado_alumno`;

CREATE TABLE `apoderado_alumno` (
  `apoderado_alumno_id` int(11) NOT NULL AUTO_INCREMENT,
  `apoderado_id` int(11) DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `naalestado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`apoderado_alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `apoderado_alumno` */

/*Table structure for table `cargo` */

DROP TABLE IF EXISTS `cargo`;

CREATE TABLE `cargo` (
  `Cargo_Id` int(11) NOT NULL AUTO_INCREMENT,
  `sCarNombre` varchar(50) DEFAULT NULL,
  `sCarBreve` varchar(10) DEFAULT NULL,
  `nCarEstado` int(11) DEFAULT NULL,
  PRIMARY KEY (`Cargo_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `cargo` */

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `clasificacion_id` int(11) DEFAULT NULL,
  `scatnombre` varchar(50) DEFAULT NULL,
  `scatbreve` varchar(20) DEFAULT NULL,
  `ncatestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `categoria` */

insert  into `categoria`(`categoria_id`,`clasificacion_id`,`scatnombre`,`scatbreve`,`ncatestado`) values (1,2,'Categoría Sub 6','Sub 6',1),(2,2,'Categoría Sub 8','Sub 8',1),(3,2,'Categoría Sub 10','Sub 10',1),(4,2,'Categoría Sub 12','Sub 12',1),(5,3,'Categoría Sub 12','Sub 12',1);

/*Table structure for table `clasificacion` */

DROP TABLE IF EXISTS `clasificacion`;

CREATE TABLE `clasificacion` (
  `clasificacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `sclanombre` varchar(30) DEFAULT NULL,
  `nclaestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`clasificacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `clasificacion` */

insert  into `clasificacion`(`clasificacion_id`,`sclanombre`,`nclaestado`) values (1,'Masculino',1),(2,'Femenino',1);

/*Table structure for table `clasificacion_categoria` */

DROP TABLE IF EXISTS `clasificacion_categoria`;

CREATE TABLE `clasificacion_categoria` (
  `clasificacion_categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `clasificacion_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `nccaestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`clasificacion_categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `clasificacion_categoria` */

insert  into `clasificacion_categoria`(`clasificacion_categoria_id`,`clasificacion_id`,`categoria_id`,`nccaestado`) values (1,1,1,1),(2,1,2,1),(3,1,3,1),(4,1,4,1),(5,2,4,1);

/*Table structure for table `horario` */

DROP TABLE IF EXISTS `horario`;

CREATE TABLE `horario` (
  `horario_id` int(11) NOT NULL AUTO_INCREMENT,
  `periodo_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `dhorinicio` datetime DEFAULT NULL,
  `dhorhorafin` datetime DEFAULT NULL,
  `dhordias` varchar(100) DEFAULT NULL,
  `nhoraestado` int(11) DEFAULT NULL,
  PRIMARY KEY (`horario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `horario` */

/*Table structure for table `noticias` */

DROP TABLE IF EXISTS `noticias`;

CREATE TABLE `noticias` (
  `noticias_id` int(11) NOT NULL AUTO_INCREMENT,
  `tiponoticias_id` int(11) DEFAULT NULL COMMENT '24:Mensajes;25:Alertas',
  `snotmensaje` varchar(500) DEFAULT NULL,
  `dnotfecha` datetime DEFAULT NULL,
  `snotimagenes` varchar(50000) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `nnotestado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`noticias_id`)
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=latin1;

/*Data for the table `noticias` */

insert  into `noticias`(`noticias_id`,`tiponoticias_id`,`snotmensaje`,`dnotfecha`,`snotimagenes`,`usuario_id`,`nnotestado`) values (186,24,'Uniforme de entrenamiento Temporada 2020','2020-02-20 22:38:42','[{\"url\":\"http://192.168.0.21/aflapichanga/images/d839c0d4cb19a504565e7f1023e169b2.jpeg\"}]',1,1),(187,24,'Haciendo coordinaciones con Academia Alianza Lima','2020-02-20 22:39:17','[{\"url\":\"http://192.168.0.21/aflapichanga/images/6560639271a9279af7c1d76adc2c0890.jpeg\"}]',1,1),(188,24,'Entrenamientos de Sub 8','2020-02-20 22:39:34','[{\"url\":\"http://192.168.0.21/aflapichanga/images/029fb1f68604b9f69dff02a9615bacd2.jpeg\"},{\"url\":\"http://192.168.0.21/aflapichanga/images/eadcf784e2a78ea53b9b92b105fef968.jpeg\"},{\"url\":\"http://192.168.0.21/aflapichanga/images/a386012eca96055da32862362bc43ff7.jpeg\"}]',1,1);

/*Table structure for table `opcion` */

DROP TABLE IF EXISTS `opcion`;

CREATE TABLE `opcion` (
  `opcion_id` int(11) NOT NULL AUTO_INCREMENT,
  `nopcpadre` int(11) DEFAULT NULL,
  `sopcnombre` varchar(50) DEFAULT NULL,
  `sopcurl` varchar(100) DEFAULT NULL,
  `sopcicono` varchar(50) DEFAULT NULL,
  `nopcestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`opcion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `opcion` */

/*Table structure for table `periodo` */

DROP TABLE IF EXISTS `periodo`;

CREATE TABLE `periodo` (
  `periodo_id` int(11) NOT NULL AUTO_INCREMENT,
  `spernombre` varchar(50) DEFAULT NULL,
  `dperfechainicio` date DEFAULT NULL,
  `dperfechafin` date DEFAULT NULL,
  `nperestado` int(11) DEFAULT NULL,
  PRIMARY KEY (`periodo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `periodo` */

insert  into `periodo`(`periodo_id`,`spernombre`,`dperfechainicio`,`dperfechafin`,`nperestado`) values (1,'Temporada 2020','2020-01-14','2020-12-15',0),(2,'Temporada 2021','2020-02-06','2020-02-20',0),(3,'Temporada 2022','2020-02-11','2020-02-23',0),(4,'Temporada 2025','2020-02-01','2020-02-29',0),(5,'Temporada 2026','2020-02-01','2020-02-29',0),(6,'erwerwer','2020-02-08','2020-02-14',1);

/*Table structure for table `persona` */

DROP TABLE IF EXISTS `persona`;

CREATE TABLE `persona` (
  `persona_id` int(11) NOT NULL AUTO_INCREMENT,
  `sperapellidos` varchar(300) DEFAULT NULL,
  `spernombres` varchar(300) DEFAULT NULL,
  `npertipodocumento` int(1) DEFAULT NULL,
  `spernrodocumento` varchar(11) DEFAULT NULL,
  `dperfechanacimiento` date DEFAULT NULL,
  `spertelefono` varchar(9) DEFAULT NULL,
  `speremail` varchar(150) DEFAULT NULL,
  `sperdireccion` varchar(300) DEFAULT NULL,
  `nperestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

/*Data for the table `persona` */

insert  into `persona`(`persona_id`,`sperapellidos`,`spernombres`,`npertipodocumento`,`spernrodocumento`,`dperfechanacimiento`,`spertelefono`,`speremail`,`sperdireccion`,`nperestado`) values (1,'GARCIA ZARATE','MARLON',5,'43501923','1986-01-26','943060589','acuario2626@gmail.com','Sin Direccion',1),(2,'GARCIA ZARATE','HAROLD',5,'10000001','1989-08-05','971872150','','Sin Direccion',1),(3,'GARCIA ROMERO','SANTIAGO',5,'10000002','1963-05-01','972888310','','Sin Direccion',1),(4,'ZARATE DE GARCIA','MARYANELLY',5,'10000003','1966-12-27','972873053','','Sin Direccion',1),(5,'GARCIA ALMONACID','MARTHA',5,'10000004','1989-04-29','972888770','','Sin Direccion',1),(6,'RENTERIA','CATHERINE',5,'10000005','1989-08-05','959672517','','Sin Direccion',1),(7,'GARCIA ZARATE','FRANZ',5,'10000006','2000-05-07','985138671','','Sin Direccion',1),(8,'SALAZAR GONZALES','FAUSTINO ALBERTH',5,'00000011','0000-00-00','966852491','','',1),(9,'SERNAQUE PURIZACA','MARLON',5,'72628871','0000-00-00','917696869','','',1),(10,'RENTERIA CAMPAÑA','CATHERINE E.',5,'46844933','0000-00-00','959672517','','',1),(11,'GONZA JUAREZ','EFRAIN',5,'46546178','0000-00-00','972885523','','',1),(12,'CARRASCO HUAMAN','DIOSELIN',5,'10455839','0000-00-00','972835349','','',1),(13,'AGUAYO SALAZAR','SARITA TATIANA',5,'46328051','0000-00-00','929447517','','',1),(14,'SILVA ROMERO','GRECIA MARICRUZ',5,'46501985','0000-00-00','954469018','','',1),(15,'GONZALES CRUZ','RUBY',5,'02835316','0000-00-00','910921664','','',1),(16,'LEON BECERRA','JESSICA PAOLA',5,'40343369','0000-00-00','947899567','','',1),(17,'ALBURQUEQUE MORAN','GABRIELA ESTHER',5,'00000001','0000-00-00','928902016','','',1),(18,'CANALES SEMINARIO','SARITA DOLIBETT',5,'43366062','0000-00-00','926263157','','',1),(19,'CULQUI PALMA','MARILYN YANINA',5,'46232365','0000-00-00','948456557','','',1),(20,'CEDILLO CORDOVA','JUDITH',5,'4165840','0000-00-00','949842446','','',1),(21,'PRECIADO IGLESIAS','MERCEDES ANGELICA',5,'48705658','0000-00-00','957553802','','',1),(22,'SALAZAR MEDINA','ALBERTH ADDIEL',5,'78030627','0000-00-00','','','00000011',1),(23,'SERNAQUE PEÑA','MARLON EDILSON',5,'81232334','0000-00-00','','','72628871',1),(24,'GARCIA RENTERIA','THIAGO JHOSUE',5,'78341103','0000-00-00','','','46844933',1),(25,'RAMIREZ GONZA','JOSMER ALDAIR',5,'81232220','0000-00-00','','','46546178',1),(26,'MENDOZA CARRASCO','DANILO JOSHUA',5,'78238933','0000-00-00','','','10455839',1),(27,'JUAREZ RAMIREZ','THIAGO ALEJANDRO',5,'78323834','0000-00-00','','','00372080',1),(28,'LAZARO AGUAYO','DIEGO ISACC',5,'78032365','0000-00-00','','','46328051',1),(29,'SAMPERTEGUI SILVA','LUIS JHOSEP',5,'78132870','0000-00-00','','','46501985',1),(30,'CAMPOS GONZALES','IRWIN DYLAN',5,'78153227','0000-00-00','','','02835316',1),(31,'MORAN LEON','JESSCAR',5,'78238933','0000-00-00','','','40343369',1),(32,'REYES ALBURQUEQUE','ADRIAN S.',5,'00000002','0000-00-00','','','00000001',1),(33,'MORAN CANALES','LIAM DOMINICK M.',5,'78576272','0000-00-00','','','43366062',1),(34,'HINOSTROZA CULQUI','BRUNO',5,'79112851','0000-00-00','','','46232365',1),(35,'QUIROZ CEDILLO','MATIAS',5,'00000003','0000-00-00','','','4165840',1),(36,'RAMIREZ PRECIADO','LIAM JONATHAN',5,'81805293','0000-00-00','','','48705658',1);

/*Table structure for table `personal` */

DROP TABLE IF EXISTS `personal`;

CREATE TABLE `personal` (
  `Personal_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Persona_Id` int(11) DEFAULT NULL,
  `Cargo_Id` int(11) DEFAULT NULL,
  `nPesEstado` int(11) DEFAULT NULL,
  PRIMARY KEY (`Personal_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `personal` */

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `srolnombre` varchar(50) DEFAULT NULL,
  `srolbreve` varchar(30) DEFAULT NULL,
  `nrolestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `rol` */

/*Table structure for table `rol_usuario` */

DROP TABLE IF EXISTS `rol_usuario`;

CREATE TABLE `rol_usuario` (
  `rol_usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `nrusestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rol_usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `rol_usuario` */

/*Table structure for table `tablamaestra` */

DROP TABLE IF EXISTS `tablamaestra`;

CREATE TABLE `tablamaestra` (
  `tablamaestra_id` int(11) NOT NULL AUTO_INCREMENT,
  `ntmapadre` int(11) DEFAULT NULL,
  `stmanombre` varchar(100) DEFAULT NULL,
  `ntmaestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tablamaestra_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

/*Data for the table `tablamaestra` */

insert  into `tablamaestra`(`tablamaestra_id`,`ntmapadre`,`stmanombre`,`ntmaestado`) values (1,0,'Clasificacion',1),(2,1,'Masculino',1),(3,1,'Femenino',1),(4,0,'Tipo Documento',1),(5,4,'DNI',1),(6,0,'Tipo de Noticia',1),(7,6,'Comunicado',1),(8,6,'Marcador',1),(9,0,'Tipo Apoderado',1),(10,9,'Padre',1),(11,9,'Madre',1),(12,9,'Abuelo(a)',1),(13,9,'Tio(a)',1),(14,9,'Otro',1),(15,0,'Dias de la Semana',1),(16,15,'Domingo',1),(17,15,'Lunes',1),(18,15,'Martes',1),(19,15,'Miércoles',1),(20,15,'Jueves',1),(21,15,'Viernes',1),(22,15,'Sábado',1),(23,0,'Tipo de Noticias',1),(24,23,'Mensajes',1),(25,23,'Alertas',1);

/*Table structure for table `tipopersona_persona` */

DROP TABLE IF EXISTS `tipopersona_persona`;

CREATE TABLE `tipopersona_persona` (
  `tipopersona_persona_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipopersona_id` int(11) DEFAULT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `ntpeestado` int(11) DEFAULT NULL,
  PRIMARY KEY (`tipopersona_persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `tipopersona_persona` */

insert  into `tipopersona_persona`(`tipopersona_persona_id`,`tipopersona_id`,`persona_id`,`ntpeestado`) values (1,13,1,1),(2,13,7,1),(3,13,8,1),(4,13,9,1);

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `susunombre` varchar(50) DEFAULT NULL,
  `susuconstrasena` varchar(100) DEFAULT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `nusuestado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `usuario` */

insert  into `usuario`(`usuario_id`,`susunombre`,`susuconstrasena`,`persona_id`,`nusuestado`) values (1,'943060589','123456',1,1),(2,'971872150','123456',1,1),(3,'972888310','123456',1,1),(4,'972873053','123456',1,1),(5,'972888770','123456',1,1),(6,'959672517','123456',1,1),(7,'985138671','123456',1,1);

/* Function  structure for function  `split` */

/*!50003 DROP FUNCTION IF EXISTS `split` */;
DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` FUNCTION `split`(delim VARCHAR(12), str VARCHAR(255), pos INT) RETURNS varchar(255) CHARSET latin1
    DETERMINISTIC
RETURN
    REPLACE(
        SUBSTRING(
            SUBSTRING_INDEX(str, delim, pos),
            LENGTH(SUBSTRING_INDEX(str, delim, pos-1)) + 1
        ),
        delim, ''
    ) */$$
DELIMITER ;

/* Procedure structure for procedure `sp_d_categoria` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_d_categoria` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_d_categoria`(IN vcategoria_id INT)
BEGIN
			
		
		UPDATE categoria SET ncatestado = CASE WHEN ncatestado=1 THEN 0 ELSE 1 END
		WHERE categoria_id=vcategoria_id;
		
		select vcategoria_id;
			
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_d_persona` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_d_persona` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_d_persona`(IN vpersona_id INT)
BEGIN
			
		
		UPDATE persona SET nperestado = CASE WHEN nperestado=1 THEN 0 ELSE 1 END
		WHERE persona_id=vpersona_id;
		
		select vpersona_id;
			
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_i_alumno` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_i_alumno` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_i_alumno`(IN valumno_id INT,IN vpersona_id INT, IN vsaluapoderado VARCHAR(500))
BEGIN
			
	DECLARE v_valumno_id INT;
	DECLARE vntotal INT;	
	
	SET vntotal = (SELECT COUNT(*) AS Total FROM persona p inner join alumno a ON 
			p.persona_id=a.persona_id	
			WHERE a.persona_id=valumno_id);
	
	IF (vntotal=0) THEN
		
	IF (valumno_id = 0) THEN
				
		insert INTO alumno (persona_id, categoria_id, saluapoderado ,naluestado)
		VALUES (vpersona_id,0, vsaluapoderado,1);
		
		SET v_valumno_id = (SELECT @@identity);
		
		SET valumno_id=v_valumno_id;
		
	ELSEIF (valumno_id > 0) THEN
				
		UPDATE alumno SET saluapoderado=vsaluapoderado WHERE alumno_id=valumno_id;
				
	END IF;
		
	SELECT a.alumno_id, p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, a.saluapoderado, p.nperestado, IFNULL(c.categoria_id,0) categoria_id,
		CASE  WHEN IFNULL(c.scatnombre,'')='' THEN '-' ELSE c.scatnombre END scatnombre ,naluestado, 1 naccion
		FROM persona p 
		INNER JOIN alumno a ON p.persona_id=a.persona_id
		LEFT JOIN categoria c ON c.categoria_id=a.categoria_id
		WHERE a.alumno_id=valumno_id
		AND a.naluestado=1;
	
	END IF;
	
	IF (vntotal>0) THEN
	
		SELECT 0 naccion;
	
	END IF;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_i_apoderado` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_i_apoderado` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_i_apoderado`(IN vapoderado_id INT,IN vpersona_id INT, IN vtipoapoderado_id INT)
BEGIN
			
	DECLARE v_vapoderado_id INT;
	DECLARE vntotal INT;	
	
	SET vntotal = 0;/*(SELECT COUNT(*) AS Total FROM persona p inner join apoderado a ON 
			p.persona_id=a.persona_id	
			WHERE a.apoderado_id=vapoderado_id);*/
	
	IF (vntotal=0) THEN
		
	IF (vapoderado_id = 0) THEN
				
		insert INTO apoderado (persona_id,tipoapoderado_id,napoestado)
		VALUES (vpersona_id,vtipoapoderado_id,1);
		
		SET v_vapoderado_id = (SELECT @@identity);	
		
		SET vapoderado_id=v_vapoderado_id;
		
	ELSEIF (vapoderado_id > 0) THEN
				
		UPDATE apoderado SET tipoapoderado_id=vtipoapoderado_id WHERE apoderado_id=vapoderado_id;
				
	END IF;
		
	SELECT a.apoderado_id, p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado,
		tm.stmanombre stipoapoderado,napoestado, 1 naccion
		FROM persona p 
		INNER JOIN apoderado a ON p.persona_id=a.persona_id
		INNER JOIN tablamaestra tm ON tm.tablamaestra_id=a.tipoapoderado_id
		WHERE a.apoderado_id=vapoderado_id
		AND a.napoestado=1;
	
	END IF;
	
	IF (vntotal>0) THEN
	
		SELECT 0 naccion;
	
	END IF;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_i_categoria` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_i_categoria` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_i_categoria`(IN vcategoria_id INT,IN vclasificacion_id INT, IN vscatnombre VARCHAR(30),IN vscatbreve VARCHAR(15))
BEGIN
			
	DECLARE v_vcategoria_id INT;
	DECLARE vntotal INT;	
	
	SET vntotal = (SELECT COUNT(*) AS Total FROM categoria WHERE scatnombre=vscatnombre AND clasificacion_id=vclasificacion_id AND categoria_id<>vcategoria_id);
	
	IF (vntotal=0) THEN
		
	IF (vcategoria_id = 0) THEN
		
		INSERT INTO categoria ( clasificacion_id,scatnombre,scatbreve,ncatestado) 
		VALUES (vclasificacion_id,vscatnombre,vscatbreve,1);
		
		SET v_vcategoria_id = (select @@identity);
		
		SET vcategoria_id=v_vcategoria_id;
		
	ELSEIF (vcategoria_id > 0) THEN
		
		UPDATE categoria SET clasificacion_id=vclasificacion_id, scatnombre=vscatnombre, scatbreve=vscatbreve
		WHERE categoria_id=vcategoria_id;
				
	END IF;
	
	SELECT c.categoria_id, tm.stmanombre sclanombre, c.scatnombre, c.scatbreve, c.ncatestado, 1 naccion
		FROM categoria c INNER JOIN tablamaestra tm ON tm.tablamaestra_id=c.clasificacion_id
		WHERE c.categoria_id=vcategoria_id;
	
	END IF;
	
	IF (vntotal>0) THEN
	
		SELECT 0 naccion;
	
	END IF;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_i_noticias` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_i_noticias` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_i_noticias`(IN vtiponoticias_id INT, IN vsnotmensaje VARCHAR(300),IN vsnotimagenes Nvarchar(5000),IN vusuario_id INT)
BEGIN
			
	DECLARE vnoticias_id INT;
		
	INSERT INTO noticias ( tiponoticias_id,snotmensaje,dnotfecha,snotimagenes,usuario_id,nnotestado) 
	VALUES (vtiponoticias_id,vsnotmensaje,NOW(),vsnotimagenes,vusuario_id,1);
	SET vnoticias_id = (select @@identity);
	
	SELECT n.noticias_id, n.snotmensaje, n.dnotfecha, n.snotimagenes, n.usuario_id,
	p.spersona_completo, p.spersona_primernombre, p.spersona_primerapellido
	FROM noticias n
	INNER JOIN tablamaestra m on n.tiponoticias_id=m.tablamaestra_id
	INNER JOIN vw_Persona p ON p.usuario_id=n.usuario_id
	
	WHERE n.noticias_id=vnoticias_id;
	
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_clasificacion` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_clasificacion` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_clasificacion`()
BEGIN
	SELECT c.clasificacion_id, c.sclanombre, c.nclaestado
	FROM clasificacion c;
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_login` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_login` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_login`(IN vusuario VARCHAR(40),IN vcontrasena VARCHAR(50))
BEGIN
	
	SELECT u.usuario_id, p.persona_id, u.susunombre, CONCAT(p.sperapellidos , ' ' ,p.spernombres) spercompleto,
	spertelefono
	FROM usuario u INNER JOIN persona p ON u.persona_id=p.persona_id
	WHERE u.nusuestado=1 AND p.nperestado=1
	AND u.susunombre = vusuario
	AND u.susuconstrasena = vcontrasena;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_maestros` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_maestros` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_maestros`(IN vaccion VARCHAR(30), IN vid INT)
BEGIN
	
	IF (vaccion='qry_todos')THEN
	
		SELECT tablamaestra_id, stmanombre , ntmapadre
		FROM tablamaestra WHERE ntmaestado=1;
		
	END IF;
		
	IF (vaccion='qry_por_id')THEN
	
		select tablamaestra_id, stmanombre 
		from tablamaestra where ntmapadre=vid AND ntmaestado=1;
		
	END IF;	
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_i_periodo` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_i_periodo` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_i_periodo`(IN vperiodo_id INT,IN vspernombre VARCHAR(50), IN vdperfechainicio date,IN vdperfechafin date)
BEGIN
			
	DECLARE v_vperiodo_id INT;
	DECLARE vntotal INT;	
	
	SET vntotal = (SELECT COUNT(*) AS Total FROM periodo WHERE spernombre=vspernombre);
	
	IF (vntotal=0) THEN
		
	IF (vperiodo_id = 0) THEN
		
				
		INSERT INTO periodo ( spernombre,dperfechainicio,dperfechafin,nperestado) 
		VALUES (vspernombre,vdperfechainicio,vdperfechafin,1);
		
		SET v_vperiodo_id = (select @@identity);
		
		SET vperiodo_id=v_vperiodo_id;
		
	 
	ELSEIF (vperiodo_id > 0) THEN
		
		UPDATE periodo SET spernombre=vspernombre, dperfechainicio=vdperfechainicio, dperfechafin=vdperfechafin
		WHERE periodo_id=vperiodo_id;
				
	END IF;
	
		SELECT p.periodo_id, p.spernombre, p.dperfechainicio, p.dperfechafin, p.nperestado, 1 naccion
		FROM periodo p
		WHERE p.periodo_id=vperiodo_id;
	
	END IF;
	
	IF (vntotal>0) THEN
	
		SELECT 0 naccion;
	
	END IF;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_i_persona` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_i_persona` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_i_persona`(IN vpersona_id INT, IN vsperapellidos VARCHAR(300),IN vspernombres VARCHAR(300),IN vnpertipodocumento INT,IN vspernrodocumento VARCHAR(11),IN vdperfechanacimiento DATE,IN vspertelefono VARCHAR(9),IN vsperemail varchar(100))
BEGIN
			
	DECLARE v_vpersona_id INT;
	DECLARE vntotal INT;	
	
	SET vntotal = (SELECT COUNT(*) AS Total FROM persona WHERE spernrodocumento=vspernrodocumento AND npertipodocumento=vnpertipodocumento AND persona_id<>vpersona_id);
	
	IF (vntotal=0) THEN
		
	IF (vpersona_id = 0) THEN
		
		INSERT INTO persona ( sperapellidos,spernombres,npertipodocumento,spernrodocumento,dperfechanacimiento,spertelefono,speremail,nperestado) 
		VALUES (vsperapellidos,vspernombres,vnpertipodocumento,vspernrodocumento,vdperfechanacimiento,vspertelefono,vsperemail,1);
		
		SET v_vpersona_id = (select @@identity);
		
		SET vpersona_id=v_vpersona_id;
		
	ELSEIF (vpersona_id > 0) THEN
		
		UPDATE persona SET sperapellidos=vsperapellidos, spernombres=vspernombres, 
		npertipodocumento=vnpertipodocumento, spernrodocumento=vspernrodocumento, 
		dperfechanacimiento=vdperfechanacimiento, spertelefono=vspertelefono,
		speremail=vsperemail
		WHERE persona_id=vpersona_id;
				
	END IF;
	
	SELECT persona_id, sperapellidos, spernombres, npertipodocumento, spernrodocumento, dperfechanacimiento, spertelefono, speremail, nperestado, 1 naccion
		FROM persona 
		WHERE persona_id=vpersona_id;
	
	END IF;
	
	IF (vntotal>0) THEN
	
		SELECT 0 naccion;
	
	END IF;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_alumno` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_alumno` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_alumno`(IN vaccion VARCHAR(30),IN vestado INT, IN vid INT)
BEGIN
	
	IF (vaccion='qry_todos')THEN
	
		SELECT a.alumno_id,p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado,
		IFNULL(c.categoria_id,0) categoria_id,
		CASE  WHEN IFNULL(c.scatnombre,'')='' THEN '-' ELSE c.scatnombre END scatnombre ,
		a.saluapoderado, a.naluestado
		FROM persona p 
		INNER JOIN alumno a ON p.persona_id=a.persona_id
		LEFT JOIN categoria c ON c.categoria_id=a.categoria_id
		WHERE p.nperestado=1
		ORDER BY a.alumno_id DESC;
		
	END IF;
	IF (vaccion='qry_activos')THEN
	
		SELECT a.alumno_id,p.persona_id, CONCAT(p.sperapellidos, ' ' , p.spernombres) spernombrecompleto,
		p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado, 
		IFNULL(c.categoria_id,0) categoria_id,
		CASE  WHEN IFNULL(c.scatnombre,'')='' THEN '-' ELSE c.scatnombre END scatnombre , 
		a.saluapoderado,a.naluestado
		FROM persona p 
		INNER JOIN alumno a ON p.persona_id=a.persona_id
		LEFT JOIN categoria c ON c.categoria_id=a.categoria_id
		WHERE p.nperestado=1 AND a.naluestado=1
		ORDER BY a.alumno_id DESC;
					
	END IF;	
	
	IF (vaccion='qry_por_id')THEN
	
	
		SELECT a.alumno_id,p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado, 
		IFNULL(c.categoria_id,0) categoria_id,
		CASE  WHEN IFNULL(c.scatnombre,'')='' THEN '-' ELSE c.scatnombre END scatnombre , 
		a.saluapoderado, a.naluestado
		FROM persona p 
		INNER JOIN alumno a ON p.persona_id=a.persona_id
		LEFT JOIN categoria c ON c.categoria_id=a.categoria_id
		WHERE a.alumno_id=vid AND p.nperestado=1;
		
				
	END IF;	
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_apoderado` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_apoderado` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_apoderado`(IN vaccion VARCHAR(30),IN vestado INT, IN vid INT)
BEGIN
	
	IF (vaccion='qry_todos')THEN
	
		SELECT a.apoderado_id,p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado, a.tipoapoderado_id, 
		tm.stmanombre stipoapoderado , a.napoestado
		FROM persona p 
		INNER JOIN apoderado a ON p.persona_id=a.persona_id
		INNER JOIN tablamaestra tm ON tm.tablamaestra_id=a.tipoapoderado_id
		WHERE p.nperestado=1 AND a.napoestado=1
		ORDER BY a.apoderado_id DESC;
		
	END IF;
	IF (vaccion='qry_activos')THEN
	
		SELECT a.apoderado_id,p.persona_id, CONCAT(p.sperapellidos, ' ' , p.spernombres) spernombrecompleto,
		p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado,
		a.tipoapoderado_id, tm.stmanombre stipoapoderado, a.napoestado
		FROM persona p 
		INNER JOIN alumno a ON p.persona_id=a.persona_id
		INNER JOIN tablamaestra tm ON tm.tablamaestra_id=a.tipoapoderado_id
		WHERE p.nperestado=1 AND a.napoestado=1
		ORDER BY a.apoderado_id DESC;
					
	END IF;	
	
	IF (vaccion='qry_por_id')THEN
	
	
		SELECT a.apoderado_id,p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado,
		a.tipoapoderado_id, tm.stmanombre stipoapoderado,
		a.napoestado
		FROM persona p 
		INNER JOIN apoderado a ON p.persona_id=a.persona_id
		INNER JOIN tablamaestra tm ON tm.tablamaestra_id=a.tipoapoderado_id
		WHERE a.apoderado_id=vid AND p.nperestado=1 AND a.napoestado=1;
		
				
	END IF;	
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_noticias` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_noticias` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_noticias`(IN vnsiguiente_pagina INT,IN vnporpagina INT)
BEGIN
	
	SELECT n.noticias_id, n.snotmensaje, n.dnotfecha, n.snotimagenes, n.usuario_id,
	p.spersona_completo, p.spersona_primernombre, p.spersona_primerapellido
	FROM noticias n
	INNER JOIN tablamaestra m ON n.tiponoticias_id=m.tablamaestra_id
	INNER JOIN vw_Persona p ON p.usuario_id=n.usuario_id
	WHERE n.nnotestado=1
	ORDER BY n.noticias_id desc
	LIMIT vnsiguiente_pagina,vnporpagina;
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_periodo` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_periodo` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_periodo`(IN vaccion VARCHAR(100),IN vestado INT, IN vid INT)
BEGIN
	
	IF (vaccion='qry_todos')THEN
	
		SELECT p.periodo_id, p.spernombre, p.dperfechainicio, p.dperfechafin, p.nperestado FROM periodo p
		ORDER BY p.periodo_id DESC;
		
	END IF;
	IF (vaccion='qry_estado')THEN
	
		SELECT p.periodo_id, p.spernombre, p.dperfechainicio, p.dperfechafin, p.nperestado FROM periodo p
		WHERE p.nperestado=vestado
		ORDER BY p.periodo_id DESC;
		
	END IF;	
	
	IF (vaccion='qry_por_id')THEN
	
		SELECT p.periodo_id, p.spernombre, p.dperfechainicio, p.dperfechafin, p.nperestado FROM periodo p
		WHERE p.periodo_id=vid;
				
	END IF;	
	
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_categoria` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_categoria` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_categoria`(IN vaccion VARCHAR(100),IN vestado INT, IN vid INT)
BEGIN
	
	IF (vaccion='qry_todos')THEN
	
		SELECT c.categoria_id, tm.stmanombre sclanombre, c.scatnombre, c.scatbreve, c.ncatestado			
		FROM categoria c INNER JOIN tablamaestra tm ON tm.tablamaestra_id=c.clasificacion_id
		ORDER BY c.categoria_id desc;
		
	END IF;
	IF (vaccion='qry_estado')THEN
	
		SELECT c.categoria_id, tm.stmanombre sclanombre,c.scatnombre, c.scatbreve, c.ncatestado	
		FROM categoria c INNER JOIN tablamaestra tm ON tm.tablamaestra_id=c.clasificacion_id
		WHERE c.ncatestado = vestado
		ORDER BY c.categoria_id DESC;
		
	END IF;	
	
	IF (vaccion='qry_por_id')THEN
	
		SELECT c.categoria_id, tm.stmanombre sclanombre,c.scatnombre, c.scatbreve, c.ncatestado	
		FROM categoria c INNER JOIN tablamaestra tm ON tm.tablamaestra_id=c.clasificacion_id
		WHERE c.categoria_id=vid
		ORDER BY c.categoria_id DESC;
		
	END IF;	
	
	IF (vaccion='qry_por_clasificacion')THEN
	
		SELECT c.categoria_id, tm.stmanombre sclanombre,c.scatnombre, c.scatbreve, c.ncatestado	
		FROM categoria c INNER JOIN tablamaestra tm ON tm.tablamaestra_id=c.clasificacion_id
		WHERE c.clasificacion_id=vid AND c.ncatestado=1
		ORDER BY c.categoria_id DESC;
		
	END IF;	
	
END */$$
DELIMITER ;

/* Procedure structure for procedure `sp_s_persona` */

/*!50003 DROP PROCEDURE IF EXISTS  `sp_s_persona` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_s_persona`(IN vaccion VARCHAR(30),IN vestado INT, IN vid INT, IN vcampo VARCHAR(8))
BEGIN
	
	IF (vaccion='qry_todos')THEN
	
		SELECT p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado
		FROM persona p
		ORDER BY p.persona_id desc;
		
	END IF;
	IF (vaccion='qry_activos')THEN
	
		SELECT p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado
		FROM persona p
		WHERE p.nperestado = vestado
		ORDER BY p.persona_id DESC;
				
	END IF;	
	
	IF (vaccion='qry_por_id')THEN
	
		SELECT p.persona_id, p.sperapellidos, p.spernombres, p.npertipodocumento, p.dperfechanacimiento,
		p.spernrodocumento, p.spertelefono, p.speremail, p.nperestado
		FROM persona p
		WHERE p.persona_id=vid
		ORDER BY p.persona_id DESC;
				
	END IF;
	
	IF (vaccion='qry_por_nrodoc')THEN
	
		SELECT p.persona_id, p.sperapellidos, p.spernombres
		FROM persona p
		WHERE p.nperestado=vestado AND p.spernrodocumento = vcampo
		ORDER BY p.persona_id DESC;
				
	END IF;
	
END */$$
DELIMITER ;

/*Table structure for table `vw_persona` */

DROP TABLE IF EXISTS `vw_persona`;

/*!50001 DROP VIEW IF EXISTS `vw_persona` */;
/*!50001 DROP TABLE IF EXISTS `vw_persona` */;

/*!50001 CREATE TABLE  `vw_persona`(
 `usuario_id` int(11) ,
 `persona_id` int(11) ,
 `spersona_completo` text ,
 `spersona_primernombre` varchar(300) ,
 `spersona_primerapellido` varchar(300) ,
 `susunombre` varchar(50) ,
 `sperdireccion` varchar(300) ,
 `speremail` varchar(150) 
)*/;

/*View structure for view vw_persona */

/*!50001 DROP TABLE IF EXISTS `vw_persona` */;
/*!50001 DROP VIEW IF EXISTS `vw_persona` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_persona` AS (select `u`.`usuario_id` AS `usuario_id`,`p`.`persona_id` AS `persona_id`,concat(`p`.`spernombres`,' ',`p`.`sperapellidos`) AS `spersona_completo`,concat(ucase(left(substring_index(`p`.`spernombres`,' ',1),1)),lcase(substr(substring_index(`p`.`spernombres`,' ',1),2))) AS `spersona_primernombre`,concat(ucase(left(substring_index(`p`.`sperapellidos`,' ',1),1)),lcase(substr(substring_index(`p`.`sperapellidos`,' ',1),2))) AS `spersona_primerapellido`,`u`.`susunombre` AS `susunombre`,`p`.`sperdireccion` AS `sperdireccion`,`p`.`speremail` AS `speremail` from (`usuario` `u` join `persona` `p` on((`u`.`persona_id` = `p`.`persona_id`)))) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
