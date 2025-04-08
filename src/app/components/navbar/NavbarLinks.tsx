import Link from "next/link";

export default function NavbarLinks() {
  return (
    <ul className="flex gap-4 text-xle">
      <li>
        <Link href={"/"} className="underline font-bold text-white">
          Home
        </Link>
      </li>
      <li>
        <Link href={"products"} className="underline font-bold text-white">
          Products
        </Link>
      </li>
    </ul>
  );
}
