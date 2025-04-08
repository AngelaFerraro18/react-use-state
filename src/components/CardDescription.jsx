//creo il componente per la card con la descrizione: CardDescription
function CardDescription({ title, description }) {
    return <div className="my-4 border border-dark-subtle rounded p-4 "><h2 className="fs-4">{title}</h2><p>{description}</p></div>
}

//esporto
export default CardDescription;