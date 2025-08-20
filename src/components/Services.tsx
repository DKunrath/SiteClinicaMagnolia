import { motion } from 'framer-motion';
import { Stethoscope, Smile, Brain, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import magnolia3 from '@/assets/magnolia-3.webp';
import magnolia4 from '@/assets/magnolia-4.webp';

interface ServicesProps {
  onScheduleClick: () => void;
}

export const Services = ({ onScheduleClick }: ServicesProps) => {
  const services = [
    {
      icon: Smile,
      title: 'Odontologia',
      description: 'Cuidados dentários completos incluindo tratamentos estéticos com tecnologia Invisalign.',
      features: ['Limpeza e prevenção', 'Invisalign', 'Clareamento dental'],
      color: 'from-emerald-500 to-blue-500',
      bgColor: 'from-emerald-500/10 to-blue-500/10'
    },
    {
      icon: Stethoscope,
      title: 'Dermatologia',
      description: 'Cuidados especializados para a pele, diagnóstico e tratamento de condições dermatológicas.',
      features: ['Consultas dermatológicas', 'Tratamentos estéticos', 'Cuidados preventivos'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-500/10 to-violet-500/10'
    },
    {
      icon: Brain,
      title: 'Psicologia',
      description: 'Acompanhamento psicológico para promoção da saúde mental e bem-estar emocional.',
      features: ['Terapia individual', 'Orientação familiar', 'Desenvolvimento pessoal'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Sparkles,
      title: 'Bem-estar',
      description: 'Programas integrados focados na qualidade de vida e saúde preventiva dos nossos pacientes.',
      features: ['Orientação nutricional', 'Programas preventivos', 'Acompanhamento integral'],
      color: 'from-orange-500 to-blue-500',
      bgColor: 'from-orange-500/10 to-blue-500/10'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-success/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-success/10 px-4 py-2 rounded-full mb-4">
            <Stethoscope className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 font-poppins">
            Cuidados completos para{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              sua saúde
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de saúde, sempre com foco 
            na excelência do atendimento e resultados efetivos.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200`}
                >
                  Saiba mais 
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-200 rounded-lg rotate-45 opacity-50 group-hover:border-primary/50 group-hover:rotate-[225deg] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-12 lg:p-16 shadow-xl border border-gray-100"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Pronto para cuidar da sua{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  saúde?
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa equipe está pronta para oferecer o melhor atendimento personalizado 
                para suas necessidades. Agende sua consulta e dê o primeiro passo para 
                uma vida mais saudável.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onScheduleClick}
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                >
                  Agendar consulta
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary/20 hover:border-primary/40 text-primary px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Falar com especialista
                </Button>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10"
              >
                <img 
                  src={magnolia3} 
                  alt="Tratamento na Clínica Magnólia"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-4 -right-4 w-32 h-24 z-20"
              >
                <img 
                  src={magnolia4} 
                  alt="Equipamentos modernos"
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-success/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-success/20 to-primary/20 rounded-full blur-lg" />
            </div>
          </div>
          
          {/* Background decorative */}
          <div className="absolute top-8 right-8 w-20 h-20 border-2 border-primary/10 rounded-full" />
          <div className="absolute bottom-8 left-8 w-6 h-6 bg-success/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};