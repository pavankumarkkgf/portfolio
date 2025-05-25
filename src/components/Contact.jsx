import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // reset after 3s
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            className="w-full border px-4 py-3 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white"
            rows="5"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {submitted && (
          <motion.div
            className="mt-6 text-green-600 text-center font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Thanks for reaching out! 👋
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
