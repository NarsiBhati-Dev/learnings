export default function TodoCard(props) {
  const { title, description, status } = props;
  return (
    <div>
      <h1 style={{ textSize: "20px" }}>{title}</h1>
      <p style={{ textSize: "10px", color: "grey" }}>{description}</p>
      <p style={status ? { color: "green" } : { color: "red" }}>
        {status ? "Task is done" : "Task is not done"}
      </p>
    </div>
  );
}
