'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { NavStore } from '@/src/appInfoStore'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export default function PublicHeader() {
  const { toggleVNav } = NavStore()
  return (
    <header className="bg-[var(--backgroundColor)] text-[var(--primaryTextColor)] py-2 flex justify-center">
      <div className="custom-container">
        <div className="flex justify-between w-full items-center">
          <Link href="/" className="sm:w-40 w-32 max-w-40">
            <Image
              style={{ height: 'auto' }}
              src="/paragonLogo.png"
              loading="lazy"
              sizes="100vw"
              className="sm:w-40 w-32"
              width={0}
              height={0}
              alt="Paragon Logo"
            />
          </Link>

          <div className="md:flex text-sm hidden">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt
                size={37}
                className="text-[var(--customColor)] text-base lg:text-xl"
              />
              <div>
                <p className="font-semibold text-[var(--secondaryTextColor)] text-base">
                  3015 Grand Ave, Grove
                </p>
                <p>Merrick, FL 12345</p>
              </div>
            </div>

            <div className="flex items-start ml-2 lg:ml-5 gap-2">
              <FaPhoneAlt
                size={30}
                className="text-[var(--customColor)] text-base lg:text-xl"
              />
              <div>
                <p className="font-bold text-[var(--secondaryTextColor)] text-base">
                  1-800-555-1234
                </p>
                <p>24/7 Customer Support</p>
              </div>
            </div>

            <div className="flex items-start ml-2 lg:ml-5 gap-2">
              <EnvelopeIcon
                width={40}
                className="text-[var(--customColor)] text-base lg:text-xl"
              />
              <div>
                <p className="font-bold text-[var(--secondaryTextColor)] text-base">
                  Send Mail
                </p>
                <p>murgifarm@gmail.com</p>
              </div>
            </div>
          </div>

          <i
            onClick={toggleVNav}
            className="bi bi-list font-bold md:hidden text-3xl text-[var(--customColor)] cursor-pointer"
          ></i>
        </div>
      </div>
    </header>
  )
}
