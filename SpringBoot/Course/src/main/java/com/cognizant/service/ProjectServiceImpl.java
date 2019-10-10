package com.cognizant.service;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognizant.dao.ProjectRepository;
import com.cognizant.pojo.TechnologiesEntity;
@Service("ProjectService")
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	ProjectRepository dao;

	@Override
	@Transactional
	public List<TechnologiesEntity> getTechnologies() {
		List<TechnologiesEntity> tech =new ArrayList<TechnologiesEntity>();
		dao.findAll().forEach(tech::add);
		return tech;
	}

	@Override
	public void addTechnology(TechnologiesEntity tech) {
		dao.save(tech);
	}

	@Override
	public void deleteTechnology(String tech) {
			dao.deleteCourse(tech);
	}
}
