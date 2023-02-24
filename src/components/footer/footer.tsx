import { useNavigate } from "react-router-dom";
import useListParticipants from "../../state/hooks/useListParticipants";
import useSorter from "../../state/hooks/useSorter";
import Button from "../button";
import style from "./footer.module.css";

const Footer = () =>{
    const participants = useListParticipants();

    const navigate = useNavigate();

    const sort = useSorter();

    const onStartPlayClick = () =>{
        sort();
        navigate("/sorteio");
    }

    return (
        <footer className={style.footerContainer}>
            <Button 
            onClick={onStartPlayClick}
            disabled={participants.length < 3}>
                Iniciar brincadeira
            </Button>
        </footer>
    )
}

export default Footer;