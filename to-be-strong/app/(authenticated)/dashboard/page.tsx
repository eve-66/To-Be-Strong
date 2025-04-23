import Dashboard from "../../components/dashboard";
import ToDo from "../../components/todo";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <div className="w-2/5">
        <ToDo/>
      </div>
      <div className="w-3/5">
        <Dashboard/>
      </div>   
    </div>
  );
}
