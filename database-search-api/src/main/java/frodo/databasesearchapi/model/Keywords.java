package frodo.databasesearchapi.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import frodo.databasesearchapi.model.Keywords;

@Data
@Entity
@Table(name="keywords")
public class Keywords {

    @Id
    @Column(name="key_id")
    private Integer key_id;
    @Column(name="keyword")
    private String keyword;


    public Integer getKeywordId() {
        return key_id;
    }

    public void setKeywordId(Integer key_id) {
        this.key_id = key_id;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
