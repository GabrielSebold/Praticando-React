import Usuario from '../Usuario'
import './Rotas.css'

const Rotas = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.usuarios.length > 0) ? <section className='rotas' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='usuario'>
                {props.usuarios.map( usuario => <Usuario 
                key={usuario.nome}
                nome={usuario.nome} 
                rota={usuario.rota} 
                imagem={usuario.imagem} 
                champion={usuario.champion} 
                corPrimaria={props.corPrimaria}/>)}
            </div>
        </section>
        : ''
    )
}

export default Rotas