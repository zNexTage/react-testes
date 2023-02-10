import React, { useRef, useState } from "react";
import useAddParticipant from "../../state/hooks/useAddParticipant";
import useErrorMessage from "../../state/hooks/useErrorMessage";
import style from "./form.module.css";

const Form = () => {
    const [name, setName] = useState<string>('');

    const participantInput = useRef<HTMLInputElement>(null);

    const addParticipant = useAddParticipant();

    const errorMessage = useErrorMessage();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setName('');

        participantInput.current?.focus();

        addParticipant(name);
    }

    return (
        <form onSubmit={onSubmit}>
            <fieldset className={style.form__fieldset}>
                <legend className={style.form__legend}>
                    <h1>
                        Vamos começar?
                    </h1>
                </legend>
                <div>
                    <input
                        ref={participantInput}
                        value={name}
                        className={style.form__input}
                        onChange={onChange}
                        type="text"
                        placeholder="Insira os nomes dos participantes" />

                    <button
                        className={style.form__button}
                        disabled={!name}
                    >
                        Adicionar
                    </button>
                </div>
            </fieldset>


            {errorMessage && <p role={'alert'}>{errorMessage}</p>}
        </form>
    )
}

export default Form;