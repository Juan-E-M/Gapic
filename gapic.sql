-- MySQL dump 10.13  Distrib 8.1.0, for Linux (x86_64)
--
-- Host: localhost    Database: gapic
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autosurveys`
--

DROP TABLE IF EXISTS `autosurveys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autosurveys` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `autosurveys_user_id_foreign` (`user_id`),
  CONSTRAINT `autosurveys_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autosurveys`
--

LOCK TABLES `autosurveys` WRITE;
/*!40000 ALTER TABLE `autosurveys` DISABLE KEYS */;
/*!40000 ALTER TABLE `autosurveys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2013_11_26_121523_create_roles_table',1),(2,'2014_10_12_000000_create_users_table',1),(3,'2014_10_12_100000_create_password_resets_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2023_11_26_131037_create_role_user_table',1),(7,'2023_11_26_172256_create_questions_table',2),(8,'2023_11_26_172318_create_autosurveys_table',2),(9,'2023_11_26_172334_create_question_autosurvey_table',2),(10,'2023_11_26_172319_create_autosurveys_table',3),(11,'2023_11_26_172335_create_question_autosurvey_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_autosurvey`
--

DROP TABLE IF EXISTS `question_autosurvey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_autosurvey` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `answer` tinyint(1) NOT NULL,
  `autosurvey_id` bigint unsigned DEFAULT NULL,
  `question_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_autosurvey_autosurvey_id_foreign` (`autosurvey_id`),
  KEY `question_autosurvey_question_id_foreign` (`question_id`),
  CONSTRAINT `question_autosurvey_autosurvey_id_foreign` FOREIGN KEY (`autosurvey_id`) REFERENCES `autosurveys` (`id`) ON DELETE CASCADE,
  CONSTRAINT `question_autosurvey_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=361 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_autosurvey`
--

LOCK TABLES `question_autosurvey` WRITE;
/*!40000 ALTER TABLE `question_autosurvey` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_autosurvey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `correct_answer` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'La convocatoria tiene dos partes: una que considera el diseño de bases y otra la publicación de las bases',NULL,NULL,1),(2,'La postulación considera el análisis de las bases, una formulación técnica y una formulación financiera',NULL,NULL,1),(3,'Si un proyecto de I+D+i+e no cumple con elegibilidad, igual puede ser evaluado y ser seleccionado',NULL,NULL,0),(4,'El canon y sobre canon en las universidades corresponde al 20% de lo que recibe el gobierno regional',NULL,NULL,1),(5,'El canon y sobre canon en las universidades, solo puede ser empleado en investigación dentro y fuera de la región donde se ubica la universidad pública',NULL,NULL,0),(6,'Las universidades de Lima y de gestión privada reciben canon y sobre canon para investigación',NULL,NULL,0),(7,'Son diez las Área de Conocimiento OCDE en las que se puede dar una línea de investigación',NULL,NULL,0),(8,'Las Bases del Fondo Concursable son el documento oficial del concurso que reglamenta el propósito, requisitos y condiciones de postulación, los criterios de evaluación, el proceso de evaluación y selección de las propuestas presentadas. Establece los compromisos de los que resultaran seleccionados. Es el documento principal y de cumplimiento obligatorio que regula el desarrollo del concurso y el proceso posterior',NULL,NULL,1),(9,'Las bases Integradas son el documento que se genera como consecuencia de las consultas y absolución de las mismas que se consideran relevantes para el cumplimiento del objetivo de la presente convocatoria. Las Bases integradas son definitivas y se publican en el portal institucional de UNIVERSIDAD.',NULL,NULL,1),(10,'Consultorías, son los servicios profesionales altamente calificados que realiza una persona natural o jurídica para la elaboración de estudios y proyectos; en la inspección de fábrica, peritajes de equipos, bienes y maquinarias; en investigaciones, auditorías, asesorías, estudios de prefactibilidad y de factibilidad técnica, económica y financiera, estudios básicos, preliminares y definitivos, asesoramiento en la ejecución de proyectos y en la elaboración de términos de referencia, especificaciones técnicas y Bases de distintos procesos de selección, entre otros.',NULL,NULL,1),(11,'CRL (Commercial Readiness Level) significa Nivel de madurez comercial y son de 1 a 9',NULL,NULL,1),(12,'El CRL9 considera el despliegue generalizado de la comercialización',NULL,NULL,1),(13,'Desarrollo Experimental, es un trabajo sistemático que aprovechan los conocimientos existentes obtenidos de la investigación y/o la experiencia práctica, y está dirigido a la producción de nuevos materiales, productos o dispositivos; a la puesta en marcha de nuevos procesos; sistemas y servicios, o a la mejora sustancial de los ya existentes.',NULL,NULL,1),(14,'Las Especificaciones Técnicas (ET), son una descripción elaborada por la Entidad de las características fundamentales de los bienes a ser contratados y de las condiciones en que se ejecutará la prestación. Puede incluir la descripción de los procesos y métodos de producción de los mismos.',NULL,NULL,1),(15,'La Filiación Institucional, es la identificación no clara de la institución a la cual pertenece el autor, con la que se vincula y que actúa como respaldo institucional de su producción científica.',NULL,NULL,0),(16,'Hito es el momento puntual e importante en el desarrollo del proyecto de Investigación. Tiempo para medir los resultados que se van obteniendo en base al POP aprobado.',NULL,NULL,1),(17,'Un Informe Final de Resultados (IFR) es un Documento que tiene la información técnica y financiera de un proyecto específico elaborado el responsable del mismo.',NULL,NULL,1),(18,'Innovación es la introducción exitosa, en el mercado o en la sociedad, de un nuevo o significativamente mejorado producto (bien o servicio), proceso, método de comercialización o método organizativo en las prácticas internas o externas de una organización.',NULL,NULL,1),(19,'Investigación Aplicada es la generación o ampliación de conocimientos con vistas a utilizarlos en el desarrollo de productos o procesos nuevos o para suscitar mejoras importantes de productos o procesos existentes..',NULL,NULL,1),(20,'El Objetivo de Desarrollo Sostenible (ODS) lo adoptaron por todos los Estados Miembros de las Naciones Unidas en el 2015 como un llamado universal para poner fin a la pobreza, proteger el planeta y garantizar que todas las personas gocen de paz y prosperidad para 2030. Los 25 ODS están integrados, ya que reconocen que las intervenciones en un área afectarán los resultados de otras y que el desarrollo debe equilibrar la sostenibilidad medio ambiental, económica y social.',NULL,NULL,0),(21,'La Metodología es un conjunto de procedimientos racionales utilizados para alcanzar una gama de objetivos que rigen en una investigación científica, una exposición doctrinal o tareas que requieran habilidades, conocimientos o cuidados específicos',NULL,NULL,1),(22,'La Norma Técnica es Documento aprobado por una institución reconocida, que prevé, para un uso común y repetido, reglas, directrices o características para los productos o los procesos y métodos de producción conexos, y cuya observancia no es obligatoria. También puede incluir prescripciones en materia de terminología, símbolos, embalaje, marcado o etiquetado aplicables a un producto, proceso o método de producción, o tratar exclusivamente de ellas',NULL,NULL,1),(23,'Una Patente es un Título que otorga el Estado – a un titular – para ejercer el derecho exclusivo de comercializar un invento o invención  durante un periodo de vigencia determinado y en un territorio específico.',NULL,NULL,1),(24,'El Plan Operativo del Proyecto (POP) es un documento de gestión técnica y económica de un proyecto específico, contiene el cronograma de actividades, productos entregables por hitos, y el presupuesto de actividades que se desarrollarán durante la ejecución del proyecto o actividad de investigación. Detalla las metas físicas por actividades, por cada objetivo específico y los indicadores del proyecto o actividad de investigación.El POP aprobado es requisito obligatorio para la continuidad de las actividades',NULL,NULL,1),(25,'Un Prototipo es un modelo original construido a menor escala que representa un producto, proceso, servicio o tecnología, sobre el cual se harán una serie de pruebas que buscarán reproducir todas las situaciones de su uso cotidiano. Los resultados obtenidos son analizados y sirven como base para establecer mejoras pero no pueden ser generalizados. Sin embargo pueden servir de base para las etapas de escalamiento y comercialización, y para la investigación y desarrollo de otras versiones de la misma naturaleza',NULL,NULL,1),(26,'Un requerimiento es una solicitud del bien o servicio formulada por el área usuaria. El documento de requerimiento contiene la finalidad pública y los términos de referencia y/o especificaciones técnicas que servirán para fijar las reglas del proceso de selección de contratistas.',NULL,NULL,1),(27,'Seleccionado es un Proyecto que cumple con todos los requerimientos de aprobación en postulación y tiene resolución Vicerrectoral con dicha mención.',NULL,NULL,1),(28,'Servicio en general es la actividad o labor que realiza una persona natural o jurídica para atender una necesidad de la Entidad, pudiendo estar sujeta a resultados para considerar terminadas sus prestaciones.',NULL,NULL,1),(29,'El soporte técnico es un grupo de servicios que proveen asistencia técnica para hardware, software u otros bienes electrónicos o mecánicos, ayudando al usuario a resolver cualquier tipo de problema que surja en el uso del mismo.',NULL,NULL,1),(30,'Transferible y/o reproducible es quello que debe tener la posibilidad de transferir los nuevos conocimientos generados, sean positivos o negativos, garantizando su uso y permitiendo que otros investigadores los reproduzcan como parte de sus actividades de I+D. Los resultados de un proyecto de I+D no pueden ser tácitos, por lo que parte de la práctica es divulgar el conocimiento a través de revistas científicas indizadas en bases de datos y que hayan tenido un proceso de evaluación por pares.',NULL,NULL,1),(31,'Transferencia de Tecnología es un Proceso de transmisión de la información científica, tecnológica, del conocimiento, de los medios y de los derechos de explotación, hacia terceras partes para la producción de un bien, el desarrollo de un proceso o la prestación de un servicio, contribuyendo al desarrollo de sus capacidades.',NULL,NULL,1),(32,'Términos de Referencia (TdR) es la descripción elaborada por la Entidad de las características técnicas y de las condiciones en que se ejecutará la prestación de servicios y de consultoría):',NULL,NULL,1),(33,'TRL (Technology Readiness Levels) significa Nivel de Madurez Tecnológica y va de 1 a 9',NULL,NULL,1),(34,'TRL 9 es el nivel de Tecnología en proceso de implementación o comercialización (emprendimiento).',NULL,NULL,1),(35,'Un asistente de Investigación es un integrante del proyecto de investigación en calidad de estudiante, egresado, con grado profesional, maestría o doctorado que brinda los servicios en aras de contribuir al cumplimiento de los objetivos del proyecto.',NULL,NULL,1),(36,'Área usuaria es la dependencia cuyas necesidades pretenden ser atendidas con determinada contratación, o que, dada su especialidad y funciones, canaliza los requerimientos formulados por otras dependencias.',NULL,NULL,1),(37,'Área técnica es la dependencia de la Entidad especializada en el bien o servicio que es materia de la contratación. En algunos casos, el área técnica puede ser también área usuaria.',NULL,NULL,1),(38,'Coinvestigador puede ser un docente ordinario o contratado, tiene a su cargo el desarrollo de una o más etapas, componentes o actividades del proyecto de investigación, y por consecuencia es responsable de los resultados parciales que le corresponden.',NULL,NULL,1),(39,'Coordinador de Acompañamiento y Monitoreo es un responsable de planificar, dirigir y ejecutar actividades de acompañamiento y monitoreo a través de los monitores.',NULL,NULL,1),(40,'Equipo de Investigación es el grupo humano de trabajo que presenta la propuesta de investigación y que desarrollará actividades específicas dentro del proyecto de investigación.',NULL,NULL,1),(41,'Un Investigador Principal (IP) puede ser un Docente ordinario de la UNIVERSIDAD, con experiencia en el tema del proyecto, es responsable de la ejecución técnica y financiera; así como de la supervisión del proyecto de investigación y de orientar las acciones del equipo de investigación para el logro de resultados conjuntamente con el coinvestigador externo. Es responsable de la presentación de los Informes Técnicos y Financieros (ITFs) y el Informe Final de Resultados (IFR) en los plazos definidos en el Plan Operativo del proyecto y el contrato. Además, el investigador principal debe cautelar que la aplicación del Artículo N°84 de la Ley Universitaria N°30220 y su modificatoria (“La edad máxima para el ejercicio de la docencia en universidad pública es 75 años”) no afecte la ejecución y culminación del proyecto de investigación en el plazo establecido.',NULL,NULL,1),(42,'Un Investigador Invitado (nacional o extranjero) tiene una reconocida trayectoria en investigaciones relacionadas a la temática del proyecto, presentando publicaciones en revistas indizadas y/o propiedades intelectuales, o estar en el registro de RENACYT.',NULL,NULL,1),(43,'Un Tesista pregrado puede ser un egresado o estudiante de pregrado de la UNIVERSIDAD (mínimo de XXX créditos aprobados). Participa en el proyecto desarrollando actividades de investigación. Puede ser conducente a la publicación (como autor/co-autor) de un artículo en revista indizada de Base Scopus, Web of Science, ... cuyo objetivo es la opción tesis formato artículo, formato libro o formato patente de invención, con fines de titulación.',NULL,NULL,1),(44,'Monitor es el responsable del acompañamiento y monitoreo de un proyecto seleccionado, desde el POP hasta el cierre del proyecto.',NULL,NULL,1),(45,'Tesista posgrado es un Estudiante o egresado de posgrado de la UNIVERSIDAD.  Participa en el proyecto desarrollando actividades de investigación. Puede ser conducente a la publicación de artículos en revistas indizadas en Scopus o Web of Science, para obtener el grado de académico de Maestro (___ artículo) o Doctor (___ artículos).',NULL,NULL,1),(46,'Ley Universitaria es la Ley N° 30220',NULL,NULL,1),(47,'Las líneas de invesitgación pueden ser 4: consolidada, por consolidar, emergente y nueva',NULL,NULL,0),(48,'Un investigador puede identificar en sus líneas problemas que: Lo haya vivido, escuchado, visto o leído',NULL,NULL,1),(49,'Los grados académicos no siempre sostienen una línea de investigación',NULL,NULL,0),(50,'Para fomrular una Línea de investigación se socializa  y luego se sensibiliza la participación de las personas',NULL,NULL,1),(51,'Formular es proponer el cumplimiento de lo que se pide en las bases, pues se tienen objetivos y en algunos casos metas.',NULL,NULL,1),(52,'Puede darse el caso que el investigador o parte de su equipo, no tengan el conocimiento de formulación de proyectos a postular, por lo que se sugiere que sea un formulador el que se integre en la misma',NULL,NULL,1),(53,'Formulación Técnica correcta dará siempre una Formulación Financiera correcta',NULL,NULL,1),(54,'El saldo monetario de una partida \"A\" puede pasarse a una partida \"J\" sin problemas',NULL,NULL,0),(55,'No cotizar con precios de promoción es una conducta favorable en la formulacion',NULL,NULL,1),(56,'Siempre se dene tomar en cuenta los costos adicionales: obligatoriedad de publicaciones en EL PERUANO, TUPA de INDECOPI, costos para aranceles SUNAT, Trámites ante Ministerios, … dependerá de las cada proyecto',NULL,NULL,1),(57,'Una Formulación Técnica sincerada correcta  permite una Formulación Financiera correcta',NULL,NULL,1),(58,'El SINCERAMIENTO del POP no disminuye el riesgo de mala gestión',NULL,NULL,0),(59,'La clave es el SINCERAMIENTO, si en el proceso de la universidad, este no se presenta, el equipo completo debería de hacerlo, pues la gestión pública mantiene el éxito en esa revisión y acondicionamiento del proyecto a una realidad mayor, dada por los documentos de origen de la universidad.',NULL,NULL,1),(60,'El POP, al ser conocido por todos, debe de cumplirse, si se dan eventualidades que comprometan los entregables del Hito, o del proyecto, se tiene que informar por escrito al monitor.',NULL,NULL,1),(61,'Si en el POP, se da un requerimiento al día 30 de abril, considere ejecutar ese requerimiento dos o tres meses antes',NULL,NULL,1),(62,'Los encargos internos y reconocimiento de gastos, se dan bajo el sustento técnico, y no necesitan documento de origen de la universidad.',NULL,NULL,0),(63,'Los saldos por partida, deben de ser reconocidos por el monitor y devueltos bajo los procesos que establece la universidad, siempre se tiene que tomar en cuenta los tiempos que dan los documentos de origen para su ejecución.',NULL,NULL,1),(64,'Tenga siempre un registro de la fecha en que hizo el requerimiento, la fecha en que se ejecutó y la fecha de pago al proveedor',NULL,NULL,1),(65,'Los valores de viáticos, son determinados por el MEF, las bases o alguna directiva de la universidad',NULL,NULL,1),(66,'Si la formulación y la ejecución se presentó en forma correcta, entonces, el cierre será eficiente.',NULL,NULL,1),(67,'Considere todas las actas que se tuvo a lo largo del proyecto, haga una línea de tiempo, resaltando en la misma los entregables que se presentaron y las dificultades que se solucionaron',NULL,NULL,1),(68,'En caso que no se tenga completo (cuadrado) las cifras financieras, deberá de solicitar los SIAF a la oficina responsable del mismo',NULL,NULL,1),(69,'A mayor integración de hélice, el tiempo de proyecto es mayor',NULL,NULL,0),(70,'La Producción Intelectual Universitaria (PIU) es el resultado de las decisiones que se toman los Administrativos, Docentes, Estudiantes, Egresados y Vinculantes en relación a la gestión, la formación, la investigación y la transferencia en una universidad',NULL,NULL,1),(71,'Para la formulación técnica, se toma en cuenta productos PIU',NULL,NULL,1),(72,'INVESTIGACIÓN puede ser:  - Básica o fundamental - Aplicada',NULL,NULL,1),(73,'DESARROLLO TECNOLÓGICO permite:- Nuevos productos (bien o servicio) - Nuevos procesos - Mejorar productos (bien o servicio) - Mejorar procesos existentes',NULL,NULL,1),(74,'DESARROLLO EXPERIMENTAL permite:- Producción de nuevos materiales - Producción de nuevos productos o dispositivos - Puesta en marcha de nuevos procesos - Puesta en marcha de nuevos sistemas y servicios - Mejora sustancial de los procesos, sistemas y servicios existentes',NULL,NULL,1),(75,'INNOVACIÓN puede ser: - Innovación de mercadotecnia - Innovación de organización - Innovación de procesos - Innovación de producto',NULL,NULL,1),(76,'EMPRENDEDURISMO puede ser: - Emprendedor potencial - Emprendedor naciente - Emprendedor nuevo - Emprendedor consolidado',NULL,NULL,1),(77,'Se debe tener las especificaciones técnicas y los términos de referencia antes de la postulación, pues esto permitirá un sinceramiento más rápido y con un menor riesgo o margen de error',NULL,NULL,1),(78,'Revisar siempre la ley de contrataciones para que no se tenga inconvenientes',NULL,NULL,1),(79,'Revisar siempre toda la normativa de la universidad, para que el tiempo que se programa el bien o servicio no sea un retraso en la ejecución o desarrollo del proyecto.',NULL,NULL,1),(80,'Cuando los resultados son “no seleccionado”, por lo general le envían la rúbrica de los evaluadores, para que se mejoren las mismas y se pueda volver a postular en la siguiente convocatoria',NULL,NULL,1),(81,'Solicitar las modificaciones siempre se debe de dar con un sustento técnico',NULL,NULL,1),(82,'En ejecución puede darse mas avance técnico que financiero',NULL,NULL,1),(83,'El propósito del POP es el Objetivo general del proyecto',NULL,NULL,1),(84,'Los viajes al extranjero no siempre tenen una publicación de autorización en El Peruano',NULL,NULL,0),(85,'Se puede presentar gastos que no guarden relación con el proyecto',NULL,NULL,0),(86,'Una publicación de artículo, tiene el mismo impacto en la sociedad que una patente que esté en un TRL 9',NULL,NULL,0),(87,'Una vez formulada la postulación, es recomendable que la revise todo el equipo y si puede un experto ajeno al equipo de investigación',NULL,NULL,1),(88,'La evaluación por pares siempre se presenta en toda postulación a fondo concursable',NULL,NULL,0),(89,'Las bases de convocatoria pueden estar por encima de la ley',NULL,NULL,0),(90,'Todas las universidades tiene definidos los ODS en las desean participar por medio de sus líneas de investigación',NULL,NULL,0);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `role_id` bigint unsigned DEFAULT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `role_user_role_id_foreign` (`role_id`),
  KEY `role_user_user_id_foreign` (`user_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` VALUES (1,1,1,NULL,NULL),(2,2,1,NULL,NULL);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Formulador',NULL,NULL),(2,'Gestor',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `work_institution` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `college_institution` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `announcement` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan','Escobar Mendoza','juan@gmail.com','7890779','Mi institución','Universidad','Convocatoria','Proyecto',NULL,'$2y$10$qohMkv9lF40GTQOWmWtd3.lXsqypJV3xzXWDanQyXfc7bG7wZafOK',NULL,'2023-11-26 14:15:53','2023-11-26 14:15:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-27 11:03:33
