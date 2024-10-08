/**
 *  MotionH1.tsx
 * 
 * reference: https://www.hemantasundaray.com/blog/use-framer-motion-with-nextjs-server-components
 * 
 * example: on src\app\(registrations)\exhibitor-registration\page.tsx --> h1
 * 
 */

"use client"

import React from "react"
import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

type MotionH1Props = HTMLMotionProps<"h1">

const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
    function MotionH1({ children, ...props }, ref) {
        return (
            <motion.h1 ref={ref} {...props}>
                {children}
            </motion.h1>
        )
    }
)

export { MotionH1 }
