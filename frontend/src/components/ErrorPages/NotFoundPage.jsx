import React from "react";
const NotFoundPage = () => {
  return (
    <div className="error">
      <div className="error__title">
        <h2 className="heading-secondary heading-secondary--error">
          Uh oh! Something went wrong!
        </h2>
        <h2 className="error__emoji">😢 🤯</h2>
      </div>
      <div className="error__msg">Page not found!</div>
    </div>
  );
};

export default NotFoundPage;
