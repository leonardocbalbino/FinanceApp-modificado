
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, FileText, Download } from 'lucide-react';

function Budgets() {
  const budgets = [
    {
      id: 1,
      client: 'João Silva',
      date: '24/04/2025',
      value: 'R$ 2.500,00',
      status: 'Pendente'
    },
    {
      id: 2,
      client: 'Maria Santos',
      date: '23/04/2025',
      value: 'R$ 3.800,00',
      status: 'Aprovado'
    },
    {
      id: 3,
      client: 'Pedro Oliveira',
      date: '22/04/2025',
      value: 'R$ 1.900,00',
      status: 'Em análise'
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Orçamentos</h1>
            <Button className="flex items-center space-x-2">
              <Plus size={20} />
              <span>Novo Orçamento</span>
            </Button>
          </div>

          <div className="grid gap-6">
            {budgets.map((budget, index) => (
              <motion.div
                key={budget.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{budget.client}</h3>
                      <p className="text-sm text-gray-500">Orçamento #{budget.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-semibold">{budget.value}</p>
                      <p className="text-sm text-gray-500">{budget.date}</p>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        budget.status === 'Aprovado' ? 'bg-green-100 text-green-800' :
                        budget.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {budget.status}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Budgets;
