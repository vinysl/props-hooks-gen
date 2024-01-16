import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  const [completado, setCompletado] = useState(false) // boolean
  const [tarefa, setTarefa] = useState('') // string

  // Função a ser disparada / um gatilho (algo a ser analisado)
  useEffect(() => {
    if(completado == true) {
      setTarefa("Tarefa Concluída") 
    }
  }, [completado])

  // function concluiTarefa {
    // setCompletado(true)
  // }

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da tarefa: {tarefa}</h3>
        <button onClick={() => {setCompletado(true)}}>Conclua a Tarefa</button>
        {/* <button onClick={concluiTarefa}>Conclua a Tarefa</button> */}
    </div>
  )
}

export default Task