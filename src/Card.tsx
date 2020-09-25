import React from "react";

const Card = (props: any) => {
  const { avatar_url, name, bio } = props.userData;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 20,
        margin: 10,
        border: "2px dotted green",
      }}
    >
      <img src={avatar_url} style={{ height: 150, width: 120 }} />
      <div
        style={{ display: "flex", flexDirection: "column", paddingLeft: 40 }}
      >
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Card;
