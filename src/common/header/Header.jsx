import './header.css'
import Logo from '../../assets/logo.png'
import { AiOutlineMenu as Menu, AiOutlineClose as Close, AiOutlineSearch as Search } from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <header className='header'>
          <div className="container">
              <div className="header__container flex">
                <div className="header__toggle">
                  <span><Menu /></span>
                  <span><Close /></span>
                </div>
                <div className="header__logo flex">
                  <img src={Logo} alt="Logo" />
                  <h2>football</h2>
                </div>
                <div className="header__search">
                  <span><Search /></span>
                </div>
              </div>
          </div>
      </header>
    </>
  )
}

export default Header