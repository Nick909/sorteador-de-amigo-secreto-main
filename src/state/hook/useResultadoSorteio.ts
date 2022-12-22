import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useResultadosorteio = () => {
  return useRecoilValue(resultadoAmigoSecreto);
}