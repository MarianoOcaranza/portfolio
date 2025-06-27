import { Mail, Phone } from 'lucide-react'; // Si usas lucide-react, sino te lo preparo con react-icons
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-100px)] gap-10 p-4">
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl space-y-6"
            >
                <h2 className="text-4xl font-bold text-indigo-500">¡Hablemos!</h2>
                <p className="text-lg text-neutral-600">
                    Actualmente me encuentro buscando empleo en <strong>IT</strong>.  
                    Si te interesa conocerme más, podés contactarme por las siguientes vías:
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                    
                    <a href="https://wa.me/5491136864360" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
                            <Phone className="w-5 h-5" />
                            WhatsApp
                        </button>
                    </a>

                    <a href="mailto:marianoocaranza@gmail.com">
                        <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
                            <Mail className="w-5 h-5" />
                            Enviarme un Mail
                        </button>
                    </a>

                </div>

                <p className="text-neutral-500 text-sm mt-4">o escribime directamente a <strong>marianoocaranza@gmail.com</strong></p>
            </motion.div>

        </div>
    );
};

export default Contact;
