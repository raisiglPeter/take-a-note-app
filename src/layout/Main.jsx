import ToDoGrid from "../components/ToDoGrid";

export default function Main({ data }) {
  return (
    <main className="flex-1 w-full bg-base-200/50 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <ToDoGrid data={data} />
      </div>
    </main>
  );
}
