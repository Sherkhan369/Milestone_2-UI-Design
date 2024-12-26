import Link from "next/link";
import Image from "next/image";
function Footer() {
    return(
        <div className="footers">
            
            <div className="footer-1">
                <div>
                    <h1>Sher Baz</h1>
                    <address>h-13336,sindh,Karachi,Pakistan</address>
                    <p>Phone:03434943790</p>
                    <p>Email: <a href="mailto:sherkhanllc369@gmail.com">sherkhanllc369@gmail.com </a></p>
                </div>
                <div>
                    <h1>Useful Links</h1>
                    <ul >
                    <Link href={"app"}> <li className="ul-list footer-list">Home</li></Link>
                      <Link href={"/about"}>  <li  className="ul-list footer-list">About</li></Link>
                      <Link href={"/services"}> <li  className="ul-list footer-list"> Services</li></Link>
                      <Link href={"/contact"}> <li  className="ul-list footer-list">Contact</li></Link>
                    </ul>
                </div>
                <div>
                    <h1>Our Services</h1>
                    <ul>
                        <li  className="ul-list footer-list">Web Designing</li>
                        <li  className="ul-list footer-list">Web Development</li>
                        <li  className="ul-list footer-list"> Marketing</li>
                        <li  className="ul-list footer-list">Product Manager</li>
                    </ul>
                </div>
            </div>
            <div className="media-links">
                <h1>Follow Us</h1>
                <div className="media">
                <Image
                src={"/facebook.png"} 
                alt="social-media"
                width={25}
                height={25}
                className=""
              />
              <a href="">Facebook</a>
                </div>
                <div className="media">
                <Image
                src={"/instagram.png"} 
                alt="socail-media"
                width={25}
                height={25}
                className=""
              />
              <a href="">Instagram</a>
                </div>
               
                <div className="media">
                <Image
                src={"/twitter.png"} 
                alt="social-media"
                width={25}
                height={25}
                className=""
              />
              <a href="">Twitter</a>
                </div>
               
            </div>
            
           
        </div>
    );
}
export default Footer