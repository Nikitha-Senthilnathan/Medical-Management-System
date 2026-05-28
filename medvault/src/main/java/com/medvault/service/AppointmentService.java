package com.medvault.service;

import com.medvault.exception.AppointmentNotFoundException;
import com.medvault.exception.UnauthorizedActionException;
import com.medvault.model.Appointment;
import com.medvault.model.AppointmentStatus;
import com.medvault.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment bookAppointment(Appointment appointment) {
        appointment.setStatus(AppointmentStatus.PENDING);
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getPatientAppointments(String email) {
        return appointmentRepository.findByPatientEmail(email);
    }

    public List<Appointment> getDoctorAppointments(String email) {
        return appointmentRepository.findByDoctorEmail(email);
    }

    public List<Appointment> getMyAppointments(String email, String role) {

        if (role.equals("PATIENT")) {
            return appointmentRepository.findByPatientEmail(email);
        } else if (role.equals("DOCTOR")) {
            return appointmentRepository.findByDoctorEmail(email);
        }

        return List.of();
    }


    public Appointment approveAppointment(Long id) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow();
        appointment.setStatus(AppointmentStatus.APPROVED);
        return appointmentRepository.save(appointment);
    }
    public Appointment cancelAppointment(Long id, String email) {

        Appointment appointment =
                appointmentRepository.findById(id)
                        .orElseThrow(() -> new AppointmentNotFoundException("Appointment not found"));

        // Only patient who booked can cancel
        if (!appointment.getPatientEmail().equals(email)) {
            throw new UnauthorizedActionException("You can cancel only your own appointment");

        }

        // Cannot cancel if already approved
        if (appointment.getStatus() == AppointmentStatus.APPROVED) {
            throw new UnauthorizedActionException("Cannot cancel approved appointment");
        }

        appointment.setStatus(AppointmentStatus.CANCELLED);
        return appointmentRepository.save(appointment);
    }
}
