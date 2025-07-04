'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Globe, 
  Server, 
  CreditCard, 
  ShoppingBag, 
  Settings, 
  Menu,
  X,
  Bell,
  Search,
  User,
  LogOut,
  HelpCircle,
  Zap,
  Shield,
  Database,
  Monitor,
  ChevronDown,
  ChevronRight,
  Folder,
  Users,
  Code,
  FileText,
  BarChart3,
  Cloud,
  Plus,
  ArrowLeft,
  Languages,
  Sun,
  Moon
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { AddWebsiteModal } from './add-website-modal';
import { AddPaymentModal } from './add-payment-modal';
import { useDashboardLanguage } from '@/hooks/use-dashboard-language';

const navigation = [
  { 
    name: 'overview', 
    href: '/dashboard', 
    icon: Home,
    description: 'dashboardHome',
    color: 'text-blue-600'
  },
  { 
    name: 'websites', 
    href: '/dashboard/websites', 
    icon: Globe,
    description: 'manageWebsites',
    color: 'text-green-600',
    submenu: [
      { name: 'allWebsites', href: '/dashboard/websites', icon: Globe },
      { name: 'addWebsite', href: '/dashboard/websites/add', icon: Plus, component: AddWebsiteModal },
      { name: 'fileManager', href: '/dashboard/websites/files', icon: Folder },
      { name: 'ftpAccounts', href: '/dashboard/websites/ftp', icon: Users },
      { name: 'dnsManager', href: '/dashboard/websites/dns', icon: Settings },
      { name: 'phpMyAdmin', href: '/dashboard/websites/phpmyadmin', icon: Database },
    ]
  },
  { 
    name: 'services', 
    href: '/dashboard/services', 
    icon: Server,
    description: 'hostingServices',
    color: 'text-purple-600',
    submenu: [
      { name: 'allServices', href: '/dashboard/services', icon: Server },
      { name: 'resourceMonitor', href: '/dashboard/services/monitor', icon: Monitor },
      { name: 'backups', href: '/dashboard/services/backups', icon: Shield },
      { name: 'sslCertificates', href: '/dashboard/services/ssl', icon: Shield },
      { name: 'performance', href: '/dashboard/services/performance', icon: Zap },
    ]
  },
  { 
    name: 'billing', 
    href: '/dashboard/billing', 
    icon: CreditCard,
    description: 'billingManagement',
    color: 'text-orange-600',
    submenu: [
      { name: 'billingOverview', href: '/dashboard/billing', icon: CreditCard },
      { name: 'invoices', href: '/dashboard/billing/invoices', icon: FileText },
      { name: 'paymentMethods', href: '/dashboard/billing/payments', icon: CreditCard, component: AddPaymentModal },
      { name: 'usageReports', href: '/dashboard/billing/reports', icon: BarChart3 },
    ]
  },
  { 
    name: 'marketplace', 
    href: '/dashboard/marketplace', 
    icon: ShoppingBag,
    description: 'addonsServices',
    color: 'text-pink-600'
  },
  { 
    name: 'settings', 
    href: '/dashboard/settings', 
    icon: Settings,
    description: 'accountSettings',
    color: 'text-indigo-600'
  },
];

const quickStats = [
  { label: 'activeSites', value: '12', icon: Globe, color: 'text-green-500' },
  { label: 'uptime', value: '99.9%', icon: Zap, color: 'text-yellow-500' },
  { label: 'storageUsed', value: '45%', icon: Database, color: 'text-blue-500' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const pathname = usePathname();
  const { t, language, setLanguage } = useDashboardLanguage();

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    );
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const renderMenuItem = (item: any) => {
    if (item.component) {
      return <item.component key={item.name} />;
    }
    
    return (
      <Link
        key={item.name}
        href={item.href}
        className={cn(
          "flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200",
          pathname === item.href
            ? "bg-blue-100 text-blue-600"
            : "text-gray-600 hover:bg-white/40 hover:text-blue-600"
        )}
      >
        <item.icon className="h-4 w-4" />
        <span className="text-sm">{t(item.name)}</span>
      </Link>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-neural-network opacity-30 pointer-events-none"></div>
      
      {/* Top Navigation Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/20 shadow-sm"
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {/* Logo and Back to Website */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">{t('backToWebsite')}</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <Link href="/dashboard" className="flex items-center space-x-2">
                <Server className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">{t('dashboard')}</span>
              </Link>
            </div>
            
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('searchDashboard')}
                className="pl-10 w-64 bg-white/60 border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm">{language === 'ar' ? 'العربية' : 'English'}</span>
            </Button>

            {/* Quick Actions */}
            <div className="hidden md:flex items-center space-x-2">
              <AddWebsiteModal />
              <AddPaymentModal />
            </div>

            {/* Notifications */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-red-500 text-white text-xs">
                  3
                </Badge>
              </Button>
            </motion.div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all">
                      <AvatarImage src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-morphism border border-white/20 shadow-2xl" align="end" forceMount>
                <div className="flex items-center space-x-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{t('profileSettings')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/billing" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>{t('billing')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/support" className="flex items-center">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>{t('support')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/" className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t('backToWebsite')}</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.div>
      
      {/* Sidebar */}
      <motion.div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-80 glass-morphism border-r border-white/20 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto mt-16",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        initial={{ x: -320 }}
        animate={{ x: sidebarOpen ? 0 : -320 }}
        transition={{ duration: 0.3 }}
      >
        {/* Quick Stats */}
        <div className="p-6 border-b border-white/20">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">{t('quickOverview')}</h3>
          <div className="grid grid-cols-3 gap-3">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-3 rounded-lg bg-white/60 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className={`h-5 w-5 ${stat.color} mx-auto mb-1`} />
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{t(stat.label)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const isExpanded = expandedMenus.includes(item.name);
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <Collapsible open={isExpanded} onOpenChange={() => toggleMenu(item.name)}>
                    <CollapsibleTrigger asChild>
                      <div
                        className={cn(
                          "group flex items-center justify-between w-full px-4 py-4 rounded-xl transition-all duration-300 relative overflow-hidden cursor-pointer",
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                            : "text-gray-700 hover:bg-white/60 hover:text-blue-600"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className={cn(
                            "h-6 w-6 transition-colors",
                            isActive ? "text-white" : `${item.color} group-hover:text-blue-600`
                          )} />
                          <div>
                            <div className="font-medium">{t(item.name)}</div>
                            <div className={cn(
                              "text-xs",
                              isActive ? "text-blue-100" : "text-gray-500 group-hover:text-blue-500"
                            )}>
                              {t(item.description)}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 mt-2 ml-4">
                      {item.submenu.map((subItem) => renderMenuItem(subItem))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-300 relative overflow-hidden",
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-white/60 hover:text-blue-600"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <div className="relative z-10 flex items-center space-x-3 w-full">
                      <Icon className={cn(
                        "h-6 w-6 transition-colors",
                        isActive ? "text-white" : `${item.color} group-hover:text-blue-600`
                      )} />
                      <div className="flex-1">
                        <div className="font-medium">{t(item.name)}</div>
                        <div className={cn(
                          "text-xs",
                          isActive ? "text-blue-100" : "text-gray-500 group-hover:text-blue-500"
                        )}>
                          {t(item.description)}
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-white/20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white text-center">
            <Shield className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold mb-1">{t('needHelp')}</h4>
            <p className="text-xs text-blue-100 mb-3">{t('supportAvailable')}</p>
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none" asChild>
              <Link href="/support">
                <HelpCircle className="h-4 w-4 mr-2" />
                {t('contactSupport')}
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:pl-80 pt-16">
        {/* Page Content */}
        <main className="p-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}