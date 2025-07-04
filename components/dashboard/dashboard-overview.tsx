'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Server, 
  CreditCard, 
  TrendingUp, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Shield,
  Database,
  Monitor,
  Plus,
  ExternalLink
} from 'lucide-react';
import { useDashboardLanguage } from '@/hooks/use-dashboard-language';

const quickActions = [
  { name: 'addWebsite', icon: Plus, color: 'bg-blue-600', href: '/dashboard/websites' },
  { name: 'backups', icon: Database, color: 'bg-green-600', href: '/dashboard/services' },
  { name: 'uptime', icon: Monitor, color: 'bg-purple-600', href: '/dashboard/services' },
  { name: 'dnsManager', icon: Globe, color: 'bg-orange-600', href: '/dashboard/websites' },
  { name: 'recentActivity', icon: Activity, color: 'bg-red-600', href: '/dashboard/services' },
  { name: 'contactSupport', icon: ExternalLink, color: 'bg-indigo-600', href: '/support' },
];

export function DashboardOverview() {
  const { t } = useDashboardLanguage();

  const stats = [
    {
      title: t('activeWebsites'),
      value: '12',
      change: '+2 this month',
      trend: 'up',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: t('serverResources'),
      value: '78%',
      change: 'CPU Usage',
      trend: 'stable',
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: t('monthlySpend'),
      value: '$89.99',
      change: '-$10 vs last month',
      trend: 'down',
      icon: CreditCard,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: t('totalVisitors'),
      value: '24.5K',
      change: '+12% this week',
      trend: 'up',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const recentActivity = [
    { action: 'Website deployed', site: 'mystore.com', time: '2 hours ago', status: 'success', icon: Globe },
    { action: 'SSL certificate renewed', site: 'blog.example.com', time: '1 day ago', status: 'success', icon: Shield },
    { action: 'Backup completed', site: 'portfolio.dev', time: '2 days ago', status: 'success', icon: Database },
    { action: 'Domain renewed', site: 'startup.io', time: '3 days ago', status: 'success', icon: Globe },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t('dashboardOverview')}
            </h1>
            <p className="text-gray-600">{t('welcomeBack')}</p>
          </div>
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            {t('allSystemsOperational')}
          </Badge>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <div className={`${stat.bgColor} rounded-full p-2`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="flex items-center text-sm">
                    {stat.trend === 'up' && <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />}
                    {stat.trend === 'down' && <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />}
                    {stat.trend === 'stable' && <Activity className="h-4 w-4 text-blue-500 mr-1" />}
                    <span className={`${
                      stat.trend === 'up' ? 'text-green-600' : 
                      stat.trend === 'down' ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resource Usage */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <span>{t('resourceUsage')}</span>
              </CardTitle>
              <CardDescription>Current usage across all your services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: 'CPU Usage', value: 78, color: 'bg-blue-500', icon: Server },
                { name: 'Memory Usage', value: 45, color: 'bg-green-500', icon: Database },
                { name: 'Storage Used', value: 62, color: 'bg-purple-500', icon: Database },
                { name: 'Bandwidth', value: 34, color: 'bg-orange-500', icon: Globe }
              ].map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">{resource.name}</span>
                      </div>
                      <span className="font-medium">{resource.value}%</span>
                    </div>
                    <div className="relative">
                      {/* <Progress value={resource.value} className="h-3" /> */}
                      <motion.div
                        className={`absolute top-0 left-0 h-3 ${resource.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${resource.value}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{t('recentActivity')}</CardTitle>
              <CardDescription>Latest updates from your services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-green-100 rounded-full p-2">
                        <Icon className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.site}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{t('quickActions')}</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`${action.color} hover:opacity-90 text-white h-auto p-4 flex flex-col items-center space-y-2 w-full`}
                      asChild
                    >
                      <a href={action.href}>
                        <Icon className="h-6 w-6" />
                        <span className="text-xs font-medium">{t(action.name as any)}</span>
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}