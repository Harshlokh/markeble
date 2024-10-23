import React from "react";
import { Button } from "./ui/button";
import { navlinks } from "../../constants/navbar";
import { Plus, Star } from "lucide-react";

const NavBar = () => {
  return (
    <nav>
      <header class="text-gray-600 body-font border-b-2 border-gray-200">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="logo.png" alt="logo" width={160} height={160} />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {navlinks.map((item, index) => (
              <a
                key={index}
                class="mr-5 hover:text-gray-900  font-pop font-medium hover:font-semibold hover:border-b-2 border-black  cursor-pointer"
              >
                {item.text}
              </a>
            ))}
          </nav>
          <div className="flex justify-center gap-2">
            <Button>
              <Plus />
              Create
            </Button>
            <Button>
              <Star />
              Upgrade
            </Button>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
