
import {
  Mail,
  MapPin,
  Phone,
  Code2,
  Send,
  MessageCircle,
  ExternalLink
} from "lucide-react";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:sahisaha3737@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="section contact-section" id="contact">

      <p className="section-label">GET IN TOUCH</p>

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-subtitle">
        Have a project idea, opportunity, or just want to connect?
        Feel free to reach out. I'd love to hear from you!
      </p>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p className="contact-description">
            I'm always open to discussing new projects,
            creative ideas, and opportunities to be part
            of your vision.
          </p>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Mail size={21} />
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:sahisaha3737@gmail.com">
                sahisaha3737@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <MapPin size={21} />
            </div>
            <div>
              <h4>Location</h4>
              <p>Bhubaneswar, Odisha, India</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Phone size={21} />
            </div>
            <div>
              <h4>Availability</h4>
              <p>Open to opportunities</p>
            </div>
          </div>

          {/* Social Profile Links */}
          <div className="contact-socials">

            <h3>Connect With Me</h3>

            <div className="contact-social-links">

              <a
                href="https://github.com/SahilSaha18"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sahil-saha-03035532a/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={19} />
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/Sahil_Saha49/"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={19} />
                LeetCode
              </a>

            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">

          <h3>
            <MessageCircle size={21} />
            Send Me a Message
          </h3>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
              <Send size={17} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
