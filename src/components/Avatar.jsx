function Avatar({ imageUrl, maskType = "squircle", size = "w-12" }) {
  const maskClasses = {
    heart: "mask-heart",
    squircle: "mask-squircle",
    hexagon: "mask-hexagon-2",
  };
  const chosenMask = maskClasses[maskType] || "mask-squircle";

  return (
    <div className="avatar">
      <div className={`mask ${chosenMask} ${size}`}>
        <img
          src={imageUrl}
          alt="User Profile Avatar"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Avatar;
