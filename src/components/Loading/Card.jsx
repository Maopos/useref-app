import React, { useState, useEffect, useRef } from "react";
import getPost from "../../helpers/getpost";

const Card = () => {
  // Estados
  const [post, setPost] = useState({ title: "post 1" });
  const [loading, setLoading] = useState(true);

  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost);
          setLoading(false);
        }
      }, 1500);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div>
      <h4>Card</h4>
      <p>{loading ? "Loading..." : post.title}</p>
    </div>
  );
};

export default Card;
