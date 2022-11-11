CREATE DATABASE  IF NOT EXISTS `xxxuserlocal` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `xxxuserlocal`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: xxxuserlocal
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `xxxtablecolordefault`
--

DROP TABLE IF EXISTS `xxxtablecolordefault`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtablecolordefault` (
  `tablecolordefaultid` int(11) NOT NULL AUTO_INCREMENT,
  `tablecolordefaultcolorback` varchar(6) DEFAULT NULL,
  `tablecolordefaultcolorfront` varchar(6) DEFAULT NULL,
  `tablecolordefaulttimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tablecolordefaultid`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtablecolordefault`
--

LOCK TABLES `xxxtablecolordefault` WRITE;
/*!40000 ALTER TABLE `xxxtablecolordefault` DISABLE KEYS */;
INSERT INTO `xxxtablecolordefault` VALUES (1,'4B7793','FFFFFF','2022-10-22 21:43:47'),(2,'987033','FFFFFF','2022-10-22 21:43:47'),(3,'23ACE7','FFFFFF','2022-10-22 21:43:47'),(4,'E35882','FFFFFF','2022-10-22 21:43:47'),(5,'B46AB6','FFFFFF','2022-10-22 21:43:47'),(6,'D0D40B','FFFFFF','2022-10-22 21:43:47'),(7,'BBD7F1','FFFFFF','2022-10-22 21:43:47'),(8,'72A3EC','FFFFFF','2022-10-22 21:43:47'),(9,'0704AB','FFFFFF','2022-10-22 21:43:47'),(10,'6C46A9','FFFFFF','2022-10-22 21:43:47'),(11,'6C18F4','FFFFFF','2022-10-22 21:43:47'),(12,'F4189C','FFFFFF','2022-10-22 21:43:47'),(13,'E351A9','FFFFFF','2022-10-22 21:43:47'),(14,'56C621','40404','2022-10-22 21:43:47'),(15,'C2F3AB','40404','2022-10-22 21:43:47'),(16,'4CD0A9','40404','2022-10-22 21:43:47'),(17,'2DA7A0','40404','2022-10-22 21:43:47'),(18,'2D8AA7','40404','2022-10-22 21:43:47'),(19,'30B3DC','40404','2022-10-22 21:43:47'),(20,'469EF0','40404','2022-10-22 21:43:47'),(21,'3241C9','40404','2022-10-22 21:43:47'),(22,'C99F32','40404','2022-10-22 21:43:47'),(23,'E9DC65','40404','2022-10-22 21:43:47'),(24,'BEE965','40404','2022-10-22 21:43:47'),(25,'AFF41D','40404','2022-10-22 21:43:47'),(26,'83BE06','40404','2022-10-22 21:43:47'),(27,'06BE87','40404','2022-10-22 21:43:47'),(28,'06BEBE','40404','2022-10-22 21:43:47'),(29,'D338B1','40404','2022-10-22 21:43:47'),(30,'f2476a','40404','2022-10-22 21:43:47'),(31,'fb654e','40404','2022-10-22 21:43:47'),(32,'eb2d3a','40404','2022-10-22 21:43:47'),(33,'add8e6','40404','2022-10-22 21:43:47'),(34,'90ee90','40404','2022-10-22 21:43:47'),(35,'475c6c','FFFFFF','2022-10-22 21:43:47'),(36,'8a8583','FFFFFF','2022-10-22 21:43:47'),(37,'eed7a1','40404','2022-10-22 21:43:47'),(38,'f7efd2','40404','2022-10-22 21:43:47'),(39,'cd8b62','40404','2022-10-22 21:43:47'),(40,'966b9d','40404','2022-10-22 21:43:47'),(41,'c98686','40404','2022-10-22 21:43:47'),(42,'f2b880','40404','2022-10-22 21:43:47'),(43,'fff4ec','40404','2022-10-22 21:43:47'),(44,'dfb89c','40404','2022-10-22 21:43:47'),(45,'b4b7a1','40404','2022-10-22 21:43:47'),(46,'cea9a7','40404','2022-10-22 21:43:47'),(47,'ce9882','40404','2022-10-22 21:43:47'),(48,'e8d7cd','40404','2022-10-22 21:43:47'),(49,'bba79d','40404','2022-10-22 21:43:47'),(50,'e8d3a9','40404','2022-10-22 21:43:47'),(51,'e39b7d','40404','2022-10-22 21:43:47'),(52,'6e6460','FFFFFF','2022-10-22 21:43:47'),(53,'89b399','40404','2022-10-22 21:43:47'),(54,'bcbfa3','40404','2022-10-22 21:43:47'),(55,'ff71ce','40404','2022-10-22 21:43:47'),(56,'01cdfe','40404','2022-10-22 21:43:47'),(57,'05ffa1','40404','2022-10-22 21:43:47'),(58,'b967ff','40404','2022-10-22 21:43:47'),(59,'fffb96','40404','2022-10-22 21:43:47'),(60,'daf8e3','40404','2022-10-22 21:43:47'),(61,'97ebdb','40404','2022-10-22 21:43:47'),(62,'00c2c7','40404','2022-10-22 21:43:47'),(63,'0086ad','40404','2022-10-22 21:43:47'),(64,'005582','FFFFFF','2022-10-22 21:43:47'),(65,'6b3e26','FFFFFF','2022-10-22 21:43:47'),(66,'ffc5d9','40404','2022-10-22 21:43:47'),(67,'c2f2d0','40404','2022-10-22 21:43:47'),(68,'fdf5c9','40404','2022-10-22 21:43:47'),(69,'ffcb85','40404','2022-10-22 21:43:47');
/*!40000 ALTER TABLE `xxxtablecolordefault` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xxxtablecountryphonecode`
--

DROP TABLE IF EXISTS `xxxtablecountryphonecode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtablecountryphonecode` (
  `tablecountryphonecodeid` int(11) NOT NULL AUTO_INCREMENT,
  `tablecountryphonecodecountryname` varchar(60) DEFAULT NULL,
  `tablecountryphonecodephonecode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`tablecountryphonecodeid`)
) ENGINE=InnoDB AUTO_INCREMENT=274 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtablecountryphonecode`
--

LOCK TABLES `xxxtablecountryphonecode` WRITE;
/*!40000 ALTER TABLE `xxxtablecountryphonecode` DISABLE KEYS */;
INSERT INTO `xxxtablecountryphonecode` VALUES (1,'Afghanistan',93),(2,'Albania',355),(3,'Algeria',213),(4,'American Samoa',1684),(5,'Andorra',376),(6,'Angola',244),(7,'Anguilla',1264),(8,'Antarctica',672),(9,'Antigua',1268),(10,'Argentina',54),(11,'Armenia',374),(12,'Aruba',297),(13,'Ascension',247),(14,'Australia',61),(15,'Australian External Territories',672),(16,'Austria',43),(17,'Azerbaijan',994),(18,'Bahamas',1242),(19,'Bahrain',973),(20,'Bangladesh',880),(21,'Barbados',1246),(22,'Barbuda',1268),(23,'Belarus',375),(24,'Belgium',32),(25,'Belize',501),(26,'Benin',229),(27,'Bermuda',1441),(28,'Bhutan',975),(29,'Bolivia',591),(30,'Bosnia & Herzegovina',387),(31,'Botswana',267),(32,'Brazil',55),(33,'British Virgin Islands',1284),(34,'Brunei Darussalam',673),(35,'Bulgaria',359),(36,'Burkina Faso',226),(37,'Burundi',257),(38,'Cambodia',855),(39,'Cameroon',237),(40,'Canada',1),(41,'Cape Verde Islands',238),(42,'Cayman Islands',1345),(43,'Central African Republic',236),(44,'Chad',235),(45,'Chatham Island (New Zealand)',64),(46,'Chile',56),(47,'China (PRC)',86),(48,'Christmas Island',618),(49,'CocosKeeling Islands',61),(50,'Colombia',57),(51,'Comoros',269),(52,'Congo',242),(53,'Congo, Dem. Rep. of (former Zaire)',243),(54,'Cook Islands',682),(55,'Costa Rica',506),(56,'Côte dIvoire (Ivory Coast)',225),(57,'Croatia',385),(58,'Cuba',53),(59,'Cuba (Guantanamo Bay)',5399),(60,'Curaçao',599),(61,'Cyprus',357),(62,'Czech Republic',420),(63,'Denmark',45),(64,'Diego Garcia',246),(65,'Djibouti',253),(66,'Dominica',1767),(67,'Dominican Republic',1809),(68,'Dominican Republic',1829),(69,'East Timor',670),(70,'Easter Island',56),(71,'Ecuador',593),(72,'Egypt',20),(73,'El Salvador',503),(74,'Ellipso (Mobile Satellite service)',8812),(75,'Ellipso (Mobile Satellite service)',8813),(76,'Ellipso 8812',8813),(77,'Equatorial Guinea',240),(78,'Eritrea',291),(79,'Estonia',372),(80,'Ethiopia',251),(81,'Falkland Islands (Malvinas)',500),(82,'Faroe Islands',298),(83,'Fiji Islands',679),(84,'Finland',358),(85,'France',33),(86,'French Antilles',596),(87,'French Guiana',594),(88,'French Polynesia',689),(89,'Gabonese Republic',241),(90,'Gambia',220),(91,'Georgia',995),(92,'Germany',49),(93,'Ghana',233),(94,'Gibraltar',350),(95,'Global Mobile Satellite System (GMSS)',881),(96,'Globalstar',8818),(97,'Globalstar',8819),(98,'Globalstar (Mobile Satellite Service)',8818),(99,'Globalstar (Mobile Satellite Service)',8819),(100,'Greece',30),(101,'Greenland',299),(102,'Grenada',1473),(103,'Guadeloupe',590),(104,'Guam',1671),(105,'Guantanamo Bay',5399),(106,'Guatemala',502),(107,'Guinea',224),(108,'GuineaBissau',245),(109,'Guyana',592),(110,'Haiti',509),(111,'Honduras',504),(112,'Hong Kong',852),(113,'Hungary',36),(114,'Iceland',354),(115,'ICO Global',8810),(116,'ICO Global',8811),(117,'ICO Global (Mobile Satellite Service)',8810),(118,'ICO Global (Mobile Satellite Service)',8811),(119,'India',91),(120,'Indonesia',62),(121,'Inmarsat (Atlantic Ocean  East)',871),(122,'Inmarsat (Atlantic Ocean  West)',874),(123,'Inmarsat (Indian Ocean)',873),(124,'Inmarsat (Pacific Ocean)',872),(125,'Inmarsat SNAC',870),(126,'International Freephone Service',800),(127,'International Shared Cost Service (ISCS)',808),(128,'Iran',98),(129,'Iraq',964),(130,'Ireland',353),(131,'Iridium (Mobile Satellite service)',8816),(132,'Iridium (Mobile Satellite service)',8817),(133,'Iridium 8816',8817),(134,'Israel',972),(135,'Italy',39),(136,'Ivory Coast',225),(137,'Jamaica',1876),(138,'Japan',81),(139,'Jordan',962),(140,'Kazakhstan',7),(141,'Kenya',254),(142,'Kiribati',686),(143,'Korea (North)',850),(144,'Korea (South)',82),(145,'Kuwait',965),(146,'Kyrgyz Republic',996),(147,'Laos',856),(148,'Latvia',371),(149,'Lebanon',961),(150,'Lesotho',266),(151,'Liberia',231),(152,'Libya',218),(153,'Liechtenstein',423),(154,'Lithuania',370),(155,'Luxembourg',352),(156,'Macao',853),(157,'Macedonia (Former Yugoslav Rep of.)',389),(158,'Madagascar',261),(159,'Malawi',265),(160,'Malaysia',60),(161,'Maldives',960),(162,'Mali Republic',223),(163,'Malta',356),(164,'Marshall Islands',692),(165,'Martinique',596),(166,'Mauritania',222),(167,'Mauritius',230),(168,'Mayotte Island',269),(169,'Mexico',52),(170,'Micronesia (Federal States of)',691),(171,'Midway Island',1808),(172,'Moldova',373),(173,'Monaco',377),(174,'Mongolia',976),(175,'Montenegro',382),(176,'Montserrat',1664),(177,'Morocco',212),(178,'Mozambique',258),(179,'Myanmar',95),(180,'Namibia',264),(181,'Nauru',674),(182,'Nepal',977),(183,'Netherlands',31),(184,'Netherlands Antilles',599),(185,'Nevis',1869),(186,'New Caledonia',687),(187,'New Zealand',64),(188,'Nicaragua',505),(189,'Niger',227),(190,'Nigeria',234),(191,'Niue',683),(192,'Norfolk Island',672),(193,'Northern Marianas Islands (Saipan, Rota & Tinian)',1670),(194,'Norway',47),(195,'Oman',968),(196,'Pakistan',92),(197,'Palau',680),(198,'Palestinian Settlements',970),(199,'Panama',507),(200,'Papua New Guinea',675),(201,'Paraguay',595),(202,'Peru',51),(203,'Philippines',63),(204,'Poland',48),(205,'Portugal',351),(206,'Puerto Rico',1787),(207,'Puerto Rico',1939),(208,'Qatar',974),(209,'Réunion Island',262),(210,'Romania',40),(211,'Russia',7),(212,'Rwandese Republic',250),(213,'Samoa',685),(214,'San Marino',378),(215,'São Tomé and Principe',239),(216,'Saudi Arabia',966),(217,'Senegal',221),(218,'Serbia',381),(219,'Seychelles Republic',248),(220,'Sierra Leone',232),(221,'Singapore',65),(222,'Slovak Republic',421),(223,'Slovenia',386),(224,'Solomon Islands',677),(225,'Somali Democratic Republic',252),(226,'South Africa',27),(227,'Spain',34),(228,'Sri Lanka',94),(229,'St. Helena',290),(230,'St. Kitts/Nevis',1869),(231,'St. Lucia',1758),(232,'St. Pierre & Miquelon',508),(233,'St. Vincent & Grenadines',1784),(234,'Sudan',249),(235,'Suriname',597),(236,'Swaziland',268),(237,'Sweden',46),(238,'Switzerland',41),(239,'Syria',963),(240,'Taiwan',886),(241,'Tajikistan',992),(242,'Tanzania',255),(243,'Thailand',66),(244,'Timor Leste',670),(245,'Togolese Republic',228),(246,'Tokelau',690),(247,'Tonga Islands',676),(248,'Trinidad & Tobago',1868),(249,'Tunisia',216),(250,'Turkey',90),(251,'Turkmenistan',993),(252,'Turks and Caicos Islands',1649),(253,'Tuvalu',688),(254,'Uganda',256),(255,'Ukraine',380),(256,'United Arab Emirates',971),(257,'United Kingdom',44),(258,'United States of America',1),(259,'Universal Personal Telecommunications (UPT)',878),(260,'Uruguay',598),(261,'US Virgin Islands',1340),(262,'Uzbekistan',998),(263,'Vanuatu',678),(264,'Vatican City',39),(265,'Vatican City',379),(266,'Venezuela',58),(267,'Vietnam',84),(268,'Wake Island',808),(269,'Wallis and Futuna Islands',681),(270,'Yemen',967),(271,'Zambia',260),(272,'Zanzibar',255),(273,'Zimbabwe',263);
/*!40000 ALTER TABLE `xxxtablecountryphonecode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xxxtableindex`
--

DROP TABLE IF EXISTS `xxxtableindex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtableindex` (
  `tableindexid` int(11) NOT NULL AUTO_INCREMENT,
  `tableindexindex` char(4) DEFAULT NULL,
  `tableindexdescription` varchar(254) DEFAULT NULL,
  `tableindexlastindex` int(11) DEFAULT NULL,
  `tableindexnoteinternal` varchar(254) DEFAULT NULL,
  `tableindextag` varchar(254) DEFAULT NULL,
  `tableindexhashiv` varchar(254) DEFAULT NULL,
  `tableindexsignature` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`tableindexid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtableindex`
--

LOCK TABLES `xxxtableindex` WRITE;
/*!40000 ALTER TABLE `xxxtableindex` DISABLE KEYS */;
INSERT INTO `xxxtableindex` VALUES (1,'USER','User',48,'0','',NULL,NULL);
/*!40000 ALTER TABLE `xxxtableindex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xxxtabletokenlast`
--

DROP TABLE IF EXISTS `xxxtabletokenlast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtabletokenlast` (
  `tabletokenlastid` int(11) NOT NULL AUTO_INCREMENT,
  `tabletokenplatform` varchar(20) DEFAULT NULL,
  `tabletokenuserindex` varchar(15) DEFAULT NULL,
  `tabletokenlasttoken` varchar(254) DEFAULT NULL,
  `tabletokenlasttimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tabletokenlasthashiv` varchar(254) DEFAULT NULL,
  `tabletokenlastsignature` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`tabletokenlastid`)
) ENGINE=InnoDB AUTO_INCREMENT=713 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtabletokenlast`
--

LOCK TABLES `xxxtabletokenlast` WRITE;
/*!40000 ALTER TABLE `xxxtabletokenlast` DISABLE KEYS */;
INSERT INTO `xxxtabletokenlast` VALUES (676,'WEBSITE','USER00525DBD3A6','7b3fc21b92543573cd72f677a2db05116881037f','2022-11-09 07:44:20',NULL,'2efe5c4e9f04e26c6e351f3052464cd76f2df37c9378b98dcc76ab5f614eb0ecc80d1a6d58abe4021ad2312c1a32be26c5413a8293dfb54e231d99a82468e4f8'),(682,'WEBSITE','USER00525DBD3A7','4044b45b3812d8cc89ac7091a488f76515241d60','2022-11-09 08:23:59',NULL,'abd4f18001779068008fb5418685a2d79b232168ebd0279e9131da2a26017112b3eb048cea71d14ad6ddc985837bc8d579cd0d39a9d1294afed66c23b6b9ccf9'),(683,'WEBSITE','USER00525DBD3A7','4dc378215aea4add26668b885b0a0788ffcb5bbb','2022-11-09 08:24:47',NULL,'5ddd004a1fbc547d46648823651e2c2352805d13f77cfed7f00d40165c4dce18f8980d549b7fa9a752e1f487fb8c4a22e68508bfcf2061dd6097cc7fb155bace'),(684,'WEBSITE','USER00525DBD3A7','1cc66f359ce648ac278a554398e1002b91b68c0d','2022-11-09 09:18:48',NULL,'e3d824eec8c5928f2583eaf07a683b15350c2fce5bef977ec0ca8536bd7f69705bcb2007758207428c79c9f0db2df033ba66b2c88e342e9f0c9492b0ca75f27a'),(685,'WEBSITE','USER00525DBD3A7','6ed27a5e054f179c458d0c30fa397a34a92408fa','2022-11-09 09:23:52',NULL,'8e9aa92bae907c836f9ce76ec57f9e2d039a11ad452ef572d2f987da4671fe9f6f003b0ad2a1fadf2b1ec01bc9dbe3434f2f0afe1fca9aee9675c2ba1dd5dfc8'),(686,'WEBSITE','USER00525DBD3A7','418686694c60b282681451aa79295bc722276910','2022-11-09 09:25:58',NULL,'8fc241b7315b743236599a8772f3508dd1aa9299c99b40e54f19a05b79a064579205cb6afca651dad4fce7914ab8c54a6ee7ff3f9252b4ba51d09ef05f528090'),(687,'WEBSITE','USER00525DBD3A7','aad3c8a74edcb00f220be36fd4dc6ec4be6ebea5','2022-11-09 09:26:52',NULL,'2b27c77371d4eb0ccf854b8c44e61e679141e4f47661b7bb3046316caf800255f791277ca9f5f231ea04dca630cdc99ae4e016cde174d4fc0602d510b75d086a'),(688,'WEBSITE','USER00525DBD3A7','55c809277806ce51f6ba6dc938ed2aaf3cbd895a','2022-11-09 09:28:14',NULL,'fbfb148d813afa099fdc067f96202074307ce2c19cd06ec59d6ac39e816da01c9d56fe5bda636db7d1a14fc9ef73cd15d29b52d0226e38632e4bfd16ef2d192b'),(689,'WEBSITE','USER00525DBD3A7','94334e479a1d74880f0e5eeaefdb0f51d12bb70c','2022-11-09 09:39:32',NULL,'9992d1d6da8fd8602d8bd0debc37bdff3a3a862c3d0d5d8b2c3ef2be414bbe0155c4b4f03891f732c3c74159f60cafca5bd78019458c2fd24e3cd612e4d1fb0d'),(690,'WEBSITE','USER00525DBD3A7','c67ed0d080f504b7632eae0ef4d97614fbca9a03','2022-11-09 09:39:42',NULL,'04c72051198f36b58fb0f7412aca0b94b03b0ee2792e1c5426e1ba73872f920adc399884ae65375a3604b0e69363accee47efc23a2c1a30d85cf02b10408f1af'),(691,'WEBSITE','USER00525DBD3A7','f9180b6c41ee4482201163175dcc2d14d7b084f4','2022-11-09 09:42:37',NULL,'6959a6b08f8e45ce493781ea616dbc05fdef562d5cb96717299e2a1b40c4a7ffb814249930aefbfc3ca2fdf967bd43a9a385db9a98d015b2a857f29070569407'),(692,'WEBSITE','USER00525DBD3A7','01692f6748682ca799e407ba5c5410360d4fd287','2022-11-09 09:44:28',NULL,'1af8b7d6ef92cb8955233b0e769364742f61f2458f4c4b8a415c0f9a08348d5eaaf23b595446b0f6c843f76e7c179901277c02ade2e1e291bb9e216b6fee5830'),(693,'WEBSITE','USER00525DBD3A7','75c868ae4b879998386dae72c38feabe3d9ad1c2','2022-11-09 09:46:41',NULL,'61e99fed14904372e4fab8be7e342b188fef5007e3e495b8523d6096a0f870396d952d5cff100db6bb88b169216800ea1e1d73b019ddc0f0b29c930bd0085d19'),(694,'WEBSITE','USER00525DBD3A7','7b4c53dbae224d1786446a333d794554e6b8915e','2022-11-09 09:52:40',NULL,'de3433f8a15e43bd7d2411c54ad905b5e7168f2ae059cbb1a1b01e8734655c3f6331fb429ebdb83d63363f60f7b2a4d52384f2682547645cfb271a49a634c0ce'),(695,'WEBSITE','USER00525DBD3A8','069978591d7b9e8fde2b251e417922d48ebed545','2022-11-09 10:20:00',NULL,'59fced3ce6041ff84e6f1b559d25fd00a4739d068353c83b06e4e70185133dd8e5326dd00d4f3060bc46cc2b862efc3b7dabdbf50bcd4d37f2f64dc910bde0ca'),(696,'WEBSITE','USER00525DBD3A8','fa316d4b443df2162fe51545493ec795de56f4ad','2022-11-09 10:20:16',NULL,'0ab6a5eb8b230646e4d4b15e9c333af92af3e2b1b3794fbbaa57e3725b1168e0cb207b87f9b4caa8bd41859dece67d5d9e8e76522c3585146cdca56f9b586113'),(697,'WEBSITE','USER00525DBD3A8','f2102e4246d1f56b1131e6099c4048683db94f94','2022-11-09 11:48:11',NULL,'56ba8e9b4fa950997aebca1f5099a84ed1a3b816b46934f027999291d1d914c46d517f251b6f31670e04f152101d4ffcf4a171e8af8aa9149799ad9dd3bd3412'),(698,'WEBSITE','USER00525DBD3A9','4a141eb91a4b15f8a35de6056d3fde942dfdb6bd','2022-11-09 13:28:31',NULL,'7fbe5b9650a4b2c900715abe15d9cecb21729ef4fa854aa197ee74c1e91f0a93a519bdd244f789975e8e5497cae4d7cc858248f5cefc10badc58f0b3992ba42f'),(699,'WEBSITE','USER00525DBD3AA','00a948331198ab618d4cd98c1523f90e9b4aec11','2022-11-09 13:57:12',NULL,'14251138b11e43a69b086a42d26525577c9fccaf8983773b094ee6ae4d57b2dacae503d6099e1f00f8ca0da7764a909583a003c772b7d7691b84a8e633f9d70b'),(700,'WEBSITE','USER00525DBD3AB','8d236a3945b8a81fc23fcfc2a5b43212c37eb726','2022-11-09 13:58:28',NULL,'c86729619fbe1d45c3e3d3b400f0c40931cb65fa0cc8ab2963f1f71d86acaf0e577404870d7a1630c1df2c01a299b6da6cf4fbbae96e7dc1403347e4115782dd'),(709,'WEBSITE','USER00525DBD3AE','84321efaf16b365f26f603df4b33e0bef518e943','2022-11-09 15:56:24',NULL,'c403489826f8f2fcddaf2d12e68436f863785f5b2a5f7fa575fee03d624a1e1d2c181ad11a6d73a96969bb58814e96aeb606bab03718e87b826e48b892846b6d'),(710,'WEBSITE','USER00525DBD3AE','9d81c7b20513d933fd2cf43388b81bbdeed813a1','2022-11-09 16:01:55',NULL,'e74b5b4fe63cb0d74b450cde1f6843ee11a2e277cf1359968d14db8ff84fb5e58a16bf06345929b44d0f0a79f3df39f5a88f02db06da728900e3eb665b0470d1'),(711,'WEBSITE','USER00525DBD3AF','a2147a514bd54f652dda0da7db3ae20a44c11822','2022-11-10 03:13:58',NULL,'accf0c57a27e9e7d6cae21f1b1ee2567d23b530c5e8a706745115cf2bb957f5d30b84a50207122daf33cce6bf31d227478072614b323f4b7ea55bedb8fcd8ee2'),(712,'WEBSITE','USER00525DBD3AF','6c7d906e78d6e3d6080ceb3dec44f4b1ce68c53b','2022-11-10 03:50:13',NULL,'f196c46037a502aec012ed0251fc8fd3a7a3791e403ce86730f8ded00256afd7ffcb85063b8e35372155981c9534df348229d85786ddd865fe1e8587d0f658d5');
/*!40000 ALTER TABLE `xxxtabletokenlast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xxxtableuser`
--

DROP TABLE IF EXISTS `xxxtableuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtableuser` (
  `tableuserid` int(11) NOT NULL AUTO_INCREMENT,
  `tableuserindex` varchar(15) DEFAULT NULL,
  `tableusername` varchar(20) DEFAULT NULL,
  `tableuserfullname` varchar(100) DEFAULT NULL,
  `tableuserdisplayname` varchar(100) DEFAULT NULL,
  `tableuserinitial` varchar(2) DEFAULT NULL,
  `tableuseremail` varchar(320) DEFAULT NULL,
  `tableuseremailverificationcode` varchar(128) DEFAULT NULL,
  `tableuseremailverificationcodetimestamp` timestamp NULL DEFAULT NULL,
  `tableuseremailisverified` tinyint(1) DEFAULT NULL,
  `tableuserphonecountrycode` int(11) DEFAULT NULL,
  `tableuserphonenumbershort` bigint(20) DEFAULT NULL,
  `tableuserphonenumber` bigint(20) DEFAULT NULL,
  `tableuserphonenumbertimestamp` timestamp NULL DEFAULT NULL,
  `tableuserphonenumberisverified` tinyint(1) DEFAULT NULL,
  `tableuserphonenumberisverifiedtimestamp` timestamp NULL DEFAULT NULL,
  `tableuserphoneverificationcode` varchar(254) DEFAULT NULL,
  `tableuserphoneverificationcodetimestamp` varchar(100) DEFAULT NULL,
  `tableuserphoneverificationcodeexpiry` timestamp NULL DEFAULT NULL,
  `tableuserphoneverificationcodenext` timestamp NULL DEFAULT NULL,
  `tableuserphonenumberfailedattempt` int(100) DEFAULT NULL,
  `tableuserphonenumberfailedattemptlast` timestamp NULL DEFAULT NULL,
  `tableuserpassword` varchar(254) DEFAULT NULL,
  `tableuserpasswordtimestamp` timestamp NULL DEFAULT NULL,
  `tableuserwebtoken` varchar(254) DEFAULT NULL,
  `tableuserwebtokenbrowser` varchar(60) DEFAULT NULL,
  `tableuserwebtokenlocalice` varchar(60) DEFAULT NULL,
  `tableuserwebtokenip` varchar(60) DEFAULT NULL,
  `tableuserwebtokentimestamp` timestamp NULL DEFAULT NULL,
  `tableuserwebtokenlastactivitytimestamp` timestamp NULL DEFAULT NULL,
  `tableuserapptoken` varchar(254) DEFAULT NULL,
  `tableuserapptokenimei` varchar(60) DEFAULT NULL,
  `tableuserapptokeniccid` varchar(60) DEFAULT NULL,
  `tableuserapptokenlocalice` varchar(60) DEFAULT NULL,
  `tableuserapptokenip` varchar(60) DEFAULT NULL,
  `tableuserapptokentimestamp` timestamp NULL DEFAULT NULL,
  `tableuserapptokenlastactivitytimestamp` timestamp NULL DEFAULT NULL,
  `tableuserfailedattemptnameemail` tinyint(4) DEFAULT '0',
  `tableuser2fatype` varchar(10) DEFAULT NULL,
  `tableuser2fapinpin` varchar(254) DEFAULT NULL,
  `tableuser2fagauthsecret` varchar(254) DEFAULT NULL,
  `tableuser2fagauthencoding` varchar(60) DEFAULT NULL,
  `tableuser2fatimestamp` timestamp NULL DEFAULT NULL,
  `tableuserfailedattempt2fa` tinyint(4) DEFAULT '0',
  `tableuser2fadate` varchar(20) DEFAULT NULL,
  `tableuserreferralcode` varchar(20) DEFAULT NULL,
  `tableuserreferredby` varchar(20) DEFAULT NULL,
  `tableuserlanguage` varchar(2) DEFAULT NULL,
  `tableuserissuspended` tinyint(1) NOT NULL DEFAULT '0',
  `tableuserisactive` tinyint(1) DEFAULT '1',
  `tableuserisdeleted` tinyint(1) DEFAULT '0',
  `tableuserlastedittimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tableusercreatetimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tableusertype` tinyint(4) DEFAULT '0',
  `tableuserviewlogtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tableuserhashiv` varchar(254) DEFAULT NULL,
  `tableusersignature` varchar(254) DEFAULT NULL,
  `tableusernick` varchar(100) DEFAULT NULL,
  `tableuserphotourl` varchar(100) DEFAULT NULL,
  `tableuserphotopath` varchar(100) DEFAULT NULL,
  `tableusercolorback` varchar(6) DEFAULT NULL,
  `tableusercolorfront` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`tableuserid`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtableuser`
--

LOCK TABLES `xxxtableuser` WRITE;
/*!40000 ALTER TABLE `xxxtableuser` DISABLE KEYS */;
INSERT INTO `xxxtableuser` VALUES (42,'USER00525DBD3AE','0.3456789sot','Gunatah Iksan',NULL,'GI','gunatah.iksan@gmail.com','','2022-11-09 16:00:52',1,0,0,0,'2022-11-09 14:54:21',1,'2022-11-09 16:08:28','568406','2022-11-09 23:07:55.097','2022-11-09 16:12:55','2022-11-09 16:08:28',0,'2022-11-09 16:08:28','d8c0e0e15ad64c3eaf0958481ad26f76c9c44472a63f50de6f7bf36c5c9ccb94b266a48ca4ae44426c8f96886b650cd131eb9c76d5f5fc6fc1191e1c9261539a','2022-11-09 16:01:12','9d81c7b20513d933fd2cf43388b81bbdeed813a1',NULL,NULL,NULL,'2022-11-09 16:01:55','2022-11-09 16:01:55','',NULL,NULL,NULL,NULL,NULL,NULL,0,'PIN','8151da4e79028227daf5e197eb486f9d5c4d4a17640023f2870da488558fed5d81cce24f96cce74f6aa566a8c4ab1877166cad1038577209957c4733fea7d51c','','','2022-11-09 14:42:16',0,NULL,'GU49960325','TH499602D3','EN',0,1,0,'2022-11-09 14:33:59','2022-11-09 14:33:59',0,'2022-11-09 14:33:59',NULL,NULL,NULL,'http://127.0.0.1:1116/xxx-user/1668005135688.jpg','C:\\My Work SourceCode\\satellite.user.xxx\\FILE_DOCS\\PHOTO\\1668005135688.jpg','06BEBE','40404'),(43,'USER00525DBD3AF','hastom0','hastomo soerjo',NULL,'HS','ryohastomo@gmail.com','','2022-11-10 03:58:38',1,62,87808295838,6287808295838,'2022-11-10 03:13:14',0,NULL,'','2022-11-10 03:13:14','2022-11-10 03:13:14','2022-11-10 03:13:14',0,'2022-11-10 03:13:14','','2022-11-10 03:59:05','',NULL,NULL,NULL,'2022-11-10 03:59:10','2022-11-10 03:59:10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,NULL,NULL,NULL,NULL,NULL,0,NULL,'HA49960326','TH499602D3','EN',1,1,0,'2022-11-10 03:13:14','2022-11-10 03:13:14',0,'2022-11-10 03:13:14',NULL,NULL,NULL,NULL,NULL,'b967ff','40404'),(44,'USER00525DBD3B0','soerjo','soerjo soerjo',NULL,'SS','suryohastomo@gmail.com','140a2a8232050d23c2f3b444fffa4f62665f3a50','2022-11-10 03:14:52',0,62,87808295838,6287808295838,'2022-11-10 03:14:52',0,NULL,'','2022-11-10 03:14:52','2022-11-10 03:14:52','2022-11-10 03:14:52',0,'2022-11-10 03:14:52',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,'SO49960327','TH499602D3',NULL,0,1,0,'2022-11-10 03:14:52','2022-11-10 03:14:52',0,'2022-11-10 03:14:52',NULL,NULL,NULL,NULL,NULL,'add8e6','40404');
/*!40000 ALTER TABLE `xxxtableuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xxxtableusergeolocationinfo`
--

DROP TABLE IF EXISTS `xxxtableusergeolocationinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtableusergeolocationinfo` (
  `tableusergeolocationinfoid` int(11) NOT NULL AUTO_INCREMENT,
  `tableusergeolocationinfouserindex` varchar(15) DEFAULT NULL,
  `tableusergeolocationinfolatitude` decimal(9,4) DEFAULT NULL,
  `tableusergeolocationinfolongitude` decimal(9,4) DEFAULT NULL,
  `tableusergeolocationinfostatus` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfocountry` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfocountryCode` varchar(5) DEFAULT NULL,
  `tableusergeolocationinforegion` varchar(10) DEFAULT NULL,
  `tableusergeolocationinforegionName` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfocity` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfozip` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfolat` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfolon` varchar(50) DEFAULT NULL,
  `tableusergeolocationinfotimezone` varchar(100) DEFAULT NULL,
  `tableusergeolocationinfoisp` varchar(100) DEFAULT NULL,
  `tableusergeolocationinfoorg` varchar(100) DEFAULT NULL,
  `tableusergeolocationinfoas` varchar(100) DEFAULT NULL,
  `tableusergeolocationinfoquery` varchar(100) DEFAULT NULL,
  `tableusergeolocationinfotimestamp` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tableusergeolocationinfoid`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtableusergeolocationinfo`
--

LOCK TABLES `xxxtableusergeolocationinfo` WRITE;
/*!40000 ALTER TABLE `xxxtableusergeolocationinfo` DISABLE KEYS */;
INSERT INTO `xxxtableusergeolocationinfo` VALUES (102,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:07:50'),(103,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:11:00'),(104,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:11:54'),(105,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:15:06'),(106,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:15:47'),(107,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:26:20'),(108,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:28:01'),(109,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:29:40'),(110,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:30:04'),(111,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:32:04'),(112,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:37:15'),(113,'USER00525DBD3A6',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 07:44:20'),(114,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:15:56'),(115,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:16:34'),(116,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:16:54'),(117,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:17:11'),(118,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:17:54'),(119,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:23:59'),(120,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 08:24:47'),(121,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:18:48'),(122,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:23:52'),(123,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:25:58'),(124,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:26:52'),(125,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:28:14'),(126,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:39:32'),(127,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:39:42'),(128,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:42:37'),(129,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:44:28'),(130,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:46:41'),(131,'USER00525DBD3A7',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 09:52:40'),(132,'USER00525DBD3A8',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 10:20:00'),(133,'USER00525DBD3A8',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 10:20:16'),(134,'USER00525DBD3A8',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 11:48:11'),(135,'USER00525DBD3A9',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 13:28:31'),(136,'USER00525DBD3AA',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 13:57:12'),(137,'USER00525DBD3AB',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 13:58:28'),(138,'USER00525DBD3AD',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:20:35'),(139,'USER00525DBD3AD',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:21:27'),(140,'USER00525DBD3AD',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:25:03'),(141,'USER00525DBD3AD',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:27:42'),(142,'USER00525DBD3AD',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:30:59'),(143,'USER00525DBD3AE',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:35:10'),(144,'USER00525DBD3AE',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:38:51'),(145,'USER00525DBD3AE',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 14:39:10'),(146,'USER00525DBD3AE',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 15:56:24'),(147,'USER00525DBD3AE',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-09 16:01:55'),(148,'USER00525DBD3AF',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-10 03:13:58'),(149,'USER00525DBD3AF',-6.1751,106.8650,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-11-10 03:50:13');
/*!40000 ALTER TABLE `xxxtableusergeolocationinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xxxtempuser`
--

DROP TABLE IF EXISTS `xxxtempuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xxxtempuser` (
  `tempuserid` int(11) NOT NULL AUTO_INCREMENT,
  `tempuserindex` varchar(15) DEFAULT NULL,
  `tempusername` varchar(20) DEFAULT NULL,
  `tempuserfullname` varchar(100) DEFAULT NULL,
  `tempuserdisplayname` varchar(100) DEFAULT NULL,
  `tempuseremail` varchar(320) DEFAULT NULL,
  `tempuseremailverificationcode` varchar(128) DEFAULT NULL,
  `tempuseremailisverified` tinyint(1) DEFAULT NULL,
  `tempuseremailverificationcodetimestamp` timestamp NULL DEFAULT NULL,
  `tempuserphonecountrycode` int(11) DEFAULT NULL,
  `tempuserphonenumbershort` bigint(20) DEFAULT NULL,
  `tempuserphonenumber` bigint(20) DEFAULT NULL,
  `tempuserphoneverificationcode` varchar(254) DEFAULT NULL,
  `tempuserphoneisverified` tinyint(1) DEFAULT NULL,
  `tempuserphonetimestamp` timestamp NULL DEFAULT NULL,
  `tempuserphonenumberfailedattempt` tinyint(4) DEFAULT NULL,
  `tempuserphonenumberfailedattemptlast` timestamp NULL DEFAULT NULL,
  `tempuserpassword` varchar(254) DEFAULT NULL,
  `tempuserpasswordtimestamp` timestamp NULL DEFAULT NULL,
  `tempuserwebtoken` varchar(254) DEFAULT NULL,
  `tempuserwebtokenbrowser` varchar(60) DEFAULT NULL,
  `tempuserwebtokenlocalice` varchar(60) DEFAULT NULL,
  `tempuserwebtokenip` varchar(60) DEFAULT NULL,
  `tempuserwebtokentimestamp` timestamp NULL DEFAULT NULL,
  `tempuserwebtokenlastactivitytimestamp` timestamp NULL DEFAULT NULL,
  `tempuserapptoken` varchar(254) DEFAULT NULL,
  `tempuserapptokenimei` varchar(60) DEFAULT NULL,
  `tempuserapptokeniccid` varchar(60) DEFAULT NULL,
  `tempuserapptokenlocalice` varchar(60) DEFAULT NULL,
  `tempuserapptokenip` varchar(60) DEFAULT NULL,
  `tempuserapptokentimestamp` timestamp NULL DEFAULT NULL,
  `tempuserapptokenlastactivitytimestamp` timestamp NULL DEFAULT NULL,
  `tempuserfailedattemptnameemail` tinyint(4) DEFAULT '0',
  `tempuser2fatype` varchar(10) DEFAULT NULL,
  `tempuser2fapinpin` varchar(254) DEFAULT NULL,
  `tempuser2fagauthsecret` varchar(254) DEFAULT NULL,
  `tempuser2fagauthencoding` varchar(60) DEFAULT NULL,
  `tempuser2fatimestamp` timestamp NULL DEFAULT NULL,
  `tempuserfailedattempt2fa` tinyint(4) DEFAULT '0',
  `tempuser2fadate` varchar(20) DEFAULT NULL,
  `tempuserreferralcode` varchar(20) DEFAULT NULL,
  `tempuserreferredby` varchar(20) DEFAULT NULL,
  `tempuserlanguage` varchar(2) DEFAULT NULL,
  `tempuserissuspended` tinyint(1) NOT NULL DEFAULT '0',
  `tempuserisactive` tinyint(1) DEFAULT NULL,
  `tempuserisdeleted` tinyint(1) DEFAULT '0',
  `tempuserlastedittimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tempusercreatetimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tempuserinserttimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tempusertokentrans` varchar(254) DEFAULT NULL,
  `tempusertype` tinyint(4) DEFAULT '0',
  `tempuserviewlogtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tempuserhashiv` varchar(254) DEFAULT NULL,
  `tempusersignature` varchar(254) DEFAULT NULL,
  `tempusercolorback` varchar(6) DEFAULT NULL,
  `tempusercolorfront` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`tempuserid`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xxxtempuser`
--

LOCK TABLES `xxxtempuser` WRITE;
/*!40000 ALTER TABLE `xxxtempuser` DISABLE KEYS */;
INSERT INTO `xxxtempuser` VALUES (72,'USER00525DBD3A6','soer1012345','hasto soerjo',NULL,'fd1231235678sfs.dd@mafdil.com',NULL,NULL,NULL,62,87808295838,6287808295838,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 07:06:06','2022-11-09 07:06:06','2022-11-09 07:06:06','7ac639ff1428b182c10dec45e048bff442e6ffbc586996ad7a8ed563fc02527caf248b20ca110b57af8843f35cda55b678220bf317b8359342cfdcebd14f8c8c',0,'2022-11-09 07:06:06',NULL,NULL,NULL,NULL),(73,'','','','','',NULL,NULL,NULL,62,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 07:32:44','2022-11-09 07:32:44','2022-11-09 07:32:44','352aab56444ef28fba9102024e3f2113406efdcd30435916ec8895674c4015da77750da569a1c01a4454ae4b17ba13b94d6c7320ec27e31860f369058ddc2d78',0,'2022-11-09 07:32:44',NULL,NULL,NULL,NULL),(74,'USER00525DBD3A7','hastom0','hastomo soerjo',NULL,'hast--omo.dd@mafdil.com',NULL,NULL,NULL,62,87808295838,6287808295838,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 08:13:26','2022-11-09 08:13:26','2022-11-09 08:13:26','cb9536abd6d02bff52e96562ea41ebf3c8bf67c74ed39afb6941a7b7a8fd1a37c478ce8f504ef2f9a6dffc326cdac74ae0c2de4b3605824bc93c0aaea5b347d5',0,'2022-11-09 08:13:26',NULL,NULL,NULL,NULL),(75,'USER00525DBD3A8','hastom0','hastomo soerjo',NULL,'hastomo.dd@mafdil.com',NULL,NULL,NULL,62,87808295838,6287808295838,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 10:19:30','2022-11-09 10:19:30','2022-11-09 10:19:30','60e03adb515832a277e3e72000dfc61c7589247db68e5b89ded472178f8651c0d166b7d9b62f857fe99ee0313f9627f3211fdaedf8dbc80e309c1fa6d1c017ac',0,'2022-11-09 10:19:30',NULL,NULL,NULL,NULL),(76,'','','','','',NULL,NULL,NULL,62,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 11:46:09','2022-11-09 11:46:09','2022-11-09 11:46:09','b15be98b20a04149efcc6fc463aacfc5977f75bd55196368ec9b0baa61ff4fbaac8dd3fc7831ede73e4178d60f1310c26124a33cbb6f820fd92527a608f8e2ad',0,'2022-11-09 11:46:09',NULL,NULL,NULL,NULL),(77,'USER00525DBD3A9','gunatah.iksan','Gunatah Iksan',NULL,'gunatah.iksan@gmail.com',NULL,NULL,NULL,62,123456,62123456,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 13:19:05','2022-11-09 13:19:05','2022-11-09 13:19:05','5dc37f11e9c8520126c031b3d36f3ea6fd068a6a9eabd3113706e03955a8a80594688d1bbbc10420f983f97502a02dd83af79a88ec0e7be3502ff621a8064d33',0,'2022-11-09 13:19:05',NULL,NULL,NULL,NULL),(78,'USER00525DBD3AA','gunatah.iksan','Gunatah Iksan',NULL,'gunatah.iksan@gmail.com',NULL,NULL,NULL,62,123456,62123456,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 13:56:53','2022-11-09 13:56:53','2022-11-09 13:56:53','4538bfc77c336f19947dbf7be40481f0a2b3ce82efba4999276a447aec346eedf2cf6c4f0d9400d0a671b028a967860cd5b29782f9b4935fe0791e95020d0765',0,'2022-11-09 13:56:53',NULL,NULL,NULL,NULL),(79,'USER00525DBD3AB','gunatah.iksan','Gunatah Iksan',NULL,'gunatah.iksan@gmail.com',NULL,NULL,NULL,62,123456,62123456,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 13:58:01','2022-11-09 13:58:01','2022-11-09 13:58:01','f41ce1f577cddfab314a14bd5e406b75ac7ee4bd249611111ca1cedc42fd606882ef2ee57f0929d45e1f4304b7c10219142f273385491f1de681abf772b66128',0,'2022-11-09 13:58:01',NULL,NULL,NULL,NULL),(80,'USER00525DBD3AC','gunatah.iksan','Gunatah Iksan',NULL,'gunatah.iksan@gmail.com',NULL,NULL,NULL,62,123456,62123456,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 14:07:40','2022-11-09 14:07:40','2022-11-09 14:07:40','09860e7ee952021cde12ae8ea1805d2375e0229f839463e0984bfa809a0995b6e76b5c45e5a7b90ff441f3c7c7049371fefb648b281e6146b1aa869bcd947ed8',0,'2022-11-09 14:07:40',NULL,NULL,NULL,NULL),(81,'USER00525DBD3AD','gunatah.iksan','Gunatah Iksan',NULL,'gunatah.iksan@gmail.com',NULL,NULL,NULL,62,123456,62123456,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 14:12:14','2022-11-09 14:12:14','2022-11-09 14:12:14','eea20343452ce500d94b7a69fba792eaee601af023f1f5c588881351b230e5dccf50896a5397ad1bcef40213250497055157c13df400c6a7a22838ce54c4a871',0,'2022-11-09 14:12:14',NULL,NULL,NULL,NULL),(82,'','','','','',NULL,NULL,NULL,62,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 14:33:22','2022-11-09 14:33:22','2022-11-09 14:33:22','0193e9e655219ee702c181f57fe4f05c13ff6614f18c5c895fadc465f2ce52af2bec0033d6967760fd961291490434078dd5fdafeeb949c82b74c058506e7da4',0,'2022-11-09 14:33:22',NULL,NULL,NULL,NULL),(83,'USER00525DBD3AE','gunatah.iksan','Gunatah Iksan',NULL,'gunatah.iksan@gmail.com',NULL,NULL,NULL,62,123456,62123456,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-09 14:33:49','2022-11-09 14:33:49','2022-11-09 14:33:49','0339db9a5525adf66b44a4e6047e602b3147376d4ffa569ef8015ac158df101c4be166a1539c8f17e80d3760760ffaebf5d6e46d6ce2f3ea61477f627dc55ad0',0,'2022-11-09 14:33:49',NULL,NULL,NULL,NULL),(84,'USER00525DBD3AF','hastom0','hastomo soerjo',NULL,'ryohastomo@gmail.com',NULL,NULL,NULL,62,87808295838,6287808295838,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-10 03:12:30','2022-11-10 03:12:30','2022-11-10 03:12:30','72bfa19e9094ff4132261372e8b2a05090c1697e752c8be72450336d5eafc30c22f72da14537a645afb5153323830c56163ad2348af89b48fee73902d2623c38',0,'2022-11-10 03:12:30',NULL,NULL,NULL,NULL),(85,'USER00525DBD3B0','soerjo','soerjo soerjo',NULL,'suryohastomo@gmail.com',NULL,NULL,NULL,62,87808295838,6287808295838,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'TH499602D3',NULL,0,NULL,0,'2022-11-10 03:14:07','2022-11-10 03:14:07','2022-11-10 03:14:07','8003c45ae79cde019fd412977127a83a45192fd980a6f9dc929bc5fa5cba995af941f612a25f0ec2025b07388f97b35d8afabe83f58eb13e658f50a134ae2b6b',0,'2022-11-10 03:14:07',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `xxxtempuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'xxxuserlocal'
--
/*!50003 DROP FUNCTION IF EXISTS `fcxxxindextablegenerate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE FUNCTION `fcxxxindextablegenerate`(`parametertableindexindex` CHAR(4)) RETURNS varchar(15) CHARSET utf8mb4
BEGIN
	SET @returnTemp = '080000000000';

	BlockTRANSACTION:BEGIN
		BlockTRANSACTIONGETtableindexlastindex:BEGIN
        
        SET @indextempint = -1;
		SELECT tableindexlastindex  
			INTO @indextempint
			FROM xxxtableindex
			WHERE tableindexindex = parametertableindexindex;

		IF @indextempint = -1 THEN
			SET @returnTemp = 'xxx999999995';
			LEAVE BlockTRANSACTION;
		END IF;

		END BlockTRANSACTIONGETtableindexlastindex;

		BlockTRANSACTIONUPDATEtableindexlastindex:BEGIN

			IF @indextempint = 9999999 THEN 
				SET @indextempint = 1;
			ELSE
				SET @indextempint = @indextempint + 1;
			END IF;

			UPDATE xxxtableindex
			SET
				tableindexlastindex = @indextempint
			WHERE 
				tableindexindex = parametertableindexindex AND
				tableindexid > 0;

			IF row_count() != 1 THEN
				SET @returnTemp = 'xxx999999995';
				LEAVE BlockTRANSACTION;
			END IF;

		END BlockTRANSACTIONUPDATEtableindexlastindex;

		BlockTRANSACTIONFORMAT:BEGIN

			SELECT CONCAT(parametertableindexindex,RIGHT(CONCAT('0000',HEX(CAST(RIGHT(CONCAT(YEAR(CURDATE()),RIGHT(CONCAT('0', MONTH(CURDATE()),RIGHT(CONCAT('000000',CONVERT(@indextempint,char)), 7)), 9)), 11) AS SIGNED))), 11))
			INTO @returnTemp;

		END BlockTRANSACTIONFORMAT;
	END BlockTRANSACTION;

	RETURN @returnTemp;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxauthlogininfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxauthlogininfo`(
IN `platform` VARCHAR(20), 
IN `userindex` VARCHAR(15)
)
BEGIN
	
	IF platform = 'ANDROID' OR platform = 'IOS' THEN
		SELECT 
			tableuserindex,
			tableusername,
			tableuserfullname,
			tableuserinitial,
			tableuserapptoken tokenlogin,
			tableuserreferralcode,
			tableuseremail,
			tableuser2fatype,
			tableuserphonecountrycode,
			tableuserphonenumbershort,
			tableuserphonenumber,
			tableuserphonenumberisverified,
			tableuserlanguage,
			tableusercolorback,
			tableusercolorfront
		FROM
			xxxtableuser
		WHERE
			tableuserindex = userindex;
	ELSE
		
		SELECT 
			tableuserindex,
			tableusername,
			tableuserfullname,
			tableuserinitial,
			tableuserwebtoken tokenlogin,
			tableuserreferralcode,
			tableuseremail,
			tableuser2fatype,
			tableuserphonecountrycode,
			tableuserphonenumbershort,
			tableuserphonenumber,
			tableuserphonenumberisverified,
			tableuserlanguage,
			tableusercolorback,
			tableusercolorfront
		FROM
			xxxtableuser
		WHERE
			tableuserindex = userindex;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxauthsignin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxauthsignin`(
	IN `platform` VARCHAR(20),
	IN `username` VARCHAR(320),
	IN `userpassword` VARCHAR(60),
	IN `latitude` DECIMAL(9,4),
	IN `longitude` DECIMAL(9,4),
	IN `userlanguage` varchar(2)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex;
	END;

    START TRANSACTION;
    BlockTRANSACTION:BEGIN
    
    SET @resultstatus = true;
	SET @resultcode = 'xxx000000000';
    SET @resulterrormessage = '';
    SET @resulttokentrans = '';
	SET @resultindex = '';
    SET @resultemail = '';
	SET @resultcodevariable = 0;

    
	SET @tableusername = '';
	SET	@tableuserindex = '';
	SET	@tableuserfullname = '';
	SET	@tableuserinitial = '';
	SET	@tableusercolorback = '';
	SET	@tableusercolorfront = '';
	SET	@tableuserphotourl = '';

    BlockVALIDATION:BEGIN
    
    BlockVALIDATIONusernamepassword:BEGIN

	SET @tableuserindex = '';
    SET @tableuserfailedattemptnameemail = 0;
    SET @tableuserissuspended = 0;
    SELECT
		tableusername,
		tableuserindex,
		tableuseremail,
		tableuserfullname,
		tableuserinitial,
		tableuserphotourl,
		tableusercolorback,
		tableusercolorfront,
        tableuseremailisverified,
        tableuserpassword,
        tableuserpasswordtimestamp,
        tableuserfailedattemptnameemail,
        tableuserissuspended,
        tableusercreatetimestamp
	INTO
        @tableusername,
		@tableuserindex,
        @tableuseremail,
		@tableuserfullname,
		@tableuserinitial,
		@tableuserphotourl,
		@tableusercolorback,
		@tableusercolorfront,
        @tableuseremailisverified,
        @tableuserpassword,
        @tableuserpasswordtimestamp,
        @tableuserfailedattemptnameemail,
        @tableuserissuspended,
        @tableusercreatetimestamp
	FROM
		xxxtableuser
	WHERE
		tableusername = username AND
        tableuseremailisverified = 1;
	
	SET @tableusername = @tableusername;
	SET	@tableuserindex = @tableuserindex;
	SET	@tableuserfullname = @tableuserfullname;
	SET	@tableuserinitial = @tableuserinitial;
	SET	@tableusercolorback = @tableusercolorback;
	SET	@tableusercolorfront = @tableusercolorfront;
	SET	@tableuserphotourl = @tableuserphotourl;

            
	SET @tablelogindex = @tableuserindex;
	SET @tableloguserindex = @tableuserindex;
	
    IF @tableuserindex = '' THEN
        SET @resultstatus = false;
		SET @resultcode = 'xxx999999950';
		SET @resulterrormessage = 'xxx999999950 wrong username and password';
        
        LEAVE BlockTRANSACTION;
    ELSE 
		SET @resultindex = @tableuserindex;
        SET @resultemail = @tableuseremail;
		IF @tableuserissuspended = 1 THEN
			SET @resultstatus = false;
			SET @resultcode = 'xxx999999960';
			SET @resulterrormessage = 'xxx999999960 user suspended';
			
			LEAVE BlockTRANSACTION;
		ELSE
			SET @hashinsertpassword = SHA2(CONCAT(SHA1(@tableuserindex),SHA1(CONCAT(userpassword,IFNULL(@tableuserpasswordtimestamp, "{SHA1(false) = ?}")))), 512);
			IF  @hashinsertpassword <> @tableuserpassword THEN
				
				SET @tableuserfailedattemptnameemail = @tableuserfailedattemptnameemail + 1;
				UPDATE xxxtableuser SET tableuserfailedattemptnameemail = @tableuserfailedattemptnameemail WHERE tableuserindex = @tableuserindex AND tableuserid > 0;

				IF @tableuserfailedattemptnameemail >= 3 THEN
                    IF platform = 'ANDROID' OR platform = 'IOS' THEN
						UPDATE 
							xxxtableuser 
						SET 
							tableuserissuspended = 1 ,
							tableuserpassword = '',
							tableuserapptoken = '',
                            tableuserapptokentimestamp = NOW(),
                            tableuserapptokenlastactivitytimestamp = NOW()
						WHERE 
							tableuserindex = @tableuserindex AND
                            tableuserid > 0;
					ELSE
						UPDATE 
							xxxtableuser 
						SET 
							tableuserissuspended = 1 ,
							tableuserpassword = '',
							tableuserwebtoken = '',
                            tableuserwebtokentimestamp = NOW(),
                            tableuserwebtokenlastactivitytimestamp = NOW()
						WHERE 
							tableuserindex = @tableuserindex AND
                            tableuserid > 0;
                    END IF;
                    
                    SET @resultstatus = false;
					SET @resultcode = 'xxx999999960';
					SET @resulterrormessage = 'xxx999999960 user suspended';
					
					LEAVE BlockTRANSACTION;
				ELSE
				
					SET @resultstatus = false;
					SET @resultcode = 'xxx999999955';
					SET @resulterrormessage = 'xxx999999955 wrong username and password can try ### times again';
					SET @resultcodevariable = 3 - @tableuserfailedattemptnameemail;
					
					LEAVE BlockTRANSACTION;
				END IF;
			END IF;
		END IF;
    END IF;
    END BlockVALIDATIONusernamepassword;
    
    END BlockVALIDATION;    

    BlockUPDATEUSERLOGININFO:BEGIN

	SET @resultindex = @tableuserindex;
	SET @tableusertoken = SHA1(CONCAT(@tableuserindex, @tableusercreatetimestamp, NOW()));
	
	IF platform = 'ANDROID' OR platform = 'IOS' THEN
		SET @tablelogweb = 1;
		UPDATE xxxtableuser
		SET
			tableuserapptoken = @tableusertoken,
			tableuserapptokentimestamp = NOW(),
			tableuserapptokenlastactivitytimestamp = NOW(),
			tableuserfailedattemptnameemail = 0,
            tableuserlanguage = userlanguage,
            tableuserissuspended = 0
		WHERE 
			tableuserindex = @tableuserindex AND
            tableuserid > 0;
	ELSE
		SET @tablelogapp = 1;
		UPDATE xxxtableuser
		SET
			tableuserwebtoken = @tableusertoken,
			tableuserwebtokentimestamp = NOW(),
			tableuserwebtokenlastactivitytimestamp = NOW(),
			tableuserfailedattemptnameemail = 0,
            tableuserlanguage = userlanguage,
            tableuserissuspended = 0
		WHERE 
			tableuserindex = @tableuserindex AND
            tableuserid > 0;
    END IF;
    
    CALL spxxxtabletokenlast(platform, @tableuserindex, @tableusertoken);

    END BlockUPDATEUSERLOGININFO;
    
    BlockINSERTGEOLOCATION:BEGIN
    
    	INSERT INTO `xxxtableusergeolocationinfo`
			(`tableusergeolocationinfouserindex`,
			`tableusergeolocationinfolatitude`,
			`tableusergeolocationinfolongitude`,
			`tableusergeolocationinfotimestamp`)
		VALUES
			(@tableuserindex,
			latitude,
			longitude,
			NOW());
    
    END BlockINSERTGEOLOCATION;
    
    END BlockTRANSACTION;

	COMMIT;

    SELECT
    	@resultcodevariable AS resultcodevariable,
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,
		@resultemail AS resultemail,
		@tableusertoken AS resultusertoken,
		@tableusername AS tableusername,
		@tableuserindex AS tableuserindex,
	    @tableuserfullname AS tableuserfullname,
	    @tableuserinitial AS tableuserinitial,
	   	@tableusercolorback AS tableusercolorback,
	    @tableusercolorfront AS tableusercolorfront,
	    @tableuserphotourl AS tableuserphotourl;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxauthtokenlast` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxauthtokenlast`(
	IN `platform` VARCHAR(20),
	IN `userindex` VARCHAR(15),
	IN `usertoken` VARCHAR(254)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex;
	END;

	START TRANSACTION;
    BlockTRANSACTION:BEGIN

  		SET @resultstatus = true;
		SET @resultcode = 'xxx000000000';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';

		SET @tableusername = '';
		SET	@tableuserindex = '';
		SET	@tableuserfullname = '';
		SET	@tableuserinitial = '';
		SET	@tableusercolorback = '';
		SET	@tableusercolorfront = '';
		SET	@tableuserphotourl = '';

	    SET @TIMESTAMPDIFFSECOND = 60000;
	    
	    IF platform = 'ANDROID' OR platform = 'IOS' THEN
			SELECT 
				tableusername,
				tableuserindex,
				tableuseremail,
				tableuserfullname,
				tableuserinitial,
				tableuserphotourl,
				tableusercolorback,
				tableusercolorfront,
				tableuserissuspended
			INTO
				@tableusername,
				@tableuserindex,
				@tableuseremail,
				@tableuserfullname,
				@tableuserinitial,
				@tableuserphotourl,
				@tableusercolorback,
				@tableusercolorfront,
				@tableuserissuspended
			FROM 
				xxxtableuser
			WHERE
				tableuserindex = userindex AND
		        TIMESTAMPDIFF(SECOND, 	tableuserapptokentimestamp, NOW()) <= @TIMESTAMPDIFFSECOND AND
	            tableuserapptoken = usertoken;

			IF @tableuserissuspended = 1 THEN
		  		SET @resultstatus = false;
				SET @resultcode = 'xxx999999915';
				SET @resulterrormessage = 'xxx999999915 user suspended';

				LEAVE BlockTRANSACTION;
			END IF;
	           
			IF @tableuserindex = '' THEN
		  		SET @resultstatus = false;
				SET @resultcode = 'xxx999999940';
				SET @resulterrormessage = 'xxx999999940 unauthorize';

				LEAVE BlockTRANSACTION;
			END IF;
		
	    ELSE
			SELECT 
				tableusername,
				tableuserindex,
				tableuseremail,
				tableuserfullname,
				tableuserinitial,
				tableuserphotourl,
				tableusercolorback,
				tableusercolorfront,
				tableuserissuspended
			INTO
				@tableusername,
				@tableuserindex,
				@tableuseremail,
				@tableuserfullname,
				@tableuserinitial,
				@tableuserphotourl,
				@tableusercolorback,
				@tableusercolorfront,
				@tableuserissuspended
			FROM 
				xxxtableuser
			WHERE
				tableuserindex = userindex AND
		        TIMESTAMPDIFF(SECOND, 	tableuserwebtokentimestamp, NOW()) <= @TIMESTAMPDIFFSECOND AND
	            tableuserwebtoken = usertoken;
	           
	        IF @tableuserissuspended = 1 THEN
		  		SET @resultstatus = false;
				SET @resultcode = 'xxx999999915';
				SET @resulterrormessage = 'xxx999999915 user suspended';

				LEAVE BlockTRANSACTION;
			END IF;

	           
			IF @tableuserindex = '' THEN
		  		SET @resultstatus = false;
				SET @resultcode = 'xxx999999940';
				SET @resulterrormessage = 'xxx999999940 unauthorize';

				LEAVE BlockTRANSACTION;
			END IF;
		
	    END IF;
	    
    END BlockTRANSACTION;

    COMMIT;    

    SELECT 
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,
		@resultemail AS resultemail,
		@tableusertoken AS resultusertoken,
		@tableusername AS tableusername,
		@tableuserindex AS tableuserindex,
	    @tableuserfullname AS tableuserfullname,
	    @tableuserinitial AS tableuserinitial,
	   	@tableusercolorback AS tableusercolorback,
	    @tableusercolorfront AS tableusercolorfront,
	    @tableuserphotourl AS tableuserphotourl;
		
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxchangenumberphone` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxchangenumberphone`(
	IN phonecountrycode bigint(20),
	IN phonenumbershort bigint(20),
	IN userindex varchar(15)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex;
	END;


	START TRANSACTION;
	BlockTRANSACTION:BEGIN
		
		SET @resultstatus = 1;
		SET @resultcode = 'xxx000000000';
	    SET @resultdescription = '';
	    SET @resulterrormessage = '';
	    SET @resulttokentrans = '';
	   	SET @resultindex = '';

		
	    SET @userindex = userindex;
	    SET @phonecountrycode = phonecountrycode;
	    SET @phonenumbershort = phonenumbershort;
	    SET @phonenumber = CONCAT(@phonecountrycode, @phonenumbershort);
	    
	    UPDATE
			xxxtableuser
		SET
			tableuserphonecountrycode = @phonecountrycode,
			tableuserphonenumbershort = @phonenumbershort,
			tableuserphonenumber = @phonenumber,
			tableuserphonenumbertimestamp = NOW(),
			tableuserphonenumberisverified = 0,
			tableuserphoneverificationcode = '',
			tableuserphoneverificationcodenext = NOW(), 
			tableuserphonenumberisverifiedtimestamp = NULL
		WHERE
			tableuserindex  = @userindex;
	
    END BlockTRANSACTION;
	COMMIT;
    
    SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
        @resultdescription AS resultdescription,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxchangepassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxchangepassword`(
IN `platform` VARCHAR(20), 
IN `userindex` VARCHAR(15),
IN `usertoken` varchar(254) , 
IN `userpasswordold` VARCHAR(60),
IN `userpasswordnew` VARCHAR(60)
)
BEGIN
	DECLARE resulterrormessage TEXT;

	DECLARE exit handler for sqlexception
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;
		
		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
	
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex;
	END;
    START TRANSACTION;
    BlockTRANSACTION:BEGIN
    
    SET @resultstatus = true;
	SET @resultcode = 'xxx000000000';
    SET @resulterrormessage = '';
    SET @resulttokentrans = '';
	SET @resultindex = userindex;        
	SET @resultuserlanguage = '';
	SET @resultuseremail = '';
	SET @resultusernick = '';

    BlockVALIDATION:BEGIN
    
    BlockVALIDATIONusernameemailpassword:BEGIN
    
    SET @tableuserindex = userindex;
    IF platform = 'ANDROID' OR platform = 'IOS' THEN
		SELECT
			tableuserindex,
            tableuserlanguage,
            tableuseremail
		INTO
			@tableuserindex,
            @tableuserlanguage,
            @tableuseremail
		FROM
			xxxtableuser
		WHERE
			SHA2(CONCAT(
					SHA1(@tableuserindex),
					SHA1(CONCAT(
						userpasswordold,
						IFNULL(@tableuserpasswordtimestamp, "{SHA1(false) = ?}")
				))), 512) <> userpasswordold AND
			tableuserapptoken = usertoken
		LIMIT 1;
    ELSE
		SELECT
			tableuserindex,
            tableuserlanguage,
            tableuseremail,
            tableuserfullname
		INTO
			@tableuserindex,
            @tableuserlanguage,
            @tableuseremail,
            @tableuserfullname
		FROM
			xxxtableuser
		WHERE
			SHA2(CONCAT(
					SHA1(@tableuserindex),
					SHA1(CONCAT(
						userpasswordold,
						IFNULL(@tableuserpasswordtimestamp, "{SHA1(false) = ?}")
				))), 512) <> userpasswordold AND
			tableuserwebtoken = usertoken
		LIMIT 1;
    END IF;
	
    IF CHAR_LENGTH(@tableuserindex) <> 15 THEN
		SET @resultstatus = false;
		SET @resultcode = 'xxx005015015';
	    SET @resulterrormessage = 'xxx005015015 user is not found';

        LEAVE BlockTRANSACTION;
    END IF;        
	SET @resultuserlanguage = @tableuserlanguage;
	SET @resultuserfullname = @tableuserfullname;
	SET @resultuseremail = @tableuseremail;
    END BlockVALIDATIONusernameemailpassword;

    END BlockVALIDATION;    

    BlockSTORETable:BEGIN
    
    SET @tableuserpasswordtimestamp = NOW();
    IF platform = 'ANDROID' OR platform = 'IOS' THEN	
		SET @tablelogweb = 1;	
		UPDATE `xxxtableuser`
		SET
		`tableuserpassword` = SHA2(CONCAT(
			SHA1(userindex),
			SHA1(CONCAT(
				userpasswordnew,
				IFNULL(@tableuserpasswordtimestamp, "{SHA1(false) = ?}")
		))), 512),
		`tableuserpasswordtimestamp` = @tableuserpasswordtimestamp,
		`tableuserapptoken` = ''
		WHERE 
			`tableuserindex` = userindex AND
            tableuserid > 0;
	ELSE
		SET @tablelogapp = 1;
		UPDATE `xxxtableuser`
		SET
		`tableuserpassword` = SHA2(CONCAT(
			SHA1(userindex),
			SHA1(CONCAT(
				userpasswordnew,
				IFNULL(@tableuserpasswordtimestamp, "{SHA1(false) = ?}")
		))), 512),
		`tableuserpasswordtimestamp` = @tableuserpasswordtimestamp,
		`tableuserwebtoken` = ''
		WHERE 
			tableuserindex = userindex AND
            tableuserid > 0;
    END IF;
-- 	CALL `spxxxtableuser`(userindex);
    DELETE FROM `xxxtabletokenlast`
	WHERE 
		tabletokenuserindex = userindex AND
        tabletokenlastid > 0;
	
    END BlockSTORETable;

    END BlockTRANSACTION;

	COMMIT;

    SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,        
        @resultuserlanguage AS resultuserlanguage,
        @resultuserfullname AS resultuserfullname,
        @resultuseremail AS resultuseremail;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxforgotnamepassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxforgotnamepassword`(IN username varchar(320))
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex,
			@resultemailverificationcode AS resultemailverificationcode;
	END;

	START TRANSACTION;    
    BlockTRANSACTION:BEGIN
    
	    SET @resultstatus = 1;
		SET @resultcode = 'xxx000000005';
	    SET @resulterrormessage = '';
	    SET @resulttokentrans = '';
		SET @resultindex = '';
	    SET @resultemailverificationcode = '';
	    SET @resultemail = '';
	   
	   	SET @tableusername = '';
		SET	@tableuserindex = '';
		SET	@tableuserfullname = '';
		SET	@tableuserinitial = '';
		SET	@tableusercolorback = '';
		SET	@tableusercolorfront = '';
		SET	@tableuserphotourl = '';
	    
	    BlockVALIDATION:BEGIN
	    
		    SET @tableuserindex= '';
		    SELECT		        
	        	tableuserindex,
				tableusername,
				tableuserfullname,
				tableuserdisplayname,
				tableuserinitial,
				tableuseremail,
				tableuserphotourl,
				tableusercolorback,
				tableusercolorfront
			INTO
				@tableuserindex,
				@tableusername,
				@tableuserfullname,
				@tableuserdisplayname,
				@tableuserinitial,
				@tableuseremail,
				@tableuserphotourl,
				@tableusercolorback,
				@tableusercolorfront
			FROM
				xxxtableuser
			WHERE
				tableusername = username;
			
			SET @resultindex = @tableuserindex;
		    /*IF CHAR_LENGTH(@tableuserindex) <> 15 THEN
				SET @resultstatus = false;
				SET @resultcode = 'xxx005015015';
				SET @resulterrormessage = 'user is not found';
		        LEAVE BlockTRANSACTION;
		    END IF;*/
	    
	    END BlockVALIDATION;
	    
	    
	    BlockSTORETable:BEGIN
	    IF CHAR_LENGTH(@tableuserindex) = 15 THEN
		    SET @tableuseremailverificationcode = SHA1(CONCAT('QWERTY', LEFT(UUID(), 8), @tableuseremail, 'mnbvcx'));
		    SET @resultemailverificationcode = @tableuseremailverificationcode;
		    
		    SET @resultnick = @tempusernick;
		   	SET @resultemail = @tableuseremail;
		   	SET @resultfullname = @tableuserfullname;
		    
		    UPDATE `xxxtableuser`
			SET
			`tableuseremailverificationcode` = @tableuseremailverificationcode,
			`tableuseremailverificationcodetimestamp` = NOW()
			WHERE 
				`tableuserindex` = @tableuserindex AND
		        tableuserid > 0;
		END IF;
		       		
	    END BlockSTORETable;
	    

    END BlockTRANSACTION;
   
	COMMIT;
    
    SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,
		@resultemailverificationcode AS resultemailverificationcode,
		@resultemail AS resultemail,
        @resultfullname AS resultfullname,
        @tableusername AS tableusername,
		@tableuserindex AS tableuserindex,
	    @tableuserfullname AS tableuserfullname,
	    @tableuserinitial AS tableuserinitial,
	   	@tableusercolorback AS tableusercolorback,
	    @tableusercolorfront AS tableusercolorfront,
	    @tableuserphotourl AS tableuserphotourl;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxlogout` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxlogout`(
	IN `platform` VARCHAR(20),
	IN `userindex` varchar(15)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex,
			@resultemailverificationcode AS resultemailverificationcode;
	END;

	START TRANSACTION;    

    BlockTRANSACTION:BEGIN

	    SET @resultstatus = true;
		SET @resultcode = 'xxx000000000';
	    SET @resultdescription = '';
	    SET @resulterrormessage = '';
	    SET @resulttokentrans = '';
		SET @resultindex = userindex;
	
		SET @tableusername = '';
		SET	@tableuserindex = '';
		SET	@tableuserfullname = '';
		SET	@tableuserinitial = '';
		SET	@tableusercolorback = '';
		SET	@tableusercolorfront = '';
		SET	@tableuserphotourl = '';
	
	    BlockSTORETable:BEGIN
	
		    IF platform = 'ANDROID' OR platform = 'IOS' THEN
				UPDATE `xxxtableuser`
				SET tableuserapptoken = ''
				WHERE `tableuserindex` = userindex AND tableuserid > 0;
		
		    ELSE
				UPDATE `xxxtableuser`
				SET tableuserwebtoken = ''
				WHERE `tableuserindex` = userindex AND tableuserid > 0;
		
		    END IF;
		   
		   SELECT
				tableuserindex,
				tableusername,
				tableuserfullname,
				tableuserinitial,
				tableuserphotourl,
				tableusercolorback,
				tableusercolorfront
			INTO
				@tableuserindex,
				@tableusername,
				@tableuserfullname,
				@tableuserinitial,
				@tableuserphotourl,
				@tableusercolorback,
				@tableusercolorfront
			FROM
				xxxtableuser
			WHERE
				tableuserindex = userindex; 


	
	    END BlockSTORETable;

    END BlockTRANSACTION;

	COMMIT;

    SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
        @resultdescription AS resultdescription,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,
		@tableusername AS tableusername,
		@tableuserindex AS tableuserindex,
	    @tableuserfullname AS tableuserfullname,
	    @tableuserinitial AS tableuserinitial,
	   	@tableusercolorback AS tableusercolorback,
	    @tableusercolorfront AS tableusercolorfront,
	    @tableuserphotourl AS tableuserphotourl;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxresetpin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxresetpin`(
	IN `platform` VARCHAR(20),
	IN `userindex` varchar(15),
	IN `usertoken` varchar(254),
	IN `userpinnew` varchar(60),
	IN `userpassword` VARCHAR(60)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex,
			@resultemailverificationcode AS resultemailverificationcode;
	END;

    START TRANSACTION;    
    BlockTRANSACTION:BEGIN
    
    SET @resultstatus = 1;
	SET @resultcode = 'xxx000000000';
    SET @resulterrormessage = '';
    SET @resulttokentrans = '';
	SET @resultindex = userindex;        
        SET @resultuserlanguage = '';
        SET @resultuseremail = '';
        SET @resultusernick = '';
    
    BlockVALIDATION:BEGIN
    
    SET @tableuserindex = '';

   
    IF platform = 'ANDROID' OR platform = 'IOS' THEN	
		SET @tablelogweb = 1;
		SELECT
			tableuserindex,
            tableuserlanguage,
            tableuseremail,
            tableusernick
		INTO
			@tableuserindex,
            @tableuserlanguage,
            @tableuseremail,
            @tableusernick
		FROM
			xxxtableuser
		WHERE
		   	SHA2(CONCAT(SHA1(tableuserindex),SHA1(CONCAT(userpassword,IFNULL(tableuserpasswordtimestamp, "{SHA1(false) = ?}")))), 512) = tableuserpassword AND
			tableuserapptoken = usertoken
		LIMIT 1;
    ELSE	
		SET @tablelogapp = 1;
		SELECT
			tableuserindex,
            tableuserlanguage,
            tableuseremail,
            tableusernick
		INTO
			@tableuserindex,
            @tableuserlanguage,
            @tableuseremail,
            @tableusernick
		FROM
			xxxtableuser
		WHERE
		   	SHA2(CONCAT(SHA1(tableuserindex),SHA1(CONCAT(userpassword,IFNULL(tableuserpasswordtimestamp, "{SHA1(false) = ?}")))), 512) = tableuserpassword AND
			tableuserwebtoken = usertoken
		LIMIT 1;
    END IF;
	
    IF CHAR_LENGTH(@tableuserindex) <> 15 THEN
		SET @resultstatus = false;
		SET @resultcode = 'xxx999999935';
		SET @resulterrormessage = "xxx999999935 reset pin failed!";
        LEAVE BlockTRANSACTION;
    END IF;        
	SET @resultuserlanguage = @tableuserlanguage;
	SET @resultuseremail = @tableuseremail;
	SET @resultuserfullname = @tableuserfullname;
    
    END BlockVALIDATION;
    
    BlockSTORE:BEGIN
        
    BlockSTORETable:BEGIN
    
    SET @tableuser2fatimestamp = NOW();
    
    IF platform = 'ANDROID' OR platform = 'IOS' THEN	
		SET @tablelogweb = 1;	
		UPDATE `xxxtableuser`
		SET
			`tableuser2fatype` = 'PIN',
			`tableuser2fagauthsecret` = '',
			`tableuser2fagauthencoding` = '',
			`tableuser2fatimestamp` = @tableuser2fatimestamp,
			`tableuserfailedattempt2fa` = 0,
			`tableuser2fapinpin` = SHA2(CONCAT(
				SHA1(userindex),
				SHA1(CONCAT(
					userpinnew,
					IFNULL(@tableuser2fatimestamp, "{SHA1(false) = ?}")
			))), 512),
			`tableuser2fatimestamp` = @tableuser2fatimestamp
		WHERE 
			`tableuserindex` = userindex AND 
            tableuserapptoken = usertoken AND
            tableuserid > 0;
	ELSE
		SET @tablelogapp = 1;
		UPDATE `xxxtableuser`
		SET
			`tableuser2fatype` = 'PIN',
			`tableuser2fagauthsecret` = '',
			`tableuser2fagauthencoding` = '',
			`tableuser2fatimestamp` = @tableuser2fatimestamp,
			tableuserfailedattempt2fa = 0,
			`tableuser2fapinpin` = SHA2(CONCAT(
				SHA1(userindex),
				SHA1(CONCAT(
					userpinnew,
					IFNULL(@tableuser2fatimestamp, "{SHA1(false) = ?}")
			))), 512),
			`tableuser2fatimestamp` = @tableuser2fatimestamp
		WHERE 
			`tableuserindex` = userindex AND 
            tableuserwebtoken = usertoken AND
            tableuserid > 0;
    END IF;    
	
    END BlockSTORETable;
    
    END BlockSTORE;


    END BlockTRANSACTION;
	COMMIT;
    
    SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,        
        @resultuserlanguage AS resultuserlanguage,
        @resultuseremail AS resultuseremail,
        @resultuserfullname AS resultuserfullname;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxsuspendotp` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxsuspendotp`(
  IN `userindex` varchar(15)
)
BEGIN
	
	UPDATE
	xxxuserlocal.xxxtableuser
SET
	tableuserissuspended = 1,
	tableuseremailverificationcode = '',
	tableuseremailisverified = 0,
	tableuserphonenumberisverified = 0,
	tableuserphoneverificationcode = ''
WHERE
	tableuserindex = userindex;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxtabletokenlast` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxtabletokenlast`(
	IN platform varchar(20),
	IN tokenuserindex varchar(15),
	IN tokenlasttoken varchar(254)
)
BEGIN
	SET @tabletokenlasttimestamp = NOW();
	
	INSERT INTO `xxxtabletokenlast`
	(`tabletokenplatform`,
	`tabletokenuserindex`,
	`tabletokenlasttoken`,
	`tabletokenlasttimestamp`,
	`tabletokenlastsignature`)
	VALUES
	(platform,
	tokenuserindex,
	tokenlasttoken,
	@tabletokenlasttimestamp,
	SHA2(CONCAT(
		SHA(tokenuserindex),
	    SHA(CONCAT(
			IFNULL(platform, "{SHA1(false) = ?}"),
			IFNULL(tokenlasttoken, "{SHA1(false) = ?}"),
	        IFNULL(@tabletokenlasttimestamp, "{SHA1(false) = ?}")
			))
	), 512));
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxtableuser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxtableuser`(
userindex char(15)
)
BEGIN
	SET @tableuserlastedittimestamp = NOW();

	UPDATE `xxxtableuser`
	SET
	`tableusersignature` = 
		SHA2(CONCAT(
			SHA1(`tableuserindex`),
			SHA1(CONCAT(
				`tableusername`,
				IFNULL(`tableuseremail`, "{SHA1(false) = ?}"),
				IFNULL(`tableuseremailverificationcode`, "{SHA1(false) = ?}"),
				IFNULL(`tableuseremailisverified`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserphonenumber`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserphoneverificationcode`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserphoneisverified`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserpassword`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserwebtoken`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserapptoken`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserfailedattemptnameemail`, "{SHA1(false) = ?}"),
				IFNULL(`tableuser2fatype`, "{SHA1(false) = ?}"),
				IFNULL(`tableuser2fapinpin`, "{SHA1(false) = ?}"),
				IFNULL(`tableuser2fagauthsecret`, "{SHA1(false) = ?}"),
				IFNULL(`tableuser2fagauthencoding`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserfailedattempt2fa`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserreferralcode`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserreferredby`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserissuspended`, "{SHA1(false) = ?}"),
				IFNULL(`tableuserisactive`, "{SHA1(false) = ?}"),
				IFNULL(@tableuserlastedittimestamp,"{SHA1(false) = ?}"),
				IFNULL(`tableusertype`, "{SHA1(false) = ?}")
		))), 512),
        `tableuserlastedittimestamp` = @tableuserlastedittimestamp
	WHERE 
		`tableuserindex` = userindex AND
        tableuserid > 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxupdateprofile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxupdateprofile`(
	IN `platform` VARCHAR(20),
	IN `usertoken` varchar(254),
	IN `usernamenew` varchar(20)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex,
			@resultemailverificationcode AS resultemailverificationcode;
	END;

    START TRANSACTION;    
    BlockTRANSACTION:BEGIN
    
    SET @resultstatus = 1;
	SET @resultcode = 'xxx000000000';
    SET @resultdescription = usernamenew;
    SET @resulterrormessage = '';
    SET @resulttokentrans = '';
	SET @resultuserlanguage = '';
	SET @resultuseremail = '';
	SET @resultuserfullname = '';
    SET @resultuserdisplayname = '';

    
    BlockVALIDATION:BEGIN
    
    IF platform = 'ANDROID' OR platform = 'IOS' THEN	
		SET @tablelogapp = 1;
		SELECT
			tableuserindex,
            tableuserlanguage,
            tableuseremail,
            tableuserfullname,
            tableuserdisplayname
		INTO
			@tableuserindex,
            @tableuserlanguage,
            @tableuseremail,
            @tableuserfullname,
            @tableuserdisplayname
		FROM
			xxxtableuser
		WHERE
			tableuserapptoken = usertoken AND
            tableuserisactive = 1
		LIMIT 1;
	
	ELSE	
		SET @tablelogweb = 1;
		SELECT
			tableuserindex,
            tableuserlanguage,
            tableuseremail,
            tableuserfullname,
            tableuserdisplayname
		INTO
			@tableuserindex,
            @tableuserlanguage,
            @tableuseremail,
            @tableuserfullname,
            @tableuserdisplayname
		FROM
			xxxtableuser
		WHERE
			tableuserwebtoken = usertoken AND
            tableuserisactive = 1
		LIMIT 1;
    END IF;
	
    IF CHAR_LENGTH(@tableuserindex) <> 15 THEN
		SET @resultstatus = false;
		SET @resultcode = 'xxx005010015';
		SET @resulterrormessage = "xxx005010015 user is not found";
	
        LEAVE BlockTRANSACTION;
    END IF;
   
	SET @resultuserlanguage = @tableuserlanguage;
	SET @resultuseremail = @tableuseremail;
	SET @resultuserfullname = @tableuserfullname;
    SET @resultuserdisplayname = @tableuserdisplayname;
    
    END BlockVALIDATION;
    
    BlockSTORETable:BEGIN
    
    UPDATE `xxxtableuser`
	SET
		`tableusername` = usernamenew,
		`tableuserapptoken` = '',
		`tableuserwebtoken` = ''
	WHERE 
		`tableuserindex` = @tableuserindex AND
        tableuserid > 0;

    DELETE FROM `xxxtabletokenlast`
	WHERE 
		tabletokenuserindex = @tableuserindex AND
        tabletokenlastid > 0;
	
    END BlockSTORETable;

    END BlockTRANSACTION;
	COMMIT;
    
    SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
        @resultdescription AS resultdescription,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,        
        @resultuserlanguage AS resultuserlanguage,
        @resultuseremail AS resultuseremail,
        @resultuserfullname AS resultuserfullname,
        @resultuserdisplayname AS resultuserdisplayname;


	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxuserdetailid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxuserdetailid`(IN `tokentrans` VARCHAR(254))
BEGIN
		SELECT 
		tempusername,
		tempuserfullname,
		tempuserdisplayname,
		tempuseremail,
        tempuserphonecountrycode,
		tempuserphonenumbershort,
		tempuserphonenumber,
        tempuserreferredby,
        tempusertokentrans
	FROM 
		xxxtempuser
	WHERE
		tempusertokentrans = tokentrans AND
        tempuserindex = '' AND
        TIMESTAMPDIFF(SECOND, tempuserinserttimestamp, NOW()) < 900;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxuserinsertnew` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxuserinsertnew`(	IN `userreferredby` VARCHAR(20))
BEGIN	
	
	DECLARE resulterrormessage TEXT;

	DECLARE exit handler for sqlexception
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;
		
		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
	
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex;
	END;

	START TRANSACTION;
	BlockTRANSACTION:BEGIN

		SET @resultstatus = true;
		SET @resultcode = 'xxx000000000';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		
		BlockVALIDATION:BEGIN

		END BlockVALIDATION;
	

				SET @tempuserindex= '';
				SET @tempusername= '';
				SET @tempuserfullname= '';
				SET @tempuserdisplayname= '';
				SET @tempuseremail= '';
				SET @phonecountrycode= 62;
				SET @tempusertokentrans = SHA2(CONCAT(
				SHA(RAND()),
				SHA(NOW())
				), 512);


				INSERT INTO `xxxtempuser`
					(`tempuserindex`,
					`tempusername`,
					`tempuserfullname`,
					`tempuserdisplayname`,
					`tempuseremail`,
                    `tempuserphonecountrycode`,
					`tempuserreferredby`,
					`tempusertokentrans`)
				VALUES
					(@tempuserindex,
					@tempusername,
					@tempuserfullname,
					@tempuserdisplayname,
					@tempuseremail,
                    @phonecountrycode,
					userreferredby,
					@tempusertokentrans);    

				SET @resulttokentrans = @tempusertokentrans;

	END BlockTRANSACTION;

	COMMIT;

	SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resultdescription AS resultdescription,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxusernewpassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxusernewpassword`(
	IN `useremailverificationcode` VARCHAR(60),
	IN `userpasswordnew` VARCHAR(60)
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = "";
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex;
	END;	

	START TRANSACTION;
	BlockTRANSACTION:BEGIN

		SET @resultstatus = true;
		SET @resultcode = 'xxx000000000';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		SET @resultemail = '';
		SET @resultnick = '';
	
		SET @tableusername = '';
		SET	@tableuserindex = '';
		SET	@tableuserfullname = '';
		SET	@tableuserinitial = '';
		SET	@tableusercolorback = '';
		SET	@tableusercolorfront = '';
		SET	@tableuserphotourl = '';

		BlockVALIDATION:BEGIN

			SET @tableuserindex= '';

			SELECT
				tableuserindex,
				tableusername,
				tableuseremail,
				tableuserfullname,
				tableuserinitial,
				tableuserphotourl,
				tableusercolorback,
				tableusercolorfront
			INTO	
				@tableuserindex,
				@tableusername,
				@tableuseremail,
				@tableuserfullname,
				@tableuserintial,
				@tableuserphotourl,
				@tableusercolorback,
				@tableusercolorfront				
			FROM
				xxxtableuser
			WHERE
				tableuseremailverificationcode = useremailverificationcode
				AND TIMESTAMPDIFF(HOUR, tableuseremailverificationcodetimestamp, NOW()) <= 24
                AND tableuserisactive = 1;
               
			SET	@tableuserindex = @tableuserindex; 
     		SET @tableusername = @tableusername;
			SET	@tableuserfullname = @tableuserfullname;
			SET	@tableuserinitial = @tableuserintial;
			SET	@tableusercolorback = @tableusercolorback;
			SET	@tableusercolorfront = @tableusercolorfront;
			SET	@tableuserphotourl = @tableuserphotourl;


			SET @resultindex = @tableuserindex;
			SET @resultemail = @tableuseremail;
			SET @resultfullname = @tableuserfullname;

			IF CHAR_LENGTH(@tableuserindex) <> 15 THEN
				SET @resultstatus = false;
				SET @resultcode = 'xxx005010015';
				SET @resulterrormessage = 'xxx005010015 user is not found';
				LEAVE BlockTRANSACTION;
			END IF;

			SET @tablelogindex = @tableuserindex;
			SET @tableloguserindex = @tableuserindex;

		END BlockVALIDATION;

		BlockSTORE:BEGIN

				SET @tableuserpasswordtimestamp = NOW();
				SET @tableuserpassword = SHA2(CONCAT(SHA1(@tableuserindex),SHA1(CONCAT(userpasswordnew,IFNULL(@tableuserpasswordtimestamp, "{SHA1(false) = ?}")))), 512);
                
				UPDATE `xxxtableuser`
				SET
					`tableuserpassword` = @tableuserpassword,
					`tableuserpasswordtimestamp` = @tableuserpasswordtimestamp,
					`tableuseremailisverified` = 1,
					`tableuserissuspended` = 0,
					`tableuseremailverificationcode` = ''
				WHERE 
					`tableuserindex` = @tableuserindex AND
					`tableuserid` > 0;
                    
		END BlockSTORE;

	END BlockTRANSACTION;

	COMMIT;

	SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resultdescription AS resultdescription,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,
		@resultemail AS resultemail,
		@resultfullname AS resultfullname,
		@resultdisplayname AS resultdisplayname,
		@tableusername AS tableusername,
		@tableuserindex AS tableuserindex,
	    @tableuserfullname AS tableuserfullname,
	    @tableuserinitial AS tableuserinitial,
	   	@tableusercolorback AS tableusercolorback,
	    @tableusercolorfront AS tableusercolorfront,
	    @tableuserphotourl AS tableuserphotourl;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxuserprofile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxuserprofile`(IN userindex VARCHAR(15))
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = '';
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex,
			@resultemailverificationcode AS resultemailverificationcode;
	END;

	SELECT
		tableuserindex,
		tableusername,
		tableuserfullname,
		tableuserphotourl,
		tableuserinitial,
		tableuserreferralcode,
		tableuseremail,
		tableuser2fatype,
		tableuserphonecountrycode,
		tableuserphonenumbershort,
		tableuserphonenumber,
		tableuserphonenumberisverified,
		tableuserlanguage,
		tableusercolorback,
		tableusercolorfront
	FROM
		xxxtableuser
	WHERE
			tableuserindex = userindex
		AND tableuserisactive = 1;
     
       
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spxxxuserstore` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE PROCEDURE `spxxxuserstore`(
	IN `usertokentrans` VARCHAR(254),
	IN `userfullname` VARCHAR(100),
	IN `userdisplayname` VARCHAR(5100),
	IN `phonecountrycode` int(11),
	IN `phonenumbershort` bigint(20),    
	IN `username` VARCHAR(20),
	IN `useremail` VARCHAR(320),
	IN `initialusername` VARCHAR(2)    
)
BEGIN
	DECLARE resulterrormessage TEXT;
	
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN		

		GET DIAGNOSTICS CONDITION 1
			resulterrormessage = MESSAGE_TEXT;

		SET @resultstatus = false;
		SET @resultcode = 'xxx999999999';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = usertokentrans;
		SET @resultindex = '';
		SET @resultemailverificationcode = '';
		
		ROLLBACK;

		SELECT
			@resultstatus AS resultstatus,
			@resultcode AS resultcode,
            @resultdescription AS resultdescription,
			@resultdescription AS resultdescription,
			resulterrormessage AS resulterrormessage,
			@resulttokentrans AS resulttokentrans,
			@resultindex AS resultindex,
			@resultemailverificationcode AS resultemailverificationcode;
	END;
    
	START TRANSACTION;    
	BlockTRANSACTION:BEGIN
		SET @resultstatus = true;
		SET @resultcode = 'xxx000000000';
		SET @resultdescription = '';
		SET @resulterrormessage = '';
		SET @resulttokentrans = usertokentrans;
		SET @resultindex = '';
	
		SET @tableusername = username;
		SET	@tableuserindex = '';
		SET	@tableuserfullname = userfullname;
		SET	@tableuserinitial = initialusername;
		SET	@tableusercolorback = '';
		SET	@tableusercolorfront = '';
		SET	@tableuserphotourl = '';
      
        SET @tempuserphonecountrycode = phonecountrycode;
        SET @tempuserphonenumbershort = phonenumbershort;
        SET @tempuserphonenumber = concat(phonecountrycode, phonenumbershort);

		BlockVALIDATION:BEGIN
			SELECT count(*)
			INTO @RowCount
			FROM xxxtempuser
			WHERE 
				tempusertokentrans = usertokentrans
				AND TIMESTAMPDIFF(SECOND, tempuserinserttimestamp, NOW()) < 9000
				AND tempuserindex = '';
				
			IF @RowCount <> 1 THEN
				SET @resultstatus = false;
				SET @resultcode = 'xxx035020015';
				SET @resulterrormessage = ' xxx035020015 tokentrans is not found';
                
				LEAVE BlockTRANSACTION;
			END IF;
		
			SELECT count(*)
			INTO @RowCount
			FROM xxxtablecountryphonecode 
			WHERE tablecountryphonecodephonecode = phonecountrycode;
			
			IF @RowCount <> 1 THEN
				SET @resultstatus = false;
				SET @resultcode = 'xxx025015010';
				SET @resulterrormessage = 'xxx025015010 phone country code is not valid';
                
				LEAVE BlockTRANSACTION;
			END IF;
		
			SELECT count(*)
			INTO @CountUsername
			FROM xxxtableuser
			WHERE 
				tableusername = username
				AND tableuserisactive = 1;
				
			IF @CountUsername > 0 THEN
				SET @resultstatus = false;
				SET @resultcode = 'xxx005015010';
				SET @resulterrormessage = 'xxx005015010 User Name already exists';
			
				LEAVE BlockTRANSACTION;
			END IF;
		
			SELECT count(*) 
			INTO @CountEmail 
			FROM xxxtableuser 
			WHERE 
				tableuseremail = useremail 
				AND tableuserisactive = 1;
				
			IF @CountEmail > 0 THEN
				SET @resultstatus = false;
				SET @resultcode = 'xxx005035010';
				SET @resulterrormessage = 'xxx005035010 email already exists';
                
				LEAVE BlockTRANSACTION;
			END IF;


			BlockVALIDATIONTEMPUPDATE:BEGIN
				UPDATE xxxtempuser
				SET
					tempuserfullname = userfullname,
					tempuserdisplayname = userdisplayname,
					tempusername = username,
					tempuseremail = useremail,
                    tempuserphonecountrycode = @tempuserphonecountrycode,
					tempuserphonenumbershort= @tempuserphonenumbershort,
					tempuserphonenumber = @tempuserphonenumber
				WHERE 
					tempusertokentrans = usertokentrans AND
					tempuserid > 0;

			END BlockVALIDATIONTEMPUPDATE;

			SELECT
				tempuserid,
				tempuserreferredby
			INTO
				@tempuserid,
				@tempuserreferredby
			FROM
				xxxtempuser
			WHERE 
				tempusertokentrans = usertokentrans;
			
		END BlockVALIDATION;

		BlockSTORE:BEGIN
			BlockSTOREINDEX:BEGIN
				SELECT fcxxxindextablegenerate('USER')
				INTO @indextabletemp;
                
				IF CHAR_LENGTH(@indextabletemp) != 15 THEN
					SET @resultstatus = false;
					SET @resultcode = @indextabletemp;
					SET @resulterrormessage = 'error generate index';

					LEAVE BlockTRANSACTION;
				ELSE
					SET @tempuserindex = @indextabletemp;
					SET	@tableuserindex = @indextabletemp;
				END IF;
			
				SELECT 
					tablecolordefaultcolorback, tablecolordefaultcolorfront 
				INTO 
					@tablecolordefaultcolorback, @tablecolordefaultcolorfront 
				FROM 
					xxxtablecolordefault
				ORDER BY RAND()
				LIMIT 1;
			
             	SET	@tableusercolorback = @tablecolordefaultcolorback;
				SET	@tableusercolorfront = @tablecolordefaultcolorfront;
				SET @tempuseremailverificationcode = SHA1(CONCAT('QWERTY', LEFT(UUID(), 8), @tempuserindex, 'mnbvcx'));
				SET @resultemailverificationcode = @tempuseremailverificationcode;
				SET @tempuserreferralcode = CONCAT(UPPER(SUBSTRING(username,1,2)), CONV(1234567890 + @tempuserid, 10, 16));
			END BlockSTOREINDEX;

			BlockSTORETable:BEGIN

				INSERT INTO `xxxtableuser`
					(`tableuserindex`,
					`tableusername`,
                    `tableuserinitial`,
					`tableuserfullname`,
					`tableuserdisplayname`,
					`tableuseremail`,
					`tableuseremailverificationcode`,
					`tableuseremailverificationcodetimestamp`,
					`tableuseremailisverified`,
					`tableuserreferralcode`,
					`tableusercolorback`,
					`tableusercolorfront`,
					tableuserphonecountrycode,
					tableuserphonenumbershort,
					tableuserphonenumber,
					tableuserphonenumbertimestamp,
					tableuserphonenumberisverified,
					tableuserphonenumberisverifiedtimestamp,
					tableuserphoneverificationcode,
					tableuserphoneverificationcodetimestamp,
					tableuserphoneverificationcodeexpiry,
					tableuserphoneverificationcodenext,
					tableuserphonenumberfailedattempt,
					tableuserphonenumberfailedattemptlast,
					`tableuserreferredby`)
				VALUES
					(@tempuserindex,
					username,
                    initialusername,
					userfullname,
					userdisplayname,
					useremail,
					@tempuseremailverificationcode,
					NOW(),
					0,
					@tempuserreferralcode,					
					@tablecolordefaultcolorback,
					@tablecolordefaultcolorfront,
					@tempuserphonecountrycode,					
					@tempuserphonenumbershort,
					@tempuserphonenumber,
					NOW(),
					0,
					NULL,
					'',
					NOW(),
					NOW(),
					NOW(),
					0,
					NOW(),
					@tempuserreferredby);

			END BlockSTORETable;
		END BlockSTORE;

		BlockUpdateAfterSTORE:BEGIN
			UPDATE xxxtempuser
			SET
				tempuserindex = @tempuserindex
			WHERE 
				tempusertokentrans = usertokentrans AND
				tempuserid > 0;

			SET @resultindex = @tempuserindex;
            SET @resultdescription = username;
		END BlockUpdateAfterSTORE;

	END BlockTRANSACTION;

	COMMIT;

	SELECT
		@resultstatus AS resultstatus,
		@resultcode AS resultcode,
		@resultdescription AS resultdescription,
		@resulterrormessage AS resulterrormessage,
		@resulttokentrans AS resulttokentrans,
		@resultindex AS resultindex,
		@resultemailverificationcode AS resultemailverificationcode,
	    @tableusername AS tableusername,
		@tableuserindex AS tableuserindex,
	    @tableuserfullname AS tableuserfullname,
	    @tableuserinitial AS tableuserinitial,
	   	@tableusercolorback AS tableusercolorback,
	    @tableusercolorfront AS tableusercolorfront,
	    @tableuserphotourl AS tableuserphotourl;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-10 11:00:32
