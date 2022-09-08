import style from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'


export function Header(){
    return(
    <header className={style.header}>
        <img src={igniteLogo} alt="Logo da Page" />
        <strong><span className={style.logo}>I</span>gnite <span className={style.logo}>C</span>urso</strong>
      
    </header>
    )
}