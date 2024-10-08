import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SpaceType = {
  className?: string;
  rectangle11?: string;
  image?: string;
  artisan?: string;
  corner?: string;
  maskGroup?: string;
  chevronDown?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propTop1?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const Space: NextPage<SpaceType> = ({
  className = "",
  rectangle11,
  image,
  artisan,
  corner,
  maskGroup,
  chevronDown,
  propBackgroundImage,
  propFlex,
  propMinWidth,
  propTop,
  propPadding,
  propTop1,
  propBottom,
}) => {
  const space3Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propBackgroundImage, propFlex, propMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      padding: propPadding,
    };
  }, [propTop, propPadding]);

  const maskGroupIcon1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div
      className={`h-[231px] relative bg-[url('/space-3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-13xl text-color-white font-urbanist ${className}`}
      style={space3Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
        alt=""
        src={rectangle11}
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
        alt=""
        src={image}
      />
      <div
        className="absolute top-[9px] left-[20px] w-[301px] h-[207px] flex flex-row items-start justify-start py-[54px] px-2.5 box-border"
        style={frameDivStyle}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(48px)] bg-gray-500 z-[2]" />
        <div className="flex-1 relative font-semibold z-[3] mq450:text-lgi mq1025:text-7xl">
          <p className="m-0">{artisan}</p>
          <p className="m-0">{corner}</p>
        </div>
      </div>
      <img
        className="absolute top-[8px] left-[239px] w-[90px] h-[43.6px] z-[3]"
        alt=""
        src={maskGroup}
        style={maskGroupIcon1Style}
      />
      <div
        className="absolute bottom-[-4px] left-[0px] bg-darkolivegreen flex flex-col items-center justify-center py-4 px-[13px] z-[3]"
        style={frameDiv1Style}
      >
        <img
          className="w-8 h-[26.2px] relative overflow-hidden shrink-0 object-contain"
          alt=""
          src={chevronDown}
        />
      </div>
    </div>
  );
};

export default Space;