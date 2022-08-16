create table keywords (
    key_id int not null,
    keyword varchar(255) default '',
    primary key (key_id)
);

create table results (
    res_id int not null,
    result varchar(255) default '',
    key_id int not null,
    primary key (res_id),
    foreign key (key_id) keywords(key_id)
 )
