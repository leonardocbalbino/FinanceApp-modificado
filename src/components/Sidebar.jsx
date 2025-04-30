
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  FileText,
  DollarSign,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/clients', icon: Users, label: 'Clientes' },
  { path: '/budgets', icon: FileText, label: 'Orçamentos' },
  { path: '/transactions', icon: DollarSign, label: 'Transações' },
];

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r shadow-lg flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">FinanceApp</h1>
      </div>
      
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <motion.div
              whileHover={{ x: 5 }}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${
                location.pathname === item.path
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </motion.div>
          </Link>
        ))}
      </nav>

      <div className="p-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center space-x-2"
          onClick={logout}
        >
          <LogOut size={20} />
          <span>Sair</span>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
