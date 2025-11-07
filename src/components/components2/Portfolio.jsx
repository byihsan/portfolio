import eidFlyer from "./../../assets/eid_flyer.png"
import yoloFlyer from "./../../assets/yolo_flyer.png"
import placeholder from "./../../assets/placeholder.png"
import nikkahPoster from "./../../assets/nikkahPoster.png"

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-group">
        <h3>Event Flyers ($150)</h3>
        <div className="portfolio-grid">
          <img src={eidFlyer} alt="Eid Flyer" />
          <img src={nikkahPoster} alt="Nikkah Poster" />
          <img src={yoloFlyer} alt="Youth Event" />
          {/* <img src={placeholder} alt="YMCA Flyer" />
          <img src={placeholder} alt="Hospital Flyer" /> */}
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Social Media Graphics (Custom)</h3>
        <div className="portfolio-grid">
          <img src={placeholder} alt="Social 1" />
          <img src={placeholder} alt="Social 2" />
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Business Ads (Custom)</h3>
        <div className="portfolio-grid">
          <img src={placeholder} alt="Car Detailing Ad" />
          <img src={placeholder}  alt="Bakery/Cafe Ad" />
        </div>
      </div>

    </section>
  );
}
