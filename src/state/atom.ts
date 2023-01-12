import { atom } from "recoil";

const participants = atom<string[]>({
    key: 'participants',
    default: []
});

export default participants;