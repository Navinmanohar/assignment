import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import TransactionTable from './page/TransactionTable';
import SearchInput from './page/SearchInput';
import Pagination from './page/Pagination';
import Statistics from './Statistics/Statistics';
import TransactionsBarChart from './BarChart/TransactionsBarChart';
import './style.css';

const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" }, // Corrected value
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" }, // Added missing October
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];



const itemsPerPage = 10;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState({ value: 3, label: 'March' });
  const [selecteValue, setSelectedValue] = useState('--select--');
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchText, page]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('https:/assesment-hn6f.onrender.com/api/transactions', {
        params: { month: selectedMonth.value },
      });
      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    setPage(1);
  };

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    if (selecteValue !== '--select--' && text !== '') {
      const filtered = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(text.toLowerCase()) ||
        transaction.description.toLowerCase().includes(text.toLowerCase()) ||
        transaction.price.toString().includes(text)
      );
      setFiltered(filtered);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleFilterChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const visibleTransactions = filtered ? filtered.slice(startIndex, startIndex + itemsPerPage) : transactions.slice(startIndex, startIndex + itemsPerPage);
  const totalItems = filtered ? filtered.length : transactions.length;

  return (
    <div>
      <div className="container">
        <div className="Head">
          <Select
            className="h-select"
            value={selectedMonth}
            onChange={handleMonthChange}
            options={months}
          />
          <div className="t-head"><p className="t-content">Transaction Dashbord</p></div>
          <SearchInput
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            handleFilterChange={handleFilterChange}
            selectedValue={selecteValue}
          />
        </div>
        <TransactionTable transactions={visibleTransactions} searchText={searchText} />
        <Pagination
          page={page}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
        />
        <Statistics selectedMonth={selectedMonth} />
        <TransactionsBarChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
}

export default Transactions;
