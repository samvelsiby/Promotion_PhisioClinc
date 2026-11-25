import Link from 'next/link'
import { COMPANY_CONTACT } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Website Privacy & Cookies | Pro-Motion', 'Learn about optional website analytics, advertising measurement, cookie choices and external services on the Pro-Motion Physiotherapy website.', '/privacy')

export default function PrivacyPage() {
  return <main className="mx-auto max-w-3xl px-5 pb-20 pt-40 text-gray-900">
    <p className="text-sm font-semibold text-[#c8101e]">Pro-Motion Physiotherapy</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Website privacy &amp; cookies</h1>
    <div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-a:text-[#c8101e]">
      <p>This notice explains the website’s analytics and cookie controls. It does not replace the information and consent provided when you arrange or receive clinical care.</p>
      <h2>Your cookie choice</h2>
      <p>Analytics and advertising-measurement cookies stay off until you select “Accept optional”. Until then, Google Analytics and Google Ads conversion measurement run in a cookieless mode (Google Consent Mode) that sets no cookies and sends no identifiers, so we only see modelled, anonymous totals. Your IP address still reaches Google as part of the network request and is used only to estimate an approximate location before being discarded. Datafast does not load at all until you accept. Selecting “Reject optional” keeps it that way and never affects booking links. Use “Cookie settings” in the footer to change your choice.</p>
      <p>We store your choice in your browser’s local storage for up to 180 days. This storage remembers your preference; it is not used for analytics. If browser storage is blocked, your choice may need to be made again on your next visit.</p>
      <h2>Optional analytics and advertising measurement</h2>
      <p>When you accept, Google Analytics and Datafast receive information about visits and interactions, such as pages viewed, browser and device information, referral information, and network information including your IP address. They may use cookies or similar identifiers to measure website use. Provider processing may occur outside Canada.</p>
      <p>If you arrive from one of our Google advertisements and accept, Google Ads may also use a cookie to record that an advertisement led to a booking-link click or an enquiry form submission. Only the fact that the action happened is sent: never what you type, your name, your contact details or anything about your health. We do not use remarketing or personalised advertising, and we do not send Google your email address or phone number.</p>
      <p>Learn more in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy policy</a> and <a href="https://datafa.st/privacy" target="_blank" rel="noopener noreferrer">Datafast privacy policy</a>.</p>
      <p>Withdrawing consent reloads this page to stop the loaded analytics tools and removes accessible analytics and advertising-measurement cookies set at the website root. Withdrawal stops future collection through these tools; it does not erase information already received by a provider.</p>
      <h2>Maps and external booking</h2>
      <p>The footer map connects to Google only after you select “Load Google map”. Loading it may share your IP address and browser information with Google and allow Google cookies. You can also use the directions link to open Google Maps separately.</p>
      <p>Online booking links pass through a short redirect on this website before opening the Juvonno portal. The redirect counts the click on our own server (which button, which page, country, device type and any campaign tags already in the link) without setting cookies or storing identifiers, then forwards you to Juvonno. Campaign tags in the link, which can include an advertisement click code, are passed on to the booking portal.</p>
      <p>The booking portal also counts booking steps for the clinic: that the booking pages were opened, that a service and a time were chosen, and that a request was sent. Each count carries only the step, whether the visit came from this website or an advertisement, and the campaign name from the link you followed. It never includes anything you type, sets no cookie, and is not linked to your identity or to an advertisement click code. External booking, map and social websites have their own privacy practices and cookie controls. Your analytics choice here does not control those websites.</p>
      <h2>Visit counting</h2>
      <p>The website also runs a cookieless visit counter operated for the clinic by RTSTICS. It records pages viewed and clicks on booking, phone and contact links. It sets no cookies and stores no identifiers: visits are grouped with a code that changes every day and cannot be traced back to you. Because it uses no cookies, it is not controlled by the analytics buttons.</p>
      <h2>Clinic chat</h2>
      <p>The website also provides a clinic chat service supplied through RTSTICS. The cookie buttons control Google Analytics, Google Ads measurement and Datafast; they do not control information you send through chat. Avoid sharing sensitive medical details in chat and contact the clinic for an appropriate way to discuss your care.</p>
      <h2>Service providers</h2>
      <p>We use service providers to run the website: Vercel (hosting), Google (analytics and advertising measurement), Datafast (analytics), Resend (email delivery for appointment requests), RTSTICS (visit counter and chat) and Juvonno (online booking). Some of them process information outside Canada, including in the United States, where it may be accessible to courts and authorities under local law.</p>
      <h2>Contacting the clinic</h2>
      <p>If you send an appointment request, the details you submit are used to respond to your request. Avoid including sensitive medical details in general website messages. Contact the clinic for questions about personal information, clinical records, or appropriate ways to share health information, or to ask what information we hold about you, request a correction, or raise a privacy concern.</p>
      <p>Email <a href={`mailto:${COMPANY_CONTACT.EMAIL}`}>{COMPANY_CONTACT.EMAIL}</a> or call <a href={`tel:${COMPANY_CONTACT.PHONE}`}>{COMPANY_CONTACT.PHONE_DISPLAY}</a>.</p>
      <p><Link href="/">Return to the website</Link></p>
    </div>
  </main>
}
