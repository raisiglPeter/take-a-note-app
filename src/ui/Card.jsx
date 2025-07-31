import { useRef, useState, useEffect } from "react";

function Card({ title, description, images = null }) {
  const contentRef = useRef(null);
  const [isDescriptionClipped, setIsDescriptionClipped] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    setIsDescriptionClipped(el.scrollHeight > el.clientHeight);
  }, [description]);

  return (
    <div className="bg-white w-full p-3 max-w-screen-md rounded-2xl pb-3 self-start cursor-pointer border border-gray-100 hover:border hover:border-gray-400 break-inside-avoid mb-2">
      <div ref={contentRef} className="max-h-[555px] overflow-clip">
        <h1 className="text-lg font-medium line-clamp-3">{title}</h1>
        <p>{description}</p>
      </div>
      {isDescriptionClipped && (
        <div className="text-xl font-bold select-none">…</div>
      )}
      {images && (
        <div className="text-sm font-bold select-none">list of images</div>
      )}
    </div>
  );
}

export default Card;
