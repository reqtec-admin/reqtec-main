'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const dialogClassName =
  'reqtec-modal-glow bg-black/60 border-white/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl shadow-black/60 relative backdrop-blur-xl ring-1 ring-white/10'

function FooterDialog({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-white/70 hover:text-white transition"
      >
        {label}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={dialogClassName}>
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-white">{title}</DialogTitle>
            </DialogHeader>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="text-white/70 mt-4 space-y-4 text-sm">{children}</div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export function AboutDialog() {
  return (
    <FooterDialog label="About" title="About">
      <div>
        REQtec is a technology company delivering cloud, AI/ML, mobile, and web solutions for modern businesses.
      </div>
    </FooterDialog>
  )
}

export function PrivacyDialog() {
  return (
    <FooterDialog label="Privacy" title="Privacy Policy">
      <div>
        This Privacy Policy describes how REQtec (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects your information.
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
    </FooterDialog>
  )
}

export function TermsDialog() {
  return (
    <FooterDialog label="Terms" title="Terms & Definitions">
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
    </FooterDialog>
  )
}

export function ComplianceDialog() {
  return (
    <FooterDialog label="Compliance" title="Compliance & Security">
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
    </FooterDialog>
  )
}
