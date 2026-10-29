import "./TextLines.css";

type TextLinesProp = {
  numOfLines: number;
};

export default function TextLines({ numOfLines }: TextLinesProp) {
  return (
    <div className="text-lines">
      {Array.from({ length: numOfLines }).map((_, index) => {
        return <div key={index} className="text-line"></div>;
      })}
    </div>
  );
}
