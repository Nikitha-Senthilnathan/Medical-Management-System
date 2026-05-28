import Navbar from "../components/Navbar";
function About() {
  return (
    <>
  <Navbar />

  <div style={styles.container}>

    {/* 🔷 TOP SECTION */}
    <div style={styles.section}>
      <div style={styles.text}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.para}>
          MedVault helps patients securely manage medical records and book
          appointments with doctors easily.
        </p>
      </div>

      <img
        src="https://img.freepik.com/free-photo/group-doctors-standing-hospital_23-2148827771.jpg"
        alt="team"
        style={styles.image}
      />
    </div>

    {/* 🔷 SECOND SECTION */}
    <div style={styles.section}>
      
      <img
        src="https://img.freepik.com/free-photo/hospital-reception_23-2148980723.jpg"
        alt="mission"
        style={styles.image}
      />

      <div style={styles.text}>
        <h2 style={styles.heading}>
          Our Mission: Better Healthcare Experience
        </h2>
        <p style={styles.para}>
          We aim to simplify healthcare by making medical records accessible,
          secure, and easy to manage. Our goal is to connect patients and
          doctors seamlessly for better outcomes.
        </p>
      </div>

    </div>

  </div>
</>

  );
}

export default About;

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #dbeafe, #e0f2fe)",
    display: "flex",
    flexDirection: "column",
    gap: "50px"
  },

  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",

    padding: "30px",
    borderRadius: "20px",

    background: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
  },

  text: {
    flex: 1
  },

  heading: {
    color: "#1e3a8a",
    marginBottom: "15px"
  },

  para: {
    fontSize: "16px",
    lineHeight: "1.6"
  },

  image: {
    width: "400px",
    borderRadius: "16px",
    objectFit: "cover"
  }
};