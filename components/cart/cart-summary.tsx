'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Shield, CreditCard, Lock } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

export function CartSummary() {
  const { items, getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();
  const discount = subtotal * 0.1; // 10% discount
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + tax;

  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount (10% OFF)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div className="space-y-2">
            <Input placeholder="Promo code" />
            <Button variant="outline" className="w-full">
              Apply Code
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing Cycle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="billing" value="monthly" defaultChecked />
              <span>Monthly - ${total.toFixed(2)}/month</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="billing" value="yearly" />
              <span>Yearly - ${(total * 10).toFixed(2)}/year</span>
              <Badge className="bg-green-600 text-white text-xs">Save 17%</Badge>
            </label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4">
            <CreditCard className="h-4 w-4 mr-2" />
            Proceed to Checkout
          </Button>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-4 w-4 text-green-500" />
              <span>Secure SSL encrypted checkout</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4 text-green-500" />
              <span>All major payment methods accepted</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}