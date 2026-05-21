function TagList({ list }) {
  return (
    <ul>
      {list.map((tag) => (
        <li>{tag}</li>
      ))}
    </ul>
  );
}

export default TagList;
