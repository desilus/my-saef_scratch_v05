import React from 'react'

const Table = ({
  columns,
}: {
  columns: { header: string; accessor: string; className?: string }[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          {columns.map(col=>(
            <th>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table