import React, { useState } from "react";
import "./style.css";

export default function ProjectThumbnail({ image, title, description, year }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  function toggleModal() {
    setIsDescriptionOpen(!isDescriptionOpen);
  }
  return (
    <div className='project-thumbnail'>
      <img src={`/imgs/${image}`} alt={title} />
      <h4>{`${year}: ${title}`}</h4>
      <p>
        {isDescriptionOpen ? description : description.slice(0, 150) + "..."}{" "}
        <button className='text-expand' onClick={toggleModal}>
          {isDescriptionOpen ? "Collapse" : "Read More"}
        </button>
      </p>
    </div>
  );
}
