import React from "react";

const SectionVideoPreview = () => {
  return (
    <div className="fixed w-screen">
      <video className="w-full" controls autoPlay>
        <source
          src="http://localhost:5000/api/v1/in/movies/tom/64f58b7700268a8df13b828e/watch"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default SectionVideoPreview;
