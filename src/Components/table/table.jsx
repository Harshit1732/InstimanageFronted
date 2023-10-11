// Table.js

import React, { useEffect, useState } from 'react';
import {  RiCheckboxFill, RiBook2Line, RiMore2Fill } from 'react-icons/ri';
import { GoKebabHorizontal } from 'react-icons/go';
import './style.css';
import axios from 'axios';
// let data = [
//   {
//     id: 1,
//     openDate: '2023-01-01',
//     closeDate: '2023-01-10',
//     lastModifiedDate: '2023-01-05',
//     accountBalance: '$1000',
//     status: 'Active',
//     isChecked: false,
//   },
//   {
//     id: 2,
//     openDate: '2023-01-01',
//     closeDate: '2023-01-10',
//     lastModifiedDate: '2023-01-05',
//     accountBalance: '$1000',
//     status: 'Active',
//     isChecked: false,
//   },
//   {
//     id: 3,
//     openDate: '2023-01-01',
//     closeDate: '2023-01-10',
//     lastModifiedDate: '2023-01-05',
//     accountBalance: '$1000',
//     status: 'Active',
//     isChecked: false,
//   },
//   {
//     id: 4,
//     openDate: '2023-01-01',
//     closeDate: '2023-01-10',
//     lastModifiedDate: '2023-01-05',
//     accountBalance: '$1000',
//     status: 'Active',
//     isChecked: false,
//   },
//   {
//     id: 5,
//     openDate: '2023-01-01',
//     closeDate: '2023-01-10',
//     lastModifiedDate: '2023-01-05',
//     accountBalance: '$1000',
//     status: 'Active',
//     isChecked: false,
//   },
//   // Add more data rows here
// ];

const Table = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setdata]= useState([])
  const itemsPerPage = 7;

  const handleCheckboxChange = () => {
    setSelectAll(!selectAll);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleColumnCheckboxClick = () => {
    // Handle column checkbox click here
    setSelectAll(!selectAll);
    data = data.map((row) => ({ ...row, isChecked: !selectAll }));
  };

  const handleRowCheckboxClick = (rowId) => {
    // Handle individual row checkbox click here
    data = data.map((row) => {
      if (row.id === rowId) {
        return { ...row, isChecked: !row.isChecked };
      }
      return row;
    });
    const allChecked = data.every((row) => row.isChecked);
    setSelectAll(allChecked);
  };
  const formateDate=(date)=>{
    var parts = date.split('/');
    var formattedDate = parts[0] + '-' + parts[1] + '-' + parts[2];
    console.log(formattedDate);
    return formattedDate // Output: "5-1-2020"
  }
  const getData=async()=>{
     try{
        await axios.get('http://localhost:8080/getData').then((response)=>{
            setdata(response.data)
        })
     }catch(err){
       console.error('error getting data')
     }

  }

  useEffect(()=>{
   getData();
  },[])

  console.log(data)

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleColumnCheckboxClick}
            />
          </th>
          <th>Open Date</th>
          <th>Close Date</th>
          <th>Last Modified Date</th>
          <th>Account Balance</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = data.slice(startIndex, endIndex);

    return (
      <tbody>
        {visibleData.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                style={{marginLeft:"45%"}}
                type="checkbox"
                checked={row.isChecked}
                onChange={() => handleRowCheckboxClick(row.id)}
              />
            </td>
            <td>{formateDate(new Date(row.openDate).toLocaleDateString())}</td>
            <td>{formateDate(new Date(row.closeDate).toLocaleDateString())}</td>
            <td>{formateDate(new Date(row.modifiedDate).toLocaleDateString())}</td>
            <td>{row.Balance}</td>
            <td className="status-active">{row.Status}</td>
            <td>
              <RiBook2Line className="icon-book" />
              <GoKebabHorizontal className="icon-dots" />
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="pagination">
        <span
          className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </span>
        {pageNumbers.map((pageNum) => (
          <span
            key={pageNum}
            className={pageNum === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </span>
        ))}
        <span
          className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </span>
      </div>
    );
  };

  return (
    <div className="table-container">
      <table>
        {renderTableHeader()}
        {renderTableData()}
      </table>
      {renderPagination()}
    </div>
  );
};

export default Table;
