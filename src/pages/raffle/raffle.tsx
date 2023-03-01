import { useLayoutEffect, useState } from "react";
import Button from "../../components/button";
import Header from "../../components/header";
import useListParticipants from "../../state/hooks/useListParticipants"
import useSorterResult from "../../state/hooks/useSorterResult";
import style from "./raffle.module.css";

const Raffle = () => {
    const participants = useListParticipants();
    const [participantTheTime, setParticipantTheTime] = useState("");
    const [secretFriend, setSecretFriend] = useState("");

    const result = useSorterResult();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (result.has(participantTheTime)) {
            setSecretFriend(result.get(participantTheTime)!);

            setTimeout(()=>{
                setSecretFriend("");
            }, 5000);
        }
    }

    useLayoutEffect(()=>{
        if(participants.length > 0){
            setParticipantTheTime(participants[0]);
        }
    }, []);

    return (
        <>
            <Header />
            <section>
                <form
                    className={style.form}
                    onSubmit={onSubmit}
                    name="participantOfTheTime"
                    action="participantOfTheTime"
                >
                    <label className={style.select__label}>
                        Quem vai tirar o papelzinho?
                    </label>
                    <select
                        className={style.select__input}
                        required
                        onChange={event => setParticipantTheTime(event.target.value)}
                        placeholder="Selecione o seu nome"
                        value={participantTheTime}>
                        {
                            participants.map(participant => (
                                <option
                                    key={participant}
                                    value={participant}>
                                    {participant}
                                </option>
                            ))
                        }
                    </select>

                    <p className={style.button__description}>
                        Clique em em sortear para ver quem é seu amigo secreto!
                    </p>

                    <Button
                        type="submit"
                    >
                        Sortear!
                    </Button>

                    {
                        secretFriend &&
                        <span role="alert" className={`text-orange ${style.secret__friend}`}>
                            {secretFriend}
                        </span>
                    }
                </form>
            </section>
        </>
    )
}

export default Raffle;