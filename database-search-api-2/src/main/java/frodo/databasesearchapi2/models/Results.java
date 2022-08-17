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
    @Column(name = "pk")
    private Integer pk;
    @Column(name="res_id")
    private String res_id;

    @Column(name="result")
    private String result;

    public Integer getPk() {
        return pk;
    }

    public void setPk(Integer pk) {
        this.pk = pk;
    }

    public Results() {
    }

    public Results(Integer pk, String res_id, String result) {
        this.pk = pk;
        this.res_id = res_id;
        this.result = result;
    }

    public String getResultsId() {
        return res_id;
    }


    public void setResultsId(String res_id) {
        this.res_id = res_id;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
