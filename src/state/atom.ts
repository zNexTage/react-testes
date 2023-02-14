import { atom } from "recoil";

const participants = atom<string[]>({
    key: 'participants',
    default: []
});

const errorMessage = atom<string>({
    key: 'errorMessage',
    default: ''
});

const shuffleResult = atom<Map<string, string>>({
    key:'resultShuffle',
    default: new Map()
})

export {
    participants,
    errorMessage,
    shuffleResult 
};

