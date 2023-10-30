import { useContext } from "react";
import { AppContext } from ".";

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
