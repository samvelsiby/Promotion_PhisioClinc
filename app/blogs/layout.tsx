import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata("Physiotherapy Articles & Patient Guides | Pro Motion Winnipeg", "Read Pro Motion articles about movement, injuries and recovery, plus Winnipeg patient guides to appointments, referrals, direct billing, MPI and WCB.", "/blogs")

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children
}
