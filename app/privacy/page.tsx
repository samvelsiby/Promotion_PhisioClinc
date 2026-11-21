import Link from 'next/link'
import { COMPANY_CONTACT, NAP_LINE } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Website Privacy & Cookies | Pro-Motion', 'How the Pro-Motion Physiotherapy website handles cookies, analytics, advertising measurement, chat, appointment requests and your privacy choices.', '/privacy')

// Every statement here describes what the code does. If tracking, chat, the
// contact form or a provider changes, change this page in the same release.
// The clinic must review and approve this page before it is published.
export default function PrivacyPage() {
  return <main className="mx-auto max-w-3xl px-5 pb-20 pt-40 text-gray-900">
    <p className="text-sm font-semibold text-[#c8101e]">Pro-Motion Physiotherapy</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Website privacy &amp; cookies</h1>
    <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-a:text-[#c8101e]">
      <p>This notice explains what the {COMPANY_CONTACT.NAME} website ({NAP_LINE}) collects and the choices you have. It covers this website only. Information you give when you book or receive care becomes part of your clinic record and is handled under Manitoba’s Personal Health Information Act.</p>

      <h2>Your cookie choice</h2>
      <p>The banner offers two choices, and you can change yours at any time with “Cookie settings” in the footer.</p>
      <ul>
        <li><strong>Before you choose:</strong> no cookies are set. Google Analytics runs in a cookieless mode (Google Consent Mode). Each page view still sends Google your IP address, the page address, your browser and device details and a random number that lasts for that page only. If you arrived from a Google advertisement, Google’s tag carries the advertisement click code in links between our pages instead of storing it in a cookie.</li>
        <li><strong>Accept optional:</strong> Google Analytics and Datafast may set cookies to measure how the website is used. When we run Google advertising, Google may also set a cookie that records whether an advertisement led to a visit or a booking click.</li>
        <li><strong>Reject optional:</strong> Google Analytics and our visit counter are switched off in your browser, Datafast is never loaded, and any analytics cookies already set are removed. Booking, the contact form and chat keep working.</li>
      </ul>
      <p>We never use these tools to show you personalised advertising, and we do not build advertising audiences from visits to this website.</p>
      <p>We store your choice in your browser’s local storage for up to 180 days. This remembers your preference; it is not used for analytics. If browser storage is blocked, you may be asked again on your next visit.</p>
      <p>Withdrawing consent stops future collection through these tools. It does not erase information a provider has already received.</p>

      <h2>Visit counter</h2>
      <p>The website runs a cookieless visit counter operated for the clinic by RTSTICS. It records pages viewed, clicks on booking links, contact form submissions, the address of the page that linked you here, and any campaign tags in the link you followed, which can include an advertisement click code. Those tags are kept in your browser for the current visit only. Visits are grouped with a code that changes every day. The counter stops when you select “Reject optional”.</p>

      <h2>Online booking</h2>
      <p>Booking links pass through a short redirect on this website before opening the Juvonno booking portal. The redirect counts the click on our own server (which button, which page, country, device type and any campaign tags in the link) and may add it to our Google Analytics totals. It sets no cookie and does not send Google your IP address. Campaign tags, including an advertisement click code, are passed on to the booking portal. Juvonno has its own privacy practices for the information you enter there.</p>
      <p>The booking portal also counts booking steps for the clinic: that the booking pages were opened, that a service and a time were chosen, and that a request was sent. Each count carries only the step, whether the visit came from this website or an advertisement, and the campaign name from the link you followed. It never includes anything you type, sets no cookie, and keeps those labels in your browser only until you close the tab. To make this possible, this website keeps the campaign name of your visit in your browser for the current visit and adds it to booking links; it stops doing so if you select “Reject optional”.</p>

      <h2>Clinic chat</h2>
      <p>The chat is an automated AI assistant supplied through RTSTICS. It is not a clinician and cannot give medical advice. What you type, and any details you enter to ask for a call back, are sent to RTSTICS so the assistant and the clinic can respond. Please do not share medical details in chat.</p>
      <p>If you arrive from an advertisement, the chat notes the campaign details so the clinic knows which advertisement led to an enquiry. That note is kept in your browser, for up to 90 days, only if you selected “Accept optional”.</p>

      <h2>Appointment requests</h2>
      <p>If you send an appointment request, your name, phone number, email address and message are emailed to the clinic and used only to reply to you. We send one email to confirm your request arrived. Please keep medical details for your appointment.</p>

      <h2>Maps and other websites</h2>
      <p>The footer map connects to Google only after you select “Load Google map”. Loading it may share your IP address and browser information with Google and allow Google cookies. Booking, map and social media websites have their own privacy practices, and your choice here does not control them.</p>

      <h2>Who processes this information</h2>
      <p>We use service providers to run the website: Vercel (hosting), Google (analytics and advertising measurement), Datafast (analytics), Resend (email delivery for appointment requests), RTSTICS (visit counter and chat) and Juvonno (online booking). Some of them process information outside Canada, including in the United States, where it may be accessible to courts and authorities under local law.</p>
      <p>Learn more in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy policy</a> and <a href="https://datafa.st/privacy" target="_blank" rel="noopener noreferrer">Datafast privacy policy</a>.</p>

      <h2>Your questions and requests</h2>
      <p>To ask what personal information we hold about you from this website, to ask for a correction, or to raise a concern, contact the clinic’s privacy contact at <a href={`mailto:${COMPANY_CONTACT.EMAIL}`}>{COMPANY_CONTACT.EMAIL}</a> or <a href={`tel:${COMPANY_CONTACT.PHONE}`}>{COMPANY_CONTACT.PHONE_DISPLAY}</a>. If you are not satisfied with our response, you can contact the Office of the Privacy Commissioner of Canada or, for personal health information, the Manitoba Ombudsman.</p>

      <p className="text-sm text-gray-500">Last updated 21 November 2026.</p>
      <p><Link href="/">Return to the website</Link></p>
    </div>
  </main>
}
