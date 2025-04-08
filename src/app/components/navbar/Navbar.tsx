import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold ">NextAPP</h1>
      <NavbarLinks />
      <h1></h1>
    </nav>
  );
}
