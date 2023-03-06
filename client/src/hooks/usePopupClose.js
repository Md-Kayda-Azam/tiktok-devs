import { useEffect } from "react";

export const usePopupClose = (ref, setRef) => {
  useEffect(() => {
    document.addEventListener("mousedown", function (e) {
      if (ref.current && !ref?.current?.contains(e.target)) {
        setRef(false);
      }
    });
  }, [ref.current]);
};
