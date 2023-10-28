import React, { useState, useEffect } from "react";

import Network from "./components/network/index";

import { Network as NetworkModel } from "src/models/network";
import IndexPage from "./pages/index";

// const NETWORKS_LS_KEY = "networks";

const getNetworksFromLS = () => {
  // const networks = window.localStorage.getItem(NETWORKS_LS_KEY) || [];
  // return JSON.parse(JSON.stringify(networks)).map(network => new Network(network));
  return [];
};

function App() {
  const [networks, setNetworks] = useState<NetworkModel[]>([]);

  useEffect(() => {
    setNetworks(getNetworksFromLS());
  }, []);

  return (
    <>
      <section className="page">
        <IndexPage
          networks={networks}
          onNetworkAdd={(network) => {
            setNetworks((prev) => {
              const newValue = prev.concat([network]);

              return newValue;
            });
          }}
        />
      </section>
    </>
  );
}

export default App;
