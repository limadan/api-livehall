create database LiveHall;
use LiveHall;

create table usuario(
    Id_user int primary key auto_increment,
    nome varchar(30) not null,
    username varchar(30) not null,
    senha varchar(30) not null,
    email varchar(30) not null,
    sexo varchar(20) not null
);

create table redes_sociais(
    id_redeSocial int,
    Id_user int,
    Nome_rede varchar (200),
    link_redeSocial varchar(50),
    primary key (Id_user,id_redeSocial),
    foreign key (ID_user) references usuario (Id_user)
);


create table streamer(
    id_streamer int auto_increment ,
    link_canal varchar(50),
    id_redeSocial int,
    primary key (id_streamer) references usuario (Id_user),
    foreign key (Id_user,id_redeSocial) references redes_sociais (Id_user,id_redeSocial)
);

create table streams (
    Id_Conteudo int auto_increment primary key ,
    id_streamer int,
    descricao varchar (250),
    link varchar(50),
    categoria varchar (50),
    qtde int,
    foreign key (id_streamer) references streamer (id_streamer)
);