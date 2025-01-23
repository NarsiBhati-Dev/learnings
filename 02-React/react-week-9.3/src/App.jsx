import PostComponent from "./components/post-component";
import me from "./assets/me.png";
import { useState } from "react";

const initialPosts = [
  {
    title: "Narsi",
    subtitle: "20 followers",
    time: "2m",
    image: me,
    description: "This is a simple description for the first post.",
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const appStyle = {
    display: "flex",
    flexDirection: "column", // Arrange posts in a column
    alignItems: "center",
    gap: "20px", // Add spacing between posts
    padding: "20px", // Add padding around the container
    backgroundColor: "#f9f9fa", // Light background color
    minHeight: "100vh", // Ensure the container takes full viewport height
    margin: 0,
  };

  function addPost() {
    setPosts([
      ...posts,
      {
        title: "Emily Smith",
        subtitle: "50 followers",
        time: "3h",
        image: me,
        description:
          "Emily is a UI/UX designer with a passion for clean designs.",
      },
    ]);
  }

  return (
    <div>
      <button
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: "black",
          color: "white",
          fontSize: 16,
        }}
        onClick={addPost}
      >
        Add post
      </button>
      <div style={appStyle}>
        {posts.map((post, index) => (
          <PostComponent
            key={index} // Use `index` as a key for rendering the list
            title={post.title}
            subtitle={post.subtitle}
            time={post.time}
            image={post.image}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
