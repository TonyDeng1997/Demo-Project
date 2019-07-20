package titanic.repository;

import javax.transaction.Transactional;

/*@author feifei*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import titanic.model.GenderSubmission;
import titanic.model.Test;






public interface TestRepository extends JpaRepository<Test, Long> {
	@Transactional
	@Modifying
	@Query(value ="update train u set u.pclass = :pclass, u.name =:name, u.sex=:sex,u.age=:age,u.sibsp=:sibsp, u.parch=:parch, u.ticket=:ticket,u.fare=:fare,u.cabin=:cabin, u.embarked=:embarked where u.passenger_id = :passengerId", nativeQuery = true)
	int updateTest(@Param("passengerId")long passengerId, @Param("pclass")int pclass,
			 @Param("name")	String name	,@Param("sex")	String sex,@Param("age") Double age,@Param("sibsp")	int sibsp,
			 @Param("parch") int parch,@Param("ticket")	String ticket,@Param("fare") double fare,@Param("cabin")String cabin,
			 @Param("embarked")	String embarked
			);
}
