"use client";

import React, { useState, useMemo, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

interface GridItemProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  goto: string;
  className?: string;
  titleSize?: string;
  subtitleSize?: string;
}

const GridItemV2: React.FC<GridItemProps> = ({
  title,
  subtitle,
  imageSrc,
  goto,
  className = "",
  titleSize = "text-2xl",
  subtitleSize = "text-lg",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const expandAmount = 50;

  const materialMattersContentStyle: CSSProperties = useMemo(
    () => ({
      height: "16rem",
      flex: 1,
      minWidth: "262px",
    }),
    []
  );

  const wrapperVariants = {
    initial: { height: "16rem", marginBottom: 0 },
    hover: {
      height: `calc(16rem + ${expandAmount}px)`,
      marginBottom: `${expandAmount}px`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageContainerVariants = {
    initial: { height: "16rem" },
    hover: {
      height: `calc(16rem + ${expandAmount}px)`,
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
    initial: { opacity: 0.1 },
    hover: {
      opacity: 0.5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const borderVariants = {
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
      bottom: "-0.5rem",
    },
    hover: {
      width: "12rem",
      padding: "1rem 1.5rem",
      bottom: "-0.5rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, width: 0 },
    hover: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
    },
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: {
      x: "calc(100% - 2rem)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={materialMattersContentStyle}
      variants={wrapperVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full overflow-hidden"
        variants={imageContainerVariants}
      >
        <motion.div variants={imageVariants} className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill" // Makes the image fill the container
            objectFit="cover" // Ensures the image covers the container without distortion
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          variants={overlayVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 border-4 border-darkolivegreen pointer-events-none"
              variants={borderVariants}
              initial="initial"
              animate="hover"
              exit="initial"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative font-medium z-20 text-white text-center leading-none">
            <h2 className={`${titleSize} mb-0`}>{title}</h2>
            {subtitle && <p className={`${subtitleSize} mt-1`}>{subtitle}</p>}
          </div>
        </div>
        <img
          className="absolute left-[280px] w-[90px] h-[43.6px] z-30"
          loading="lazy"
          alt=""
          src="/assets/stories-touchpoint/mask.png"
          style={{ top: "11.3px" }}
        />
      </motion.div>

      <motion.div
        className="absolute left-0 bottom-0 bg-darkolivegreen flex items-center justify-between cursor-pointer overflow-hidden"
        variants={oliveContainerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{
          zIndex: 40,
          bottom: "-1rem",
          left: "0",
        }}
        onClick={() => router.push(goto)}
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
        <motion.div variants={iconVariants}>
          <ChevronRightIcon className="w-8 h-6 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GridItemV2;
