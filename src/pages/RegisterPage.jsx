import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, Mail, Lock, ArrowRight, User, Phone } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    role: 'CONSUMER'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await register(formData);
    if (result.success) {
      alert("Registration successful! Please login.");
      navigate('/login');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 relative overflow-hidden py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[150px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass-dark p-10 rounded-[2.5rem] border-white/5 relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-brand-red/10 rounded-2xl mb-6">
            <ShieldAlert className="h-10 w-10 text-brand-red" />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Create <span className="text-brand-red">Identity</span></h2>
          <p className="text-gray-500 text-sm mt-2">Join the fire safety network</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <InputGroup 
            label="Username" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            icon={<User className="h-5 w-5" />}
            placeholder="johndoe"
          />
          <InputGroup 
            label="Email Address" 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            icon={<Mail className="h-5 w-5" />}
            placeholder="name@company.com"
          />
          <InputGroup 
            label="Phone Number" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            icon={<Phone className="h-5 w-5" />}
            placeholder="+1 234 567 890"
          />
          <InputGroup 
            label="Security Key" 
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            icon={<Lock className="h-5 w-5" />}
            placeholder="••••••••"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-5 text-lg flex items-center justify-center space-x-2 mt-4"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Register Account</span>
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-10 text-center border-t border-white/5 pt-8">
          <p className="text-gray-600 text-xs font-medium">
            Already have credentials? <Link to="/login" className="text-brand-red font-bold hover:underline">Login instead</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const InputGroup = ({ label, icon, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-red transition-colors">
        {icon}
      </div>
      <input
        required
        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-brand-red/50 transition-all placeholder:text-gray-700"
        {...props}
      />
    </div>
  </div>
);

export default RegisterPage;
