import { useEffect, useState } from "react"

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        return posts;
    };

    useEffect(() => {
        fetchPosts().then((result) => {
            setPosts(result);
        });
    }, []);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default Posts;