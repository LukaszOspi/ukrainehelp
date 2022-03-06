import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import LocaleSwitcher from '../../elements/LocaleSwitcher'

const FooterNav = ({ className, ...props }) => {
  const classes = classNames('footer-nav', className)

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <LocaleSwitcher />
        </li>
        <li>
          <a href="https://t.me/sewerin">Contact</a>
        </li>
        {/*       <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default FooterNav
