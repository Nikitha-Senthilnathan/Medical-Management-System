import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");

  window.location.href = "/login"; // redirect
};

  return (
    <div style={styles.navbar}>
      <h3 style={styles.logo}>MedVault</h3>

      <div style={styles.navLinks}>
  <span style={styles.link} onClick={() => navigate("/")}>Home</span>
  <span style={styles.link} onClick={() => navigate("/about")}>About</span>
  <span style={styles.link} onClick={() => navigate("/contact")}>Contact</span>
  {isLoggedIn ? (
  <button onClick={handleLogout} style={styles.logoutBtn}>
    Logout
  </button>
) : (
  <a href="/login">Login</a>
)}
</div>
    </div>
  );
}

export default Navbar;

const styles = {
  navbar: {
    position: "relative",
margin: "0",
    padding: "12px 30px",
    borderRadius: "16px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    // 🔥 glass effect
    background: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",

    zIndex: 1000
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1e3a8a"
  },

  logoutBtn: {
  background: "#3b82f6",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "8px",
  cursor: "pointer"
},

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "25px" // 👈 proper spacing
  },

  link: {
    cursor: "pointer",
    color: "#1e3a8a",
    fontWeight: "500",
    transition: "0.3s"
  }
};