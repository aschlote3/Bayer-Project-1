package frodo.databasesearchapi.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import frodo.databasesearchapi.model.Keywords;


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
