import FormFilter from "@/components/FormFilter";
import ToDoGrid from "@/components/ToDoGrid";

export default function Main({ data }) {
  const filteredTags = [];

  data.forEach((note) => {
    if (!note.metadata.tags) return;

    note.metadata.tags.forEach((tag) => {
      if (!filteredTags.includes(tag)) {
        filteredTags.push(tag);
      }
    });
  });

  filteredTags.sort();

  return (
    <main className="flex-1 w-full h-full bg-base-200/50 overflow-y-auto pb-16">
      <div className="filter-section hidden md:flex">
        <FormFilter tags={filteredTags} />
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <ToDoGrid data={data} />
      </div>
    </main>
  );
}
