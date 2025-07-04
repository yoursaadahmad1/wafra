'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Server, Database, Shield, Globe, Zap } from 'lucide-react';

const architectureComponents = [
  { name: 'Load Balancer', icon: Zap, position: { x: 50, y: 20 }, color: 'text-yellow-600' },
  { name: 'Web Servers', icon: Server, position: { x: 20, y: 50 }, color: 'text-blue-600' },
  { name: 'Database Cluster', icon: Database, position: { x: 80, y: 50 }, color: 'text-green-600' },
  { name: 'CDN', icon: Globe, position: { x: 50, y: 80 }, color: 'text-purple-600' },
  { name: 'Security Layer', icon: Shield, position: { x: 10, y: 20 }, color: 'text-red-600' },
  { name: 'Cloud Storage', icon: Cloud, position: { x: 90, y: 20 }, color: 'text-cyan-600' },
];

export function CloudArchitecture() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
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
            Cloud Architecture
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Our cloud infrastructure is designed for maximum performance, reliability, 
            and scalability with redundancy at every layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Infrastructure Overview
                </h3>
                <div className="relative h-96 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl overflow-hidden">
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {architectureComponents.map((component, index) => (
                      <g key={index}>
                        {architectureComponents.slice(index + 1).map((target, targetIndex) => (
                          <motion.line
                            key={targetIndex}
                            x1={`${component.position.x}%`}
                            y1={`${component.position.y}%`}
                            x2={`${target.position.x}%`}
                            y2={`${target.position.y}%`}
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: index * 0.2 }}
                          />
                        ))}
                      </g>
                    ))}
                  </svg>

                  {/* Architecture Components */}
                  {architectureComponents.map((component, index) => {
                    const Icon = component.icon;
                    return (
                      <motion.div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${component.position.x}%`,
                          top: `${component.position.y}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                          <Icon className={`h-8 w-8 ${component.color}`} />
                        </div>
                        <div className="text-white text-xs text-center mt-2 font-medium">
                          {component.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Enterprise-Grade Infrastructure
            </h3>
            
            {[
              {
                title: 'Multi-Region Deployment',
                description: 'Deploy across multiple regions for maximum availability and performance.',
                icon: Globe
              },
              {
                title: 'Auto-Scaling',
                description: 'Automatically scale resources based on demand with intelligent algorithms.',
                icon: Zap
              },
              {
                title: 'High Availability',
                description: '99.99% uptime with redundant systems and automatic failover.',
                icon: Shield
              },
              {
                title: 'Managed Services',
                description: 'Fully managed databases, caching, and monitoring services.',
                icon: Database
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl glass-morphism border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-cyan-500/20 rounded-full p-3">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-cyan-100 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}