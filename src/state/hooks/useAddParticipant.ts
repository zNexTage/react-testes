import { useRecoilValue, useSetRecoilState } from "recoil";
import {errorMessage, participants} from "../atom";

/**
 * Hook to add a new participant to the `participants` state
 * @returns a function to set participants state
 */
const useAddParticipant = () => {
    const setListParticipant = useSetRecoilState(participants);

    const participantNames = useRecoilValue(participants);

    const setError = useSetRecoilState(errorMessage);

    return (participantName:string) => {
        if(participantNames.includes(participantName)){            
            setError('Nomes duplicados não são permitidos');

            setTimeout(()=>{
                //clean errors after 5 seconds;
                setError('');
            }, 5000);

            return;
        }

        return setListParticipant(participants => [...participants, participantName]);
    }
}

export default useAddParticipant;