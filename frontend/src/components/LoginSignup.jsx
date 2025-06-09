import React,{useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const formVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};

const LoginSignup = ({LoginSignupProps}) => {
    const[setLoginSignup]=LoginSignupProps;
    const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin((prev) => !prev);

  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 bg-gray-300/50 transition-all flex justify-center items-center' onClick={()=>{setLoginSignup(false)}}>
            <div className='w-[92vw] md:w-[30vw] h-[60vh] rounded-lg shadow-lg bg-white flex items-center relative overflow-hidden' onClick={(event)=>{event.stopPropagation()}}>
                    
      <div className="p-5 relative">
        <AnimatePresence exitBeforeEnter>
          {isLogin ? (

            <motion.form
              key="login"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={formVariants}
              transition={{ duration: 0.4 }}
              className="space-y-4 "
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 shadow rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 shadow rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#0D3F63] text-white py-2 rounded-md hover:bg-[#ddd] hover:text-[#0D3F63] transition"
              >
                Login
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={formVariants}
              transition={{ duration: 0.4 }}
              className="space-y-4 "
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 shadow rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 shadow rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 shadow rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 shadow rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#0D3F63] text-white py-2 rounded-sm hover:bg-[#ddd] hover:text-[#0D3F63] transition"
              >
                Sign Up
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="text-center mt-4 text-sm text-gray-600 relative z-9">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={toggleForm}
            className="text-[#0D3F63] font-bold cursor-pointer hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    
            </div>
        </div>
  )
}

export default LoginSignup