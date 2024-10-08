type PartnerCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  imgClass: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({ title, imgSrc, imgAlt, imgClass }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-48 w-full text-3xl font-bold text-center text-stone-800 max-md:mt-10 max-md:max-w-full">
      <div>{title}</div>
      <img loading="lazy" src={imgSrc} alt={imgAlt} className={`object-contain mt-7 ${imgClass}`} />
    </div>
  );
};

export default PartnerCard;