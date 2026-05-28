package com.medvault.controller;

import com.medvault.model.Appointment;
import com.medvault.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;


import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public Appointment book(@RequestBody Appointment appointment,
                            Authentication authentication) {

        appointment.setPatientEmail(authentication.getName());
        return appointmentService.bookAppointment(appointment);
    }


    @GetMapping("/patient/{email}")
    public List<Appointment> getPatientAppointments(@PathVariable String email) {
        return appointmentService.getPatientAppointments(email);
    }

    @GetMapping("/doctor/{email}")
    public List<Appointment> getDoctorAppointments(@PathVariable String email) {
        return appointmentService.getDoctorAppointments(email);
    }

    @PutMapping("/approve/{id}")
    public Appointment approve(@PathVariable Long id) {
        return appointmentService.approveAppointment(id);
    }

    @GetMapping("/my")
    public List<Appointment> getMyAppointments(Authentication authentication) {

        String email = authentication.getName();

        String role = authentication.getAuthorities()
                .iterator()
                .next()
                .getAuthority()
                .replace("ROLE_", "");

        return appointmentService.getMyAppointments(email, role);
    }
    @PutMapping("/cancel/{id}")
    public Appointment cancel(@PathVariable Long id,
                              Authentication authentication) {

        return appointmentService.cancelAppointment(id, authentication.getName());
    }


}
