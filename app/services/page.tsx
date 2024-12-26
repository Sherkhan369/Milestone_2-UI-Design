import Image from "next/image";

export default function Services() {
    return (
      <div className="all-pages">
        <div className="all-pages-contens">
          <h1 className="pages-headings">
            Our Web Development & Design Services
          </h1>
  
          <div className="web-services">
            {/* Web Development Service */}
            <div className="web-images">
              <Image
                src={"/web.png"} 
                alt="Web Development"
                width={500}
                height={300}
                className="images"
              />
              <h2>Web Development</h2>
              <p>
                We create fast, scalable, and responsive websites tailored to your business needs.
                Whether you are looking for a simple landing page or a complex web app, we have got you covered.
              </p>
              <ul>
                <li className="ul-list">Custom Web Development</li>
                <li  className="ul-list">Responsive Design</li>
                <li  className="ul-list">Web Application Development</li>
                <li  className="ul-list">API Integrations</li>
              </ul>
            </div>
  
            {/* Web Design Service */}
            <div className="web-images">
              <Image
                src={"/design.png"} 
                alt="Web Design"
                width={500}
                height={300}
                className="images"
              />
              <h2 >Web Design</h2>
              <p >
                Our expert designers build aesthetically pleasing and user-friendly websites.
                We focus on delivering intuitive designs that improve user experience and drive conversions.
              </p>
              <ul >
                <li  className="ul-list">Custom Web Design</li>
                <li  className="ul-list">UI/UX Design</li>
                <li  className="ul-list">Responsive Design</li>
                <li  className="ul-list">Wireframing & Prototyping</li>
              </ul>
            </div>
          </div>
  
          <div className="web-services">
            {/* SEO Optimization Service */}
            <div className="web-images">
              <Image
                src={"/seo.png"} 
                alt="SEO Optimization"
                width={500}
                height={300}
                className="images"
              />
              <h2>SEO Optimization</h2>
              <p >
                Our SEO experts ensure that your website ranks higher on search engines,
                helping you attract more visitors and convert them into customers.
              </p>
              <ul >
                <li  className="ul-list">On-Page SEO</li>
                <li  className="ul-list">Off-Page SEO</li>
                <li  className="ul-list">Keyword Research</li>
                <li  className="ul-list">Analytics & Reporting</li>
              </ul>
            </div>
  
            {/* E-commerce Solutions Service */}
            <div className="web-images">
              <Image
                src={"/image.png"} 
                alt="E-commerce Solutions"
                width={400}
                height={300}
                className="images"
              />
              <h2 >E-commerce Solutions</h2>
              <p>
                We help you build a fully functional e-commerce platform to sell your products online.
                From setup to design and ongoing support, we provide complete e-commerce solutions.
              </p>
              <ul>
                <li  className="ul-list">Custom E-commerce Development</li>
                <li  className="ul-list">Payment Gateway Integration</li>
                <li  className="ul-list">Product Catalog Management</li>
                <li  className="ul-list">Shopify/WooCommerce Expertise</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
    );
  }