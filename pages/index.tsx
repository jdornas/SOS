
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import logo from "/logo.png";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "Flavia" && pass === "12345") {
      onLogin();
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <Image src={logo} alt="Logo" width={120} height={120} className="mb-4" />
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <Input placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} className="mb-2" />
        <Input placeholder="Senha" type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="mb-4" />
        <Button onClick={handleLogin} className="w-full">Entrar</Button>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("dashboard");
  };

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div className="text-xl">📊 Bem-vindo ao Painel de Controle</div>;
      case "equipes":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Equipes</h2>
            <Button className="mb-4">+ Nova Equipe</Button>
            <div className="grid grid-cols-1 gap-4">
              <Card><CardContent className="p-4">Equipe A - 8 serviços</CardContent></Card>
              <Card><CardContent className="p-4">Equipe B - 6 serviços</CardContent></Card>
            </div>
          </div>
        );
      case "servicos":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Serviços</h2>
            <Button className="mb-4">+ Novo Serviço</Button>
            <div className="grid grid-cols-1 gap-4">
              <Card><CardContent className="p-4">Dedetização - Cliente João</CardContent></Card>
            </div>
          </div>
        );
      case "agenda":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Agenda</h2>
            <Button className="mb-4">+ Novo Agendamento</Button>
            <Card><CardContent className="p-4">23/04/2025 - Dedetização no Bairro X</CardContent></Card>
          </div>
        );
      case "clientes":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Clientes</h2>
            <Button className="mb-4">+ Novo Cliente</Button>
            <Card><CardContent className="p-4">Flávio - fl@exemplo.com</CardContent></Card>
          </div>
        );
      case "funcionarios":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Funcionários</h2>
            <Button className="mb-4">+ Novo Funcionário</Button>
            <Card><CardContent className="p-4">Carlos - Técnico</CardContent></Card>
          </div>
        );
      case "estoque":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Estoque</h2>
            <Button className="mb-4">+ Novo Produto</Button>
            <Card><CardContent className="p-4">Inseticida X - 20 unidades</CardContent></Card>
          </div>
        );
      case "veiculos":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Veículos</h2>
            <Button className="mb-4">+ Novo Veículo</Button>
            <Card><CardContent className="p-4">Fiorino Branca - ABC-1234</CardContent></Card>
          </div>
        );
      case "financeiro":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Financeiro</h2>
            <Button className="mb-4">+ Nova Entrada</Button>
            <Card><CardContent className="p-4">Pagamento - R$ 500,00</CardContent></Card>
          </div>
        );
      case "garantias":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Garantias</h2>
            <Button className="mb-4">+ Nova Garantia</Button>
            <Card><CardContent className="p-4">Cliente Ana - até 12/2025</CardContent></Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r p-4 flex flex-col gap-4">
        <Image src={logo} alt="Logo" width={100} height={100} className="mx-auto mb-4" />
        <Tabs value={activeTab} onValueChange={(val) => {
          if (val === "sair") handleLogout();
          else setActiveTab(val);
        }}>
          <TabsList className="flex flex-col items-start gap-2">
            <TabsTrigger value="dashboard">📊 Dashboard</TabsTrigger>
            <TabsTrigger value="equipes">👥 Equipes</TabsTrigger>
            <TabsTrigger value="servicos">🛠 Serviços</TabsTrigger>
            <TabsTrigger value="agenda">📅 Agenda</TabsTrigger>
            <TabsTrigger value="clientes">👤 Clientes</TabsTrigger>
            <TabsTrigger value="funcionarios">🧑‍💼 Funcionários</TabsTrigger>
            <TabsTrigger value="estoque">📦 Estoque</TabsTrigger>
            <TabsTrigger value="veiculos">🚗 Veículos</TabsTrigger>
            <TabsTrigger value="financeiro">💰 Financeiro</TabsTrigger>
            <TabsTrigger value="garantias">🛡 Garantias</TabsTrigger>
            <TabsTrigger value="sair">🚪 Sair</TabsTrigger>
          </TabsList>
        </Tabs>
      </aside>
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
