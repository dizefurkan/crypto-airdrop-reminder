import { observer } from "mobx-react";
import React, { useState } from "react";
import { Dapp as DappModel } from "src/models/dapp";

type FormDappProps = {
  onSave: (dapp: DappModel) => void;
  onCancel: () => void;
};

function FormDapp(props: FormDappProps) {
  const [dapp] = useState(new DappModel({}));

  const onFrequencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dapp.frequency = event.target.value as keyof typeof DappModel.FREQUENCIES;
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dapp.name = event.target.value;
  };

  const onSave = () => {
    props.onSave(dapp);
  };

  const onCancel = () => {
    props.onCancel();
  };

  return (
    <div>
      <select value={dapp.frequency} onChange={onFrequencyChange}>
        {Object.keys(DappModel.FREQUENCIES).map((key) => {
          const text = DappModel.getFrequencyText(
            key as keyof typeof DappModel.FREQUENCIES
          );

          return (
            <option key={key} value={key}>
              {text}
            </option>
          );
        })}
      </select>
      <input
        placeholder="Enter Dapp Name"
        value={dapp.name}
        onChange={onNameChange}
      />

      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default observer(FormDapp);
