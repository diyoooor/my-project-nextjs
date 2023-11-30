"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-8 justify-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/game"}>Game</Link>
    </nav>
  );
};

export default Navbar;
