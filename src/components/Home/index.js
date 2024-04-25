import './index.css'

import {CiCalendar} from 'react-icons/ci'
import {FaBell, FaRegClock} from 'react-icons/fa'

import {MdLibraryBooks} from 'react-icons/md'
import CardSlider from '../CardSlider'

function Home() {
  return (
    <div className="home-container">
      <div>
        <nav>
          <div className="nav-top">
            <div className="name">
              <h1 className="wish">Good Afternoon, Akshay</h1>
              <p className="sub">You are subscribed to Retail Plan.</p>
            </div>
            <div className="date-time">
              <div className="calender-container">
                <CiCalendar className="calender" />
                <p className="day">Today, 23 April</p>
              </div>
              <div className="time-container">
                <FaRegClock className="clock" />
                <p className="time">23:00</p>
              </div>

              <FaBell className="bell" />
            </div>
          </div>
        </nav>
        <div className="content">
          <div className="card-container">
            <div className="card">
              <MdLibraryBooks name="color" color="green" className="book" />
              <h2>My Saved Library1</h2>
              <p>dd-mm-yyyy</p>
            </div>
            <div className="card">
              <MdLibraryBooks name="color" color="darkblue" className="book" />
              <h2>My Saved Library2</h2>
              <p>dd-mm-yyyy</p>
            </div>
            <div className="card">
              <MdLibraryBooks name="color" color="yellow" className="book" />
              <h2>My Saved Library3</h2>
              <p>dd-mm-yyyy</p>
            </div>
            <div className="card">
              <MdLibraryBooks name="color" color="blue" className="book" />
              <h2>My Saved Library4</h2>
              <p>dd-mm-yyyy</p>
            </div>
            <div className="card">
              <MdLibraryBooks name="color" color="violet" className="book" />
              <h2>My Saved Library5</h2>
              <p>dd-mm-yyyy</p>
            </div>
          </div>
        </div>
      </div>
      <CardSlider />
    </div>
  )
}

export default Home
