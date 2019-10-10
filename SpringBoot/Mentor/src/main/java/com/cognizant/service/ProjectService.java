package com.cognizant.service;
import com.cognizant.pojo.UserDetailsEntity;;

public interface ProjectService {
	public UserDetailsEntity getUser(String userName);
	public void addUser(UserDetailsEntity user);

}