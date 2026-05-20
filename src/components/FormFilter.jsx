function FormFilter({ labels }) {
  return (
    <form className="ml-2 mt-2">
      {labels.map((tag) => (
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
