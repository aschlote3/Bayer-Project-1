package frodo.databasesearchapi2.models;

import lombok.Data;

import javax.persistence.*;

import frodo.databasesearchapi2.models.Keywords;

@Data
@Entity
@Table(name="keywords")
public class Keywords {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name="key_id")
    private Integer key_id;
    @Column(name="keyword")
    private String keyword;

    public Keywords() {
    }

    public Keywords(String keyword) {
        this.keyword = keyword;
    }

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