"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const user = await fetch("https://api.github.com/users");
    setUser(await user.json());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Client Side Rendering Example</h2>
      <h3>Fetching User Information</h3>
      <table border="1px" className="m-3">
        {user.map((user) => (
          <tr key={user.id}>
            <td>{user.login}</td>
            <td>
              <img
                src={user.avatar_url}
                alt="pic not found"
                width="100px"
                height="100px"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default page;
