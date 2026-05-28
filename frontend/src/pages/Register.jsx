import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("PATIENT");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,   // ✅ Add this
          email,
          password,
          role,
          gender
        })
      });

      if (response.ok) {
  alert("Registration successful");
  navigate("/login"); // 🔥 redirect to login page
} else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred");
    }
  };

  return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Register</h2>

      <input
  id="name"
  type="text"
  placeholder="Name"
  style={styles.input}
  value={name}
  onChange={(e) => setName(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      document.getElementById("email").focus();
    }
  }}
/>

      <input
  id="email"
  type="email"
  placeholder="Email"
  style={styles.input}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      document.getElementById("password").focus();
    }
  }}
/>

      <input
  id="password"
  type="password"
  placeholder="Password"
  style={styles.input}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      document.getElementById("gender").focus();
    }
  }}
/>

      <select
  id="gender"
  style={styles.input}
  value={gender}
  onChange={(e) => setGender(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      document.getElementById("role").focus();
    }
  }}
>
  <option value="">Select Gender</option>
  <option value="MALE">Male</option>
  <option value="FEMALE">Female</option>
</select>

      <select
  id="role"
  style={styles.input}
  value={role}
  onChange={(e) => setRole(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleRegister(e);
    }
  }}
>
  <option value="PATIENT">Patient</option>
  <option value="DOCTOR">Doctor</option>
</select>

      <button style={styles.button} onClick={handleRegister}>
        Register
      </button>

      <p style={{ textAlign: "center", fontSize: "14px" }}>
  Already have an account?{" "}
  <span
    style={{ color: "#2563eb", cursor: "pointer" }}
    onClick={() => navigate("/login")}
  >
    Login
  </span>
</p>
    </div>
  </div>
);  
}

export default Register;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #dbeafe, #e0f2fe)" // pastel blue bg
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.25)", // glass effect
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#1e3a8a" // deep blue text
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.4)",
    outline: "none",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(5px)"
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  }
};