import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} container`}>
           <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4LmKvTu_iuGWl8AsWcibt5AOBWdSbv4Wbt0XJu1r4A&s" alt="adidas-logo"
             />
           </div>

           <ul className="lists">
            <li>Home</li>
            <li>Contact Us</li>
            <li>About</li>
           </ul>
        </nav>
    );
}

export default Navbar;