// snippet
//rfc
import React, { useMemo } from "react";

import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS,GROUP_COLUMNS } from "./columns";
import "./table.css";
import { Checkbox } from "./Checkbox";

export const RowSelectionTable = () => {
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
    selectedFlatRows,
  } = useTable({
    //es6 shorthand syntax for
    // columns: COLUMNS,
    // data: MOCK_DATA
    columns,
    data,
  }, useRowSelect,
  (hooks) => {
    hooks.visibleColumns.push((columns) => {
        return [
            {
                id: 'selection',
                Header: ({ getToggleAllRowsSelectedProps }) => (
                    <Checkbox {...getToggleAllRowsSelectedProps()} />
                ),
                
                Cell: ({row}) =>(
                    <Checkbox {...row.getToggleRowSelectedProps()}/>
                )
            },
            ...columns
        ]
    })
  }
);

  const firstPageRows = rows.slice(0,10);

  return (
    <>
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
        {firstPageRows.map((row) => {
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
      <pre>
        <code>
            {JSON.stringify(
                {selectedFlatRows: selectedFlatRows.map((row) => row.original),
                },
                null,
                2
            )}
        </code>
    </pre>
    </table>
  
    </>
  );
};
