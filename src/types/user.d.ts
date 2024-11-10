export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
}
