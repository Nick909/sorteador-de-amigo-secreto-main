import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

function ListaParticipantes () {
  const participantes: string[] = useListaDeParticipantes();


  return(
    <ul>
      {participantes.map((participante, index) => <li key={index}>{participante}</li>)}
    </ul>
  );
}

export default ListaParticipantes;
