/* eslint-disable @next/next/no-img-element */
import { profile } from "console";

export default function Reviews() {
  const reviewers = [
    {
      name: "Pedro Ibanez",
      specialization: "UI Designer at Google",
      profile: "assets/login/pandok1.png",
      comment:
        "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.",
    },
    {
      name: "Raymond Thual",
      specialization: "Professional Freelancer",
      profile: "assets/login/pandok2.png",
      comment:
        "The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.",
    },
    {
      name: "Yuli Berlian",
      specialization: "IOS Dev at Tokopedia",
      profile: "assets/login/pandok3.png",
      comment: "Just three words : Frispes is Awesome!",
    },
  ];
  return (
    <div className="w-full h-full pt-12 flex justify-center items-center">
      <div className="w-full max-w-[80%] flex flex-col gap-8">
        <div className="w-full flex flex-col gap-2 justify-start items-start text-primary-2">
          <div className="w-full flex flex-row gap-2 justify-start items-center">
            <p>Reviews</p>
            <hr className="w-16 border border-primary-2" />
          </div>
          <h1 className="text-17xl font-semibold">
            What our customers <br /> are saying
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 text-timeless-white pb-32">
          {reviewers.map((reviewer) => (
            <div
              key={reviewer.name}
              className="w-full flex flex-col gap-4 justify-between items-start p-8 h-[350px] bg-primary-2"
            >
              <p className={`${reviewer.comment.length > 250 ? "line-clamp-[7]" : ""}`}>{reviewer.comment}</p>
              <div className={"w-full flex flex-row gap-4 justify-start items-center"}>
                <img
                  src={reviewer.profile}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div className="w-full flex flex-col justify-start items-start">
                  <p className="text-lg font-semibold">{reviewer.name}</p>
                  <p className="text-sm font-[300]">
                    {reviewer.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
