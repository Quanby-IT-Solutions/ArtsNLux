import Carousel from "./Carousel";
import LoginSectionTop from "./exhibitor/LoginSectionTop";

const LoginForm = () => {

  const reviewers = [
    {
      name: "Pedro Ibanez",
      specialization: "UI Designer at Google",
      profile: "/assets/login/pandok1.png",
      comment:
        "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet in there. Thank you for frispes and team.",
    },
    {
      name: "Raymond Thual",
      specialization: "Professional Freelancer",
      profile: "/assets/login/pandok2.png",
      comment:
        "The high-speed internet at frispes was so amazing. I can get the best experience when running a video call with my clients. Frispes has a spacious and safe parking area, that’s what I need because I used to work as a freelancer for a long time.",
    },
    {
      name: "Yuli Berlian",
      specialization: "iOS Dev at Tokopedia",
      profile: "/assets/login/pandok3.png",
      comment: "Just three words: Frispes is Awesome!",
    },
    {
      name: "Maria Gonzalez",
      specialization: "Backend Developer at Amazon",
      profile: "/assets/login/pandok1.png",
      comment:
        "The environment at frispes allows for a productive workflow with all the facilities needed to focus and work. Highly recommended for teams who want to work outside the office.",
    },
    {
      name: "Liam Smith",
      specialization: "Product Manager at Microsoft",
      profile: "/assets/login/pandok2.png",
      comment:
        "Frispes has become my go-to place for brainstorming sessions and deep work. The ambience is inspiring, and the amenities are top-notch.",
    },
    {
      name: "Sophia Lee",
      specialization: "Marketing Specialist at Facebook",
      profile: "/assets/login/pandok3.png",
      comment:
        "Frispes is a unique co-working space with an excellent blend of comfort and functionality. I always enjoy working here.",
    },
  ];


  return (
    <section className="w-full text-primary-2 flex flex-col gap-20">
      <LoginSectionTop />
      <Carousel slides={reviewers} />
    </section>
  );
};

export default LoginForm;
