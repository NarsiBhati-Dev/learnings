export default function Todo({ title, done }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{done ? "good to go" : "NOT Good"}</p>
    </div>
  );
}
