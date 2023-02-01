import { useRecoilValue } from "recoil";
import {participants} from "../atom";

const useListParticipants = () => useRecoilValue(participants);

export default useListParticipants;