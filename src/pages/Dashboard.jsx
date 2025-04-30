
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { ArrowUpCircle, ArrowDownCircle, Users, FileText } from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      title: 'Entradas',
      value: 'R$ 25.430,00',
      icon: ArrowUpCircle,
      color: 'text-green-500',
      bg: 'bg-green-100'
    },
    {
      title: 'Saídas',
      value: 'R$ 12.350,00',
      icon: ArrowDownCircle,
      color: 'text-red-500',
      bg: 'bg-red-100'
    },
    {
      title: 'Clientes',
      value: '48',
      icon: Users,
      color: 'text-blue-500',
      bg: 'bg-blue-100'
    },
    {
      title: 'Orçamentos',
      value: '12',
      icon: FileText,
      color: 'text-purple-500',
      bg: 'bg-purple-100'
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bg}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-4">Últimas Transações</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium">Pagamento #{i + 1}</p>
                      <p className="text-sm text-gray-500">24/04/2025</p>
                    </div>
                    <span className="text-green-500 font-medium">+ R$ 1.500,00</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-4">Orçamentos Pendentes</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-medium">Cliente #{i + 1}</p>
                      <p className="text-sm text-gray-500">Orçamento #00{i + 1}</p>
                    </div>
                    <span className="text-blue-500 font-medium">R$ 2.800,00</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
