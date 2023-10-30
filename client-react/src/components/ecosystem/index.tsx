import React from "react";

import { Ecosystem as EcosystemModel } from "src/models/ecosystem";

type EcosystemProps = {
  ecosystem: EcosystemModel;
  onClick: (ecosystem: EcosystemModel) => void;
};

function Ecosystem(props: EcosystemProps) {
  const { ecosystem, onClick } = props;
  return (
    <div>
      <div onClick={() => onClick(ecosystem)}>{ecosystem.name}</div>
    </div>
  );
}

export default Ecosystem;
