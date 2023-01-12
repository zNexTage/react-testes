import { useRecoilValue } from "recoil"
import { errorMessage } from "../atom"

const useErrorMessage = ()=> {
    const message = useRecoilValue(errorMessage);

    return message;
};

export default useErrorMessage;