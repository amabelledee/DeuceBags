CREATE DATABASE [IF NOT EXISTS] diary;
USE diary;
CREATE TABLE [IF NOT EXISTS] post(
id INT AUTO_INCREMENT,
name STRING,
body TEXT,
PRIMARY KEY (id)
) ENGINE=INNODB