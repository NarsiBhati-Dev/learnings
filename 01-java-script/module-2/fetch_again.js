const createUser = async () => {
  const response = await fetch("URL/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
};

createUser();
