package titanic.model;

import javax.persistence.*;

import io.micrometer.core.lang.Nullable;

/*@author feifei
 * 
 * client is the object to store company client's info.
 * 
 * */

@Entity
@Table(name = "gender_submission")
public class GenderSubmission {
	
	
	@Id
	private long passengerId;
	
	@Nullable
	private int survived;

	public long getPassengerId() {
		return passengerId;
	}
	
	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
	}

	public int getSurvived() {
		return survived;
	}

	public void setSurvived(int survived) {
		this.survived = survived;
	}


	
	









	

}
