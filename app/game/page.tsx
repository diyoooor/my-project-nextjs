"use client";
import { useRouter } from "next/router";
import React from "react";

const Game = () => {
  const router = useRouter();
  return (
    <div>
      <h1>GamePage</h1>
      <button onClick={() => router.push("/game/adventure")}>
        Go to Adventure Page
      </button>
    </div>
  );
};

export default Game;
