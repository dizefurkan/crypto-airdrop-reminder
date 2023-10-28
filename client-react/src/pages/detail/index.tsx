import React, { useState } from "react";
import Dapp from "src/components/dapp";

import { Network } from "src/models/network";
import { Dapp as DappModel } from "src/models/dapp";

import FormDapp from "src/components/form-dapp";

type DetailPageProps = {
  network: Network;
  onClose: () => void;
};

function DetailPage(props: DetailPageProps) {
  const { network, onClose: onNetworkClose } = props;
  const [selectedDapp, setSelectedDapp] = useState<DappModel | null>(null);
  const [isFormDappVisible, setFormDappVisibility] = useState(false);

  const onDappClick = (dapp: DappModel) => {
    setSelectedDapp(dapp);
  };

  const onDappBackClick = () => {
    setSelectedDapp(null);
  };

  const onAddNewDappClick = () => {};

  return (
    <div>
      <div>
        <button onClick={onNetworkClose}>back to networks</button>
      </div>
      <div style={{ marginTop: "12px" }}>{network.name} Network Detail</div>
      {!!selectedDapp && (
        <div>
          <button onClick={onDappBackClick}>back to dapps</button>
        </div>
      )}
      {!selectedDapp &&
        network.dapps.map((dapp) => (
          <Dapp key={dapp.id} dapp={dapp} onClick={onDappClick} />
        ))}
      {!!selectedDapp && (
        <div>
          <div>{selectedDapp.name}</div>
          <div>{selectedDapp.frequency}</div>
        </div>
      )}
      {!isFormDappVisible && (
        <button
          onClick={() => {
            setFormDappVisibility(true);
          }}
        >
          + Add New Dapp
        </button>
      )}
      {isFormDappVisible && (
        <FormDapp
          onCancel={() => {
            setFormDappVisibility(false);
          }}
          onSave={(dapp) => {
            network.dapps.push(dapp);
            setFormDappVisibility(false);
          }}
        />
      )}
    </div>
  );
}

export default DetailPage;
