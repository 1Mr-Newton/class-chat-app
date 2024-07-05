"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinRoomButton() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleJoinRoom = async () => {
    if (username && roomId) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/check_room/${roomId}`
        );
        const data = await response.json();
        if (data.exists) {
          router.push(`/chat/${roomId}?username=${username}`);
        } else {
          setError("Room ID does not exist.");
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} variant={"default"}>
          Join A Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="@username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Room ID"
            id="groupname"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <DialogFooter>
          <Button type="button" className="flex-1" onClick={handleJoinRoom}>
            Chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
