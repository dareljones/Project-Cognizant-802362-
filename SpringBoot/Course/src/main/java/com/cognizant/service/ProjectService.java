package com.cognizant.service;

import java.util.List;
import com.cognizant.pojo.TechnologiesEntity;;

public interface ProjectService {
	public List<TechnologiesEntity> getTechnologies();

	void addTechnology(TechnologiesEntity tech);
	void deleteTechnology(String tech);


}