import { useSetRecoilState } from "recoil";
import participants from "../atom";

/**
 * Hook to add a new participant to the `participants` state
 * @returns a function to set participants state
 */
const useAddParticipant = () => {
    const setListParticipant = useSetRecoilState(participants);

    return (participantName:string) => {
        return setListParticipant(participants => [...participants, participantName]);
    }
}

export default useAddParticipant;