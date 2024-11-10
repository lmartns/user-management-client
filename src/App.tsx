import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Search,
  UserRoundPlus,
  Trash2,
  RefreshCcw,
  UserPen,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Label } from "./components/ui/label";
import { useRef, useState } from "react";
import { CreateUserDTO, UpdateUserDTO, User } from "./types/user";
import {
  handleCreateUser,
  handleDeleteUser,
  handleFetchUserById,
  handleFetchUsers,
  handleUpdateUser,
} from "./services/userHandlers";

export function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userID, setUserID] = useState<string>("");
  const [newUser, setNewUser] = useState<CreateUserDTO>({
    name: "",
    email: "",
    password: "",
  });
  const [updatedUser, setUpdatedUser] = useState<UpdateUserDTO>({
    name: "",
    password: "",
  });
  const dialogRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">User Management</h1>
      <div className="flex items-center justify-between">
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleFetchUserById(userID, setUsers);
          }}
        >
          <Input
            name="id"
            placeholder="Find user by id"
            className="w-auto"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          <Button type="submit">
            <Search />
            Find user by id
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserRoundPlus className="w-5 h-6" />
              Create new user
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create User</DialogTitle>
              <DialogDescription>
                Create user: name, e-mail and password
              </DialogDescription>
            </DialogHeader>
            <form
              className="space-y-4"
              action=""
              onSubmit={(e) =>
                handleCreateUser(e, newUser, setUsers, setNewUser, () =>
                  dialogRef.current?.click()
                )
              }
            >
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">User</Label>
                <Input
                  className="col-span-3"
                  id="name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  className="col-span-3"
                  id="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="col-span-3"
                  id="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={(e) =>
                    handleCreateUser(e, newUser, setUsers, setNewUser, () =>
                      dialogRef.current?.click()
                    )
                  }
                >
                  Create
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <button onClick={() => handleFetchUsers(setUsers)}>
          <RefreshCcw />
        </button>
      </div>
      <div className="border rounded-xl p-4">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead> Actions </TableHead>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="mr-3">
                          <UserPen />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Update User</DialogTitle>
                          <DialogDescription>
                            Update user: name and password
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          className="space-y-4"
                          onSubmit={(e) =>
                            handleUpdateUser(
                              e,
                              user.id,
                              updatedUser,
                              setUsers,
                              () => dialogRef.current?.click()
                            )
                          }
                        >
                          <div className="grid grid-cols-4 items-center text-right gap-3">
                            <Label htmlFor="name">User</Label>
                            <Input
                              className="col-span-3"
                              id="name"
                              value={updatedUser.name}
                              onChange={(e) =>
                                setUpdatedUser({
                                  ...updatedUser,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="grid grid-cols-4 items-center text-right gap-3">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              className="col-span-3"
                              id="password"
                              type="password"
                              value={updatedUser.password}
                              onChange={(e) =>
                                setUpdatedUser({
                                  ...updatedUser,
                                  password: e.target.value,
                                })
                              }
                            />
                          </div>
                          <DialogFooter>
                            <Button type="submit">Update</Button>
                            <DialogClose asChild>
                              <Button
                                type="button"
                                variant="outline"
                                ref={dialogRef}
                              >
                                Cancel
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button>
                          <Trash2 />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Deletion</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this user?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            onClick={() => handleDeleteUser(user.id, setUsers)}
                          >
                            Delete
                          </Button>
                          <DialogClose asChild>
                            <Button type="button" variant="outline">
                              Cancel
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
