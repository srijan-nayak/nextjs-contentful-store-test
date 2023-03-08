import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Store</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/" className="secondary">
            Products
          </Link>
        </li>
        <li>
          <Link href="/" className="secondary">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
