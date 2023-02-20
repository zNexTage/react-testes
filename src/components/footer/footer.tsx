import { useNavigate } from "react-router-dom";
import useListParticipants from "../../state/hooks/useListParticipants";
import useSorter from "../../state/hooks/useSorter";

const Footer = () =>{
    const participants = useListParticipants();

    const navigate = useNavigate();

    const sort = useSorter();

    const onStartPlayClick = () =>{
        sort();
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