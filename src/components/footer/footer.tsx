import { useNavigate } from "react-router-dom";
import useListParticipants from "../../state/hooks/useListParticipants";

const Footer = () =>{
    const participants = useListParticipants();

    const navigate = useNavigate();

    const onStartPlayClick = () =>{
        navigate("/sorteio");
    }

    return (
        <footer>
            <button 
            onClick={onStartPlayClick}
            disabled={participants.length < 3}>
                Iniciar brincadeira
            </button>
        </footer>
    )
}

export default Footer;