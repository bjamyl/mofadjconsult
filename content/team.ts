export type TeamMember = {
  id: string;
  name: string;
  position: string;
  image: string;
  alt: string;
};

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Mohammed Fadeel Froko Jamaldeen, PMP",
    position: "Project Management Consultant",
    image: "/team/bow.jpg",
    alt: "Mohammed Fadeel - Project Management Consultant",
  },
  {
    id: "2",
    name: "Surv. Qamar Abdul-Razak",
    position: "Senior Quantity Surveyor",
    image: "/team/qamar.png",
    alt: "Qamar Abdul-Razak - Quantity Surveyor",
  },
  {
    id: "3",
    name: "Abdul-Wahab Abdulai",
    position: "Junior Quantity Surveyor",
    image: "/team/wahab.jpg",
    alt: "Abdul-Wahab Abdulai - Junior Quantity Surveyor",
  },
  {
    id: "4",
    name: "Salim Issah",
    position: "Civil Engineer",
    image: "/team/jako.jpg",
    alt: "Salim Issah - Civil Engineer",
  },
  {
    id: "5",
    name: "Jamil B. Alhassan",
    position: "IT Expert",
    image: "/team/jamil.jpg",
    alt: "Jamil B. Alhassan - IT Expert",
  },
];
