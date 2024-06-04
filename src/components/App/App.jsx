/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, Spin } from 'antd'
import FilterTabsTickets from '../FilterTabsTickets/FilterTabsTickets'
import FilterTransfer from '../FilterTransfers/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'
import logo from '../../icon/logoCat.png'
import './App.scss'

const LoadingMessage = ({ message, type }) => (
  <Alert
    message={message}
    type={type}
    style={{
      background: 'white',
      borderColor: '#dd2098',
      color: 'black',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20px',
      width: '500px',
    }}
  />
)

const App = () => {
  const stopSearch = useSelector((state) => state.ticketsData.stop)

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <div className="title">
        <h1>Airline </h1>
        <hr />
        {!stopSearch && (
          <>
            <Spin size="large" style={{ marginTop: '30px' }} />
            <LoadingMessage
              message="Билеты зaгружаются, но часть из них вы уже можете посмотреть!"
              type="warning"
            />
          </>
        )}
        {stopSearch && (
          <LoadingMessage
            message="Все билеты успешно загружены, приятного путешествия!"
            type="success"
          />
        )}
      </div>
      <FilterTransfer />
      <FilterTabsTickets />
      <TicketsList />
    </div>
  )
}

export default App
