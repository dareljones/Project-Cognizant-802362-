package com.cognizant.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognizant.dao.ProjectRepository;
import com.cognizant.pojo.UserDetailsEntity;

@Service("ProjectService")
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	ProjectRepository dao;

	@Override
	@Transactional
	public UserDetailsEntity getUser(String userName) {
		 return dao.getUser(userName);
	}

	@Override
	public void addUser(UserDetailsEntity user) {
		dao.save(user);
	}


}
