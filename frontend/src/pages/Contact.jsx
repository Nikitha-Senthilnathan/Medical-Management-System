import Navbar from "../components/Navbar";
import contactImg from "../assets/two.png";
function Contact() {
  return (
    <>
  <Navbar />

  <div style={styles.container}>

    <div style={styles.card}>

      {/* 🔷 LEFT FORM */}
      <div style={styles.formSection}>
        <h2 style={styles.title}>Contact Us</h2>

        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.textarea}></textarea>

        <button style={styles.button}>Send Message</button>
      </div>

      {/* 🔷 RIGHT IMAGE */}
      {/* <img
  src={contactImg}
  alt="stethoscope"
  style={styles.image}
/> */}

    </div>

  </div>
</>
  );
}

export default Contact;

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #dbeafe, #e0f2fe)"
  },

  card: {
  width: "70%",
  padding: "40px",
  borderRadius: "20px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30px",

  // 🔥 only image (no blue overlay)
  background: `url(${contactImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
},

  formSection: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "400px" // 🔥 controls field length
},

  title: {
    color: "#1e3a8a",
    marginBottom: "10px"
  },

  input: {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  background: "rgba(255,255,255,0.6)",
  width: "100%" // ensures proper alignment
},

textarea: {
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  minHeight: "100px",
  background: "rgba(255,255,255,0.6)",
  width: "100%"
},

  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  },

  image: {
  width: "220px",
  height: "auto",
  objectFit: "contain",

  opacity: 0.9,              // 🔥 softer look
  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",

  marginRight: "20px"        // spacing from edge
},
};