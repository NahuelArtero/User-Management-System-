create database if not exists cm_db_users;

use cm_db_users
;

create table tb_user(
	id_user int not null auto_increment primary key,
    userName varchar(50),
    userLastName varchar (50),
    userEmail varchar (50),
    userDNI numeric (10),
    userPhoto varchar(200)
);


insert into tb_user (userName, userLastName, userEmail, userDNI, userPhoto) values ('userName123','userLastName123', 'userEmail123','123456','userPhoto.png');