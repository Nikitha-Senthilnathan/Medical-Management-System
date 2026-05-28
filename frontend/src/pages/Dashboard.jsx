import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");


useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // const userName = localStorage.getItem("userName");

  if (!isLoggedIn) {
    navigate("/login"); // 🚨 block access
  }
}, []);
const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <>
  <Navbar />

  <div style={styles.layout}>
    
    {/* Sidebar */}
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>MedVault</h2>

      <ul style={styles.menu}>
        <li>🏠 Dashboard</li>
        <li>📅 Appointments</li>
        <li>📄 Records</li>
        <li>👨‍⚕️ Doctors</li>
        <li>⚙ Settings</li>
      </ul>
    </div>

    {/* Main Content */}
    <div style={styles.main}>

      {/* Welcome Card */}
      <div style={styles.welcomeCard}>
        <h2>Welcome, {userName} 👋</h2>
        <p>Manage your health easily</p>
      </div>

      {/* Grid Section */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Appointments</h3>
          <p>View & book appointments</p>
        </div>

        <div style={styles.card}>
          <h3>Medical Records</h3>
          <p>Access your reports</p>
        </div>

        <div style={styles.card}>
          <h3>Doctors</h3>
          <p>Find specialists</p>
        </div>

        <div style={styles.card}>
          <h3>Prescriptions</h3>
          <p>Track medications</p>
        </div>
      </div>

    </div>
  </div>
</>
  );
}

export default Dashboard;

  const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dbeafe, #e0f2fe)"
  },

  sidebar: {
    width: "220px",
    background: "linear-gradient(180deg, #93c5fd, #60a5fa)",
    color: "white",
    padding: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px"
  },

  logo: {
    marginBottom: "30px"
  },

  menu: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2.5",
    cursor: "pointer"
  },

  main: {
    flex: 1,
    padding: "30px"
  },

  welcomeCard: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(12px)",
    marginBottom: "30px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  card: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "0.3s"
  }
};
