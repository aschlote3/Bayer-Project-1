package frodo.databasesearchapi2.models;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import frodo.databasesearchapi2.models.Keywords;


@Data
@Entity
@Table(name="results")
@Getter
@Setter
public class Results {


    @Id
    @Column(name="res_id")
    private Integer res_id;

    @Column(name="result")
    private String result;

    @Column(name="key_id")
    private Integer key_id;


    public Results() {
    }

    public Results(Integer res_id, String result, Integer key_id) {
        this.res_id = res_id;
        this.result = result;
        this.key_id = key_id;
    }

    public Integer getResultsId() {
        return res_id;
    }


    public void setResultsId(Integer res_id) {
        this.res_id = res_id;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
