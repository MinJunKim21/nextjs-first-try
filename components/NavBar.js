import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {
  const router = useRouter();
  return ( 
  <nav>
    <Link href='/'>
      <a className={router.pathname === "/"? "active" : ""}>Home</a>
    </Link>
    <Link href='/about'>
      <a className={router.pathname === "/about"? "active" : ""}>about</a>
    </Link>
    <style jsx>{`
      nav {
        background-color : orange;
      }
      a {
        text-decoration : none;
      }
      .active {
        color : green;
      }`}</style>
  </nav>
  )
}

export default NavBar