import { useEffect, useRef } from "react";

const useScrollReveal = (scrollRevealOptions: scrollReveal.ScrollRevealObjectOptions) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        animate()
    }, [])

    const animate = async () => {
        if (sectionRef.current) {
          const scrollReveal = (await import("scrollreveal")).default
          scrollReveal().reveal(sectionRef.current, scrollRevealOptions)
        }
    }

    return {sectionRef}
}

export default useScrollReveal