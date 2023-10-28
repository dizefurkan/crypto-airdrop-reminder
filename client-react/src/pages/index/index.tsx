import React, { useState } from "react";
import { Network as NetworkModel } from "src/models/network";

import Network from "src/components/network";
import DetailPage from "../detail";

type IndexPageProps = {
  networks: NetworkModel[];
  onNetworkAdd: (network: NetworkModel) => void;
};

function IndexPage(props: IndexPageProps) {
  const { networks, onNetworkAdd } = props;
  const [networkName, setNetworkName] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkModel | null>(
    null
  );

  const onNetworkClick = (network: NetworkModel) => {
    setSelectedNetwork(network);
  };

  const onNetworkClose = () => {
    setSelectedNetwork(null);
  };

  return (
    <div>
      {!selectedNetwork && (
        <form
          className="field-wrapper"
          style={{ marginBottom: "12px" }}
          onSubmit={(e) => {
            e.preventDefault();
            setNetworkName("");
            onNetworkAdd(new NetworkModel({ name: networkName }));
          }}
        >
          <input
            value={networkName}
            placeholder="Network Adini girin"
            onChange={(e) => {
              setNetworkName(e.target.value);
            }}
          />
          <button type="submit">Olustur</button>
        </form>
      )}
      {!selectedNetwork &&
        networks.map((network) => (
          <Network
            key={network.id}
            network={network}
            onClick={onNetworkClick}
          />
        ))}
      {selectedNetwork && (
        <DetailPage network={selectedNetwork} onClose={onNetworkClose} />
      )}
    </div>
  );
}

export default IndexPage;
