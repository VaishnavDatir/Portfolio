import { useEffect, useState } from "react";

const useScroll = (offset = 24) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > offset);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return scrolled;
};

export default useScroll;
