import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    alert(`Email enviado: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Bem vindo de volta!</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Coloque seu email para acessar sua conta
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="nome@exemplo.com"
              />
            </div>
            <Button type="submit" className="w-full">
              Entrar com seu email
            </Button>
          </form>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Ainda nao tem conta?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Criar conta
              </a>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}