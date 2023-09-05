/* eslint-disable @typescript-eslint/no-unused-vars */
import style from './nav.module.scss';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import logo from '../../assets/svg/isdi.svg';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={style['nav-container']}>
        <main>
          <img src={logo} alt="ISDI Coders logo" />

          <ul style={isMenuOpen ? { right: '0%' } : { right: '-150%' }}>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Become a patreon</a>
            </li>
            <li className={style.login}>
              <a href="">Login</a>
              <FaUser />
            </li>
          </ul>

          <section
            className={style.menu}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            role="button"
            aria-label="button"
          >
            {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          </section>
        </main>
      </nav>
    </>
  );
}
