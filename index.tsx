import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogin = () => {
    if (user === "Flavia" && pass === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("dashboard");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <div>📊 Painel de Controle</div>;
      case "clientes": return <div>👤 Lista de Clientes</div>;
      case "servicos": return <div>🛠 Serviços Prestados</div>;
      case "sair": handleLogout(); return null;
      default: return <div>Bem-vindo!</div>;
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h2>Login</h2>
        <input placeholder="Usuário" value={user} onChange={(e) => setUser(e.target.value)} /><br />
        <input placeholder="Senha" type="password" value={pass} onChange={(e) => setPass(e.target.value)} /><br />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee", padding: "1rem" }}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <nav>
          <ul>
            <li><button onClick={() => setActiveTab("dashboard")}>Dashboard</button></li>
            <li><button onClick={() => setActiveTab("clientes")}>Clientes</button></li>
            <li><button onClick={() => setActiveTab("servicos")}>Serviços</button></li>
            <li><button onClick={() => setActiveTab("sair")}>Sair</button></li>
          </ul>
        </nav>
      </aside>
      <main style={{ padding: "2rem" }}>{renderContent()}</main>
    </div>
  );
}
