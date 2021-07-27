create database sbgl

use sbgl

CREATE TABLE `sb` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `sid` VARCHAR(10) DEFAULT NULL,
  `sname` varchar(255) DEFAULT NULL,
  `ssj` int(255) DEFAULT NULL,
  `smy` int(255) DEFAULT NULL,
  `szt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

show TABLE sb

INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (1, 401, '吹风机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (2, 402, '吹风机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (3, 403, '吹风机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (4, 404, '吹风机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (5, 405, '吹风机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (6, 401, '洗衣机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (7, 402, '洗衣机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (8, 403, '洗衣机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (9, 404, '洗衣机', 45, 50, '可用');
INSERT INTO `sb`(`id`, `sid`, `sname`, `ssj`, `smy`, `szt`) VALUES (10, 405, '洗衣机', 45, 50, '可用');



-- 
-- drop table sb
-- 