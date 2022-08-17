package frodo.databasesearchapi2.controllers;



import frodo.databasesearchapi2.models.Keywords;
import frodo.databasesearchapi2.models.Results;
import frodo.databasesearchapi2.repositories.KeywordsRepository;
import frodo.databasesearchapi2.repositories.ResultsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/")
public class DatabaseController {
    @Autowired
    KeywordsRepository keywordsRepository;

    @Autowired
    ResultsRepository resultsRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/keywords")
    public Keywords createReview(@RequestBody Keywords keyword) {
        System.out.println(keyword);
        System.out.println(keyword.getKeywordId());
        System.out.println(keyword.getKeyword());
        return keywordsRepository.save(new Keywords(keyword.getKeyword()));
        //return new ResponseEntity<Keywords>(HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/topic/{id}")
    public ResponseEntity<List<Results>> getResultsById(@PathVariable("id") String id) {
        List<Results> _result = resultsRepository.findAll();
        System.out.println(_result);
        List<Results> output = new ArrayList<>();
        for (Results result : _result) {
            if (result.getRes_id().equals(id)) {
                output.add(result);
            } else {
                continue;
            }
        }
        if (output.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(output, HttpStatus.OK);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/topic/all")
    ResponseEntity<List<Results>> getAllResults() {
        List<Results> results = resultsRepository.findAll();
        return new ResponseEntity<List<Results>>(results, HttpStatus.OK);
    }




}