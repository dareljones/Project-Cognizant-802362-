package com.cognizant.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="user_details")
public class UserDetailsEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="user_id")
	private Integer userId;
	@Column(name="user_name")
	private String userName;
	@Column(name="user_email")
	private String userEmail;
	@Column(name="user_password")
	private String userPassword;
	@Column(name="user_education")
	private String userEducation;
	public String getUserEducation() {
		return userEducation;
	}

	public void setUserEducation(String userEducation) {
		this.userEducation = userEducation;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Column(name="role")
	private String role;
	@Column(name="status")
	private String status;
	

	
	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public UserDetailsEntity() {
		super();
	}

	public UserDetailsEntity(String userName, String userEmail, String userEducation) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userEducation = userEducation;
	}



	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPhone() {
		return userEducation;
	}

	public void setUserPhone(String userPhone) {
		this.userEducation = userPhone;
	}

}
