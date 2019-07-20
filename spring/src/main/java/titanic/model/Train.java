package titanic.model;

import javax.persistence.*;

import io.micrometer.core.lang.Nullable;

/*@author feifei
 * 
 * client is the object to store company client's info.
 * 
 * */

@Entity
@Table(name = "train")
public class Train{
	
	
	@Id
	private long passengerId;
	
	
	@Nullable
	private int pclass;
	@Nullable
	private int survived;

	@Nullable 
	private String Name;
	@Nullable 
	private String Sex;
	@Nullable 
	private double Age;
	@Nullable 
	private int sibsp;
	
	@Nullable 
	private int parch;
	
	@Nullable 
	private String ticket;
	
	@Nullable 
	private double fare;
	
	@Nullable 
	private String Cabin;
	
	@Nullable 
	private String embarked;

	public long getPassengerId() {
		return passengerId;
	}

	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
	}

	public int getPclass() {
		return pclass;
	}

	public void setPclass(int pclass) {
		this.pclass = pclass;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getSex() {
		return Sex;
	}

	public void setSex(String sex) {
		Sex = sex;
	}

	public double getAge() {
		return Age;
	}

	public void setAge(double age) {
		Age = age;
	}

	public int getSibsp() {
		return sibsp;
	}

	public void setSibSp(int sibsp) {
		this.sibsp = sibsp;
	}

	public int getParch() {
		return parch;
	}

	public void setParch(int parch) {
		this.parch = parch;
	}

	public String getTicket() {
		return ticket;
	}

	public void setTicket(String ticket) {
		this.ticket = ticket;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	public String getCabin() {
		return Cabin;
	}

	public void setCabin(String cabin) {
		Cabin = cabin;
	}

	public String getEmbarked() {
		return embarked;
	}

	public void setEmbarked(String embarked) {
		this.embarked = embarked;
	}

	public int getSurvived() {
		return survived;
	}

	public void setSurvived(int survived) {
		this.survived = survived;
	}
	
	
	
	
	

	
	









	

}
