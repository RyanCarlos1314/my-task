import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  // Email válido cadastrado (exemplo)
  const EMAIL_VALIDO = "usuario@exemplo.com";

  function validarEmailFormato(emailParaValidar: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailParaValidar);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validarEmailFormato(email)) {
      setMensagem("❌ E-mail inválido! Por favor, verifique e tente novamente.");
      return;
    }

    if (email === EMAIL_VALIDO) {
      setMensagem("");
      navigate("/dashboard");
    } else {
      setMensagem("❌ E-mail não cadastrado! Redirecionando para registro...");
      setTimeout(() => {
        navigate("/register");
      }, 1800);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Bem vindo de volta!</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                autoComplete="email"
              />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            {mensagem && (
              <div className="text-center text-sm mt-2 text-red-600">{mensagem}</div>
            )}
          </form>
          <div className="text-center mt-4">
            <p>
              Não tem conta? <Link to="/register">Registre-se</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}