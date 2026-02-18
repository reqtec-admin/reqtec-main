'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

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
  const [aboutOpen, setAboutOpen] = useState(false)
  const [careersOpen, setCareersOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [complianceOpen, setComplianceOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
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
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">COMPANY</p>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setAboutOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCareersOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Careers
                  </button>
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
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Privacy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTermsOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Terms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setComplianceOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Compliance
                  </button>
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

      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="reqtec-modal-glow bg-black/60 border-white/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/60 relative backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-white">About</DialogTitle>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setAboutOpen(false)}
              className="text-white/60 hover:text-white transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              REQtec is a technology company delivering cloud, AI/ML, mobile, and web solutions for modern businesses.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={careersOpen} onOpenChange={setCareersOpen}>
        <DialogContent className="reqtec-modal-glow bg-black/60 border-white/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/60 relative backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-white">Careers</DialogTitle>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setCareersOpen(false)}
              className="text-white/60 hover:text-white transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>Coming Soon</div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="reqtec-modal-glow bg-black/60 border-white/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/60 relative backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-white">Privacy Policy</DialogTitle>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              className="text-white/60 hover:text-white transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              This Privacy Policy describes how REQtec ("we", "our", or "us") collects, uses, and protects your information.
            </div>
            <div>
              <strong>Information Collection:</strong> We collect information that you provide directly to us, including contact information and project-related data.
            </div>
            <div>
              <strong>Use of Information:</strong> We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
            </div>
            <div>
              <strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </div>
            <div>
              <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
            </div>
            <div className="pt-4 border-t border-white/10">
              © 2025 Requisite Technologies. All rights reserved.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="reqtec-modal-glow bg-black/60 border-white/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/60 relative backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-white">Terms & Definitions</DialogTitle>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setTermsOpen(false)}
              className="text-white/60 hover:text-white transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              <strong className="text-white">Intellectual Property (IP):</strong> Refers to creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce. This includes patents, copyrights, trademarks, and trade secrets.
            </div>
            <div>
              <strong className="text-white">Proprietary Data:</strong> Information that is owned by a company or individual and is not publicly available. This data is protected by confidentiality agreements and trade secret laws.
            </div>
            <div>
              <strong className="text-white">Source Code:</strong> Human-readable instructions written in a programming language that define how software operates. Source code is protected by copyright law.
            </div>
            <div>
              <strong className="text-white">Trade Secret:</strong> Confidential business information that provides a competitive advantage. Trade secrets are protected as long as they remain secret and have commercial value.
            </div>
            <div>
              <strong className="text-white">Work Product:</strong> Materials, documents, code, and other deliverables created during the course of a project. Ownership and usage rights are typically defined in service agreements.
            </div>
            <div>
              <strong className="text-white">Non-Disclosure Agreement (NDA):</strong> A legal contract that establishes confidentiality between parties, preventing the disclosure of proprietary or confidential information.
            </div>
            <div>
              <strong className="text-white">License:</strong> A legal permission to use intellectual property under specified conditions. Licenses can be exclusive, non-exclusive, or limited in scope.
            </div>
            <div className="pt-4 border-t border-white/10">
              These terms are provided for informational purposes. For specific legal definitions and implications, please consult with qualified legal counsel.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={complianceOpen} onOpenChange={setComplianceOpen}>
        <DialogContent className="reqtec-modal-glow bg-black/60 border-white/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/60 relative backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-white">Compliance & Security</DialogTitle>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setComplianceOpen(false)}
              className="text-white/60 hover:text-white transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              REQtec is committed to meeting high standards of security and compliance for client projects and data.
            </div>
            <div>
              <strong className="text-white">Planned Compliance Standards:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li><strong>SOC 2 Type II:</strong> Service Organization Control 2 certification ensuring security, availability, processing integrity, confidentiality, and privacy of customer data.</li>
                <li><strong>Industry Standards:</strong> Alignment with relevant industry regulations and data protection requirements.</li>
                <li><strong>Data Security:</strong> Encryption, access controls, audit logging, and secure data handling practices.</li>
                <li><strong>Regulatory Compliance:</strong> Adherence to applicable regulations and best practices.</li>
              </ul>
            </div>
            <div>
              Security architecture is designed with compliance in mind from the ground up, incorporating zero‑trust principles, comprehensive audit trails, and data protection measures that meet or exceed industry standards.
            </div>
            <div className="pt-4 border-t border-white/10 text-xs">
              Note: Compliance certifications and audits will be conducted as part of product development and deployment.
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
