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
    @Column(name="result")
    private String result;

    public Keywords() {
    }

    public Keywords(Integer key_id, String result) {
        this.key_id = key_id;
        this.result = result;
    }

    public Keywords(String result) {
        this.result = result;
    }

    public Integer getKeywordId() {
        return key_id;
    }


    public void setKeywordId(Integer key_id) {
        this.key_id = key_id;
    }

    public String getKeyword() {
        return result;
    }

    public void setKeyword(String result) {
        this.result = result;
    }
}