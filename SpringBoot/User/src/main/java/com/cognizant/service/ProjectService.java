package com.cognizant.service;
import java.util.List;

import com.cognizant.pojo.UserDetailsEntity;;

public interface ProjectService {
	public UserDetailsEntity getUser(String userName);
	public void addUser(UserDetailsEntity user);
	public List<UserDetailsEntity> getAllUsers(String role);
	public void blockUser(String userName);

}