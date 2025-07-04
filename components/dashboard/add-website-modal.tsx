'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Globe, Upload, Code, Database } from 'lucide-react';

export function AddWebsiteModal() {
  const [step, setStep] = useState(1);
  const [websiteData, setWebsiteData] = useState({
    domain: '',
    type: '',
    description: '',
    files: null as File[] | null
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setWebsiteData(prev => ({ ...prev, files: Array.from(files) }));
    }
  };

  const handleSubmit = () => {
    // Simulate website creation
    console.log('Creating website:', websiteData);
    // Reset form and close modal
    setStep(1);
    setWebsiteData({ domain: '', type: '', description: '', files: null });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Website
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] glass-morphism border border-white/20">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-blue-600" />
            <span>Add New Website</span>
          </DialogTitle>
          <DialogDescription>
            Create a new website on your hosting account
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Step Indicator */}
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 3 && <div className={`w-12 h-1 ${step > stepNum ? 'bg-blue-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="domain">Domain Name</Label>
                <Input
                  id="domain"
                  placeholder="example.com"
                  value={websiteData.domain}
                  onChange={(e) => setWebsiteData(prev => ({ ...prev, domain: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Website Type</Label>
                <Select value={websiteData.type} onValueChange={(value) => setWebsiteData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select website type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wordpress">WordPress</SelectItem>
                    <SelectItem value="static">Static HTML</SelectItem>
                    <SelectItem value="react">React App</SelectItem>
                    <SelectItem value="php">PHP Application</SelectItem>
                    <SelectItem value="nodejs">Node.js App</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of your website"
                  value={websiteData.description}
                  onChange={(e) => setWebsiteData(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: File Upload */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Website Files</h3>
                <p className="text-gray-600 mb-4">Drag and drop your files or click to browse</p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>Choose Files</span>
                  </Button>
                </Label>
                {websiteData.files && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{websiteData.files.length} files selected</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Configuration */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Website Configuration</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domain:</span>
                    <span className="font-medium">{websiteData.domain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{websiteData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Files:</span>
                    <span className="font-medium">{websiteData.files?.length || 0} files</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="ssl" className="rounded" defaultChecked />
                  <Label htmlFor="ssl">Enable SSL Certificate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="backup" className="rounded" defaultChecked />
                  <Label htmlFor="backup">Enable Daily Backups</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="cdn" className="rounded" />
                  <Label htmlFor="cdn">Enable CDN</Label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Previous
            </Button>
            
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && (!websiteData.domain || !websiteData.type)}
              >
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                Create Website
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}