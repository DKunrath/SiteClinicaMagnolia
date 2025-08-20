import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp, Users, Award } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Campo Bom, RS',
      text: 'Excelente atendimento! A equipe da Magnólia é muito atenciosa e profissional. Meu sorriso ficou perfeito após o tratamento ortodôntico.',
      rating: 5,
      service: 'Odontologia',
      avatar: 'MS',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'João Santos',
      location: 'Novo Hamburgo, RS',
      text: 'Fiz meu tratamento ortodôntico com Invisalign na clínica e o resultado foi perfeito! Profissionais competentes e ambiente acolhedor.',
      rating: 5,
      service: 'Odontologia',
      avatar: 'JS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Ana Costa',
      location: 'São Leopoldo, RS',
      text: 'O tratamento dermatológico na Magnólia foi excelente. Profissionais especializados e resultados visíveis. Muito satisfeita!',
      rating: 5,
      service: 'Dermatologia',
      avatar: 'AC',
      color: 'from-emerald-500 to-blue-500'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Campo Bom, RS',
      text: 'Ambiente moderno, profissionais qualificados e resultados excepcionais. A Magnólia superou todas as minhas expectativas!',
      rating: 5,
      service: 'Bem-estar',
      avatar: 'CO',
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Fernanda Lima',
      location: 'Portão, RS',
      text: 'O acompanhamento psicológico na Magnólia me ajudou muito. Profissionais dedicados e ambiente acolhedor para o tratamento.',
      rating: 5,
      service: 'Psicologia',
      avatar: 'FL',
      color: 'from-orange-500 to-blue-500'
    },
    {
      name: 'Roberto Ferreira',
      location: 'Estância Velha, RS',
      text: 'Cuidados dermatológicos excepcionais. Finalmente encontrei profissionais que realmente se importam com a saúde da pele.',
      rating: 5,
      service: 'Dermatologia',
      avatar: 'RF',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { 
      icon: ThumbsUp, 
      value: '98%', 
      label: 'Satisfação dos pacientes',
      color: 'from-green-500 to-blue-500'
    },
    { 
      icon: Star, 
      value: '4.9', 
      label: 'Avaliação média',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: Users, 
      value: '95%', 
      label: 'Recomendariam a amigos',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Award, 
      value: '500+', 
      label: 'Pacientes atendidos',
      color: 'from-purple-500 to-blue-600'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-32 left-10 w-36 h-36 bg-gradient-to-br from-primary/10 to-success/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-32 right-10 w-28 h-28 bg-gradient-to-tl from-success/10 to-primary/10 rounded-full blur-2xl"
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
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 font-poppins">
            O que nossos{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              pacientes
            </span>{' '}
            dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confia na Magnólia.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500 font-medium">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed font-medium">
                "{testimonial.text}"
              </blockquote>

              {/* Patient Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-poppins">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1.5 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-6 h-6 border-2 border-gray-200 rounded-lg rotate-45 opacity-30 group-hover:border-primary/50 group-hover:rotate-[225deg] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-12 lg:p-16 shadow-xl border border-white/30"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-poppins mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Background decorative */}
          <div className="absolute top-8 right-8 w-20 h-20 border-2 border-primary/10 rounded-full" />
          <div className="absolute bottom-8 left-8 w-6 h-6 bg-success/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};