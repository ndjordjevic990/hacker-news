import React from "react";

const GridView = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div className="card">
          <img
            className="card-img-top"
            src={user.picture.large}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{user.name.first}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
