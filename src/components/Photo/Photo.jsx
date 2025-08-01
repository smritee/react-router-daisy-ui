import React from "react";

const Photo = ({ photo }) => {
  const { id, title, url, thumbnailUrl } = photo;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure className="bg-blue-200 py-8 rounded-2xl ">
        <img
          src={thumbnailUrl}
          alt="Shoes" className="h-[166px]"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>        
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
