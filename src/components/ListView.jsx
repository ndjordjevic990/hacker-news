import React from "react";

const ListView = (props) => {
  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <div>
          <img src={user.picture.thumbnail} alt="" />
          <p className="list-group-item">{user.name.first}</p>
        </div>
      ))}
    </ul>
  );
};

export default ListView;
