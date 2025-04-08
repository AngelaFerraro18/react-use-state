//importo useState
import { useState } from "react";
//importo il componente ButtonLanguage
import ButtonLanguage from "./ButtonLanguage";

//creo il componente ButtonList e metto come props l'attributo languages e uso il metodo map per ricreare in pagina la lista degli elementi presenti nell'array fornito
function ButtonList({ languages }) {

    //imposto come stato iniziale la prima card, che sarà aperta
    const [cardOpen, setCardOpen] = useState(1);
    //imposto come stato iniziale un messaggio generico nella card
    const [activeDescription, setActiveDescription] = useState('Nessun linguaggio selezionato');


    return <div className="container my-5 d-flex gap-3">

        {languages.map(element =>
            <ButtonLanguage key={element.id}
                title={element.title}
                //verifico su quale elemento ho cliccato, di conseguenza vedrò o il messaggio generico, altrimenti vedrò il testo in description
                description={cardOpen === element.id ? activeDescription : element.description}
                isOpen={cardOpen === element.id}
                onToggle={() => setCardOpen(cardOpen === element.id ? 1 : element.id)}
                changeText={() => setActiveDescription(prev => prev === element.description ? 'Nessun linguaggio selezionato' : element.description)
                } />
        )}
    </div>

}

//esporto
export default ButtonList;