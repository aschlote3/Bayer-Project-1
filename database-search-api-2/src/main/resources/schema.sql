drop table if exists keywords;
drop table if exists results;

CREATE TABLE keywords (
    key_id INT NOT NULL,
    keyword VARCHAR(255)
);

CREATE TABLE results (
    pk INT NOT NULL,
    res_id VARCHAR(255) NOT NULL,
    result VARCHAR(255) DEFAULT ''

);