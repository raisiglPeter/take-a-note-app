export default function TagList({ tags, groupName = "metaframeworks" }) {
  return (
    <>
      {tags.map((tag) => (
        <input
          key={tag}
          className="btn"
          type="radio"
          name={groupName}
          aria-label={tag}
        />
      ))}
    </>
  );
}
