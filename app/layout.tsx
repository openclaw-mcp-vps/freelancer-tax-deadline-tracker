import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreelanceTax — Never miss quarterly tax payments again',
  description: 'Track income, calculate quarterly estimated taxes using IRS formulas, and get automated reminders before every deadline. Built for freelancers, contractors, and consultants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8335ea28-024c-459d-af03-9570d534b3cd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
