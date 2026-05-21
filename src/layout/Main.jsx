import FormFilter from "@/components/FormFilter";
import ToDoGrid from "@/components/ToDoGrid";
import { getUniqueTags } from "@/utils/tagUtils";

export default function Main({ data }) {
  const tags = getUniqueTags(data);
  return (
    <main className="flex-1 w-full h-full bg-base-200/50 overflow-y-auto pb-16">
      <div className="filter-section hidden md:flex">
        <FormFilter tags={tags} />
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <ToDoGrid data={data} />
      </div>
    </main>
  );
}
