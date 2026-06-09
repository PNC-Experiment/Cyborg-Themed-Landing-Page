import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Brain, Cpu, Eye, Shield, Gauge, Sparkles, ArrowRight } from 'lucide-react';

const asset = (name: string) => new URL(`../../public/images/${name}`, import.meta.url).href;
const HERO_CYBORG = asset('hero_cyborg.png');
console.log("BASE_URL =", import.meta.env.BASE_URL);
console.log("HERO =", HERO_CYBORG);
const SUBSYSTEM_BRAIN = asset('subsystem_brain.png');
const SUBSYSTEM_LIMBS = asset('subsystem_limbs.png');
const SUBSYSTEM_CORE = asset('subsystem_core.png');
const SUBSYSTEM_HEAD = asset('subsystem_head.png');
const SUBSYSTEM_SKIN = asset('subsystem_skin.png');

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      id: 'brain',
      title: 'Neural Architecture',
      subtitle: 'Advanced Intelligence Core',
      description: 'Quantum-level processing pathways with adaptive neural routing. Decision logic optimized for real-time analysis and predictive intelligence.',
      image: SUBSYSTEM_BRAIN,
      specs: ['98.7% Neural Efficiency', '1.2M Processing Nodes', 'Real-time Adaptation', 'Predictive Analysis'],
    },
    {
      id: 'limbs',
      title: 'Motion System',
      subtitle: 'Fluid Kinetic Integration',
      description: 'Precision-engineered joints with mechanical integration. Smooth, dexterous movement with load handling up to 500kg.',
      image: SUBSYSTEM_LIMBS,
      specs: ['0.5ms Response Time', '360° Joint Rotation', '500kg Load Capacity', 'Nano-Precision Actuators'],
    },
    {
      id: 'core',
      title: 'Power Core',
      subtitle: 'Energy Distribution System',
      description: 'Advanced energy source with thermal management. Infinite endurance through quantum power distribution and efficiency optimization.',
      image: SUBSYSTEM_CORE,
      specs: ['Infinite Endurance', 'Zero Thermal Drift', '99.97% Efficiency', 'Quantum Stabilization'],
    },
    {
      id: 'head',
      title: 'Cognitive Interface',
      subtitle: 'Advanced Sensory System',
      description: 'Premium faceplate with intelligent eyes and sensing layers. External communication interface with expression system.',
      image: SUBSYSTEM_HEAD,
      specs: ['Multi-spectrum Vision', 'Adaptive Eye Tracking', 'Holographic Display', '360° Awareness'],
    },
    {
      id: 'skin',
      title: 'Outer Structure',
      subtitle: 'Premium Material Shell',
      description: 'Seamless integration of synthetic skin and metallic plating. Reflective, durable, and engineered for premium aesthetic.',
      image: SUBSYSTEM_SKIN,
      specs: ['Nano-composite Shell', 'Self-Healing Surface', 'Adaptive Reflectivity', 'Eternal Durability'],
    },
  ];

  const stats = [
    { label: 'Active Systems', value: '124,893', unit: '+' },
    { label: 'System Accuracy', value: '99.98%', unit: '' },
    { label: 'Response Time', value: '11ms', unit: '' },
    { label: 'Enterprise Partners', value: '500+', unit: '' },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'AI Research Director',
      quote: 'The most advanced cybernetic system we\'ve encountered. Truly revolutionary.',
    },
    {
      name: 'Marcus Rivera',
      title: 'CTO, TechCore Industries',
      quote: 'Integration was seamless. Performance exceeded all expectations.',
    },
    {
      name: 'Elena Volkov',
      title: 'Innovation Lead',
      quote: 'This is the future. We\'re witnessing the next evolution of intelligence.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for exploration',
      features: ['Basic Neural Processing', 'Standard Motion Control', '99.9% Uptime', 'Email Support'],
    },
    {
      name: 'Pro',
      price: '$4,999',
      period: '/month',
      description: 'Most popular choice',
      features: ['Advanced Neural Architecture', 'Full Motion System', '99.99% Uptime', '24/7 Priority Support', 'Custom Integration'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Unlimited potential',
      features: ['Full System Access', 'Dedicated Infrastructure', '99.999% Uptime', 'Dedicated Support Team', 'Custom Development'],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'none',
        }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cybernetic Evolution
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-cyan-400 transition">Features</a>
            <a href="#technology" className="text-sm hover:text-cyan-400 transition">Technology</a>
            <a href="#pricing" className="text-sm hover:text-cyan-400 transition">Pricing</a>
          </div>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm font-semibold">
            Join Evolution
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-transparent blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, 30, -30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-purple-500/20 to-transparent blur-3xl"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30"
              >
                <span className="text-sm text-cyan-400">Welcome to the Future</span>
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Human Intelligence Was Only Version 1
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Step into a world where artificial consciousness meets engineering perfection. The next evolution of intelligence awaits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold flex items-center gap-2"
              >
                Begin Evolution <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-all font-semibold"
              >
                Explore Systems
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">AI Sync Active</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">500+</div>
                <div className="text-sm text-gray-400">Enterprise Partners</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Cyborg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center justify-center"
          >
            <motion.div
              className="relative w-full aspect-square"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src={HERO_CYBORG}
                alt="Advanced AI Cyborg"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Holographic Rings */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 rounded-2xl border border-purple-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cyborg Subsystems
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore the advanced anatomy of our cybernetic intelligence. Each subsystem represents the pinnacle of engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedFeature(feature.id)}
                className="group cursor-pointer"
              >
                <div className="glass p-6 rounded-xl h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-cyan-400 mb-3">{feature.subtitle}</p>
                  <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.specs.slice(0, 2).map((spec, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                System Architecture
              </span>
            </h2>
            <p className="text-gray-400 text-lg">How intelligence flows through the network</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {['Input Layer', 'Analysis', 'Neural Core', 'Decision Engine', 'Output'].map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-24 h-24 rounded-full glass border border-cyan-500/50 flex items-center justify-center mb-4 glow-cyan"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{idx + 1}</div>
                    <div className="text-xs text-gray-400">{stage}</div>
                  </div>
                </motion.div>
                {idx < 4 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="hidden md:block w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent mb-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Trusted by Innovators
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-cyan-400">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Choose your evolution path</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative p-8 rounded-xl transition-all duration-300 ${
                  tier.highlighted
                    ? 'glass border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 scale-105'
                    : 'glass border border-white/10'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{tier.period}</span>
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'border border-cyan-500/50 hover:bg-cyan-500/10'
                }`}>
                  Get Started
                </button>
                <div className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future Is Ready To Meet You
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the evolution. Experience the next generation of artificial intelligence.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold text-lg flex items-center gap-2 mx-auto"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Cybernetic Evolution</span>
              </div>
              <p className="text-sm text-gray-400">The next evolution of intelligence awaits.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2035 Cybernetic Evolution. All rights reserved. Powered by advanced AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
