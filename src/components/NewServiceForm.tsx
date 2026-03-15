import React from "react";
import { useState } from "react";
import type { OrdemServico } from "./ServiceCard";

interface NewServiceFormProps {
  adicionarOS: (novaOS: OrdemServico) => void;
}

const NewServiceForm = ({ adicionarOS }: NewServiceFormProps) => {
  const [client, setClient] = useState("");
  const [aparelho, setAparelho] = useState("");
  const [defeito, setDefeito] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!client || !aparelho || !defeito) return;

    const novaOS: OrdemServico = {
      id: Date.now(),
      client: client,
      aparelho: aparelho,
      defeito: defeito,
      status: "Aberto",
    };

    adicionarOS(novaOS);

    setClient("");
    setAparelho("");
    setDefeito("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg 
      shadow-md mb-8 flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-gray-800">Nova Ordem de Serviço</h2>
      <input
        type="text"
        placeholder="Nome do Cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="border p-2 rounded text-black"
      />
      <input
        type="text"
        placeholder="Modelo do Aparelho"
        value={aparelho}
        onChange={(e) => setAparelho(e.target.value)}
        className="border p-2 rounded text-black"
      />
      <input
        type="text"
        placeholder="Defeito"
        value={defeito}
        onChange={(e) => setDefeito(e.target.value)}
        className="border p-2 rounded text-black"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white
       font-bold py-2 rounded hover:bg-purple-700 transition"
      >
        {" "}
        Salvar
      </button>
    </form>
  );
};

export default NewServiceForm;
