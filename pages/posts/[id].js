import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { publicAgent } from "../../lib/requests";

const PostPage = () => {
  const { query } = useRouter();
  const [post, setPost] = useState(null);
  useEffect(() => {
    // code block
    if (query?.id != undefined) {
      publicAgent
        .get(`/newsfeeds/${query.id}/`)
        .then((res) => {
          const data = res.data;
          setPost(data);
        });
    }
  }, [query]);
  return (
    <>
      <p>{post?.body}</p>
    </>
  );
};

export default PostPage;
