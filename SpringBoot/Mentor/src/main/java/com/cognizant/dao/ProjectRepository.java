package com.cognizant.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.cognizant.pojo.UserDetailsEntity;

public interface ProjectRepository extends CrudRepository<UserDetailsEntity, Integer> {
	@Query(value="select * from mentor_details u where u.user_email = ?1 ",nativeQuery = true)
    UserDetailsEntity getUser(String userName);

	

}
