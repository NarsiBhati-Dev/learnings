const fetchUserData = async () => {
  try {
    const response = await fetch("https://api.github.com/users/NarsiBhati-Dev");
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
};

const userData = fetchUserData();
console.log(userData);

const createUser = async () => {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status :  ${response.status}`);
    }

    const newUser = response.json();
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.error(error);
  }
};
