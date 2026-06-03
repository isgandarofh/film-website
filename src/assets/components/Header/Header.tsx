import classes from "./header.module.css"
import Logo from "../../../../public/img/Logo (5).png"
import SearchIcon from "../../../../public/icon/Vector (23).png"
import NotificationIcon from "../../../../public/icon/Vector (24).png"
import { NavLink } from "react-router"
export default function Header() {
  return (
    <header className="container">
        <div className={classes.header}>
            <div className={classes.headerLogo}>
                <img width={180} src={Logo} alt="" />
            </div>
            <div className={classes.headerMenu}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies & Shows</NavLink>
                <NavLink to="/support">Support</NavLink>
                <NavLink to="/subscriptions">Subscriptions</NavLink>
            </div>
            <div className={classes.headerAction}>
                <img width={25} src={SearchIcon} alt="" />
                <img width={24} src={NotificationIcon} alt="" />
            </div>
        </div>
    </header>
  )
}
