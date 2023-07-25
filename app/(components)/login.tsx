"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function Login() {
  const { data } = useSession();

  // @ts-ignore
  return (
    <div>
      <div>
        {data ? (
          <>
            <Link href="/user/profile">החשבון שלי</Link>

            {/* @ts-ignore */}
            {/* {data.user.role === "ADMIN" && (
              <Link href="/admin">מערכת ניהול</Link>
            )} */}
            <div onClick={() => signOut()}>יציאה</div>
          </>
        ) : (
          <div onClick={() => signIn()}>כניסה</div>
        )}
      </div>
    </div>
  );
}
