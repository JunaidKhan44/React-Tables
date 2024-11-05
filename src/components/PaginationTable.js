// snippet
//rfc
import React, { useMemo } from "react";

import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS,GROUP_COLUMNS } from "./columns";
import "./table.css";

export const PaginationTable = () => {
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
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setPageSize,
    prepareRow,
  } = useTable({
    //es6 shorthand syntax for
    // columns: COLUMNS,
    // data: MOCK_DATA
    columns,
    data,
  }, usePagination);

  const {pageIndex, pageSize} = state

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
        {page.map((row) => {
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
    </table>
    <div>
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page {' '}
        <input type='number' defaultValue={pageIndex+1}
        onChange={e =>{
          const pageNumber  = e.target.value ? Number(e.target.value) -1: 0
          gotoPage(pageNumber)
        }} style={{width: '50px'}}
        />
        <select  value={pageSize} onChange={e => setPageSize(Number(e.target.value))}> 
          {
            [10,25,50].map(pageSize => (
              <option key = {pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
            ))
          }
        </select>
      </span>
        
       <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>

        <button onClick={()=> gotoPage(pageCount -1)} disabled={!canNextPage}>{'>>'}</button>

    </div>
    </>
  );
};
