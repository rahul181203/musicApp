"use client"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { Provider, useAtomValue } from "jotai";
import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import React from "react";
import { MainPlayer } from "@/components/globalComponents/player";
import { DevTools } from "jotai-devtools";


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--font-poppins'
});

const metadata: Metadata = {
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
        <QueryClientProvider client={queryClient}>
            <Theme appearance={"dark"} panelBackground={'solid'}>
              {children}
              <MainPlayer/>
              <DevTools />
              <Analytics/>
            </Theme>
          </QueryClientProvider>
      </Provider>
      </body>
      
    </html>
  );
}
