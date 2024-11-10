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

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">User Management</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Find user by id" className="w-auto" />
          <Button>
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
                Create user, name and password
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-" action="">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">User</Label>
                <Input className="col-span-3" id="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="email">E-mail</Label>
                <Input className="col-span-3" id="email" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="password">Password</Label>
                <Input className="col-span-3" id="password" />
              </div>
              <DialogFooter>
                <Button type="submit">Create</Button>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <button>
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
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>njsde809hj10hdh</TableCell>
                  <TableCell>Leonardo Martins</TableCell>
                  <TableCell>leonardomartins8938@email.com</TableCell>
                  <TableCell>
                    <button className="mr-3">
                      <UserPen />
                    </button>
                    <button>
                      <Trash2 />
                    </button>
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
