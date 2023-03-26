import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* Here we apply the font Inter to all body since it's the only font used in this project */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
