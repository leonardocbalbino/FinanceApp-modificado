import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash } from 'lucide-react';

function Clients() {
  const [clients] = useState([
    { id: 1, name: 'João Silva', email: 'joao@email.com', phone: '(11) 99999-9999' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', phone: '(11) 88888-8888' },
    { id: 3, name: 'Pedro Oliveira', email: 'pedro@email.com', phone: '(11) 77777-7777' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Clientes</h1>
            <Button className="flex items-center space-x-2" onClick={handleOpenModal}>
              <Plus size={20} />
              <span>Novo Cliente</span>
            </Button>
          </div>

          <div className="glass-card p-6 rounded-xl mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar clientes..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Telefone
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client, index) => (
                    <motion.tr
                      key={client.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{client.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{client.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm" className="mr-2">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash size={16} />
                        </Button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Cadastrar Novo Cliente</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Telefone</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" className="mr-2" onClick={handleCloseModal}>
                  Cancelar
                </Button>
                <Button onClick={handleCloseModal}>Salvar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clients;
