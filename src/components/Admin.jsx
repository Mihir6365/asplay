import React from "react";

export default function Admin() {
  return (
    <div>
      <form onsubmit={console.log("submitted")}>
        <label htmlFor="username">Username</label>
        <input id="username" placeholder="Enter admin username"></input>
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="Enter password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
