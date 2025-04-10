import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Login = () => {
    const { scrollYProgress } = useViewportScroll();
    const gradientRotation = useTransform(
        scrollYProgress,
        [0, 1],
        ['0deg', '360deg']
    );

    return (
        <motion.div
            className="h-screen w-full flex items-center justify-center bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"
            style={{
                background: `linear-gradient(to top right, hsl(240, 100%, 60%), hsl(300, 100%, 60%), hsl(330, 100%, 60%))`,
                filter: `hue-rotate(${gradientRotation}deg)`,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="backdrop-blur-xl bg-white/10 shadow-2xl border border-white/30 rounded-2xl p-10 w-full max-w-md"
            >
                <motion.h2
                    className="text-3xl font-bold text-white text-center mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    🚀 Welcome Back
                </motion.h2>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <motion.input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <motion.input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-pink-500/50 transition"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                    >
                        Login
                    </motion.button>
                </form>

                <motion.p
                    className="mt-6 text-center text-sm text-white/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                >
                    Don't have an account?{" "}
                    <Link to="/register" className="text-white font-medium underline hover:text-pink-200">
                        Register
                    </Link>
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Login;