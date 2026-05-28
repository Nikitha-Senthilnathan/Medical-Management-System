package com.medvault.repository;

import com.medvault.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByPatientEmail(String email);

    List<Appointment> findByDoctorEmail(String email);
}
