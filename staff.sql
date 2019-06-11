/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : staff

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2019-06-11 11:12:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for journal
-- ----------------------------
DROP TABLE IF EXISTS `journal`;
CREATE TABLE `journal` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工作日志ID',
  `detail` text NOT NULL COMMENT '工作日志内容',
  `type` int(11) NOT NULL COMMENT '工作日志类型',
  `time` varchar(255) NOT NULL COMMENT '工作日志提交时间',
  `user` int(11) NOT NULL COMMENT '工作日志提交用户',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '工作日志状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of journal
-- ----------------------------
INSERT INTO `journal` VALUES ('1', '<p>测试</p>', '0', '2019-05-16', '2', '0');

-- ----------------------------
-- Table structure for month
-- ----------------------------
DROP TABLE IF EXISTS `month`;
CREATE TABLE `month` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工作日志ID',
  `detail` text NOT NULL COMMENT '工作日志内容',
  `type` int(11) NOT NULL COMMENT '工作日志类型',
  `time` varchar(255) NOT NULL COMMENT '工作日志提交时间',
  `user` int(11) NOT NULL COMMENT '工作日志提交用户',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '工作日志状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of month
-- ----------------------------

-- ----------------------------
-- Table structure for port
-- ----------------------------
DROP TABLE IF EXISTS `port`;
CREATE TABLE `port` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '部门编号',
  `name` varchar(255) NOT NULL COMMENT '部门名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of port
-- ----------------------------
INSERT INTO `port` VALUES ('1', '测试');

-- ----------------------------
-- Table structure for season
-- ----------------------------
DROP TABLE IF EXISTS `season`;
CREATE TABLE `season` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工作日志ID',
  `detail` text NOT NULL COMMENT '工作日志内容',
  `type` int(11) NOT NULL COMMENT '工作日志类型',
  `time` varchar(255) NOT NULL COMMENT '工作日志提交时间',
  `user` int(11) NOT NULL COMMENT '工作日志提交用户',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '工作日志状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of season
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `account` varchar(255) NOT NULL COMMENT '用户账号',
  `pwd` varchar(255) NOT NULL COMMENT '用户密码',
  `name` varchar(255) NOT NULL COMMENT '用户姓名',
  `power` int(11) DEFAULT '2' COMMENT '用户权限',
  `sex` varchar(255) DEFAULT NULL COMMENT '用户性别',
  `birthday` varchar(255) DEFAULT NULL COMMENT '出生日期',
  `age` varchar(255) DEFAULT NULL COMMENT '用户年龄',
  `idcard` varchar(255) DEFAULT NULL COMMENT '身份证号',
  `addr` varchar(255) DEFAULT NULL COMMENT '联系地址',
  `port` int(11) DEFAULT NULL COMMENT '所在部门',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'YWRtaW4=', '超级管理员', '0', null, null, null, null, null, '0');
INSERT INTO `user` VALUES ('2', '17805982334', 'MTIzNDU2', '黄胜利', '2', '男', '2019-05-16', '0', '350583199611158931', '闽江学院', '1');
INSERT INTO `user` VALUES ('3', '17805982335', 'MTIzNDU2', '组长啊', '1', '男', '2019-05-09', '0', '350589199611158931', '闽江学院', '1');
INSERT INTO `user` VALUES ('4', '17805982336', 'MTIzNDU2', '好牛逼', '3', '男', '2019-05-07', '0', '222', '闽江学院', '1');
INSERT INTO `user` VALUES ('5', '15659076505', 'MTIzNDU2', '黄胜利', '3', '男', '2019-05-07', '0', '350583199611158931', '闽江学院', '1');

-- ----------------------------
-- Table structure for week
-- ----------------------------
DROP TABLE IF EXISTS `week`;
CREATE TABLE `week` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工作日志ID',
  `detail` text NOT NULL COMMENT '工作日志内容',
  `type` int(11) NOT NULL COMMENT '工作日志类型',
  `time` varchar(255) NOT NULL COMMENT '工作日志提交时间',
  `user` int(11) NOT NULL COMMENT '工作日志提交用户',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '工作日志状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of week
-- ----------------------------

-- ----------------------------
-- Table structure for year
-- ----------------------------
DROP TABLE IF EXISTS `year`;
CREATE TABLE `year` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工作日志ID',
  `detail` text NOT NULL COMMENT '工作日志内容',
  `type` int(11) NOT NULL COMMENT '工作日志类型',
  `time` varchar(255) NOT NULL COMMENT '工作日志提交时间',
  `user` int(11) NOT NULL COMMENT '工作日志提交用户',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '工作日志状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of year
-- ----------------------------
