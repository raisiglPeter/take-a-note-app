function FormFilter({ tags }) {
  return (
    <form className="m-4 mb-0">
      {tags.map((tag) => (
        <input
          className="btn mr-2"
          type="checkbox"
          name="frameworks"
          aria-label={tag}
        />
      ))}

      <input className="btn btn-square" type="reset" value="×" />
    </form>
  );
}

export default FormFilter;
