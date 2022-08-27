import React from "react";

const FormSelect = () => {
  return (
    <>
      <div className="container mt-2">
        <select className="form-select">
          <option selected>Size</option>
          <option value="1">41</option>
          <option value="2">42</option>
          <option value="3">43</option>
        </select>
      </div>
    </>
  );
};

export default FormSelect;
