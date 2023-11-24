// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="list">
                <li className="items">Item 1</li>
                <li className="items">Item 2</li>
                <li className="items">Item 3</li>
                <li className="items">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="heading">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incudidunt ut labore et doore magna aliqua, Ut
                eni, ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="heading">Right Navbar</h1>
              <p className="box">Ad 1</p>
              <p className="box">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
