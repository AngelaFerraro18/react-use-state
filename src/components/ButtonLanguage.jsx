//importo useState da react
import { useState } from "react";

//creo il componente ButtonLanguage e come props vado a destrutturare per prendere direttamente gli elementi title e description
function ButtonLanguage({ title, description }) {

    //destrutturo e assegno dei nomi, dopodichè imposto lo stato iniziale a false
    const [isActive, setIsActive] = useState(false);

    return (<div>
        {/* vado ad assegnare all'evento onClick la funzione setIsActive dove vado a cambiare lo stato iniziale dell'elemento false -> true */}
        <button onClick={() => setIsActive(prev => !prev)}>{title}</button>

        {/* di conseguenza, se lo stato iniziale è true, allora vedrò il p, altrimenti no */}
        {isActive && <div><h2>{title}</h2><p>{description}</p></div>}
    </div>)

}

//esporto
export default ButtonLanguage;