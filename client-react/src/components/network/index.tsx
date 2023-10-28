import React from "react";

import { Network as NetworkModel } from "src/models/network";

type NetworkProps = {
  network: NetworkModel;
  onClick: (network: NetworkModel) => void;
};

function Network(props: NetworkProps) {
  const { network, onClick } = props;
  return (
    <div>
      <div onClick={() => onClick(network)}>{network.name}</div>
    </div>
  );
}

export default Network;
