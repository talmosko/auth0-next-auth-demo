"use client";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface OwnProps {
  children: ReactNode;
}

export default function Providers({ children }: OwnProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
