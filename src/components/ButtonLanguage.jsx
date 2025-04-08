//creo il componente ButtonLanguage e come props vado a destrutturare per prendere direttamente gli elementi title e description
function ButtonLanguage({ title, description }) {
    return (<div>
        <button>{title}</button>
        <p>{description}</p>
    </div>)

}

//esporto
export default ButtonLanguage;