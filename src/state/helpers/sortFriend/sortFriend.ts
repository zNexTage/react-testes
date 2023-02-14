import shuffle from "just-shuffle";

const sort = (participants:Array<string>) => {
    const totalParticipants = participants.length;
    const shuffledParticipants = shuffle(participants);

    const result = new Map<string, string>();

    for (let index = 0; index < totalParticipants; index++) {
        const friendIndex = index === (totalParticipants - 1) ? 0 : index + 1;

        result.set(shuffledParticipants[index], shuffledParticipants[friendIndex]);
    }

    return result;
}

export default sort;