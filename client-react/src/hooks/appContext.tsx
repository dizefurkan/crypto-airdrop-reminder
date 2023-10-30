import { createContext } from "react";
import { useApp } from ".";

export const AppContext = createContext<ReturnType<typeof useApp>>({
  ecosystems: [],
  setEcosystems: () => {},
});
