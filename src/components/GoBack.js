import React from "react";
import { useHistory } from "react-router-dom";

function GoBack() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <hr />
      <div className="goback-wrapper">
        <button onClick={handleClick}>👈 Go Back</button>
      </div>
      <hr />
    </>
  );
}

export default GoBack;
