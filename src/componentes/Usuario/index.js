import './usuario.css'

const Usuario = (props) => {
    return (
        <div className='usuarios'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: props.corPrimaria}}>{props.nome}</h4>
                <h5>{props.champion}</h5>
                <h5>{props.rota}</h5>
            </div>
        </div>
    )
}

export default Usuario