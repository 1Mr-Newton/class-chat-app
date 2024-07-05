import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateRoomButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} variant={"outline"}>
          Create New Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Room Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button size={"lg"} variant={"outline"}>
            Room ID: PM-205
          </Button>
          <Input placeholder="Room Name" id="groupname" />
        </div>
        <DialogFooter>
          <Button type="submit" className="flex-1">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
