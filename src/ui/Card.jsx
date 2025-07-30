import { useRef, useState, useEffect } from "react";

function Card({ title, content }) {
  const contentRef = useRef(null);
  const [isClipped, setIsClipped] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    setIsClipped(el.scrollHeight > el.clientHeight);
  }, [content]);

  return (
    <div className="bg-white w-full p-3 max-w-screen-md rounded-2xl pb-3 self-start">
      <div ref={contentRef} className="max-h-[555px] overflow-clip">
        <h1 className="text-lg font-bold">{title}</h1>
        <p>{content}</p>
      </div>
      {isClipped && <div className="text-xl font-bold select-none">…</div>}
    </div>
  );
}

export default Card;
