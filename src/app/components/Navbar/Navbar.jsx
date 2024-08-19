import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            priority // This helps with LCP
          />
        </li>
        <li>
          <Link href="/about">Popular documents</Link>
        </li>
        <li>
          <Link href="/another-page">Reference</Link>
        </li>
        <li>
          <Link href="/yet-another-page">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
