// Write your code here
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            alt="home"
            className="image"
          />
          <h1>Home</h1>
        </div>
      ) : (
        <div className="light">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
            alt="home"
            className="image"
          />
          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
