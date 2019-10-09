package com.project.data;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

	@RequestMapping(value ="/myapi")
	public MessageG helloWorld(@RequestParam(value ="name", defaultValue = "Anonymous") String name) {
		return new MessageG(name);
	}
}
