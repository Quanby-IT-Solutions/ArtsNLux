"use client";

import React, { useState, useMemo, CSSProperties } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export interface MaterialMattersContentProps {
  className?: string;
  space1?: string;
  design?: string;
  focus1?: string;
  maskGroup?: string;
  chevronDown?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propTop1?: CSSProperties["top"];
  propTop2?: CSSProperties["top"];
}


const MaterialMattersContent: FC<MaterialMattersContentProps> = ({
  className = "",
  space1,
  design,
  focus1,
  maskGroup,
  chevronDown,
  propHeight,
  propFlex,
  propMinWidth,
  propHeight1,
  propTop,
  propPadding,
  propTop1,
  propTop2,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const materialMattersContentStyle: CSSProperties = useMemo(
    () => ({
      height: propHeight,
      flex: propFlex,
      minWidth: propMinWidth,
    }),
    [propHeight, propFlex, propMinWidth]
  );

  const expandAmount = 50; // The amount of pixels to expand vertically

  const wrapperVariants = {
    initial: {
      height: propHeight1 || "auto",
      marginBottom: 0,
    },
    hover: {
      height: `calc(${propHeight1} + ${expandAmount}px)`,
      marginBottom: `${expandAmount}px`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageContainerVariants = {
    initial: { height: propHeight1 || "auto" },
    hover: {
      height: `calc(${propHeight1} + ${expandAmount}px)`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const oliveContainerVariants = {
    initial: {
      width: "3.5rem",
      padding: "1rem 0.75rem",
      bottom: "-0.5rem", // Adjusted to move the container more towards the bottom
    },
    hover: {
      width: "16rem",
      padding: "1rem 1.5rem",
      bottom: "-0.5rem", // Keep the bottom offset even on hover
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, width: 0 },
    hover: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 }, // Added a small delay
    },
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: {
      x: "calc(100% - 2rem)", // Move icon to the right, accounting for its own width
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const router = useRouter();

  return (
    <motion.div
      className={`relative ${className}`}
      style={materialMattersContentStyle}
      variants={wrapperVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
    >
      <motion.div
        className="relative w-full overflow-hidden"
        variants={imageContainerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <motion.div className="w-full h-full overflow-hidden" variants={imageVariants}>
          <img className="w-full h-full object-cover" alt="" src={space1} />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"
              variants={overlayVariants}
              initial="initial"
              animate="hover"
              exit="initial"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 border-4 border-darkolivegreen pointer-events-none"
              variants={overlayVariants}
              initial="initial"
              animate="hover"
              exit="initial"
            />
          )}
        </AnimatePresence>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: propTop, padding: propPadding }}
        >
          <div className="relative font-semibold z-10 text-white text-center">
            <p className="m-0">{design}</p>
            <p className="m-0">{focus1}</p>
          </div>
        </div>
        <img
          className="absolute left-[239px] w-[90px] h-[43.6px] z-10"
          loading="lazy"
          alt=""
          src={maskGroup}
          style={{ top: propTop1 }}
        />
      </motion.div>

      {/* Hoverable Dark Olive Green Container with "Explore" Text */}
      <motion.div
        className="absolute left-0 bottom-0 bg-darkolivegreen flex items-center justify-between cursor-pointer overflow-hidden"
        variants={oliveContainerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          zIndex: 0, // Ensure this is higher than any other z-index
          bottom: "-1rem", // Adjusted to move more towards the bottom
          left: "0", // Position on the left
        }}
        onClick={() => router.push('/stories-touchpoint-selection')}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              variants={textVariants}
              initial="initial"
              animate="hover"
              exit="initial"
              className="text-white font-urbanist text-lg whitespace-nowrap overflow-hidden flex-grow text-center"
            >
              Explore
            </motion.span>
          )}
        </AnimatePresence>
        {/* Chevron Down Image */}
        <motion.img
          className="w-8 h-6 relative overflow-hidden shrink-0 object-contain"
          variants={iconVariants}
          alt=""
          src={chevronDown}
        />
      </motion.div>
    </motion.div>
  );
};

export default MaterialMattersContent;
