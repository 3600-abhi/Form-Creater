import React from "react";

const Selectors = (props) => {
  const handleClick = (attributes) => {
    const type = attributes.type;
    const label = attributes.label;
    const id = props.elements.length;
    props.setElements([
      ...props.elements,
      { type: `${type}`, id: `${id}`, label: `${label}` },
    ]);
  };

  return (
    <div>
      <div style={{ margin: "5px" }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleClick({ type: "text", label: "Name" })}
        >
          TextField
        </button>
      </div>
      <div style={{ margin: "5px" }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleClick({ type: "email", label: "Email" })}
        >
          Email
        </button>
      </div>
      <div style={{ margin: "5px" }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleClick({ type: "password", label: "Password" })}
        >
          Password
        </button>
      </div>
    </div>
  );
};

export default Selectors;
