import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = decodeURIComponent(
        hash.replace("#", "")
      );

      const scrollToSection = () => {
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      /*
       * Gives the new route enough time to render
       * before looking for the service section.
       */
      const timeout = setTimeout(
        scrollToSection,
        100
      );

      return () => clearTimeout(timeout);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;