import Dashboard from "../../components/dashboard";
import ToDo from "../../components/todo";

export default function Home() {
  return (
    <div className="flex h-screen w-full justify-stretch">
      <ToDo/>
      <Dashboard/>
    </div>
  );
}
