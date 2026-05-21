function Avatar({ imageUrl }) {
  return (
    <div className="avatar">
      <div className="mask mask-heart w-24">
        <img src={imageUrl} />
      </div>
    </div>
  );
}

export default Avatar;
