import { motion } from 'framer-motion';
import { Heart, Users, Shield, Star, Award, Clock, MapPin } from 'lucide-react';
import magnolia1 from '@/assets/magnolia-1.webp';
import magnolia2 from '@/assets/magnolia-2.jpg';

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description: 'Atendimento acolhedor focado no bem-estar integral de cada paciente.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes em diversas áreas da saúde.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Segurança e Qualidade',
      description: 'Protocolos rigorosos e equipamentos modernos para sua segurança.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Excelência no Atendimento',
      description: 'Compromisso com a satisfação e resultados positivos dos nossos pacientes.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Pacientes atendidos', color: 'from-primary to-blue-600' },
    { icon: Award, value: '5+', label: 'Anos de experiência', color: 'from-blue-500 to-blue-700' },
    { icon: Clock, value: '24h', label: 'Suporte emergencial', color: 'from-indigo-500 to-blue-600' },
    { icon: MapPin, value: '1', label: 'Localização em Campo Bom', color: 'from-cyan-500 to-blue-600' }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-success/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tl from-success/10 to-primary/10 rounded-full blur-2xl"
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
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sobre Nossa Clínica</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 font-poppins">
            Cuidando de você com{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              dedicação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma clínica moderna que combina tecnologia de ponta com atendimento humanizado
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-primary font-semibold">Clínica Magnólia</strong> nasceu com a missão de oferecer cuidados de saúde 
                excepcionais, combinando conhecimento técnico com um atendimento verdadeiramente 
                humano. Acreditamos que cada paciente é único e merece atenção personalizada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa equipe multidisciplinar trabalha de forma integrada para proporcionar 
                o melhor tratamento, sempre priorizando o conforto, a segurança e o bem-estar 
                de quem confia em nossos serviços.
              </p>

              {/* Mission Statement */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Nossa Missão</h3>
                <p className="text-gray-700 italic">
                  "Proporcionar cuidados de saúde de excelência, com foco na humanização 
                  do atendimento e no bem-estar integral dos nossos pacientes."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl"
              >
                <img 
                  src={magnolia1} 
                  alt="Interior da Clínica Magnólia"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-6 -right-6 w-48 h-32 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl"
              >
                <img 
                  src={magnolia2} 
                  alt="Equipamentos da Clínica Magnólia"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-poppins`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};