import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Provider } from "jotai";
import "@radix-ui/themes/styles.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "MusicApp",
  description: "Listen to the best songs",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable} suppressHydrationWarning={true}>
      <Provider>
          <Theme appearance={"dark"} panelBackground={'solid'}>
            {children}
          </Theme>
      </Provider>
      </body>
    </html>
  );
}
