// import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("g-white text-slate-900 antialised", inter.className)}
    >
      <body
        className="
      min-h-screen bg-slate-50 dark:bg-sate-900 anntialiased"
      >
        {/* @ts-expect-error srver Component*/}
        <Navbar />
        <Providers>{children}</Providers>

        {/*allow for more height on mobile*/}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
