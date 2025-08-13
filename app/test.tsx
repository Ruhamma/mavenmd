'use client';
import { Key } from 'react';
import { useGetPostsQuery } from '../services/api';

export default function PostsPage() {
  const { data, error, isLoading } = useGetPostsQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h1>Posts</h1>
      {data?.map((post: { id: Key | string; title: string }) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
