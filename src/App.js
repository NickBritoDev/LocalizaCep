import { useState } from 'react'; 
import './style.css';
import { MapPinLine, MagnifyingGlass, PhoneCall, MapPin, Buildings, MapTrifold } from "phosphor-react";
import Api from './api/Api';

function App() {
    //captura e altera os dados do campo input
    const [input, setInput] = useState('');
    // cep captura os dados da api e 0 setCep devolve em forma de objeto
    const [cep, setCep] = useState({});

  async function handleSearch(){
    //se o campo de requisição estiver vazio ele barra o usuario
    if(input === ''){
      alert("Preencha algum cep!");
      return;
    }
    //se o usuario preencher o cep (input) ele prossegue a busca na api https://viacep.com.br/ws/{input}/json
    try{
      const response = await Api.get(`${input}/json`);
      //mostra objetos da api
      setCep(response.data);
      setInput("");//limpa os dados do campo search
    //se o usuario não preencher o cep (input) ele barra a busca na api https://viacep.com.br/ws/{input}/json
    }catch{
      alert("Digite um cep valido");
      setInput("");//limpa os dados do campo search

    }
  };


  return (
    <div className="container">
      <h1 className="title" >L<MapPinLine color="#FFF" className="icon map" />caliza Cep</h1>
      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o cep..." 
        value={input}
        //salva os dados 
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        //captura os dados {{{{o objectkeys tem a função de renderizar algo na tela aapós uma condição, nesse caso o campo de reposta so sera renderizado após o usuario preencher um cep valido}}}}
        onClick={handleSearch}
        >
        <MagnifyingGlass
        className="icon search"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
      <response className="main">
        <h2>CEP:{cep.cep}</h2>
        <span><Buildings className="responseIcon"/> Bairro: {cep.bairro} </span>
        <span><MapPin className="responseIcon"/> {cep.logradouro}</span>
        <span><PhoneCall className="responseIcon"/> DDD: {cep.ddd}</span>
        <span><MapTrifold className="responseIcon"/> {cep.localidade} - {cep.uf}</span>
      </response>
      )}
    </div>
  );
}

export default App;
