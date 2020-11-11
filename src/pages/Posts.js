import React, { useState, useEffect } from "react";
import { postWrapper, postArea } from "./Styles.module.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPosts(json);
        console.log(json);
      });
  }, []);

  return (
    <div className={postWrapper}>
      <main className={postArea}>
        {posts === [] ? (
          <h2>Loading...</h2>
        ) : (
          posts.map((post) => {
            return (
              <>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <hr />
              </>
            );
          })
        )}
      </main>
    </div>
  );
}
