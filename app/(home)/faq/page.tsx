'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Faq() {
  return (
    <div>
      {/*//// Faq Section 1 ////*/}
      <div className="relative">
        <Image
          src="/poultryImage34.jpg"
          sizes="100vw"
          className="h-full w-full object-cover absolute z-0"
          width={0}
          height={0}
          alt="paragon"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0" />
        <div className="flex w-full justify-center">
          <div className="customContainer relative z-10">
            <div className="flex items-center flex-col z-20 min-h-[45vh] justify-center">
              <div className="text-white md:text-[35px] text-[28px] font-bold mb-[8px]">
                Poultry Farm Faq
              </div>
              <div className="flex items-center">
                <Link
                  href={'/'}
                  className="text-white text-[17px] mb-[3px] mr-1"
                >
                  Home /
                </Link>
                <div className="text-[var(--customColor)] text-[17px]">Faq</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*//// Faq Section 2////*/}
      <div className="flex py-[100px] justify-center bg-[var(--backgroundColor)]">
        <div className="customContainer">
          <div className="grid md:grid-cols-3 md:gap-7 gap-4 cursor-pointer w-full">
            <div className="flex flex-col md:col-span-1 shadow-lg py-[45px] px-[35px] w-full mb-7">
              <div className="text-[25px] text-[var(--primaryTextColor)] font-bold mb-5">
                Quick Navigation
              </div>
              <Link
                className="text text-[var(--secondaryTextColor)] hover:text-[var(--customColor)] underline mb-3"
                href={'/'}
              >
                Customer Support
              </Link>
              <Link
                className="text text-[var(--secondaryTextColor)] hover:text-[var(--customColor)] underline mb-3"
                href={'/'}
              >
                License
              </Link>
              <Link
                className="text text-[var(--secondaryTextColor)] hover:text-[var(--customColor)] underline mb-3"
                href={'/'}
              >
                Price & Support
              </Link>
              <Link
                className="text text-[var(--secondaryTextColor)] hover:text-[var(--customColor)] underline mb-3"
                href={'/'}
              >
                Purchasing Online
              </Link>
              <Link
                className="text text-[var(--secondaryTextColor)] hover:text-[var(--customColor)] underline mb-3"
                href={'/'}
              >
                Returns
              </Link>
              <Link
                className="text text-[var(--secondaryTextColor)] hover:text-[var(--customColor)] underline"
                href={'/'}
              >
                Technical
              </Link>
            </div>
            <div className="flex flex-col md:col-span-2 w-full">
              <div className="text-[var(--customColor)] text-[27px] underline mb-5 font-bold">
                Customer Support
              </div>
              <div className="flex px-7 py-8 flex-col shadow-sm mb-6">
                <div className="flex">
                  <div className="text-[20px] text-[var(--primaryTextColor)]">
                    Can I cancel or change my order?
                  </div>
                  <i className="bi bi-plus-lg text-[28px] text-[var(--primaryTextColor)] ml-auto"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Fusce dignissim, diam quis faucibus posuere, metus ipsum
                  dictum Edite dapibus quam lectus nec magna. Nunc fermentum
                  felis eu pulvinar over nulla sodales nisi est, a rutrum urna
                  egestas vitae.
                </div>
              </div>
              <div className="flex px-7 py-8 flex-col shadow-sm mb-6">
                <div className="flex">
                  <div className="text-[20px] text-[var(--primaryTextColor)]">
                    Can I cancel or change my order?
                  </div>
                  <i className="bi bi-plus-lg text-[28px] text-[var(--primaryTextColor)] ml-auto"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Fusce dignissim, diam quis faucibus posuere, metus ipsum
                  dictum Edite dapibus quam lectus nec magna. Nunc fermentum
                  felis eu pulvinar over nulla sodales nisi est, a rutrum urna
                  egestas vitae.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
