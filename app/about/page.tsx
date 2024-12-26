import Image from "next/image";

function About() {
    return(
    <div>
    
    <title>About Us | Web Development & Design</title>
    <meta name="description" content="Learn more about our web development and design services" />


  <section>
    <div className="about-content">
      <h1 className="pages-headings">About Us</h1>

      <p>
        Welcome to <strong>SB AI</strong> – where creativity meets functionality. We are a team of passionate web developers and designers dedicated to delivering high-quality digital experiences. Our mission is to help businesses grow by creating beautiful, user-friendly websites that perform excellently across all devices and platforms.
      </p>

      <div className="about-image">
      <Image src={"/why-us.png"} alt="logo" height={400} width={400}/>
      </div>
      <h2>Our Story</h2>
      <p>
        Founded in 2024, we started as a small team of web enthusiasts with a shared vision: to provide outstanding web solutions to businesses of all sizes. Over the years,  we have expanded our services and expertise, staying up-to-date with the latest trends and technologies. Today, we work with clients from various industries, helping them achieve their online goals.
      </p>

      <h2 >Our Services</h2>
      <ul className="ul-list">
        <li  className="ul-list"><strong>Web Development:</strong> Custom-built websites that are fast, secure, and scalable.</li>
        <li  className="ul-list"><strong>Web Design:</strong> Visually appealing designs that engage users and enhance brand identity.</li>
        <li  className="ul-list"><strong>UX/UI Design:</strong> Creating seamless and intuitive user experiences with smart interfaces.</li>
        <li  className="ul-list"><strong>E-commerce Solutions:</strong> Developing powerful online stores that drive sales and conversions.</li>
        <li  className="ul-list"><strong>SEO Optimization:</strong> Ensuring your website ranks high on search engines and attracts organic traffic.</li>
        <li  className="ul-list"><strong>Website Maintenance:</strong> Ongoing support to keep your website updated and running smoothly.</li>
      </ul>

      <h2 >Our Values</h2>
      <p >We believe in:</p>
      <ul>
        <li  className="ul-list" ><strong>Innovation:</strong> Always pushing the boundaries of design and development to deliver creative, forward-thinking solutions.</li>
        <li  className="ul-list"><strong>Quality:</strong> We never compromise on the quality of our work, ensuring each project is meticulously crafted and tested.</li>
        <li  className="ul-list"><strong>Customer Success:</strong> Our clitents satisfaction is our top priority. We work closely with you to ensure your vision is realized.</li>
        <li  className="ul-list" ><strong>Collaboration:</strong> A collaborative approach between our team and clients to bring ideas to life.</li>
      </ul>

      <h2 >Why Choose Us?</h2>
      <p>
        At <strong>SB AI</strong>, we dont just build websites we create digital experiences tailored to your business needs. Our team is committed to delivering results that
         exceed your expectations, whether you are  launching a new site, updating an existing one, or seeking expert advice. Let us help you stand out in the digital world!
      </p>
    </div>
  </section>
</div>
);
}

export default About
