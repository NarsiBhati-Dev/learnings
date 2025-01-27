interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age">;

function updateUser(updatedProps: UpdateProps) {
  // hit the database to update the user
}
