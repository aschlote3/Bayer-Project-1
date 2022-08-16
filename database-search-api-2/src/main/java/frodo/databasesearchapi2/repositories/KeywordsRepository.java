package frodo.databasesearchapi2.repositories;


import frodo.databasesearchapi2.models.Keywords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeywordsRepository extends JpaRepository<Keywords, String> {
}
