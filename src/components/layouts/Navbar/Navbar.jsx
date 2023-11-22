import { Link, NavLink } from 'react-router-dom'
import './Navbar.style.scss'

const navlinks = [
  {
    id: 1,
    title: "Главная",
    to: '/'
  },
  {
    id: 2,
    title: "Аналитика",
    to: '/analytics'
  },
  {
    id: 3,
    title: "Справочники",
    to: '/references'
  }
]

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__left-content">
        <Link to="/" className="header__left-content--logo">
          СИП. РБ
        </Link>
        <div className="header__left-content--search-input">
          <img src="/assets/svg/search-icon.svg" alt="search" />
          <input type="text" placeholder='Я ищу' />
        </div>
        <nav className="header__left-content--navlinks">
          {navlinks.map(link => (
            <NavLink to={link.to} key={link.id}>
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="header__right-content">

      </div>
    </header>
  )
}
