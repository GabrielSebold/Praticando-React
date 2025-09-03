import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [champion, setChampion] = useState('')
    const [imagem, setImagem] = useState('')
    const [rota, setRota] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoUsuarioCadastrado({
            nome,
            champion,
            imagem,
            rota
        })
        setNome('')
        setRota('')
        setChampion('')
        setImagem('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Champion Favorito" 
                    placeholder="Digite o seu Champion favorito..."
                    valor={champion}
                    aoAlterado={valor => setChampion(valor)}    
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}    
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Rota Preferida" 
                    itens={props.rotas}
                    valor={rota}
                    aoAlterado={valor => setRota(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario