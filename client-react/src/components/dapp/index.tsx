import React from "react";

import { Dapp as DappModel } from "src/models/dapp";

type DappProps = {
  dapp: DappModel;
  onClick: (dapp: DappModel) => void;
};

function Dapp(props: DappProps) {
  const { dapp, onClick } = props;
  return <div onClick={() => onClick(dapp)}>{dapp.name}</div>;
}

export default Dapp;
