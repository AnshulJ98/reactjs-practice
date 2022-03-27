import React, { useState } from "react";

const Counter = ({ onDelete, onIncrement, counter }) => {
  const [tags] = useState(["tag1", "tag2", "tag3"]);
  const [imageUrl] = useState("https://picsum.photos/300");

  const renderTags = () => {
    if (tags.length === 0) return <p>NOTHING HERE!!</p>;
    return (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value: count } = counter;
    return count === 0 ? "ZERO" : count;
  };
  let classes = getBadgeClasses();
  return (
    <React.Fragment>
      <h4>Counterrr #{counter.id}</h4>

      <img src={imageUrl} alt="" />
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary sm m-2"
      >
        +
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
      {tags.length === 0 && "YOU NEED TO CREATE A TAG TO SEE IT"}
      {renderTags()}
    </React.Fragment>
  );
};

export default Counter;
