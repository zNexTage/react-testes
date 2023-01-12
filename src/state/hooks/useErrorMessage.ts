import { useRecoilState } from "recoil"
import { errorMessage } from "../atom"

const useErrorMessage = ()=> useRecoilState(errorMessage);

export default useErrorMessage;