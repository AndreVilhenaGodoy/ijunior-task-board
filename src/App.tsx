import { useState } from "react";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import type { OrdemServico } from "./components/ServiceCard";

function App() {
  const [listaOS, setListaOS] = useState<OrdemServico[]>([
    {
      id: 1,
      client: "João Silva",
      aparelho: "Notebook Dell",
      defeito: "Tela quebrada",
      status: "Aberto",
    },
  ]);

  return (
    <div className="bg-gray-800 min-h-screen font-['inter']">
      <Header />

      <div className="p-8 max-w-3xl mx-auto">
        {listaOS.map((os) => (
          <ServiceCard key={os.id} data={os} />
        ))}
      </div>
    </div>
  );
}

export default App;
