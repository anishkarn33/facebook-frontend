import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { publicAgent } from "../../lib/requests";

const UserPage = () => {
  const { query } = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    // code block
    if (query?.id != undefined) {
      publicAgent
        .get(`/profiles/${query.id}/`)
        .then((res) => {
          const data = res.data;
          setUser(data);
        });
    }
  }, [query]);
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="bg-orange-200 text-white flex flex-col justify-center items-center border w-72 h-72 m-4 p-3 rounded-full hover:bg-orange-300 hover:cursor-pointer hover:border-blue-500">
        <h2 className="text-3xl">{`${user?.first_name} ${user?.last_name}`}</h2>
        <h4 className="text-blue-400">{user?.email}</h4>
      </div>
    </div>
  );
};

export default UserPage;
