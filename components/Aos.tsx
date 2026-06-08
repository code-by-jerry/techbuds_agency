"use client";

import { AOS_DEFAULTS } from "@/lib/aos";

type AosAnimation = "fade-up" | "fade-in" | "fade-right" | "fade-left";

type AosProps<T extends React.ElementType = "div"> = {
  as?: T;
  animation?: AosAnimation;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Aos<T extends React.ElementType = "div">({
  as,
  animation = AOS_DEFAULTS.animation,
  delay = 0,
  duration = AOS_DEFAULTS.duration,
  once = AOS_DEFAULTS.once,
  className,
  children,
  ...props
}: AosProps<T>) {
  const Tag = as ?? "div";

  return (
    <Tag
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-once={once ? "true" : "false"}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}

export { aosStagger } from "@/lib/aos";
