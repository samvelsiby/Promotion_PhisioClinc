import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ClipboardEdit, HeartPulse, Users } from 'lucide-react'

const benefits = [
  'Global Standards, Local Touch',
  'Multidisciplinary Collaboration',
  'Preventive Care Leadership',
  'Verdant Healing Environment',
]

export default function Motto() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-xl">
            <Image
              src="/Motto/image.png"
              alt="Physiotherapy treatment"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="pointer-events-none absolute -top-8 left-4 flex max-w-xs items-center gap-3 rounded-full bg-[#e63939] px-6 py-4 text-white shadow-xl">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <ClipboardEdit className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Compassionate Approach</p>
              <p className="text-xs text-white/85">Holistic healing experience</p>
            </div>
          </div>

          <div className="pointer-events-none absolute -top-10 right-6 flex gap-3">
            <div className="flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
              <Users className="h-3.5 w-3.5" />
              <span>50+</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
              <HeartPulse className="h-3.5 w-3.5" />
              <span>500k+</span>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-12 right-1 w-[56%] max-w-xs rounded-3xl bg-white shadow-2xl">
            <div className="rounded-t-3xl bg-white px-3 py-2">
              <p className="text-[10px] font-semibold text-gray-800 sm:text-[11px]">Guiding You to Better Health</p>
              <p className="text-[9px] text-gray-500">Trusted Medical Care</p>
            </div>
            <div className="rounded-b-3xl bg-[#e63939] px-3 pb-2.5 pt-1.5 text-white">
              <p className="text-[11px] font-semibold leading-snug sm:text-xs">
                Building Healthier Futures Together
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 left-4 w-[78%] max-w-md rounded-2xl bg-white px-5 py-3 shadow-xl">
            <p className="text-sm font-semibold text-gray-900">Patient-Centered Care</p>
            <p className="text-xs text-gray-500">Providing personalized care</p>
          </div>

          <div className="pointer-events-none absolute -bottom-24 left-10 w-[74%] max-w-md rounded-2xl bg-white px-5 py-3 shadow-xl">
            <p className="text-sm font-semibold text-gray-900">Life-Changing Treatments</p>
            <p className="text-xs text-gray-500">Creating a crucible for new beginnings.</p>
          </div>
        </div>

        <div className="w-full max-w-xl space-y-6 lg:max-w-lg">
          <div className="h-0.5 w-16 bg-gray-300" />
          <h2 className="text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Redefining Healthcare,
            <span className="block">One Life at a Time</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Our dedicated team of professionals combines expertise, compassion,
            and cutting-edge technology to deliver personalized care that makes
            a lasting impact.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-gray-700 sm:text-base">
            {benefits.map((item) => (
              <li
                key={item}
                className="group flex items-start gap-3 transition-transform duration-200 ease-out hover:translate-x-1"
              >
                <Image
                  src="/Motto/Bullet.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="mt-0.5 h-4 w-4 flex-shrink-0 transform transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5"
                />
                <span className="transition-colors duration-200 group-hover:text-gray-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full bg-[#e63939] px-8 text-base font-semibold text-white transition-colors hover:bg-[#c62828] sm:h-12 sm:px-10"
          >
            <a href="https://pmphysio.juvonno.com/portal/publicbook.php" target="_blank" rel="noopener noreferrer">
              Book an Appointment
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
