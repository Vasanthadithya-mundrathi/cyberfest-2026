import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Users, Award } from 'lucide-react';

const ExpertSessionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Expert Sessions</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="font-rajdhani text-lg text-foreground/70 max-w-2xl mx-auto">
            Learn from the best in cybersecurity industry and academia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Panel Talks & Workshops */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold">Panel Talks & Workshops</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <GraduationCap className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-rajdhani text-lg font-semibold">IIT / NIT Faculty</h4>
                  <p className="font-rajdhani text-foreground/70">Leading academic researchers in cybersecurity</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Briefcase className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <h4 className="font-rajdhani text-lg font-semibold">Cybersecurity Startup Founders</h4>
                  <p className="font-rajdhani text-foreground/70">Industry leaders building the future of security</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-rajdhani text-lg font-semibold">Industry Experts</h4>
                  <p className="font-rajdhani text-foreground/70">Professionals from leading tech companies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Judging Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cyber-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/30">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold">Judging Panel</h3>
            </div>

            <div className="text-center mb-8">
              <div className="font-orbitron text-5xl font-bold text-secondary mb-2">6</div>
              <p className="font-rajdhani text-lg text-foreground/70">Expert Judges</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-card rounded-xl p-6 text-center">
                <div className="font-orbitron text-3xl font-bold text-primary mb-2">3</div>
                <p className="font-rajdhani text-foreground/70">Industry Experts</p>
              </div>
              <div className="cyber-card rounded-xl p-6 text-center">
                <div className="font-orbitron text-3xl font-bold text-accent mb-2">3</div>
                <p className="font-rajdhani text-foreground/70">CBIT Faculty</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-muted/20 border border-dashed border-muted-foreground/30 text-center">
              <p className="font-mono-tech text-sm text-muted-foreground">
                Judge profiles to be announced soon
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSessionsSection;
