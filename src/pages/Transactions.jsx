
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

function Transactions() {
  const transactions = [
    {
      id: 1,
      description: 'Pagamento Cliente A',
      date: '24/04/2025',
      value: 'R$ 2.500,00',
      type: 'income'
    },
    {
      id: 2,
      description: 'Fornecedor XYZ',
      date: '23/04/2025',
      value: 'R$ 1.800,00',
      type: 'expense'
    },
    {
      id: 3,
      description: 'Serviço Prestado',
      date: '22/04/2025',
      value: 'R$ 3.200,00',
      type: 'income'
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Transações</h1>
            <div className="space-x-4">
              <Button variant="outline" className="bg-green-50 text-green-600 border-green-200">
                <ArrowUpCircle size={20} className="mr-2" />
                Nova Entrada
              </Button>
              <Button variant="outline" className="bg-red-50 text-red-600 border-red-200">
                <ArrowDownCircle size={20} className="mr-2" />
                Nova Saída
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-sm text-gray-500 mb-2">Saldo Total</h3>
              <p className="text-2xl font-bold">R$ 15.430,00</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-sm text-gray-500 mb-2">Entradas</h3>
              <p className="text-2xl font-bold text-green-600">R$ 25.430,00</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-sm text-gray-500 mb-2">Saídas</h3>
              <p className="text-2xl font-bold text-red-600">R$ 10.000,00</p>
            </motion.div>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Histórico de Transações</h2>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'income' 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'income' 
                          ? <ArrowUpCircle size={24} />
                          : <ArrowDownCircle size={24} />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <span className={`font-medium ${
                      transaction.type === 'income'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'} {transaction.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Transactions;
