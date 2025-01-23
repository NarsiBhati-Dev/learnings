const PostComponent = ({ title, subtitle, time, description, image }) => {
  const componentStyle = {
    width: 300, // Increased width for better layout
    backgroundColor: "white",
    borderRadius: 15,
    border: "1px solid #ccc", // Added a subtle border
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow for a card-like appearance
    padding: 20, // Padding for inner content
    margin: "20px auto", // Centered component with auto margin
    fontFamily: "'Arial', sans-serif", // Applied a modern font
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: 15, // Spacing between header and content
  };

  const imgStyle = {
    width: 50,
    height: 50,
    borderRadius: "50%", // Circular image
    marginRight: 15, // Spacing between image and text
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: 0, // Removed default margin
    color: "#333", // Darker text color for readability
  };

  const subtitleStyle = {
    fontSize: "0.9rem",
    color: "#555", // Muted text color for subtitle
  };

  const timeStyle = {
    fontSize: "0.8rem",
    color: "#888", // Lighter color for time text
    marginTop: 5, // Space between subtitle and time
  };

  const descriptionStyle = {
    fontSize: "0.9rem",
    color: "#444",
    marginTop: 10, // Spacing above the description
    lineHeight: 1.5, // Improved readability with line height
  };

  return (
    <div style={componentStyle}>
      <div style={headerStyle}>
        <img src={image} alt="profile image" style={imgStyle} />
        <div>
          <h3 style={titleStyle}>{title}</h3>
          <div style={subtitleStyle}>{subtitle}</div>
          {time && <p style={timeStyle}>{time} ago</p>}
        </div>
      </div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
};

export default PostComponent;
