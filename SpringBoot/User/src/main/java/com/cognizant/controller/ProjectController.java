package com.cognizant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.pojo.UserDetailsEntity;
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

@RequestMapping(value = "/getUser/{userName}", method = RequestMethod.GET)
public UserDetailsEntity getUser(@PathVariable String userName) {
return service.getUser(userName);
}

@RequestMapping(value = "/addUser/", method = RequestMethod.POST)
public void addUser(@RequestBody UserDetailsEntity user) {
	System.out.println(user);
service.addUser(user);
}

@RequestMapping(value = "/getAllUsers/{role}")
public List<UserDetailsEntity> getAllUsers(@PathVariable String role) {
return service.getAllUsers(role);
}


@RequestMapping(value = "/blockUser/{userName}", method = RequestMethod.GET)
public void blockUser(@PathVariable String userName) {
 service.blockUser(userName);
}

}




