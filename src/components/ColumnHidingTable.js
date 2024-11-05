// snippet
//rfc
import React, { useMemo } from "react";

import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS,GROUP_COLUMNS } from "./columns";
import "./table.css";
import {Checkbox} from "./Checkbox"

export const ColumnHidingTable = () => {
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
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    //es6 shorthand syntax for
    // columns: COLUMNS,
    // data: MOCK_DATA
    columns,
    data,
  });

  return (
    <>
    <div>

        <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        {
            allColumns.map(column => (
                <div key={column.id}>
                        <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />
                            {column.Header}
                        </label>
                </div>
            ))
        }

    </div>
    
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
