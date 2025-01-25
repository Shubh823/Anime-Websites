import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, MessageCircle, Twitter, DiscIcon as Discord } from "lucide-react"

const alphabet = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a1b26] text-gray-300 py-8 relative">
      <div className="container mx-auto px-4">
        {/* A-Z List Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">A-Z LIST</h2>
          <p className="text-gray-400 mb-4">Searching anime order by alphabet name A to Z.</p>
          <div className="flex flex-wrap gap-2">
            {alphabet.map((letter) => (
              <Link
                key={letter}
                to={`/list/${letter.toLowerCase()}`}
                className="w-8 h-8 flex items-center justify-center bg-[#2a2b36] rounded hover:bg-[#3a3b46] transition-colors"
              >
                {letter}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-6 mb-6">
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of service
          </Link>
          <Link to="/dmca" className="hover:text-white transition-colors">
            DMCA
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link to="/app" className="hover:text-white transition-colors">
            MyAnime App
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mb-6">
          <motion.a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#5865F2] rounded-full hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Discord className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#0088cc] rounded-full hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#FF4500] rounded-full hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-[#1DA1F2] rounded-full hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="text-sm text-gray-400">
          <p className="mb-2">
            MyAnime does not store any files on our server, we only linked to the media which is hosted on 3rd party
            services.
          </p>
          <p>© MyAnime.to. All rights reserved.</p>
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}

