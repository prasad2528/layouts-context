import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-container">
          <h1 className="heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              className="inputs"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              className="inputs"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              className="inputs"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
