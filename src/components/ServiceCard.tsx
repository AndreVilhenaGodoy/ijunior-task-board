import React from "react";

export interface OrdemServico {
  id: number;
  client: string;
  aparelho: string;
  defeito: string;
  status: "Aberto" | "Finalizado";
}

interface ServiceCardProps {
  data: OrdemServico;
  finalizarOS: (id: number) => void;
}

const ServiceCard = ({ data, finalizarOS }: ServiceCardProps) => {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-bold text-lg">{data.client}</h3>
      <p>
        <strong>Aparelho:</strong>
        {data.aparelho}
      </p>
      <p>
        <strong>Defeito:</strong>
        {data.defeito}
      </p>
      <div className="mt-4">
        <span
          className={`px-3 py-1 
            rounded-full text-sm font-bold 
            text-white 
            ${data.status === "Aberto" ? "bg-green-500" : "bg-red-500"}`}
        >
          {data.status}
        </span>
      </div>
      <button
        onClick={() => finalizarOS(data.id)}
        className="mt-2 bg-gray-200
         hover:bg-gray-300
          text-gray-800 font-bold
           py-1 px-4 rounded self-start transition"
      >
        Finalizar
      </button>
    </div>
  );
};

export default ServiceCard;
