import React, { useRef, useState } from "react";
import useAddParticipant from "../../state/hooks/useAddParticipant";

const Form = () => {
    const [name, setName] = useState<string>('');

    const participantInput = useRef<HTMLInputElement>(null);

    const addParticipant = useAddParticipant();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        setName('');

        participantInput.current?.focus();

        addParticipant(name);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                ref={participantInput}
                value={name}
                onChange={onChange}
                type="text"
                placeholder="Insira os nomes dos participantes" />

            <button
                disabled={!name}
            >
                Adicionar
            </button>
        </form>
    )
}

export default Form;