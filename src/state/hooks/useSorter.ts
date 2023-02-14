import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { shuffleResult } from "../atom";
import useListParticipants from "./useListParticipants";

/**
 * Shuffle and define the secret friend to all participants. 
 * @returns undefined (void)
 */
const useSorter = () => {
    const participants = useListParticipants();
    const setShuffleResult = useSetRecoilState(shuffleResult);

    return () => {
        const totalParticipants = participants.length;
        const shuffledParticipants = shuffle(participants);

        const result = new Map<string, string>();

        for (let index = 0; index < totalParticipants; index++) {
            const friendIndex = index === (totalParticipants - 1) ? 0 : index + 1;

            result.set(shuffledParticipants[index], shuffledParticipants[friendIndex]);
        }

        setShuffleResult(result);
    }
}

export default useSorter;