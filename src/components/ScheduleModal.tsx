import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, User, Phone, CreditCard, FileText, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  plan: string;
  reason: string;
  returningPatient: string;
  observations: string;
  service: string;
}

export const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    plan: '',
    reason: '',
    returningPatient: '',
    observations: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'odontologia', label: 'Odontologia' },
    { value: 'dermatologia', label: 'Dermatologia' },
    { value: 'psicologia', label: 'Psicologia' },
    { value: 'bem-estar', label: 'Bem-estar' },
    { value: 'nao-sei', label: 'Não sei / Preciso de orientação' }
  ];

  const plans = [
    { value: 'particular', label: 'Consulta particular', icon: CreditCard },
    { value: 'unimed', label: 'Unimed', icon: CheckCircle },
    { value: 'sulamerica', label: 'Sul América', icon: CheckCircle },
    { value: 'bradesco', label: 'Bradesco Saúde', icon: CheckCircle },
    { value: 'amil', label: 'Amil', icon: CheckCircle },
    { value: 'outros', label: 'Outros', icon: CheckCircle }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `🏥 *Agendamento de Consulta - Magnólia*

📝 *Dados do paciente:*
• Nome: ${formData.name}

🏥 *Serviço desejado:*
${formData.service || 'Não especificado'}

💳 *Plano/Convênio:*
${formData.plan || 'Não especificado'}

📋 *Motivo da consulta:*
${formData.reason}

🔄 *Já consultou antes?*
${formData.returningPatient || 'Não informado'}

${formData.observations ? `📌 *Observações:*
${formData.observations}` : ''}

---
Mensagem enviada através do site da Magnólia`;

    // Simulate sending delay
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/5551999999999?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-8 pb-6 bg-gradient-to-br from-primary/5 to-success/5 rounded-t-3xl">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X size={20} className="text-gray-600" />
              </motion.button>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-poppins">
                    Agendar Consulta
                  </h2>
                  <p className="text-gray-600 text-sm">Preencha os dados para contato via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="p-8 pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-gray-900">Dados Pessoais</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Nome completo *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-2 border-gray-200 focus:border-primary/50 rounded-xl px-4 py-3 transition-all duration-300"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-gray-900">Serviço Desejado</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700 font-medium">Qual serviço você precisa?</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-primary/50 rounded-xl px-4 py-3 h-auto bg-white">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl bg-white border-2 border-gray-200 shadow-xl backdrop-blur-none z-50">
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value} className="rounded-lg bg-white hover:bg-gray-50 focus:bg-gray-100">
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-gray-700 font-medium">Plano/Convênio</Label>
                    <Select onValueChange={(value) => handleInputChange('plan', value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-primary/50 rounded-xl px-4 py-3 h-auto bg-white">
                        <SelectValue placeholder="Como será o pagamento?" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl bg-white border-2 border-gray-200 shadow-xl backdrop-blur-none z-50">
                        {plans.map((plan) => (
                          <SelectItem key={plan.value} value={plan.value} className="rounded-lg bg-white hover:bg-gray-50 focus:bg-gray-100">
                            <div className="flex items-center gap-2">
                              <plan.icon className="w-4 h-4" />
                              {plan.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Medical Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-gray-900">Informações Médicas</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-gray-700 font-medium">Motivo da consulta *</Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => handleInputChange('reason', e.target.value)}
                      required
                      className="border-2 border-gray-200 focus:border-primary/50 rounded-xl px-4 py-3 transition-all duration-300"
                      placeholder="Descreva brevemente o motivo da sua consulta"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="returning" className="text-gray-700 font-medium">Já se consultou na Magnólia antes?</Label>
                    <Select onValueChange={(value) => handleInputChange('returningPatient', value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-primary/50 rounded-xl px-4 py-3 h-auto bg-white">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl bg-white border-2 border-gray-200 shadow-xl backdrop-blur-none z-50">
                        <SelectItem value="sim" className="rounded-lg bg-white hover:bg-gray-50 focus:bg-gray-100">Sim, já sou paciente</SelectItem>
                        <SelectItem value="nao" className="rounded-lg bg-white hover:bg-gray-50 focus:bg-gray-100">Não, é minha primeira consulta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observations" className="text-gray-700 font-medium">Observações adicionais</Label>
                    <Textarea
                      id="observations"
                      value={formData.observations}
                      onChange={(e) => handleInputChange('observations', e.target.value)}
                      className="border-2 border-gray-200 focus:border-primary/50 rounded-xl px-4 py-3 transition-all duration-300"
                      placeholder="Informações adicionais que considera importantes (opcional)"
                      rows={2}
                    />
                  </div>
                </div>

                {/* Info Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-green-800 mb-1">Horário de Atendimento</h4>
                      <p className="text-sm text-green-700">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h<br />
                        <strong>Resposta em até 2 horas úteis</strong>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="mr-2" size={20} />
                    )}
                    {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                  </Button>
                </motion.div>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp da clínica
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};