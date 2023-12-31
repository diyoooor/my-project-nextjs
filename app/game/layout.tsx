import type { Metadata } from "next";
import GameNavBar from "../components/navbar/GameNavbar";

export const metadata: Metadata = {
  title: "Game",
  description: "Generated by create next app",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <GameNavBar />
      {children}
    </div>
  );
}
