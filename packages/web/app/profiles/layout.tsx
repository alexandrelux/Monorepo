import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <header>
          <Link href={{pathname: '/' }}>Home</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
