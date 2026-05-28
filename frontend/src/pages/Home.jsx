import Navbar from "../components/Navbar";
import image from "../assets/image.jpeg";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
  <>
  <Navbar />

  <div style={styles.container}>
    
    {/* 🔷 HERO SECTION */}
    <div style={styles.hero}>
  
  {/* LEFT CONTENT */}
  <div style={styles.heroTextContainer}>
    <h1 style={styles.heroTitle}>
      We Care for Your Health Every Moment
    </h1>
    <p style={styles.heroText}>
      Manage your medical records and appointments easily with MedVault.
    </p>
    <button
  style={styles.heroButton}
  onClick={() => navigate("/login")}
>
  Get Started
</button>
  </div>

  {/* RIGHT IMAGE */}
  {/* <img
    src={heroBg}
    alt="medical"
    style={styles.heroImage}
  /> */}

</div>

    {/* 🔷 DASHBOARD CARDS */}
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <h3>Appointments</h3>
        <p>View and manage your appointments</p>
      </div>

      <div style={styles.card}>
        <h3>Medical Records</h3>
        <p>Access your health records securely</p>
      </div>

      <div style={styles.card}>
        <h3>Doctors</h3>
        <p>Find and connect with doctors</p>
      </div>
    </div>

  </div>
</>
  );
}

export default Home;

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dbeafe, #e0f2fe)",
    padding: "20px"
  },

  // 🔷 HERO
  hero: {
  height: "350px",
  borderRadius: "20px",
  padding: "50px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  // 🔥 background image + overlay
  background: `linear-gradient(
      rgba(59,130,246,0.6),
      rgba(96,165,250,0.6)
    ),
    url(${image})`,

  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
},

  heroText: {
    margin: "10px 0 20px",
    fontSize: "32px"
  },

  heroButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#fff",
    color: "#2563eb",
    fontWeight: "bold",
    cursor: "pointer"
  },

  // 🔷 CARDS
  cardContainer: {
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  flex: 1,                 // 🔥 fills remaining space
  alignItems: "stretch"    // 🔥 makes cards equal height
},

  card: {
  flex: 1,
  padding: "30px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.5)",
  textAlign: "center",

  display: "flex",            // 🔥 center content vertically
  flexDirection: "column",
  justifyContent: "center",

  minHeight: "180px"          // 🔥 increase height
},
};