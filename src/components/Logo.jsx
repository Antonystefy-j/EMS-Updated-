export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "15px 0",
        borderBottom: "1px solid #444",
        marginBottom: "10px",
      }}
    >
      {/* Circle Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          background: "#4a90e2",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
          color: "white",
        }}
      >
        E
      </div>

      {/* Title Text */}
      <h2
        style={{
          margin: 0,
          fontSize: "22px",
          letterSpacing: "1px",
          color: "#fff",
        }}
      >
        EMS
      </h2>
    </div>

    
  );
}
