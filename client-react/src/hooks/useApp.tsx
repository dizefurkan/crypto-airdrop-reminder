import { useEffect, useState } from "react";

import { Ecosystem as EcosystemModel } from "src/models/ecosystem";

// const NETWORKS_LS_KEY = "networks";

const getNetworksFromLS = () => {
  // const networks = window.localStorage.getItem(NETWORKS_LS_KEY) || [];
  // return JSON.parse(JSON.stringify(networks)).map(network => new Network(network));
  return [];
};

export function useApp() {
  const [ecosystems, setEcosystems] = useState<EcosystemModel[]>([]);

  useEffect(() => {
    setEcosystems(getNetworksFromLS());
  }, []);

  return {
    ecosystems,
    setEcosystems,
  };
}
