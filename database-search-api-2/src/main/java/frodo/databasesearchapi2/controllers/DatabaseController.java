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


    @PostMapping("/keywords")
    public ResponseEntity<Keywords> createReview(@RequestBody Keywords keyword) {
        try {
            Keywords _keyword = keywordsRepository.save(new Keywords(keyword.getKeyword()));
            return new ResponseEntity<>(_keyword, HttpStatus.CREATED);
        } catch (Exception e) {

        }
        return new ResponseEntity<Keywords>(HttpStatus.OK);
    }

    @GetMapping("/results/{id}")
    public ResponseEntity<Keywords> getResultsById(@PathVariable("id") Integer id, @RequestBody Keywords keyword) {
        Optional<Keywords> reviewData = keywordsRepository.findById(id);
        if (reviewData.isPresent()) {
            return new ResponseEntity<>(reviewData.get(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/topic/all")
    ResponseEntity<List<Results>> getAllResults() {
        List<Results> results = resultsRepository.findAll();
        return new ResponseEntity<List<Results>>(results, HttpStatus.OK);
    }




}