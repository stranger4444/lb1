// src/components/Resume.js
function Resume() {
  return (
    <div style={styles.container}>
        {/* Фото */}
      <div style={styles.photoContainer}>
        <img
          src="/myphoto.jpg"
          alt="Моє фото"
          style={styles.photo}
        />
      </div>
      <h1 style={styles.header}>Дронов Денис Дмитрович</h1>
      <h2 style={styles.subHeader}>Студент</h2>

      <section style={styles.section}>
        <h3>Про мене</h3>
        <p>
          Я захоплююся комп'ютерами, з чого вони складаються та як працюють.
        </p>
      </section>

      <section style={styles.section}>
        <h3>Навички</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Git, GitHub</li>
          <li>TailwindCSS</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h3>Освіта</h3>
        <p>Київський національний торговельно-економічний університет — Кібербезпека</p>
      </section>

      <section style={styles.section}>
        <h3>Контакти</h3>
        <p>Email: dronovdenis36@gmail.com</p>
        <p>Телефон: +380 99 123 45 67</p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  photoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%", 
    objectFit: "cover",
    border: "3px solid #ddd",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  subHeader: {
    textAlign: "center",
    color: "#666",
    fontSize: "18px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
};

export default Resume;
