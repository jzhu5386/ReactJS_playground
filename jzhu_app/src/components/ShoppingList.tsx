/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent } from "react";

export interface Produce {
  title: string;
  isFruit: boolean;
  id: number;
}

export function ShoppingList(props: any) {
  return (
    <ul>
      {props.produce.map((fruit: Produce) => (
        <ProduceListItem key={fruit.id} produce={fruit}></ProduceListItem>
      ))}
    </ul>
  );
}

function ProduceListItem(props: any) {
  function handleClick(
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    id: number
  ) {
    console.log(e);
    console.log(`remove ${id}`);
  }

  return (
    <li
      onClick={(e) => handleClick(e, props.produce.id)}
      key={props.produce.id}
      style={{ color: props.produce.isFruit ? "red" : "green" }}
    >
      {props.produce.title}
    </li>
  );
}
