drop table if exists keywords;
drop table if exists results;

CREATE TABLE keywords (
    key_id INT NOT NULL,
    keyword VARCHAR(255)
);

CREATE TABLE results (
    res_id INT NOT NULL,
    result VARCHAR(255) DEFAULT '',
    key_id INT NOT NULL
);