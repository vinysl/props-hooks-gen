import './Card.css'

// argumentos/parametos = propriedades/props

// Modelos de tipagem
// Funciona como uma classe = está definindo uma tipagem
interface CardProps {
    titulo : string;
    descricao : string;
}

function Card({titulo, descricao} : CardProps) {
    return (
        <div className="card">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}

export default Card