import useScrollReveal from "hooks/useScrollReveal";
import { ReactNode } from "react";

interface props {
  children: ReactNode,
  classes: string,
  scrollRevealOptions: scrollReveal.ScrollRevealObjectOptions
}

const ScrollReveal: React.FC<props> = ({ children, classes, scrollRevealOptions }) => {
  const { sectionRef } = useScrollReveal(scrollRevealOptions)

  return (
    <div ref={sectionRef} className={classes}>
      {children}
    </div>
  );
};

export default ScrollReveal;