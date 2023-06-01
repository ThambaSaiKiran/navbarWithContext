// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return isDarkTheme ? (
        <div className="dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="home"
            className="image"
          />
          <h1>About</h1>
        </div>
      ) : (
        <div className="light">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="home"
            className="image"
          />
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
