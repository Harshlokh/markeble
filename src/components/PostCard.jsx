import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PostCard = ({}) => {
  return (
    <Card className="max-w-[80%] w-full">
      <div className="flex  items-center px-10">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Avatar>
        <CardHeader className="text-2xl font-inte font-bold">
          Lorem, ipsum dolor.
        </CardHeader>
      </div>
      <CardContent className="px-10 font-inte">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae rerum
        modi facere quaerat repellat veritatis voluptas doloribus eos facilis
        hic sapiente quis consequatur sit non ratione magni, ducimus amet
        dolore?
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Input placeholder="Comment"></Input>
        <Button>Expand Story</Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
