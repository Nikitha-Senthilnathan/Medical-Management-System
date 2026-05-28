import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, role})
    });

    if (response.ok) {
      const data = await response.json(); // 🔥 VERY IMPORTANT

      localStorage.setItem("isLoggedIn", "true");
      // localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("userName", data.name);

      alert("Login successful");

      navigate("/dashboard"); // 🔥 THIS MUST RUN

    } else {
      alert("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    alert("Error occurred");
  }
};

  return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Login</h2>

      <input
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
      document.getElementById("role").focus();
    }
  }}
/> 

      <select
  id="role"
  style={styles.input}
  value={role}
  onChange={(e) => setRole(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  }}
>
  <option value="PATIENT">Patient</option>
  <option value="DOCTOR">Doctor</option>
  <option value="ADMIN">Admin</option>
</select>

      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>

      <p style={{ textAlign: "center", fontSize: "14px" }}>
  Don't have an account?{" "}
  <span
    style={{ color: "#2563eb", cursor: "pointer" }}
    onClick={() => navigate("/register")}
  >
    Register
  </span>
</p>
    </div>
  </div>
);
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #dbeafe, #e0f2fe)"
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.25)",
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
    color: "#1e3a8a"
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.4)",
    outline: "none",
    background: "rgba(255,255,255,0.6)"
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold"
  }
};