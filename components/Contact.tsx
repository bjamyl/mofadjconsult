import { ContactCard, type ContactInfo } from "./ContactCard";
import { ContactForm } from "./ContactForm";
const contactData: ContactInfo[] = [
  {
    type: "email",
    title: "Email us",
    primaryInfo: "mofad@mofadjconsult.com",
    actionHref: "mailto:mofad@mofadjconsult.com"
  },
  {
    type: "phone",
    title: "Call us",
    primaryInfo: "+233-552-515-269 ",
    actionHref:"tel:+233552515269"
  },
  {
    type: "location",
    title: "Our Location",
    primaryInfo: "Salem Estate, Adjiringanor,",
    secondaryInfo: "MV9H+M79, Estate High St, Accra",
  },
  {
    type: "chat",
    title: "Live WhatsApp chat",
    primaryInfo: "Talk to us directly on WhatsApp",
    actionHref: "https://wa.me/233552515269?text=Hello%20I%20have%20a%20question",
  },
];

export default function ContactSection() {
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactData.map((contact, index) => (
          <ContactCard
            key={index}
            contact={contact}
            className="hover:shadow-md transition-shadow duration-200"
          />
        ))}
      </div>
    </div>
  );
}
