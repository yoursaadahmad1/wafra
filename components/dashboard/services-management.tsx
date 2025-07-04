'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
import { 
  Server, 
  Database, 
  Shield, 
  Globe,
  HardDrive,
  Cpu,
  MemoryStick,
  Network,
  Plus,
  Settings,
  MoreVertical
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Shared Hosting Pro',
    type: 'Shared Hosting',
    status: 'active',
    price: '$7.99/month',
    resources: {
      storage: { used: 15, total: 50, unit: 'GB' },
      bandwidth: { used: 120, total: 500, unit: 'GB' },
      websites: { used: 3, total: 10, unit: 'sites' }
    },
    features: ['SSL Certificate', 'Daily Backups', 'Email Accounts']
  },
  {
    id: 2,
    name: 'VPS Standard',
    type: 'VPS Hosting',
    status: 'active',
    price: '$39.99/month',
    resources: {
      cpu: { used: 45, total: 100, unit: '%' },
      memory: { used: 3.2, total: 8, unit: 'GB' },
      storage: { used: 80, total: 200, unit: 'GB' }
    },
    features: ['Root Access', 'KVM Virtualization', 'DDoS Protection']
  },
  {
    id: 3,
    name: 'Domain Registration',
    type: 'Domain',
    status: 'active',
    price: '$12.99/year',
    domains: ['mystore.com', 'blog.example.com', 'portfolio.dev'],
    features: ['WHOIS Privacy', 'DNS Management', 'Auto-Renewal']
  }
];

export function ServicesManagement() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Services</h1>
          <p className="text-gray-600">Manage your hosting services and resources</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Services Grid */}
      <div className="space-y-6 animate-stagger">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    {service.type === 'Shared Hosting' && <Server className="h-6 w-6 text-white" />}
                    {service.type === 'VPS Hosting' && <Database className="h-6 w-6 text-white" />}
                    {service.type === 'Domain' && <Globe className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <span>{service.type}</span>
                      <Badge className={`${
                        service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {service.status}
                      </Badge>
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Resource Usage */}
              {service.resources && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Resource Usage</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(service.resources).map(([key, resource]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize text-gray-600">{key}</span>
                          <span className="font-medium">
                            {resource.used}{resource.unit} / {resource.total}{resource.unit}
                          </span>
                        </div>
                        {/* <Progress 
                          value={(resource.used / resource.total) * 100} 
                          className="h-2"
                        /> */}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Domains */}
              {service.domains && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Domains</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.domains.map((domain, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1">
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Included Features</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage
                </Button>
                <Button size="sm" variant="outline">
                  Upgrade
                </Button>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}