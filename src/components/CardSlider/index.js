import {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

import Country from '../Country'

const cardItems = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023091/bank_jeulzz.webp',
    title: 'Banking Industry',
    description:
      'Industry that deals with financial transactions, including deposits, loans, investments, and currency exchange.',
  },

  {
    id: 2,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023137/business_hltbce.png',
    title: 'Essentials of Business',
    description:
      'Business involves the creation, distribution, and exchange of goods and services to meet the needs and wants of consumers.',
  },

  {
    id: 3,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023169/capex_c8mrm9.png',
    title: 'The Central Capex Surge',
    description:
      'Central Capex Surge refers to a significant increase in capital expenditures by central governments or organizations.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023198/hotelsecurity_qgscne.webp',
    title: 'Hotel Security Measures',
    description:
      'Hotel security encompasses the protocols and measures put in place to ensure the safety and property within a hotel establishment.',
  },

  {
    id: 5,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023258/retail_eepfy9.png',
    title: 'Retail Landscape Evolution',
    description:
      'Retail refers to the sale of goods and services directly to consumers through various channels, and mobile apps',
  },

  {
    id: 6,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023289/onlinelearning_kaozt3.avif',
    title: 'Online Learning Revolution',
    description:
      'Refers to the use of digital technology to deliver educational content and facilitate learning outside the traditional classroom setting.',
  },

  {
    id: 7,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023344/onlineserviceshumanizeai_cw3kdf.png',
    title: 'Humanizing AI through Online Services',
    description:
      'Online services are increasingly incorporating AI technologies to enhance user experience and personalize interactions.',
  },

  {
    id: 8,
    image:
      'https://res.cloudinary.com/dif7fb7el/image/upload/v1714023375/stock_dvcgjv.avif',
    title: 'Stock Market Dynamics',
    description:
      'Stock market, also known as equity market, is where shares of publicly traded companies are bought and sold.',
  },
]

const CardSlider = () => {
  const [isbuttonclicked, onClickView] = useState(true)
  const toggle = () => onClickView(!isbuttonclicked)

  const settings1 = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const settings2 = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="total-view">
      <div className="body-container landscape">
        <div
          className="carousel-container"
          style={{overflow: isbuttonclicked ? 'hidden' : 'scroll'}}
        >
          {isbuttonclicked ? (
            <div className="mt-20">
              <Slider {...settings1}>
                {cardItems.map(eachItem => (
                  <div className="cards-container cards-container-mar">
                    <div>
                      <img src={eachItem.image} alt="" className="image" />
                    </div>
                    <div>
                      <h1 className="title">{eachItem.title}</h1>
                      <p className="description">{eachItem.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="view-container">
              {cardItems.map(eachItem => (
                <div className="cards-container mar">
                  <div>
                    <img src={eachItem.image} alt="" className="image" />
                  </div>
                  <div>
                    <h1 className="title">{eachItem.title}</h1>
                    <p className="description">{eachItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={toggle} className="view-button">
            {isbuttonclicked ? 'view more' : 'view less'}
          </button>
        </div>
        <Country />
      </div>
      <div className="body-container potrait">
        <div
          className="carousel-container"
          style={{overflow: isbuttonclicked ? 'hidden' : 'scroll'}}
        >
          {isbuttonclicked ? (
            <div className="mt-20">
              <Slider {...settings2}>
                {cardItems.map(eachItem => (
                  <div className="cards-container cards-container-mar">
                    <div>
                      <img src={eachItem.image} className="image" alt="" />
                    </div>
                    <div>
                      <h1 className="title">{eachItem.title}</h1>
                      <p className="description">{eachItem.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="view-container">
              {cardItems.map(eachItem => (
                <div className="cards-container mar">
                  <div>
                    <img src={eachItem.image} alt="" className="image" />
                  </div>
                  <div>
                    <h1 className="title">{eachItem.title}</h1>
                    <p className="description">{eachItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={toggle} className="view-button">
            {isbuttonclicked ? 'view more' : 'view less'}
          </button>
        </div>
        <Country />
      </div>
    </div>
  )
}

export default CardSlider
