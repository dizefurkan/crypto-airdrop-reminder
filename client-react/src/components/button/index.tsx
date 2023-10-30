import React from "react";

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return <button {...props}>{props.children}</button>;
}
