// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggle = () => {
        toggleTheme()
      }
      console.log(isDarkTheme)
      return isDarkTheme ? (
        <nav>
          <div className="dark1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="webLogo"
            />
            <div className="mdCont">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">
                <p>About</p>
              </Link>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="webLogo"
              onClick={onToggle}
            />
          </div>
        </nav>
      ) : (
        <nav>
          <div className="light1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="webLogo"
            />
            <div className="mdCont">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">
                <p>About</p>
              </Link>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="webLogo"
              onClick={onToggle}
            />
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
