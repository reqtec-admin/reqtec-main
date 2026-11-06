import Image from 'next/image'
import { AboutDialog, ComplianceDialog, PrivacyDialog, TermsDialog } from '@/components/ui/footer-dialogs'

const footerIcon = '/images/REQtec-icon-white.png'

function ExternalLinkIndicator() {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block align-super -rotate-45 text-white/60 group-hover:text-white transition"
      aria-hidden="true"
    >
      <path
        d="M2 2L10 10L2 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8 text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">R E Q | t e c</p>
              <ul className="space-y-2">
                <li>
                  <a href="/our-work" className="text-sm text-white/70 hover:text-white transition">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="/our-vision" className="text-sm text-white/70 hover:text-white transition">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a href="/posts" className="text-sm text-white/70 hover:text-white transition">
                    Our Thoughts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">SERVICES</p>
              <ul className="space-y-2">
                <li>
                  <a href="/services/consultation-services" className="text-sm text-white/70 hover:text-white transition">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="/services/custom-software-solutions" className="text-sm text-white/70 hover:text-white transition">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="/services/cloud-migrations" className="text-sm text-white/70 hover:text-white transition">
                    Cloud Migrations
                  </a>
                </li>
                <li>
                  <a href="/services/ethical-agentic-ai" className="text-sm text-white/70 hover:text-white transition">
                    Agentic AI
                  </a>
                </li>
                <li>
                  <a href="/services/websites" className="text-sm text-white/70 hover:text-white transition">
                    Websites
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">COMPANY</p>
              <ul className="space-y-2">
                <li>
                  <AboutDialog />
                </li>
                <li>
                  <a href="/careers" className="text-sm text-white/70 hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/investor-relations" className="text-sm text-white/70 hover:text-white transition">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.reqtec.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    Code
                    <ExternalLinkIndicator />
                  </a>
                </li>
                <li>
                  <a
                    href="https://n8n.reqtec.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    Work Flows
                    <ExternalLinkIndicator />
                  </a>
                </li>
                <li>
                  <a
                    href="https://billing.stripe.com/p/login/bJe8wP8lubS7fMW6m97kc00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    Billing
                    <ExternalLinkIndicator />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">LEGAL</p>
              <ul className="space-y-2">
                <li>
                  <PrivacyDialog />
                </li>
                <li>
                  <TermsDialog />
                </li>
                <li>
                  <ComplianceDialog />
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">CONNECT</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://x.com/reqtecX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    X
                    <ExternalLinkIndicator />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/reqtec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    LinkedIn
                    <ExternalLinkIndicator />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@reqtec.com"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    Email
                    <ExternalLinkIndicator />
                  </a>
                </li>
                <li>
                  <a
                    href="https://cal.com/reqtec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 text-sm text-white/70 hover:text-white transition"
                  >
                    Schedule a Meeting
                    <ExternalLinkIndicator />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <a href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src={footerIcon}
                alt="REQtec"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-mono text-sm font-bold text-white">REQtec.com</span>
            </a>
            <p className="text-xs text-white/50 text-center md:text-right">
              © 2025 Requisite Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
