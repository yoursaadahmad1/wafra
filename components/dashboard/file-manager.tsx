'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Folder, File, Upload, Download, Edit, Trash2, Search, Plus, Home } from 'lucide-react';

const fileStructure = [
  { name: 'public_html', type: 'folder', size: '-', modified: '2024-01-15', children: [
    { name: 'index.html', type: 'file', size: '2.4 KB', modified: '2024-01-15' },
    { name: 'style.css', type: 'file', size: '1.8 KB', modified: '2024-01-14' },
    { name: 'script.js', type: 'file', size: '3.2 KB', modified: '2024-01-14' },
    { name: 'images', type: 'folder', size: '-', modified: '2024-01-10', children: [
      { name: 'logo.png', type: 'file', size: '45 KB', modified: '2024-01-10' },
      { name: 'banner.jpg', type: 'file', size: '128 KB', modified: '2024-01-10' },
    ]},
  ]},
  { name: 'wp-content', type: 'folder', size: '-', modified: '2024-01-12' },
  { name: 'wp-config.php', type: 'file', size: '3.1 KB', modified: '2024-01-12' },
  { name: 'backup', type: 'folder', size: '-', modified: '2024-01-08' },
];

export function FileManager() {
  const [currentPath, setCurrentPath] = useState(['public_html']);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getCurrentFiles = () => {
    let current = fileStructure;
    for (const path of currentPath) {
      const folder = current.find(item => item.name === path && item.type === 'folder');
      if (folder && folder.children) {
        current = folder.children;
      }
    }
    return current.filter(file => 
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName]);
  };

  const navigateUp = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1));
    }
  };

  const toggleFileSelection = (fileName: string) => {
    setSelectedFiles(prev => 
      prev.includes(fileName) 
        ? prev.filter(name => name !== fileName)
        : [...prev, fileName]
    );
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Folder className="h-6 w-6 text-blue-600" />
            <span>File Manager</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={navigateUp} disabled={currentPath.length <= 1}>
                <Home className="h-4 w-4 mr-2" />
                Up
              </Button>
              <div className="text-sm text-gray-600">
                /{currentPath.join('/')}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                New Folder
              </Button>
            </div>
          </div>

          {/* Action Bar */}
          {selectedFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-800">
                  {selectedFiles.length} file(s) selected
                </span>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Rename
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* File List */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-medium text-gray-900">Name</th>
                  <th className="text-left p-3 font-medium text-gray-900">Size</th>
                  <th className="text-left p-3 font-medium text-gray-900">Modified</th>
                  <th className="text-left p-3 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentFiles().map((file, index) => (
                  <motion.tr
                    key={file.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-t hover:bg-gray-50 cursor-pointer"
                    onClick={() => file.type === 'folder' ? navigateToFolder(file.name) : toggleFileSelection(file.name)}
                  >
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedFiles.includes(file.name)}
                          onChange={() => toggleFileSelection(file.name)}
                          onClick={(e) => e.stopPropagation()}
                          className="rounded"
                        />
                        {file.type === 'folder' ? (
                          <Folder className="h-5 w-5 text-blue-600" />
                        ) : (
                          <File className="h-5 w-5 text-gray-600" />
                        )}
                        <span className="font-medium">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-600">{file.size}</td>
                    <td className="p-3 text-gray-600">{file.modified}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
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
        </CardContent>
      </Card>
    </div>
  );
}