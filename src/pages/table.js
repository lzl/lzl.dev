import { useMemo } from 'react'
import { useTable } from 'react-table'

import LeftRight from '@/components/LeftRight'
import Menu, { profileMenu } from '@/components/Menu'
import makeData from '@/utils/makeData'

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
      <table
        className="w-full min-w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead className="table w-full table-fixed">
          {headerGroups.map((headerGroup, groupIndex) => {
            // console.log('headerGroup:', headerGroup)
            return (
              <tr
                className="table w-full table-fixed"
                key={groupIndex}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => {
                  // console.log('column:', column)
                  return (
                    <th
                      className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50"
                      key={column.id}
                      {...column.getHeaderProps()}
                    >
                      {column.render('Header')}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody
          className="block w-full overflow-auto bg-white divide-y divide-gray-200"
          style={{ maxHeight: 'calc(100vh - 32px - 40px)' }}
          {...getTableBodyProps()}
        >
          {rows.map((row) => {
            // console.log('row:', row)
            prepareRow(row)
            return (
              <tr
                className="table w-full table-fixed"
                key={row.id}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, cellIndex) => {
                  // console.log('cell:', cell)
                  return (
                    <td
                      className="px-6 py-4 whitespace-no-wrap"
                      key={cellIndex}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

  // return (
  //   <table {...getTableProps()}>
  //     <thead>
  //       {headerGroups.map((headerGroup, groupIndex) => {
  //         // console.log('headerGroup:', headerGroup)
  //         return (
  //           <tr key={groupIndex} {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map((column) => {
  //               // console.log('column:', column)
  //               return (
  //                 <th key={column.id} {...column.getHeaderProps()}>
  //                   {column.render('Header')}
  //                 </th>
  //               )
  //             })}
  //           </tr>
  //         )
  //       })}
  //     </thead>
  //     <tbody {...getTableBodyProps()}>
  //       {rows.map((row) => {
  //         // console.log('row:', row)
  //         prepareRow(row)
  //         return (
  //           <tr key={row.id} {...row.getRowProps()}>
  //             {row.cells.map((cell, cellIndex) => {
  //               // console.log('cell:', cell)
  //               return (
  //                 <td key={cellIndex} {...cell.getCellProps()}>
  //                   {cell.render('Cell')}
  //                 </td>
  //               )
  //             })}
  //           </tr>
  //         )
  //       })}
  //     </tbody>
  //   </table>
  // )
}

function Right() {
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'Name',
  //       columns: [
  //         {
  //           Header: 'First Name',
  //           accessor: 'firstName',
  //         },
  //         {
  //           Header: 'Last Name',
  //           accessor: 'lastName',
  //         },
  //       ],
  //     },
  //     {
  //       Header: 'Info',
  //       columns: [
  //         {
  //           Header: 'Age',
  //           accessor: 'age',
  //         },
  //         {
  //           Header: 'Visits',
  //           accessor: 'visits',
  //         },
  //         {
  //           Header: 'Status',
  //           accessor: 'status',
  //         },
  //         {
  //           Header: 'Profile Progress',
  //           accessor: 'progress',
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // )

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  )

  const data = useMemo(() => makeData(20), [])

  return <Table columns={columns} data={data} />
}

export default function TablePage() {
  return <LeftRight left={<Menu data={profileMenu} />} right={<Right />} full />
}
