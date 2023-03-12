import { useEffect, useState } from "react";
import { BREAKPOINT_DESKTOP } from "../constants/styles";

function useMobileDetect(width = BREAKPOINT_DESKTOP) {
  const [isMobile, setIsMobile] = useState(false);
  const handleSizeChange = () => setIsMobile(window.innerWidth < width);

  useEffect(() => {
    setIsMobile(window.innerWidth < width);
    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isMobile;
}

export default useMobileDetect;
