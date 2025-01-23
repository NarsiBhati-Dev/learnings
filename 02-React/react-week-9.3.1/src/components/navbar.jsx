import Notification from "./notification";

export default function Navbar({ notification }) {
  return (
    <div style={{ padding: 20, display: "flex" }}>
      <h1 style={{ margin: 10 }}>Narsi</h1>
      <Notification notification={notification} />
    </div>
  );
}
