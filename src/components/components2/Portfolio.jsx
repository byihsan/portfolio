import eidFlyer from "./../../assets/eid_flyer.png"
import yoloFlyer from "./../../assets/yolo_flyer.png"

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="portfolio-group">
        <h3>Event Flyers ($15–$30)</h3>
        <div className="portfolio-grid">
          <img src={eidFlyer} alt="Eid Flyer" />
          <img src={yoloFlyer} alt="Youth Event" />
          {/* <img src="public/images/flyer3.jpg" alt="YMCA Flyer" />
          <img src="public/images/flyer4.jpg" alt="Hospital Flyer" /> */}
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Social Media Graphics</h3>
        <div className="portfolio-grid">
          <img src="public/images/social1.jpg" alt="Social 1" />
          <img src="public/images/social2.jpg" alt="Social 2" />
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Small Business Ads</h3>
        <div className="portfolio-grid">
          <img src="public/images/ad1.jpg" alt="Bakery Ad" />
          <img src="public/images/ad2.jpg" alt="Cafe Ad" />
        </div>
      </div>

      <div className="portfolio-group">
        <h3>Thumbnails ($5–$15)</h3>
        <div className="portfolio-grid">
          <img src="public/images/thumb1.jpg" alt="Omar Suleiman" />
          <img src="public/images/thumb2.jpg" alt="Islamic Reminder" />
        </div>
      </div>
    </section>
  );
}
