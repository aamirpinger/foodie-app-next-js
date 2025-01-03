import Link from "next/link";
import MainHeaderBackground from "./mainHeaderBackground";
import Image from "next/image";
import NavLink from "./navLink";
import classes from './mainHeader.module.css'
import logoImg from '@/public/images/logo.png'

export default function MainHeader(){
  return (
    <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
