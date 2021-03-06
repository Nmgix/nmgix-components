import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Link } from "../../LinkComponent";
import { Cell, CellProps } from "../CellComponent";
import { CellGrid } from "./CellGridComponent";

export default {
  title: "Generic/Cells/Cell Grid",
  component: CellGrid,
} as ComponentMeta<typeof CellGrid>;

const gridData: CellProps[] = [
  {
    children: <Link content='пример ссылки в ячейке' link='#' />,
  },
  {
    children: <Link content='пример ссылки в ячейке' link='#' />,
  },
  {
    children: <Link content='пример ссылки в ячейке' link='#' />,
  },
  {
    children: <Link content='пример ссылки в ячейке' link='#' />,
  },
];

const GenericCellGrid: ComponentStory<typeof CellGrid> = () => (
  <CellGrid>
    {gridData.map((cellData) => (
      <Cell {...cellData} />
    ))}
  </CellGrid>
);

export const DefaultCellGrid = GenericCellGrid.bind({});
