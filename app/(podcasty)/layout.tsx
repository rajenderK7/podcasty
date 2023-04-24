import { ClerkProvider } from "@clerk/nextjs/app-beta";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Podcasty",
  description: "We are building something cool.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="max-w-5xl lg:mx-auto">
          <Header />
          <div className="mx-3 lg:mx-auto">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
