import React, { useState } from "react";

export const Input = (props: { submitUser: (arg0: string) => void }) => {
  const [userName, setUserName] = useState("");

  const submitUserName = (e: any) => {
    e.preventDefault();
    props.submitUser(userName);
    setUserName("");
  };

  return (
    <div>
      <h1>Github Cards App</h1>
      <form onSubmit={submitUserName}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
