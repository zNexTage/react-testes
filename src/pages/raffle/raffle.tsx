import useListParticipants from "../../state/hooks/useListParticipants"

const Raffle = () => {
    const participants = useListParticipants();

    return (
        <section>
            <form name="participantOfTheTime" action="participantOfTheTime">
                <select>
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
            </form>
        </section>
    )
}

export default Raffle;