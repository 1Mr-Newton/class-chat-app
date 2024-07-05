import CreateRoomButton from "@/components/CreateRoomButton";
import JoinRoomButton from "@/components/JoinRoomButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="bg-gray-200 py-2 px-2">
        <ul className="flex justify-between items-center">
          <li>
            <CreateRoomButton />
          </li>
          <li>
            <JoinRoomButton />
          </li>
        </ul>
      </nav>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to Chat</h1>
        <p className="text-lg text-gray-500 text-center">
          Please join a room or create a new room to start the meeting
        </p>
      </section>
    </main>
  );
}
