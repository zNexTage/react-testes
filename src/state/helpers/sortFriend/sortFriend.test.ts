import sort from "./sortFriend";

describe("Given a friend shuffle",()=>{
    test("There is no possible to sort yourself", ()=>{
        const participants = [
            "Ana",
            "Catarina",
            "Juliana",
            "João",
            "Vinicius",
            "Nathália"
        ];

        const raffle = sort(participants);

        participants.forEach(participant =>{
            const secretFriendly = raffle.get(participant);
            expect(secretFriendly).not.toEqual(participant);
        })
    })
});