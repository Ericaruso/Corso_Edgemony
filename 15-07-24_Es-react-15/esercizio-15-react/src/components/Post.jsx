import React, { useState, useEffect } from 'react';
import './Post.css';

const Post = ({ postId }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [postId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
