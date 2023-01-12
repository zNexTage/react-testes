import { atom } from "recoil";

const participants = atom<string[]>({
    key: 'participants',
    default: []
});

const errorMessage = atom<string>({
    key: 'errorMessage',
    default: ''
});

export {
    participants,
    errorMessage
};

