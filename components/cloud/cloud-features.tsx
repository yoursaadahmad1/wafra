'use client';

import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Database, BarChart3, Cpu, HardDrive, Network } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Auto-Scaling',
    description: 'Automatically scale resources up or down based on demand without manual intervention.',
    color: 'text-yellow-600',
    bgGradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivery network with 200+ edge locations worldwide for optimal performance.',
    color: 'text-blue-600',
    bgGradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced DDoS protection, WAF, and automated security updates.',
    color: 'text-green-600',
    bgGradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Database,
    title: 'Managed Databases',
    description: 'Fully managed MySQL, PostgreSQL, and MongoDB with automatic backups.',
    color: 'text-purple-600',
    bgGradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive monitoring and analytics with custom dashboards.',
    color: 'text-red-600',
    bgGradient: 'from-red-500/20 to-rose-500/20'
  },
  {
    icon: Cpu,
    title: 'High Performance',
    description: 'Latest generation CPUs with NVMe SSD storage for maximum performance.',
    color: 'text-indigo-600',
    bgGradient: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    icon: HardDrive,
    title: 'Elastic Storage',
    description: 'Scale storage on-demand with automatic replication and backup.',
    color: 'text-teal-600',
    bgGradient: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    icon: Network,
    title: 'Load Balancing',
    description: 'Intelligent load balancing across multiple servers and regions.',
    color: 'text-orange-600',
    bgGradient: 'from-orange-500/20 to-amber-500/20'
  }
];

export function CloudFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
        <div className="absolute inset-0 bg-data-flow opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 bg-gradient-to-br ${features[i]?.bgGradient || 'from-cyan-500/10 to-blue-500/10'} rounded-3xl blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Cloud Hosting Features
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Experience the power of modern cloud infrastructure with enterprise-grade 
            features and unlimited scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-6 rounded-2xl glass-morphism border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`bg-gradient-to-br ${feature.bgGradient} rounded-full p-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-cyan-100 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}