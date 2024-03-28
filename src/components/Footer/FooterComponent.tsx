import { Link } from "react-router-dom"

import styles from './Footer.module.css'

import pikachu from '../../assets/pikachu.png';
import pokeball from '../../assets/pokeball.png';
import location from '../../assets/pointer.png'



const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                Pokemons
                <img 
                src={pikachu} 
                alt="Pikachu"
                className={styles.footerIcon}
                />
            </Link>

            <Link to="/items" className={styles.footerLink}>
                Items
                <img 
                src={pokeball} 
                alt="Pokeball"
                className={styles.footerIcon}
                />
            </Link>

            <Link to='/location' className={styles.footerLink}>
                Location
                <img 
                src={location} 
                alt="Location"
                className={styles.footerIcon}
                /> 
            </Link>
        </footer>
    )
}

export default Footer