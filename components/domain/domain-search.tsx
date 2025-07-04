'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Check, X } from 'lucide-react';

const popularExtensions = [
  { ext: '.com', price: '$12.99', available: true },
  { ext: '.net', price: '$14.99', available: true },
  { ext: '.org', price: '$13.99', available: false },
  { ext: '.info', price: '$9.99', available: true },
  { ext: '.biz', price: '$11.99', available: true },
  { ext: '.co', price: '$24.99', available: true },
];

export function DomainSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  return (
    <section id="domain-search" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Search for Your Perfect Domain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your desired domain name and we'll check availability across all popular extensions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16 animate-fade-in">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter your domain name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg py-6"
            />
            <Button 
              size="lg" 
              onClick={handleSearch}
              disabled={isSearching || !searchTerm}
              className="bg-teal-600 hover:bg-teal-700 px-8"
            >
              {isSearching ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </>
              )}
            </Button>
          </div>
        </div>

        {searchTerm && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Search Results for "{searchTerm}"
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularExtensions.map((domain, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold text-gray-900">
                        {searchTerm}{domain.ext}
                      </div>
                      {domain.available ? (
                        <Check className="h-6 w-6 text-green-500" />
                      ) : (
                        <X className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-teal-600">
                        {domain.price}
                        <span className="text-sm text-gray-500 font-normal">/year</span>
                      </div>
                      
                      <Button
                        size="sm"
                        disabled={!domain.available}
                        className={domain.available ? 'bg-teal-600 hover:bg-teal-700' : ''}
                        variant={domain.available ? 'default' : 'secondary'}
                      >
                        {domain.available ? 'Add to Cart' : 'Unavailable'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}