package titanic.repository;

import javax.transaction.Transactional;

/*@author Tony Deng*/
/*A demo Project for EZOPS Interview*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import titanic.model.GenderSubmission;





public interface GenderSubmissionRepository extends JpaRepository<GenderSubmission, Long> {
	
	
	@Transactional
	@Modifying
	@Query(value ="update train u set u.survived=:survived where u.passenger_id = :passengerId", nativeQuery = true)
	int updateGender(@Param("passengerId")long passengerId, @Param("survived")int survived);
}
