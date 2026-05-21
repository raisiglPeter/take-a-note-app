import TagList from "./TagList";

export default function FormFilter({ tags }) {
  return (
    <div className="filter w-full overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] p-4 pb-0">
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
