import React from "react";
import { Collapsibledemo } from "./Colaps";
import { Card } from "./ui/card";

const LeftNav = () => {
  return (
    <div className="flex flex-col gap-4 px-2">
      <Card className="py-4 ">
        <Collapsibledemo
          content={{
            heading: "Contact",
            itemOne: "Item One",
            itemTwo: "Item Two",
            itemThree: "Item Three",
          }}
        />
      </Card>
      <Card className="py-4">
        <Collapsibledemo
          content={{
            heading: "Projects",
            itemOne: "Item One",
            itemTwo: "Item Two",
            itemThree: "Item Three",
          }}
        />
      </Card>
      <Card className="py-4">
        <Collapsibledemo
          content={{
            heading: "Albums",
            itemOne: "Item One",
            itemTwo: "Item Two",
            itemThree: "Item Three",
          }}
        />
      </Card>
    </div>
  );
};

export default LeftNav;
