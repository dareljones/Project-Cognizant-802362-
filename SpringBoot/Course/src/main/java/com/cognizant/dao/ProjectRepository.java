package com.cognizant.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.pojo.TechnologiesEntity;

public interface ProjectRepository extends CrudRepository<TechnologiesEntity, Integer> {
	@Modifying@Transactional@Query(value="delete from technologies u where u.tech_name = ?1 ",nativeQuery = true)
    void deleteCourse(String userName);

	

}
