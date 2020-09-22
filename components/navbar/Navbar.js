import styles from './Navbar.module.scss'
const NavBar = () => {
  return (
    <nav className={`navbar ${styles.navbar}`} role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://mymoons.mx'>
          <img src='/logo.svg' width='112' height='28' />
        </a>

        <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
