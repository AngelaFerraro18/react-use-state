
//importo il componente CardDescription
import CardDescription from "./CardDescription";

//creo il componente ButtonLanguage e come props vado a destrutturare per prendere direttamente gli elementi title e description, aggiungo le props create in ButtonList per tenere traccia della card aperta
function ButtonLanguage({ title, description, isOpen, onToggle }) {

    return (<div>
        {/* vado ad assegnare all'evento onClick la funzione setIsActive dove vado a cambiare lo stato iniziale dell'elemento false -> true */}
        <button onClick={onToggle}>{title}</button>

        {/* di conseguenza, se lo stato iniziale è true, allora vedrò il p, altrimenti no */}
        {isOpen && <CardDescription title={title} description={description} />}
    </div>)

}

//esporto
export default ButtonLanguage;