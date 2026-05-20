import FormFilter from "../components/FormFilter";
import ToDoGrid from "../components/ToDoGrid";

export default function Main({ data }) {
  const filteredTags = [];

  data.forEach((note) => {
    if (!note.metadata.labels) return;

    note.metadata.labels.forEach((label) => {
      if (!filteredTags.includes(label)) {
        filteredTags.push(label);
      }
    });
  });

  filteredTags.sort();

  return (
    <main className="flex-1 w-full bg-base-200/50 overflow-y-auto">
      <div className="filter-section">
        <FormFilter labels={filteredTags} />
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <ToDoGrid data={data} />
      </div>
    </main>
  );
}
