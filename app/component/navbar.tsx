import Link from "next/link";

function Navbar() {
    return (
     <div>
      <div className="navbar">
        <div>
          <h1>SHER BAZ</h1>
        </div>
        <div>
          <ul className="pages">
            <Link href={"app"}><li className="nav-list">Home</li></Link>
            <Link href={"/about"}><li className="nav-list">About</li></Link>
            <Link href={"/services"}><li className="nav-list">Services</li></Link>
            <Link href={"/contact"}><li className="nav-list">Contact</li></Link>
          </ul>
        </div>
      </div>
     </div>
    );
  }
  export default Navbar