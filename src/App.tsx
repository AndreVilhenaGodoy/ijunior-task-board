import { useState } from "react";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import type { OrdemServico } from "./components/ServiceCard";
import NewServiceForm from "./components/NewServiceForm";

function App() {
  const [listaOS, setListaOS] = useState<OrdemServico[]>([]);

  const lidarComNovaOs = (novaOS: OrdemServico) => {
    setListaOS((listaAnterior) => [...listaAnterior, novaOS]);
  };

  return (
    <div className="bg-gray-800 min-h-screen font-['inter']">
      <Header />

      <div className="p-8 max-w-3xl mx-auto">
        <NewServiceForm adicionarOS={lidarComNovaOs} />
        {listaOS.map((os) => (
          <ServiceCard key={os.id} data={os} />
        ))}
      </div>
    </div>
  );
}

export default App;
