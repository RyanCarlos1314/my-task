import { Navigate } from 'react-router-dom';


interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children}: ProtectedRouteProps) {
    // Exemplo simples de verificação de autenticação
    const isAuthenticated = !!localStorage.getItem("auth");

    if (!isAuthenticated ) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>; 
}