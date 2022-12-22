import React, { useRef, useState } from "react";
import { useAdicionarNovoParticipante } from "../state/hook/useAdicionarPaticipante";
import { useMensagemDeErro } from "../state/hook/useMesagemDeError";

import './Formulario.css';

function Formulario () {
  const [nome, setNome] = useState<string>('');
  
  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarNovoParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome)
    setNome('');
    inputRef.current?.focus();
  }
  
  return(
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          onChange={evento => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
       <button disabled={!nome} >Adicionar</button>
      </div>
      {mensagemDeErro && <p role={'alert'}>{mensagemDeErro}</p>}
    </form>
  );
}

export default Formulario;
