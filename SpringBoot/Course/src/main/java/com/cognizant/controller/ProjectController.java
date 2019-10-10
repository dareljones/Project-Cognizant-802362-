package com.cognizant.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.pojo.TechnologiesEntity;
import  com.cognizant.service.ProjectService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectController {
@Autowired
ProjectService service;
@RequestMapping(value = "/", method = RequestMethod.GET)
public String getHomePage() {
return "index";
}

@RequestMapping(value = "getcourse", method = RequestMethod.GET, headers = "Accept=application/json")
public List<TechnologiesEntity> getTechnologies() {
List<TechnologiesEntity> tech = service.getTechnologies();
return tech;
}

@RequestMapping(value = "addTechnology", method = RequestMethod.POST)
public void addTech(@RequestBody TechnologiesEntity tech) {
service.addTechnology(tech);
}

@RequestMapping(value = "deleteTechnology/{tech}")
public void deleteTech(@PathVariable String tech) {
	System.out.println(tech);
service.deleteTechnology(tech);
}

}
