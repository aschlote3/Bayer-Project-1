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
        List<Keywords> _keyword = keywordsRepository.findAll();
        List<String> output = new ArrayList<>();
        System.out.println(_keyword.size());
        for (Keywords key : _keyword) {
            output.add(key.getKeyword());
        }
        if (output.contains(keyword.getKeyword())) {
            return null;
        } else {
            return keywordsRepository.save(new Keywords(keyword.getKeyword()));
        }
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
            return new ResponseEntity<>(output,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(output, HttpStatus.OK);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/topic/all")
    public ResponseEntity<List<Results>> getAllReviews(@RequestParam(required = false) String productDescription) {
            List<Results> _results = new ArrayList<Results>();
            resultsRepository.findAll().forEach(_results::add);
            if (_results.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(_results, HttpStatus.OK);
        }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/keywords/all")
    public ResponseEntity<List<Keywords>> getAllKeywords() {
        List<Keywords> _keywords = new ArrayList<Keywords>();
        keywordsRepository.findAll().forEach(_keywords::add);
        if (_keywords.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(_keywords, HttpStatus.OK);
    }

    }




