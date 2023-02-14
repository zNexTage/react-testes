import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { shuffleResult } from "../atom";
import sort from "../helpers/sortFriend/sortFriend";
import useListParticipants from "./useListParticipants";

/**
 * Shuffle and define the secret friend to all participants. 
 * @returns undefined (void)
 */
const useSorter = () => {
    const participants = useListParticipants();
    const setShuffleResult = useSetRecoilState(shuffleResult);

    return () => {
        const result = sort(participants);

        setShuffleResult(result);
    }
}

export default useSorter;