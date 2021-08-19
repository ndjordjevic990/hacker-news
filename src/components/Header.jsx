import React from "react";

const Header = ({ isListView, onLayoutToggle }) => {
  const buttonText = isListView ? "Grid View" : "List View";
  return (
    <div className="container-fluid">
      <nav className="navbar bg-danger">
        <h4>React Users</h4>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          onClick={onLayoutToggle}
        >
          {buttonText}
        </button>
      </nav>
    </div>
  );
};

export default Header;
