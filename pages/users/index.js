import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { publicAgent } from "../../lib/requests";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    publicAgent.get("http://localhost:8000/api/profiles/").then((res) => {
      const data = res.data;
      setUsers(data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <main>
        <h1 className="title">
          List of users
        </h1>
          <div className="grid">
            {users.map((user, idx) => {
              return (
                <Link href={`users/${user.id}`}>
                  <a href={`users/${user.id}`} className="card">
                    <h3>{idx + 1} &rarr;</h3>
                    <p>{user.first_name} {user.last_name}</p>
                    <p>{user.email}</p>
                  </a>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default UsersPage;
