import '../styles/components/Contact.css'

export default function ContactWidget() {
    return (
            <div className="contact-widget">
                <h3>Looking to contact Jacob with any business inquiries?</h3>
                <div className="phone-number">Call or Text at <a href="tel:9193845368">(919)-384-5368</a></div>
                <div className="contact-email">Email at <a href= "mailto: jakewhitt@gmail.com">jakewhitt@gmail.com </a></div>
                <div className="linked-or">Connect with Jacob on <a href="https://www.linkedin.com/in/jacob-whittaker-485473111">LinkedIn</a></div>
            </div>
    );
}