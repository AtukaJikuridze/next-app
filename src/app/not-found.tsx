import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute left-[50%] top-[50%]  transform translate-x-[-50%] translate-y-[-50%] text-3xl font-bold ">
      <div className="flex flex-col items-center gap-4">
        <p>Page notfound back to home page</p>
        <Link href={"/"} className="underline ">
          Home
        </Link>
      </div>
    </div>
  );
}
