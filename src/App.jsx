import React from "react";
import NavBar from "./components/NavBar";
import LeftNav from "./components/LeftNav";
import Post from "./components/Post";
import Activity from "./components/Activity";

const App = () => {
  return (
    <section>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <NavBar />
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-3  py-4 border-r-2 border-gray-200 min-h-screen">
          <LeftNav />
        </div>
        <div className="col-span-6 py-4 border-r-2 border-gray-200 min-h-screen">
          <Post />
        </div>
        <div className="col-span-3 ">
          <Activity />
        </div>
      </div>
    </section>
  );
};

export default App;
