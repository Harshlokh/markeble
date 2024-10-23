import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

const Activity = () => {
  return (
    <div className="px-8 mt-6">
      <Card>
        <CardHeader className="text-3xl font-inte font-bold">
          Total Followers
        </CardHeader>
        <CardContent className="text-3xl font-inte font-semibold">
          35,000
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader className="text-3xl font-inte font-bold">
          Total likes
        </CardHeader>
        <CardContent className="text-3xl font-inte font-semibold">
          445,000
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader className="text-3xl font-inte font-bold">
          Total Comments
        </CardHeader>
        <CardContent className="text-3xl font-inte font-semibold">
          248,000
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity;
