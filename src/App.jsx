//importo il componente ButtonList
import ButtonList from "./components/ButtonList"
//importo il modulo contenente l'array di oggetti
import languages from "./languages"


function App() {

  return (
    <>
      <ButtonList languages={languages} />
    </>
  )
}

export default App
