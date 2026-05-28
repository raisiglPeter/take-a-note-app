import TagList from "./TagList";

export default function FormFilter({ tags }) {
  return (
    <div className="filter w-full overflow-x-auto whitespace-nowrap scrollbar-none [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] p-4 pb-2 sticky top-0 z-10 bg-base-100/70 backdrop-blur-md border-b border-base-100/50">
      <input
        className="btn filter-reset"
        type="radio"
        name="desktop-tags"
        aria-label="All"
        defaultChecked
      />
      <TagList tags={tags} groupName="desktop-tags" />
    </div>
  );
}
