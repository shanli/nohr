/*
SQLyog Enterprise - MySQL GUI v8.1 
MySQL - 5.0.45-community-nt-log : Database - nohr
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`nohr` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `nohr`;

/*Table structure for table `experiences` */

DROP TABLE IF EXISTS `experiences`;

CREATE TABLE `experiences` (
  `eid` int(11) NOT NULL auto_increment,
  `wid` int(11) NOT NULL,
  `ctime` datetime NOT NULL,
  `company` varchar(50) NOT NULL,
  `wtime` int(11) NOT NULL,
  `wbegin` datetime NOT NULL,
  `wend` datetime NOT NULL,
  `wcontent` varchar(1000) default NULL,
  `wpostion` varchar(20) default NULL,
  `ext1` varchar(20) default NULL,
  `ext2` varchar(20) default NULL,
  `ext3` varchar(20) default NULL,
  PRIMARY KEY  (`eid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `experiences` */

/*Table structure for table `job` */

DROP TABLE IF EXISTS `job`;

CREATE TABLE `job` (
  `jid` int(11) NOT NULL auto_increment,
  `jname` varchar(50) NOT NULL,
  `jdesc` varchar(1024) NOT NULL,
  `requirement` text NOT NULL,
  `number` int(11) NOT NULL,
  `workplace` varchar(50) NOT NULL,
  `uid` int(11) NOT NULL,
  `company` varchar(40) NOT NULL,
  `ctime` datetime NOT NULL,
  `refreshtime` datetime NOT NULL,
  `work_year` varchar(2) NOT NULL,
  `study_type` char(1) NOT NULL,
  `jstatus` int(11) NOT NULL,
  PRIMARY KEY  (`jid`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

/*Data for the table `job` */

insert  into `job`(jid,jname,jdesc,requirement,number,workplace,uid,company,ctime,refreshtime,work_year,study_type,jstatus) values (2,'前端工程师','前端工程师描述1','前端工程师职位要求1',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(3,'前端工程师','前端工程师描述2','前端工程师职位要求2',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(4,'前端工程师','前端工程师描述3','前端工程师职位要求3',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(5,'前端工程师','前端工程师描述4','前端工程师职位要求4',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(6,'前端工程师','前端工程师描述5','前端工程师职位要求5',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(7,'前端工程师','前端工程师描述6','前端工程师职位要求6',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(8,'前端工程师','前端工程师描述7','前端工程师职位要求7',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(9,'前端工程师','前端工程师描述8','前端工程师职位要求8',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(10,'前端工程师','前端工程师描述9','前端工程师职位要求9',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(11,'前端工程师','前端工程师描述10','前端工程师职位要求10',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(12,'前端工程师','前端工程师描述11','前端工程师职位要求11',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(13,'前端工程师','前端工程师描述12','前端工程师职位要求12',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(14,'前端工程师','前端工程师描述13','前端工程师职位要求13',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(15,'前端工程师','前端工程师描述14','前端工程师职位要求14',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(16,'前端工程师','前端工程师描述15','前端工程师职位要求15',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(17,'前端工程师','前端工程师描述16','前端工程师职位要求16',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(18,'前端工程师','前端工程师描述17','前端工程师职位要求17',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(19,'前端工程师','前端工程师描述18','前端工程师职位要求18',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(20,'前端工程师','前端工程师描述19','前端工程师职位要求19',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(21,'前端工程师','前端工程师描述20','前端工程师职位要求20',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(22,'前端工程师','前端工程师描述21','前端工程师职位要求21',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(23,'前端工程师','前端工程师描述22','前端工程师职位要求22',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(24,'前端工程师','前端工程师描述23','前端工程师职位要求23',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(25,'前端工程师','前端工程师描述24','前端工程师职位要求24',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(26,'前端工程师','前端工程师描述25','前端工程师职位要求25',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(27,'前端工程师','前端工程师描述26','前端工程师职位要求26',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(28,'前端工程师','前端工程师描述27','前端工程师职位要求27',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(29,'前端工程师','前端工程师描述28','前端工程师职位要求28',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(30,'前端工程师','前端工程师描述29','前端工程师职位要求29',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1),(31,'前端工程师','前端工程师描述30','前端工程师职位要求30',2,'北京',1,'公司一','2012-11-04 13:26:59','0000-00-00 00:00:00','1','1',1);

/*Table structure for table `message` */

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `muid` int(11) NOT NULL auto_increment,
  `fromuid` int(11) NOT NULL,
  `touid` int(11) NOT NULL,
  `content` text NOT NULL,
  `ctime` datetime NOT NULL,
  `readtime` datetime NOT NULL,
  `parentid` int(11) default NULL,
  `mstatus` char(1) NOT NULL,
  PRIMARY KEY  (`muid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `message` */

/*Table structure for table `skills` */

DROP TABLE IF EXISTS `skills`;

CREATE TABLE `skills` (
  `sid` int(11) NOT NULL auto_increment,
  `wid` int(11) NOT NULL,
  `content` varchar(100) NOT NULL,
  `ctime` datetime NOT NULL,
  PRIMARY KEY  (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `skills` */

/*Table structure for table `study` */

DROP TABLE IF EXISTS `study`;

CREATE TABLE `study` (
  `sid` int(11) NOT NULL auto_increment,
  `wid` int(11) NOT NULL,
  `schoolname` varchar(50) NOT NULL,
  `sdegree` varchar(20) NOT NULL,
  `major` varchar(50) NOT NULL,
  `sbegin` datetime NOT NULL,
  `send` datetime NOT NULL,
  PRIMARY KEY  (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `study` */

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `uid` int(11) NOT NULL auto_increment,
  `username` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `regtime` datetime NOT NULL,
  `logintime` datetime NOT NULL,
  `realname` varchar(20) NOT NULL,
  `sex` char(1) NOT NULL default '1',
  `birthday` datetime default NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `work_year` int(11) NOT NULL,
  `higher_degree` char(1) default NULL,
  `utype` int(11) NOT NULL,
  `ext1` varchar(10) default NULL,
  `ext2` varchar(10) default NULL,
  `ext3` varchar(10) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(uid,username,password,regtime,logintime,realname,sex,birthday,email,phone,work_year,higher_degree,utype,ext1,ext2,ext3) values (1,'宝贝疙瘩','111','2011-01-01 00:00:00','0000-00-00 00:00:00','王晓翠','2','1987-01-26 00:00:00','wxcui@163.com','15910880826',3,'3',1,NULL,NULL,NULL),(2,'gaochongid','111','2011-01-01 00:00:00','0000-00-00 00:00:00','高崇','1','1985-12-26 00:00:00','gaochongid@163.com','15901421374',4,'3',2,NULL,NULL,NULL);

/*Table structure for table `worker` */

DROP TABLE IF EXISTS `worker`;

CREATE TABLE `worker` (
  `wid` int(11) NOT NULL auto_increment,
  `wantposition` varchar(40) NOT NULL,
  `worktime` datetime NOT NULL,
  `wantplace` varchar(40) NOT NULL,
  `refreshtime` datetime NOT NULL,
  `ctime` datetime NOT NULL,
  `enabled` char(1) NOT NULL,
  `uid` int(11) NOT NULL,
  PRIMARY KEY  (`wid`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

/*Data for the table `worker` */

insert  into `worker`(wid,wantposition,worktime,wantplace,refreshtime,ctime,enabled,uid) values (2,'软件开发工程师1','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(3,'软件开发工程师2','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(4,'软件开发工程师3','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(5,'软件开发工程师4','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(6,'软件开发工程师5','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(7,'软件开发工程师6','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(8,'软件开发工程师7','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(9,'软件开发工程师8','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(10,'软件开发工程师9','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(11,'软件开发工程师10','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(12,'软件开发工程师11','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(13,'软件开发工程师12','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(14,'软件开发工程师13','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(15,'软件开发工程师14','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(16,'软件开发工程师15','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(17,'软件开发工程师16','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(18,'软件开发工程师17','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(19,'软件开发工程师18','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(20,'软件开发工程师19','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(21,'软件开发工程师20','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(22,'软件开发工程师21','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(23,'软件开发工程师22','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(24,'软件开发工程师23','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(25,'软件开发工程师24','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(26,'软件开发工程师25','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(27,'软件开发工程师26','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(28,'软件开发工程师27','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(29,'软件开发工程师28','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(30,'软件开发工程师29','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2),(31,'软件开发工程师30','0000-00-00 00:00:00','北京','2012-11-04 13:26:59','2012-11-04 13:26:59','1',2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
