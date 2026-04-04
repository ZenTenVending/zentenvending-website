import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pantry Login | ZenTen Vending",
  description: "Log in to your ZenTen Pantry Service account to manage orders and preferences.",
};

export default function PantryLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
