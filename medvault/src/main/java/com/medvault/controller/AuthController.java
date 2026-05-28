package com.medvault.controller;

import com.medvault.model.User;
import com.medvault.service.UserService;
import com.medvault.model.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.medvault.model.LoginRequest;
import com.medvault.model.LoginResponse;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

//    @PostMapping("/register")
//    public UserResponse register(@RequestBody User user) {
//        return userService.registerUser(user);
//    }
@PostMapping("/register")
public UserResponse register(@RequestBody User user) {

    System.out.println("REGISTER ENDPOINT HIT");

    return userService.registerUser(user);
}

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
    @GetMapping("/test-secure")
    public String testSecure() {
        return "This is a secured endpoint!";
    }

}
