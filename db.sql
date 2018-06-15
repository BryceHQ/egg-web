use test;
Drop TABLE `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `password` char(100) NOT NULL,
  `email` char(50) NULL,
  `phone` char(50) NULL,
  `token` char(50) NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;

Drop TABLE `role`;
CREATE TABLE `role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `code` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;

-- Drop TABLE `user_role`;
CREATE TABLE `test`.`user_role` (
  `uid` INT UNSIGNED NOT NULL,
  `roleId` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`uid`, `roleId`)
);

Drop TABLE `menu`;
CREATE TABLE `menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(50) NOT NULL,
  `code` char(50) NOT NULL,
  `url` char(100) NOT NULL,
  `icon` char(100) NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;

insert user(name, password, create_time, update_time)
values('bryce', '$2a$10$X88VUHHAc6G0qIKw675aquuZNw3udy/BN5IvhqGjfQGpB4iCwmGqm', now(), now())
