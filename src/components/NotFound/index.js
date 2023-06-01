// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const classNam = isDarkTheme ? 'dark' : 'light'
      return (
        <div className={classNam}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="notFound"
          />
          <h1>Lost Your Way?</h1>
          <p>We cannot seem to find the page you are looking for</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
