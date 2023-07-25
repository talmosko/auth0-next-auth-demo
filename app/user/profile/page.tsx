"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data, status }: any = useSession();
  console.log(data);
  if (status === "unauthenticated") return <p>Access Denied</p>;
  if (status === "loading") return <p>loading....</p>;

  return <h1>Hello, {data.user.name}</h1>;
}
