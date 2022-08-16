package frodo.databasesearchapi2.repositories;

import frodo.databasesearchapi2.models.Results;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultsRepository extends JpaRepository<Results, Integer> {
}
