import Link from "next/link";
import React from "react";

const GameNavBar = () => {
  return (
    <nav className="flex gap-8 justify-center">
      <Link href={"/game/adventure"}>Adventure</Link>
      <Link href={"/game/action"}>Action</Link>
      <Link href={"/game/survival"}>Survival</Link>
    </nav>
  );
};

export default GameNavBar;
