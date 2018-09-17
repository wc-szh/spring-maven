package com.clarks.controller;

import com.clarks.pojo.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@Controller(value = "/spring")
public class HelloController {

    @Autowired
    private Person person;

    @GetMapping(value = "/hello")
    public String hello() {
        return person.getName();
    }
}