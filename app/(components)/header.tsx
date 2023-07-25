import Link from "next/link";
import Image from "next/image";

import Login from "./login";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <div>
        <Login />
        <Navbar />
      </div>
    </header>
  );
}
