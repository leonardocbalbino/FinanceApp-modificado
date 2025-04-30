
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Clients from '@/pages/Clients';
import Budgets from '@/pages/Budgets';
import Transactions from '@/pages/Transactions';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/clients" element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            } />
            <Route path="/budgets" element={
              <PrivateRoute>
                <Budgets />
              </PrivateRoute>
            } />
            <Route path="/transactions" element={
              <PrivateRoute>
                <Transactions />
              </PrivateRoute>
            } />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
