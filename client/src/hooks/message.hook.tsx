import { useCallback } from "react";

export const useMessage = (): any => {
  return useCallback((text: any) => {
    if (window.M && text) {
      window.M.toast({ html: text });
    }
  }, []);
};
