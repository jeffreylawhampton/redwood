import './styles.css'
import { Link, routes } from '@redwoodjs/router'
const Header = (props) => {
  return (
    <div className="header">
      <Link to={routes.home()}>inventory</Link>
    </div>
  )
}

export default Header
