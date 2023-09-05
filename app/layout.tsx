import "#/styles/globals.css";
import { Metadata } from "next";
import NavBar from "./(components)/NavBar";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="overflow-y-scroll bg-black pb-36">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
