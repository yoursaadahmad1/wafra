'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, Table, Search, Plus, Edit, Trash2, Play } from 'lucide-react';

const databases = [
  { name: 'mystore_db', tables: 12, size: '45.2 MB' },
  { name: 'blog_db', tables: 8, size: '23.1 MB' },
  { name: 'portfolio_db', tables: 5, size: '12.8 MB' },
];

const tables = [
  { name: 'users', rows: 1250, size: '2.1 MB', engine: 'InnoDB' },
  { name: 'products', rows: 450, size: '1.8 MB', engine: 'InnoDB' },
  { name: 'orders', rows: 890, size: '3.2 MB', engine: 'InnoDB' },
  { name: 'categories', rows: 25, size: '0.1 MB', engine: 'InnoDB' },
];

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', created_at: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', created_at: '2024-01-14' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', created_at: '2024-01-13' },
];

export function PhpMyAdmin() {
  const [selectedDatabase, setSelectedDatabase] = useState('mystore_db');
  const [selectedTable, setSelectedTable] = useState('users');
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users LIMIT 10;');

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-6 w-6 text-blue-600" />
            <span>phpMyAdmin - Database Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="structure" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="browse">Browse</TabsTrigger>
              <TabsTrigger value="sql">SQL</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>

            {/* Database Structure */}
            <TabsContent value="structure" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Databases List */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Databases</h3>
                  <div className="space-y-2">
                    {databases.map((db, index) => (
                      <motion.div
                        key={db.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          selectedDatabase === db.name ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedDatabase(db.name)}
                      >
                        <div className="flex items-center space-x-2">
                          <Database className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">{db.name}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {db.tables} tables • {db.size}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tables List */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Tables in {selectedDatabase}</h3>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      New Table
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left p-3 font-medium">Table</th>
                          <th className="text-left p-3 font-medium">Rows</th>
                          <th className="text-left p-3 font-medium">Size</th>
                          <th className="text-left p-3 font-medium">Engine</th>
                          <th className="text-left p-3 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tables.map((table, index) => (
                          <motion.tr
                            key={table.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`border-t hover:bg-gray-50 cursor-pointer ${
                              selectedTable === table.name ? 'bg-blue-50' : ''
                            }`}
                            onClick={() => setSelectedTable(table.name)}
                          >
                            <td className="p-3">
                              <div className="flex items-center space-x-2">
                                <Table className="h-4 w-4 text-green-600" />
                                <span className="font-medium">{table.name}</span>
                              </div>
                            </td>
                            <td className="p-3">{table.rows.toLocaleString()}</td>
                            <td className="p-3">{table.size}</td>
                            <td className="p-3">{table.engine}</td>
                            <td className="p-3">
                              <div className="flex items-center space-x-2">
                                <Button size="sm" variant="ghost">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="text-red-600">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Browse Data */}
            <TabsContent value="browse" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Browse: {selectedTable}</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search..." className="pl-10 w-64" />
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Insert
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 font-medium">ID</th>
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium">Email</th>
                      <th className="text-left p-3 font-medium">Created At</th>
                      <th className="text-left p-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row, index) => (
                      <motion.tr
                        key={row.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-t hover:bg-gray-50"
                      >
                        <td className="p-3">{row.id}</td>
                        <td className="p-3">{row.name}</td>
                        <td className="p-3">{row.email}</td>
                        <td className="p-3">{row.created_at}</td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* SQL Query */}
            <TabsContent value="sql" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">SQL Query</h3>
                <div className="space-y-4">
                  <textarea
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    className="w-full h-32 p-3 border rounded-lg font-mono text-sm"
                    placeholder="Enter your SQL query here..."
                  />
                  <div className="flex items-center space-x-2">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Play className="h-4 w-4 mr-2" />
                      Execute
                    </Button>
                    <Button variant="outline">Clear</Button>
                  </div>
                </div>

                {/* Query Results */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h4 className="font-medium mb-2">Query Results</h4>
                  <div className="text-sm text-gray-600">
                    Query executed successfully. 3 rows returned.
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Export */}
            <TabsContent value="export" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Export Database</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Export Format</label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>SQL</option>
                        <option>CSV</option>
                        <option>JSON</option>
                        <option>XML</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Tables to Export</label>
                      <div className="space-y-2">
                        {tables.map((table) => (
                          <label key={table.name} className="flex items-center space-x-2">
                            <input type="checkbox" defaultChecked className="rounded" />
                            <span>{table.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <label>Include structure</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <label>Include data</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <label>Add DROP TABLE statements</label>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Export Database
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}