import React, {useState} from 'react'
import './index.css'

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState('USA') // Initial selected country
  const [data, setData] = useState({}) // Initial data based on selected country

  // Sample data based on country selection
  const countriesData = {
    India: {
      date: 'April 24, 2024',
      industrialProductionhead: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'For the month of January 2024, the Quick Estimates of Index of Industrial Production (IIP) with base 2011-12 stands at 153.0. The Indices of Industrial Production for the Mining, Manufacturing and Electricity sectors for the month of January 2024 stand at 144.1, 150.1 and 197.1 respectively.', // Example data
      cpiInflation:
        'CPI (Consumer Price Index) inflation data in India is available from various sources such as the Ministry of Statistics and Programme Implementation (MoSPI) and the Reserve Bank of India (RBI). ', // Example data
    },
    USA: {
      date: 'April 24, 2024',
      industrialProductionhead: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'US Industrial Production Index is at a current level of 102.66, up from 102.26 last month and down from 102.66 one year ago. This is a change of 0.39% from last month and -0.00% from one year ago.', // Example data
      cpiInflation:
        'CPI (Consumer Price Index) is a measure of the average inflation rate. It measures changes in the prices of goods and services in the US.', // Example data
    },
    UK: {
      date: 'April 24, 2024',
      industrialProductionhead: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'UK Industrial Production Index is at a current level of 95.40, up from 94.30 last month and up from 94.10 one year ago. This is a change of 1.17% from last month and 1.38% from one year ago.', // Example data
      cpiInflation:
        'The Consumer Prices Index (CPI) rose by 3.2% in the 12 months to March 2024, down from 3.4% in February. On a monthly basis, CPI rose by 0.6% in March 2024, compared with a rise of 0.8% in March 2023.', // Example data
    },
  }

  // Function to handle dropdown change
  const handleChange = e => {
    setSelectedCountry(e.target.value)
    setData(countriesData[e.target.value])
  }

  return (
    <div className="dropdown-container">
      <div className="top-part">
        <div>
          <h1 className="head">Recent Releases</h1>
        </div>
        <div>
          <select
            value={selectedCountry}
            className="dropdown"
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="data">
        <p className="date">{data.date}</p>
        <h1 className="heading">{data.industrialProductionhead}</h1>
        <p className="description">{data.industrialProduction}</p>
      </div>
      <div className="data">
        <p className="date">{data.date}</p>
        <h1 className="heading">{data.cpiInflationhead}</h1>
        <p className="description">{data.cpiInflation}</p>
      </div>
    </div>
  )
}

export default Country
