import axios from "axios";

async function getTodoWithFetch() {
  try {
    const response = await fetch("http://localhost:3000/todo");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetch GET Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function createTodoWithFetch() {
  const newTodo = {
    title: "Learn Express",
    description: "Study how to build APIs with Express",
  };

  try {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetch POST Response:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

getTodoWithFetch();
createTodoWithFetch();

async function getTodoWithAxios() {
  try {
    const response = await axios.get("http://localhost:3000/todo");
    console.log("Axios GET Response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function createTodoWithAxios() {
  const newTodo = {
    title: "Learn Express",
    description: "Study how to build APIs with Express",
  };

  try {
    const response = await axios.post("http://localhost:3000/todos", newTodo);
    console.log("Axios POST Response:", response.data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

getTodoWithAxios();
createTodoWithAxios();
