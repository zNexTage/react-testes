import useListParticipants from "../../state/hooks/useListParticipants";
import style from "./list-participants.module.css";

const ListParticipants = () =>{
    const participants:string[] = useListParticipants();

    return (
        <ul className={style.listParticipants}>
            {
                participants.map(participant=>(
                    <li key={participant}>
                        {participant}
                    </li>
                ))
            }
        </ul>
    )
}

export default ListParticipants;