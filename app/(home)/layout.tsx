'use client'
import PublicFooter from '@/components/Public/PublicFooter'
import PublicHeader from '@/components/Public/PublicHeader'
import PublicNavbar from '@/components/Public/PublicNavbar'
import Link from 'next/link'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="text-[var(--primary-text-color)]">
      <PublicHeader />
      <PublicNavbar />
      {children}

      <Link
        href={'/check-out'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex justify-center items-center fixed cursor-pointer bottom-4 right-4 bg-[var(--customColor)]  text-white md:w-15 md:h-15 w-10 h-10 z-50 rounded shadow-lg transition"
        aria-label="Scroll to Top"
      >
        <i className="bi bi-cart3 md:text-[40px] text-[20px]"></i>
        <div className="w-[20px] h-[20px] text-sm flex justify-center items-center rounded-full top-0 right-0 absolute text-white bg-[var(--customRedColor)]">
          9+
        </div>
      </Link>
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed cursor-pointer bottom-4 right-4 bg-[var(--customColor)] text-white w-10 h-10 rounded shadow-lg transition"
        aria-label="Scroll to Top"
      >
        ↑
      </button> */}
      <PublicFooter />
    </div>
  )
}
