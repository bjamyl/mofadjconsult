export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
};

// Real client quotes, typos corrected in migration per redesign spec §4.
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I am pleased to recommend Mofad-J Consult for their exceptional services in construction consultancy, particularly in the areas of project management, quantity surveying and supervision. Throughout the duration of our collaboration, Mofad-J Consult consistently demonstrated a high level of professionalism, technical expertise, and commitment to excellence. Their team maintained clear and effective communication with all stakeholders, ensuring that project milestones were met without compromising on quality or budgetary constraints.",
    author: "Mohammed-Zafarilahi Abdul-Wahid",
    role: "Land Economist",
    image: "/awaz.png",
  },
  {
    id: 2,
    quote:
      "Working with Mofad-J Consult has been a professional and efficient experience. Their team brings a clear understanding of construction processes, excellent coordination, and a strong commitment to delivering quality outcomes. Throughout the project, they maintained good communication, kept timelines on track, and upheld high standards in both planning and execution. I confidently recommend Mofad-J Consult to anyone in need of reliable and competent construction consultancy services.",
    author: "Abdul-Wahab Abdulai",
    role: "Quantity Surveyor",
    image: "/wahab.png",
  },
  // Placeholder testimonial (demo copy + stock portrait) added to round out the
  // carousel layout — swap for a real client quote and photo before launch.
  {
    id: 3,
    quote:
      "Mofad-J Consult brought clarity to a project that had stalled for months. Their scheduling and cost oversight got us back on track and kept every phase accountable from there on.",
    author: "Kwame Owusu-Ansah",
    role: "Site Manager, Regency Developments",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];
