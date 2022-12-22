import React from "react";
import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não soteie o proprio nome', () => {
    const participantes = [
      'Ana',
      'Catarina',
      'Juliana',
      'João',
      'Vinicios',
      'Natalia'
    ];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    });
  });
})