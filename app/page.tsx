'use client';

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#f8fbff] font-inter">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-6 border-b bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">CallAgent</h1>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-20 gap-12">
        {/* Text Content */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
           Citizen Connect <br />  Listens Understands and <span className="text-blue-600 font-semibold">Resolves.</span>
          </h1>
          <p className="text-3xl text-gray-600">
            AI-powered call agent that listens to grievances with empathy and provides instant, intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition text-center"
            >
              Go to Dashboard
            </Link>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition">
              Try Demo
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-10 mt-8 text-gray-700 font-medium text-sm">
            <div>
              <p className="text-xl font-semibold">24/7</p>
              Available
            </div>
            <div>
              <p className="text-xl font-semibold">95%</p>
              Resolution Rate
            </div>
            <div>
              <p className="text-xl font-semibold">2min</p>
              Avg Response
            </div>
          </div>
        </div>

        {/* Image and Chat Box */}
        <div className="relative max-w-md">
          <Image
            src="/ai-user.png"
            alt="User talking to AI"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl"
          />

          {/* Chat Bubble */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg w-[90%] p-4 text-sm">
            <p className="text-xs font-semibold text-gray-800 mb-2">CallAgent AI</p>
            <div className="space-y-2">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-md w-fit">
                I understand your concern. Let me help you resolve this issue right away.
              </div>
              <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-md w-fit">
                Thank you! That was exactly what I needed.
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">• AI is typing...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4 tracking-tight">Features of CallAgent</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-3xl">
            Advanced AI technology that transforms customer service with intelligent listening and instant resolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Listening",
                desc: "AI-powered voice recognition that understands emotions and context in every conversation.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v22m-6-6l6 6 6-6" />
                ),
              },
              {
                title: "Instant Solutions",
                desc: "Get immediate answers and resolutions with our advanced problem-solving algorithms.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
              },
              {
                title: "Always Available",
                desc: "Round-the-clock support ensuring your customers never wait for assistance.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
            ].map(({ title, desc, icon }, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-xl text-left shadow-sm">
                <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-md mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                <p className="text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-semibold text-gray-900 tracking-tight">Contact us </h2>
            <p className="text-gray-600 mt-2 text-3xl">
              Get in touch with our team. We're here to help you transform your customer service experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl p-8 shadow-lg">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input type="text" placeholder="First Name" className="w-1/2 border px-4 py-2 rounded-md" />
                  <input type="text" placeholder="Last Name" className="w-1/2 border px-4 py-2 rounded-md" />
                </div>
                <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
                <input type="text" placeholder="Company" className="w-full border px-4 py-2 rounded-md" />
                <select className="w-full border px-4 py-2 rounded-md">
                  <option>Select a subject</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>General Inquiry</option>
                </select>
                <textarea rows={4} placeholder="Tell us about your needs..." className="w-full border px-4 py-2 rounded-md"></textarea>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6">Get in touch</h3>
              <p className="text-gray-600 mb-6">
                Ready to revolutionize your customer service? Our team is standing by to help you get started with CallAgent.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📧</span>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">support@callagent.com<br />sales@callagent.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📞</span>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567<br />Available 24/7</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <div>
                    <p className="font-medium text-gray-800">Office</p>
                    <p className="text-gray-600">123 Tech Street<br />San Francisco, CA 94105</p>
                  </div>
                </li>
              </ul>

              <div className="bg-blue-50 mt-8 p-4 rounded-md text-sm text-gray-700">
                <strong>Quick Response:</strong> We typically respond to all inquiries within 2 hours during business hours.
              </div>

              <Link href="/orders">
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1321] text-white py-10 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold">CallAgent</h2>
            <p className="text-sm mt-3 text-gray-400">
              AI-powered customer service that listens, understands, and resolves grievances with empathy and precision.
            </p>
            <div className="flex space-x-2 mt-4">
              {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, i) => (
                <Image key={i} src={src} alt={`thumb-${i}`} width={60} height={60} className="rounded" />
              ))}
            </div>
            <div className="flex space-x-4 mt-4 text-gray-400 text-xl">
              <FaTwitter />
              <FaLinkedin />
              <FaPinterest />
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Data Protection</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">
              📧 support@callagent.com <br />
              📞 +1 (555) 123-4567 <br />
              📍 123 Tech Street <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;San Francisco, CA 94105
            </p>
            <Link href="/orders">
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 max-w-7xl mx-auto">
          <p>© 2024 CallAgent. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <p className="text-green-400">● Available 24/7</p>
            <p className="text-blue-400">System Status: Operational</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
