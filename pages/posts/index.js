import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { publicAgent } from "../../lib/requests";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    publicAgent.get("/newsfeeds/").then((res) => {
      const data = res.data.results;
      setPosts(data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <main>
        <h1 className="title">
          List of posts
        </h1>
          <div className="grid">
            {posts.map((post, idx) => {
              return (
                <Link href={`posts/${post.id}`}>
                  <a href={`posts/${post.id}`} className="card">
                    <h3>{idx + 1} &rarr;</h3>
                    <p>{post.body}</p>
                  </a>
                </Link>
              );
            })}
            {!posts?.length && "No posts found!"}
          </div>
        </main>
      </div>
    </>
  );
};

export default PostsPage;
