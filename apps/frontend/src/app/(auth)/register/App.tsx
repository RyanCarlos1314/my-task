import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de registro
    alert(`Registrado: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen from-gray-100 to-gray-300">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
          <p className="text-sm text-gray-500 mt-1">Preencha os campos para se registrar</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="nome@exemplo.com"
                autoComplete="email"
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Registrar
            </Button>
          </form>
          <div className="text-center mt-4">
            <p>
              Já tem uma conta? <Link to="/">Fazer login</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}