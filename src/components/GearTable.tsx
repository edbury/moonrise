import React from "react";
import type { FunctionComponent, ReactElement, ReactNode } from "react";
import styles from "./GearTable.module.scss";

export type Props = {
  /**
   * Content to be rendered within the GearTable. Avoid using direct children, put child content
   * within the provided GearTable static components (GearTable.Content and GearTable.Actions)
   */
  children: ReactElement | ReactElement[];

  /**
   * The title or headline of the GearTable. If GearTable.Content is not present it is required.
   */
  title?: string;
};

interface PropsItem {
  name: string;
  cost: number;
  slots: string;
  avail: number;
}

export type StaticComponents = {
  Item: typeof Item;
};

const Item = ({ name, cost, slots, avail }: PropsItem) => (
  <tr>
    <td>{ name }</td>
    <td>Ob { cost }</td>
    <td>{ slots }</td>
    <td className={styles.number}>{ avail }</td>
  </tr>
);

const GearTable: FunctionComponent<Props> & StaticComponents = (props) => {
  const { children, title } = props;

  return (
    <table className={styles.root}>
      <caption className={styles.caption}>{ title }</caption>
      <thead>
        <tr>
          <th scope="column">
            Item
          </th>
          <th scope="column">
            Cost
          </th>
          <th scope="column">
            Slots
          </th>
          <th className={styles.number} scope="column">
            Avail.
          </th>
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  );
};

GearTable.Item = Item;

export default GearTable;
