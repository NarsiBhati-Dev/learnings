export default function Notification({ notification }) {
  const notificationStyle = {
    position: "relative", // To position the badge relative to the container
    display: "inline-block", // To align the image and badge together
  };

  const badgeStyle = {
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    position: "absolute",
    top: -5, // Adjust to position the badge
    right: -5, // Adjust to position the badge
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
  };

  const imgStyle = {
    width: 50,
    height: 50,
    cursor: "pointer",
  };

  return (
    <div style={notificationStyle}>
      {notification !== 0 ? <div style={badgeStyle}>{notification}</div> : null}
      <img
        src={
          "https://i.pinimg.com/originals/6c/fa/8c/6cfa8c8327eac1dc73ca7956fc5cf845.png"
        }
        alt={"notification"}
        style={imgStyle}
      />
    </div>
  );
}
