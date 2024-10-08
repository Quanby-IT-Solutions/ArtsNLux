// src/components/forms/exhibitor/step-1/EventSelection.tsx

import { ExhibitorInfo } from "@/interfaces/exhibitor";
import ProgressBar from "@/components/ui/ProgressBar";
import FeatureCard from "@/components/ui/FeatureCard";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface EventSelectionProps {
  data: ExhibitorInfo;
  updateData: (data: Partial<ExhibitorInfo>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const EventSelection: React.FC<EventSelectionProps> = ({
  data,
  updateData,
  handleNext,
  handlePrev,
}) => {
  const events = ["Manila FAME", "International Trade Expo", "Local Design Week"];
  const participationTypes = ["Exhibitor", "Co-Exhibitor", "Sponsor", "Partner"];

  const features = [
    {
      title: "Showcase your collection offline and online!",
      description:
        "Take the opportunity to show off your newest collections and catch the eye of potential buyers, 365 days a year!",
      bgColor: "bg-white",
      textColor: "text-stone-800",
    },
    {
      title: "Engage in product development and capability building programs",
      description:
        "Innovate and collaborate with product specialists to come up with new designs; and expound your knowledge in business and design thinking.",
      bgColor: "bg-stone-600",
      textColor: "text-white",
    },
    {
      title: "Networking opportunities",
      description:
        "Industry influence's, designers, journalists come together under one roof to experience Manila FAME.",
      bgColor: "bg-white",
      textColor: "text-stone-800",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col justify-center self-start mt-24 max-w-full w-[555px] max-md:mt-10">
        <h2 className="w-full text-4xl font-bold rounded-none text-stone-800 max-md:pr-5">
          Exhibit with FAME+
        </h2>
        <ProgressBar current={1} total={7} />
      </section>

      {/* Feature Cards Section */}
      <section className="self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <form className="flex flex-col justify-center mt-8 max-w-full text-lg w-[555px] max-md:mt-10">
        {/* Event Selection */}
        <fieldset className="flex flex-col w-full font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
          <legend className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
            Participation Type
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
          </legend>

          <label className="mt-4">
            Participating in what event*:
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={data.event || ""}
              onChange={(e) => updateData({ event: e.target.value })}
            >
              <option value="" disabled>Select event</option>
              {events.map((event, index) => (
                <option key={index} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-4">
            Participating as*:
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={data.participationType || ""}
              onChange={(e) => updateData({ participationType: e.target.value })}
            >
              <option value="" disabled>Select participation type</option>
              {participationTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </fieldset>

        {/* Use NavigationButtons with proper handlers */}
        <NavigationButtons
          handlePrev={handlePrev}
          handleNext={handleNext}
          isSubmit={false}
          showPrev={false}
          showNext={true}
        />
      </form>
    </main>
  );
};

export default EventSelection;