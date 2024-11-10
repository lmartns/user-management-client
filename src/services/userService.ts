import { CreateUserDTO, UpdateUserDTO, User } from "@/types/user";

export async function fetchUsers() {
  const response = await fetch("http://localhost:3000/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data.users;
}

export async function fetchUserById(id: string) {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const data = await response.json();
  return data;
}

export async function createUser(user: CreateUserDTO) {
  const response = await fetch("http://localhost:3000/users/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  const data = await response.json();
  return data;
}

export async function updateUser(
  id: string,
  user: UpdateUserDTO
): Promise<User> {
  const response = await fetch(`http://localhost:3000/users/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  const data = await response.json();
  return data;
}

export async function deleteUser(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3000/users/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
}
