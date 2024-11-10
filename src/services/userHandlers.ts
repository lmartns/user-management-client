import {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./userService";
import { CreateUserDTO, UpdateUserDTO, User } from "../types/user";
import React from "react";

export async function handleFetchUsers(
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
) {
  try {
    const users = await fetchUsers();
    setUsers(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

export async function handleFetchUserById(
  id: string,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
) {
  try {
    const user = await fetchUserById(id);
    setUsers([user]);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

export async function handleCreateUser(
  e: React.FormEvent,
  newUser: CreateUserDTO,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setNewUser: React.Dispatch<React.SetStateAction<CreateUserDTO>>,
  onSuccess: () => void
) {
  e.preventDefault();
  try {
    const user = await createUser(newUser);
    setUsers((prevUsers) => [...prevUsers, user]);
    setNewUser({ name: "", email: "", password: "" });
    onSuccess();
  } catch (error) {
    console.error("Failed to create user:", error);
  }
}

export async function handleUpdateUser(
  e: React.FormEvent,
  id: string,
  updatedUser: UpdateUserDTO,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  onSuccess: () => void
) {
  e.preventDefault();
  try {
    const user = await updateUser(id, updatedUser);
    setUsers((prevUsers) => prevUsers.map((u) => (u.id === id ? user : u)));
    onSuccess();
  } catch (error) {
    console.error("Failed to update user:", error);
  }
}

export async function handleDeleteUser(
  id: string,
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
) {
  try {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  } catch (error) {
    console.error("Failed to delete user:", error);
  }
}
