function Main({ twoColumns = false }) {
  return (
    <main
      className={`w-full p-2 bg-[var(--bg-mid)] grow overflow-y-auto mx-auto grid gap-2 justify-items-center ${
        twoColumns ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      <div className="bg-white p-2 max-w-screen-md rounded-2xl max-h-[555px] self-start">
        <h1 className="text-lg font-bold">title</h1>
        <p>
          description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia, eos! Laborum dolore ab et veritatis ducimus amet nemo
          quisquam ex!
        </p>
      </div>
    </main>
  );
}

export default Main;
