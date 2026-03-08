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
}

const ServiceCard = ({ data }: ServiceCardProps) => {
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
      <p><strong>Status:</strong>{data.status}</p>
    </div>
  );
};

export default ServiceCard;
