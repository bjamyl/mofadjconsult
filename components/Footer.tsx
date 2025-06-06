import Link from "next/link"
import { ArrowUp, Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-defaultGreen bg-[url('/bgg.jpg')] bg-blend-multiply  bg-cover bg-center  text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our offices */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our offices</h3>
            <div className="space-y-8">
              <div>
                <p className="text-gray-200 mb-2">Headquarters - Adjiringanor, Ghana</p>
                <p className="mb-1">Salem Estate</p>
                <p className="mb-2">MV9H+M79, Estate High St, Accra</p>
                <p>+233 552515269 </p>
              </div>
              <div>
                <p className="text-gray-200 mb-2">Operations - Adjiringanor Ghana</p>
                <p className="mb-1">Salem Estate,</p>
                <p>MV9H+M79, Estate High St, Accra</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-medium mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact us
                </Link>
              </li>
              
              <li>
                <Link href="/documents" className="hover:text-blue-400 transition-colors">
                 Documents
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Project Management Consulting
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Procurement and Logistics
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Quantity Survey Works
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Microsoft Project Training
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  Plan, Schedule, Monitor and Control Projects
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-xl font-medium mb-6">Subscribe to our newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent border border-gray-200 rounded p-3 pr-12 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-white hover:text-blue-400">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div> */}
          <div>
            <Link href='/'>
            <Image src='/logo-white.png' height={200} width={200} alt="logo-white"/>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">© 2025 Mofadj Consult All right reserved.</p>

          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-200 hover:text-white transition-colors">
                <p>Follow us on Facebook</p>
              </Link>
              
            </div>

           
          </div>
        </div>
      </div>

      {/* Go to top button */}
      <div className="absolute border py-10 hover:animate-pulse right-6 bottom-10 z-50 rounded-full">
        <Link
          href="#top"
          className="flex flex-col items-center gap-5 bg-defaultGreen shadow-lg transition-colors"
          aria-label="Go to top"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="text-xs font-bold tracking-widest transform rotate-90 origin-center mt-2">GO TOP</span>
        </Link>
      </div>
    </footer>
  )
}
