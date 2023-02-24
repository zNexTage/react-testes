import { useRecoilValue } from "recoil";
import { shuffleResult } from "../atom";

const useSorterResult = () =>{
    return useRecoilValue(shuffleResult);
}

export default useSorterResult;