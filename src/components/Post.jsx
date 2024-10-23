import React from "react";
import PostCard from "./PostCard";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Post = () => {
  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <div className="flex justify-between items-center gap-4 px-2">
        <Input placeholder="Search"></Input>
        <Button>Search</Button>
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Post;
