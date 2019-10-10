package com.cognizant.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.cognizant.pojo.UserDetailsEntity;

public interface ProjectRepository extends CrudRepository<UserDetailsEntity, Integer> {
	@Query(value="select * from user_details u where u.user_email = ?1 ",nativeQuery = true)
    UserDetailsEntity getUser(String userName);
	
	@Query(value="select * from user_details u where u.status = ?1 ",nativeQuery = true)
    List<UserDetailsEntity> getUsers(String role);

	
	@Modifying@Transactional@Query(value="update user_details u set u.status = 'blocked' where user_name = ?1",nativeQuery = true)
	void blockUser(String userName);
}


