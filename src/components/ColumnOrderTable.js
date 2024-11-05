// snippet
//rfc
import React, { useMemo } from "react";

import { useTable,useColumnOrder } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS,GROUP_COLUMNS } from "./columns";
import "./table.css";

export const ColumnOrderTable = () => {
  //use table hooks
  //reuse to do something ever time
  //for single column
  const columns = useMemo(() => COLUMNS, []);
  // for group column
  // const columns = useMemo(() => GROUP_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  //use table hooks
  //   const tableInstance = useTable({
  //     //es6 shorthand syntax for
  //     // columns: COLUMNS,
  //     // data: MOCK_DATA
  //     columns,
  //     data,
  //   });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable({
    //es6 shorthand syntax for
    // columns: COLUMNS,
    // data: MOCK_DATA
    columns,
    data,
  },
  useColumnOrder
);


const changeOrder = () => {
    setColumnOrder([
        'id',
        'first_Name',
        'last_Name',
        'phone',
        'country',
        'date_of_birth',
    ])
}

  return (
    <>
    <button  onClick={changeOrder}>Change Column Order</button>
    <table {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    </>
  );
};
