'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Download, 
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const invoices = [
  {
    id: 'INV-001',
    date: '2024-01-15',
    amount: '$47.98',
    status: 'paid',
    services: ['Shared Hosting Pro', 'Domain Registration']
  },
  {
    id: 'INV-002',
    date: '2024-01-01',
    amount: '$39.99',
    status: 'paid',
    services: ['VPS Standard']
  },
  {
    id: 'INV-003',
    date: '2023-12-15',
    amount: '$47.98',
    status: 'paid',
    services: ['Shared Hosting Pro', 'Domain Registration']
  }
];

const upcomingBills = [
  {
    service: 'Shared Hosting Pro',
    amount: '$7.99',
    dueDate: '2024-02-15',
    status: 'upcoming'
  },
  {
    service: 'VPS Standard',
    amount: '$39.99',
    dueDate: '2024-02-01',
    status: 'upcoming'
  }
];

export function BillingManagement() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Invoices</h1>
        <p className="text-gray-600">Manage your billing information and view payment history</p>
      </div>

      {/* Billing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Month</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$87.97</div>
            <p className="text-xs text-gray-600">+$10 from last month</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Feb 1</div>
            <p className="text-xs text-gray-600">$39.99 due</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,247</div>
            <p className="text-xs text-gray-600">This year</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Method */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <span>Payment Method</span>
          </CardTitle>
          <CardDescription>Manage your default payment method</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600">Expires 12/25</p>
              </div>
            </div>
            <Button variant="outline">Update</Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Bills */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <span>Upcoming Bills</span>
          </CardTitle>
          <CardDescription>Services due for renewal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingBills.map((bill, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{bill.service}</p>
                  <p className="text-sm text-gray-600">Due: {bill.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{bill.amount}</p>
                  <Badge className="bg-orange-100 text-orange-800">
                    {bill.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Invoice History */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>Download and view your past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium">{invoice.id}</p>
                      <p className="text-sm text-gray-600">{invoice.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Services:</p>
                      <p className="text-sm">{invoice.services.join(', ')}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-bold">{invoice.amount}</p>
                    <Badge className="bg-green-100 text-green-800">
                      {invoice.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}