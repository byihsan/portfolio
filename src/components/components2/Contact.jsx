export default function Contact() {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <select>
          <option>Select Design Type</option>
          <option>Event Flyer</option>
          <option>Social Media Graphic</option>
          <option>Small Business Ad</option>
          <option>Thumbnail</option>
        </select>
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit" className="primary-btn">Submit Order</button>
      </form>
    </section>
  );
}
