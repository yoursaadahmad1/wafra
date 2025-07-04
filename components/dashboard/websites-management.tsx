'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Settings, ExternalLink, Database, FileText, Shield, Folder, Users, Code, MoreVertical, Plus, Dna as Dns, Edit, HardDrive, Terminal, Monitor } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const websites = [
  {
    id: 1,
    name: 'mystore.com',
    status: 'active',
    type: 'WordPress',
    visitors: '2.4K',
    uptime: '99.9%',
    lastBackup: '2 hours ago'
  },
  {
    id: 2,
    name: 'blog.example.com',
    status: 'active',
    type: 'Static',
    visitors: '1.2K',
    uptime: '100%',
    lastBackup: '1 day ago'
  },
  {
    id: 3,
    name: 'portfolio.dev',
    status: 'maintenance',
    type: 'React',
    visitors: '856',
    uptime: '99.8%',
    lastBackup: '3 hours ago'
  }
];

const siteTools = [
  { name: 'DNS Manager', icon: Dns, description: 'Manage DNS records and settings', color: 'text-blue-600' },
  { name: 'Zone Editor', icon: Edit, description: 'Advanced DNS zone configuration', color: 'text-green-600' },
  { name: 'FTP Accounts', icon: Users, description: 'Create and manage FTP users', color: 'text-purple-600' },
  { name: 'File Manager', icon: Folder, description: 'Browse and edit website files', color: 'text-orange-600' },
  { name: 'phpMyAdmin', icon: Database, description: 'MySQL database administration', color: 'text-red-600' },
  { name: 'Manage Databases', icon: Database, description: 'Create and manage databases', color: 'text-indigo-600' },
  { name: 'MySQL Database', icon: Database, description: 'MySQL database tools', color: 'text-teal-600' },
  { name: 'PostgreSQL', icon: Database, description: 'PostgreSQL database tools', color: 'text-pink-600' }
];

export function WebsitesManagement() {
  const [selectedWebsite, setSelectedWebsite] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Websites</h1>
          <p className="text-gray-600">Manage your hosted websites and applications</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Website
          </Button>
        </motion.div>
      </motion.div>

      {/* Websites Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {websites.map((website, index) => (
          <motion.div
            key={website.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                    >
                      <Globe className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg">{website.name}</CardTitle>
                      <CardDescription>{website.type}</CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        View Logs
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Badge className={`w-fit ${
                  website.status === 'active' ? 'bg-green-100 text-green-800' : 
                  website.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {website.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Visitors</span>
                    <p className="font-semibold">{website.visitors}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Uptime</span>
                    <p className="font-semibold">{website.uptime}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Last Backup: </span>
                  <span className="font-medium">{website.lastBackup}</span>
                </div>
                <div className="flex space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedWebsite(website.id)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Site Tools
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="w-full">
                      <Code className="h-4 w-4 mr-2" />
                      WordPress Admin
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Site Tools Panel */}
      {selectedWebsite && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Site Tools - {websites.find(w => w.id === selectedWebsite)?.name}</CardTitle>
                  <CardDescription>Manage your website's technical settings and tools</CardDescription>
                </div>
                <Button variant="ghost" onClick={() => setSelectedWebsite(null)}>
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {siteTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Button
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-300 w-full"
                      >
                        <Icon className={`h-6 w-6 ${tool.color}`} />
                        <div className="text-center">
                          <div className="font-medium text-sm">{tool.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{tool.description}</div>
                        </div>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}