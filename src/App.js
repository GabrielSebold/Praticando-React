import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rotas from './componentes/Rotas';

function App() {
  
  const rotas = [
    {
      nome: 'Top',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Mid',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Adc',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Sup',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Jg',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [usuarios, setUsuario] = useState([])

  const aoNovoUsuarioAdicionado = (usuario) => {
    console.log(usuario)
    setUsuario([...usuarios, usuario])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario rotas={rotas.map(rotas => rotas.nome)} aoUsuarioCadastrado={usuario => aoNovoUsuarioAdicionado(usuario)}/>      
      {rotas.map(rotas => <Rotas 
      key={rotas.nome} 
      nome={rotas.nome} 
      corPrimaria={rotas.corPrimaria} 
      corSecundaria={rotas.corSecundaria}
      usuarios={usuarios.filter(usuario => usuario.rota === rotas.nome)}
      />)}
    </div>
  );
}

export default App;
