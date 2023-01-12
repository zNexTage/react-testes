import LogoDesktop from "../../assets/logo.png";
import LogoMobile from "../../assets/logo-pequeno.png";
import Participant from "../../assets/participante.png";
import style from "./header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <picture className={style.header__logo}>
                <source srcSet={LogoMobile} media="(max-width: 790px)" />
                <img src={LogoDesktop} alt="" className={style.header__logo} />
            </picture>

            <img src={Participant} alt="" className={style.header__participant} />
        </header>
    )
}

export default Header;