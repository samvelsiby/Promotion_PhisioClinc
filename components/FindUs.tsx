import Link from 'next/link'
import { COMPANY_CONTACT, DIRECTIONS_URL, NAP_LINE } from '@/lib/constants'

// Approximate road distances to the clinic, carried over from the neighbourhood guide
// that this section replaced. They are a general guide, not a travel-time promise.
const neighbourhoods = [
  { name: 'Meadowood', distance: 'under 1 km' },
  { name: 'Lavalee and Worthington', distance: '1.5 to 2 km' },
  { name: 'Royalwood', distance: '2.3 km' },
  { name: 'St. Vital Centre area', distance: '2.4 km' },
  { name: 'Dakota Crossing', distance: '2.7 km' },
  { name: 'Niakwa Place, Minnetonka and Elm Park', distance: '4 km' },
  { name: 'Glenwood and Southdale', distance: '4 to 4.5 km' },
  { name: 'River Park South and Island Lakes', distance: '5 km' },
  { name: 'Windsor Park and Sage Creek', distance: '5.5 km' },
  { name: 'St. Boniface', distance: '6.5 km' },
]

const hours = [COMPANY_CONTACT.HOURS.weekday, COMPANY_CONTACT.HOURS.saturday, COMPANY_CONTACT.HOURS.sunday].map((line) => {
  const [days, ...time] = line.split(': ')
  return { days, time: time.join(': ') }
})

export default function FindUs() {
  return (
    <section id="find-us" aria-labelledby="find-us-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 id="find-us-heading" className="font-bold text-gray-900">
            Find us on St. Anne&rsquo;s Road in St. Vital.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            The clinic is in Meadowood, just north of Abinojii Mikanah, and is open seven days a week with weekday
            appointments until 8:00 PM.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="home-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900">Address and parking</h3>
            <address className="mt-3 text-base not-italic leading-relaxed text-gray-600">{NAP_LINE}</address>
            <p className="mt-3 text-base leading-relaxed text-gray-600">Free parking is in front of the clinic.</p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              St. Anne&rsquo;s Road is on Winnipeg Transit. Check the Winnipeg Transit trip planner for your stop and
              timing.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center font-semibold text-[#c8101e] underline underline-offset-4"
              >
                Get directions
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.PHONE}`}
                className="inline-flex min-h-12 items-center font-semibold text-[#c8101e] underline underline-offset-4"
              >
                Call {COMPANY_CONTACT.PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="home-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900">Evening and weekend hours</h3>
            <dl className="mt-3 space-y-3 text-base text-gray-600">
              {hours.map((row) => (
                <div key={row.days} className="flex flex-wrap justify-between gap-x-4">
                  <dt className="font-medium text-gray-900">{row.days}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Openings change week to week and holiday hours may differ. Physiotherapy is not an emergency service: for
              a suspected fracture, a head injury, chest pain, or new numbness or weakness, go to an emergency
              department or call 911.
            </p>
          </div>

          <div className="home-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900">Distance from nearby neighbourhoods</h3>
            <ul className="mt-3 space-y-2 text-base text-gray-600">
              {neighbourhoods.map((area) => (
                <li key={area.name} className="flex justify-between gap-4">
                  <span>{area.name}</span>
                  <span className="shrink-0 text-gray-900">{area.distance}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">Approximate road distances, as a general guide.</p>
          </div>
        </div>

        <p className="mt-7 text-base leading-relaxed text-gray-600">
          You can book without a doctor&rsquo;s referral, though some insurance plans ask for one before they reimburse
          visits. See{' '}
          <Link href="/first-visit" className="font-semibold text-[#c8101e] underline underline-offset-4">
            what to expect at your first visit
          </Link>{' '}
          and{' '}
          <Link href="/insurance" className="font-semibold text-[#c8101e] underline underline-offset-4">
            insurance and direct billing
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
