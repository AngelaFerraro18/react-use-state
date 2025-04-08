//importo il componente ButtonLanguage
import ButtonLanguage from "./Button";

//creo il componente ButtonList e metto come props l'attributo languages e uso il metodo map per ricreare in pagina la lista degli elementi presenti nell'array fornito
function ButtonList({ languages }) {
    return <div>
        {languages.map(element =>
            <ButtonLanguage key={element.id} title={element.title} description={element.description} />
        )}
    </div>
}

//esporto
export default ButtonList;