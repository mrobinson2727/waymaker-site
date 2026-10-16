import { ModeProvider } from '../contexts/ModeContext'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0B0B10] to-[#050505] text-[#F9FAFB]">
      <ModeProvider>
        <Navigation />
        <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[#FCA5A5]">Waymaker</p>
          <h1 className="mt-4 text-4xl lg:text-5xl leading-tight">Privacy Policy</h1>
          <p className="mt-4 text-[#9CA3AF]">Effective date: October 16, 2026</p>
          <p className="mt-8 text-lg text-[#E5E7EB] leading-relaxed">
            Waymaker is a recruiting firm based in Dallas–Fort Worth, Texas. This page describes the information the website collects through its contact form and Google Analytics, and how to reach us about it.
          </p>

          <section className="mt-12 space-y-4">
            <h2 className="text-2xl text-[#F9FAFB]">Contact form</h2>
            <p className="text-[#D1D5DB] leading-relaxed">
              If you send us a message, the form collects your name, company, email address, role type, and the message you write. Waymaker uses those details to reply and to continue a recruiting conversation you started. The form is delivered through a Google Apps Script endpoint operated for Waymaker.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-2xl text-[#F9FAFB]">Google Analytics</h2>
            <p className="text-[#D1D5DB] leading-relaxed">
              The site loads Google Analytics (measurement ID G-J85VLCL9RB). Google Analytics uses cookies to record pages visited, approximate location, device and browser details, and how the site is used. That information is used to understand traffic, not to fill out the contact form for you.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-2xl text-[#F9FAFB]">How we use and share information</h2>
            <p className="text-[#D1D5DB] leading-relaxed">
              We use contact-form details to respond to hiring teams and candidates. We do not sell personal information. Google receives the analytics data described above because the site uses Google Analytics. We keep inquiry details for as long as we need them to respond and to keep a record of the recruiting conversation.
            </p>
          </section>

          <section className="mt-12 space-y-4">
            <h2 className="text-2xl text-[#F9FAFB]">Contact</h2>
            <p className="text-[#D1D5DB] leading-relaxed">
              Questions about this policy or about information you sent through the form can be emailed to{' '}
              <a className="text-[#FCA5A5] underline underline-offset-4" href="mailto:info@waymakerstaffing.com">
                info@waymakerstaffing.com
              </a>
              . Waymaker, Dallas–Fort Worth, Texas.
            </p>
          </section>
        </main>
        <Footer />
      </ModeProvider>
    </div>
  )
}
