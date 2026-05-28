import FormFilter from "@/components/FormFilter";
import ToDoGrid from "@/components/ToDoGrid";
import { getUniqueTags } from "@/utils/tagUtils";

export default function Main({ data }) {
  const tags = getUniqueTags(data);

  return (
    <main className="w-full h-[calc(100vh-64px)] md:h-[calc(100dvh-64px)] flex flex-col bg-base-200/50 overflow-hidden">
      <div className="filter-section hidden md:flex w-full shrink-0">
        <FormFilter tags={tags} />
      </div>

      <div className="flex-1 w-full overflow-y-auto pb-24">
        <div className="max-w-4xl mx-auto w-full">
          <ToDoGrid data={data} />
        </div>
      </div>
    </main>
  );
}
