import React, { memo } from "react";
import TableRow from "./TableRow";

function DataTable({ tableHeading, tableData, renderRow }) {
  return (
    <div>
      <table className="w-full table-fixed">
        <thead className="sticky top-0 z-10">
          <tr>
            {tableHeading &&
              tableHeading.map((hData) => (
                <th
                  key={hData.name}
                  className="border bg-lightblue py-1 text-lg text-white"
                >
                  {hData.name}
                </th>
              ))}
          </tr>
        </thead>
        {/* Add The Data */}
        <tbody className="overflow-y-scroll">
          {tableData &&
            tableData.map((rowData, index) => (
              <TableRow key={index} renderRow={renderRow} rowData={rowData} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(DataTable);
