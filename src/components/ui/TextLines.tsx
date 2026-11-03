import "./TextLines.css";

export default function TextLines() {
  return (
    <div className="text-lines">
      {Array.from({ length: 9 }).map((_, index) => {
        const desktopNumOfLines = [2, 3, 4, 5, 6, 7].includes(index);

        return (
          <div
            key={index}
            className={`text-line ${desktopNumOfLines ? "text-lines-mobile" : "text-lines-desktop"}`}
          ></div>
        );
      })}
    </div>
  );
}
