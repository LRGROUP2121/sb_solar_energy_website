import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ComplaintLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchParams] = useSearchParams();
  const initialRole = (searchParams.get('role') === 'admin') ? 'admin' : 'customer';
  const [loginRole, setLoginRole] = useState<'customer' | 'admin'>(initialRole);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect based on role
    if (loginRole === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/portal/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 md:p-10 rounded-2xl shadow-xl z-10 border border-slate-100"
      >
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
            {loginRole === 'customer' ? 'Customer Portal' : 'Admin Portal'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {loginRole === 'customer' ? 'Sign in to manage your complaints and services' : 'Sign in to access admin control center'}
          </p>
        </div>

        {/* Role Toggle Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setLoginRole('customer')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              loginRole === 'customer' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => setLoginRole('admin')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              loginRole === 'admin' 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Admin / Staff
          </button>
        </div>
        
        <form className="mt-6 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm bg-slate-50"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all sm:text-sm bg-slate-50"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700 cursor-pointer">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md hover:shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
              </span>
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">
                Don't have an account?
              </span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/portal/register"
              className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all group"
            >
              Create new account
              <ArrowRight className="ml-2 h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComplaintLogin;
