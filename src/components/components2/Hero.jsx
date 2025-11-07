export default function Hero() {
  return (
    <>
      {/* Top banner */}
      <div className="top-banner">
        Website is currently under construction. Some images may not load.
      </div>

      {/* Hero Section */}
      <section id="hero">
        <h1>Hi, I’m Ihsan.</h1>
        <p className="subtext">Graphic Designer | 8 Years Experience</p>
        <h2 id="charity-note">10% of profits go to charity.</h2>
        <a href="#contact">
          <button className="primary-btn">Order Today</button>
        </a>
        {/* <p className="highlight">*One free design per new client.</p> */}
      </section>
    </>
  );
}
