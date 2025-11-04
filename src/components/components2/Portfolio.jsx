import eidFlyer from "./../../assets/eid_flyer.png"
import yoloFlyer from "./../../assets/yolo_flyer.png"
import placeholder from "./../../assets/placeholder.png"

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-group">
        <h3>Event Flyers ($xx–$xxx)</h3>
        <div className="portfolio-grid">
          <img src={eidFlyer} alt="Eid Flyer" />
          <img src={yoloFlyer} alt="Youth Event" />
          <img src={placeholder} alt="YMCA Flyer" />
          <img src={placeholder} alt="Hospital Flyer" />
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Social Media Graphics</h3>
        <div className="portfolio-grid">
          <img src={placeholder} alt="Social 1" />
          <img src={placeholder} alt="Social 2" />
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Small Business Ads</h3>
        <div className="portfolio-grid">
          <img src={placeholder} alt="Car Detailing Ad" />
          <img src={placeholder}  alt="Bakery/Cafe Ad" />
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Thumbnails ($x–$xxx)</h3>
        <div className="portfolio-grid">
          <img src={placeholder} alt="Omar Suleiman" />
          <img src={placeholder} alt="Islamic Reminder" />
        </div>
      </div>
    </section>
  );
}
