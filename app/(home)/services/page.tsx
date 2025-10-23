'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function services() {
  return (
    <div>
      {/* ///Services Blog1/// */}
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
              <div className="text-white  md:text-[35px] text-[28px] font-bold mb-[8px]">
                Poultry Farm Blog
              </div>
              <div className="flex items-center">
                <Link
                  href={'/'}
                  className="text-white text-[17px] mb-[3px] mr-1"
                >
                  Home /
                </Link>
                <div className="text-[var(--customColor)] text[17px]">Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///Services Blog2/// */}
      <div className="flex py-[130px] bg-[var(--backgroundColor)] justify-center">
        <div className="customContainer">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-7">
            <div className="flex flex-col lg:col-span-3">
              <div className="flex flex-col  mb-14">
                <Image
                  src="/poultryImage35.jpg"
                  sizes="100vw"
                  className="h-[470px] w-full object-cover mb-8"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-3">
                  <span className="text-[var(--secondaryTextColor)] mr-2">
                    October 9, 2019 10:59 am By
                  </span>
                  <span className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)]">
                    Sahjahan Sagor
                  </span>
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] text-[35px] hover:text-[var(--customColor)] font-bold mb-3"
                  href={'/'}
                >
                  Continually proactive services
                </Link>
                <div className="text-[var(--secondaryTextColor)] mb-4">
                  It’s no secret that the digital industry is booming. from
                  exciting startups to global brands, to the new companies are
                  reachin boomingesagencies, responding to the new possibilities
                  available. however, the industry is exciting fast becoming
                  overcr heaving with goloballife agencies offering similar
                  services.
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] text-[16px] hover:text-[var(--customColor)] font-bold"
                  href={'/'}
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col  mb-14">
                <Image
                  src="/poultryImage35.jpg"
                  sizes="100vw"
                  className="h-[470px] w-full object-cover mb-8"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-3">
                  <span className="text-[var(--secondaryTextColor)] mr-2">
                    October 9, 2019 10:59 am By
                  </span>
                  <span className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)]">
                    Sahjahan Sagor
                  </span>
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] text-[35px] hover:text-[var(--customColor)] font-bold mb-3"
                  href={'/'}
                >
                  Continually proactive services
                </Link>
                <div className="text-[var(--secondaryTextColor)] mb-4">
                  It’s no secret that the digital industry is booming. from
                  exciting startups to global brands, to the new companies are
                  reachin boomingesagencies, responding to the new possibilities
                  available. however, the industry is exciting fast becoming
                  overcr heaving with goloballife agencies offering similar
                  services.
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] text-[16px] hover:text-[var(--customColor)] font-bold"
                  href={'/'}
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col  mb-14">
                <Image
                  src="/poultryImage35.jpg"
                  sizes="100vw"
                  className="h-[470px] w-full object-cover mb-8"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-3">
                  <span className="text-[var(--secondaryTextColor)] mr-2">
                    October 9, 2019 10:59 am By
                  </span>
                  <span className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)]">
                    Sahjahan Sagor
                  </span>
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] text-[35px] hover:text-[var(--customColor)] font-bold mb-3"
                  href={'/'}
                >
                  Continually proactive services
                </Link>
                <div className="text-[var(--secondaryTextColor)] mb-4">
                  It’s no secret that the digital industry is booming. from
                  exciting startups to global brands, to the new companies are
                  reachin boomingesagencies, responding to the new possibilities
                  available. however, the industry is exciting fast becoming
                  overcr heaving with goloballife agencies offering similar
                  services.
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] text-[16px] hover:text-[var(--customColor)] font-bold"
                  href={'/'}
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center mb-15">
                <Image
                  src="/poultryImage20.jpg"
                  sizes="100vw"
                  className="h-[250px] w-[250px] rounded-full overflow-hidden mb-4"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="text-[25px] text-[var(--primaryTextColor)] mb-3 font-semibold">
                  Sahjahan Sagor
                </div>
                <div className="text text-[var(--secondaryTextColor)] mb-6">
                  Authoritatively restore orthog ips ineer installed
                  Intrinsiclyts imperatives.
                </div>
                <div className="grid grid-cols-4 gap-2 w-[200px] text-[20px]">
                  <Link className="hover:text-[var(--customColor)]" href={'/'}>
                    <i className="bi bi-twitter-x"></i>
                  </Link>
                  <Link
                    className="hover:text-[var(--customColor)] text-blue-700"
                    href={'/'}
                  >
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link
                    className="hover:text-[var(--customColor)] text-green-700"
                    href={'/'}
                  >
                    <i className="bi bi-whatsapp"></i>
                  </Link>
                  <Link
                    className="hover:text-[var(--customColor)] text-red-700"
                    href={'/'}
                  >
                    <i className="bi bi-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col mb-15">
                <div className="text-[25px] text-[var(--primaryTextColor)] mb-3 font-bold">
                  Recent Post
                </div>
                <div className="border border-t w-[50px] mb-10 "></div>
                <div className="flex border-b mb-7 pb-5 border-b-gray-200">
                  <Image
                    src="/poultryImage3.jpg"
                    sizes="100vw"
                    className="h-[70px] w-[85px] mr-3"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col">
                    <div className="hover:text-[var(--customColor)] text-[var(--primaryTextColor)] font-semibold mb-2">
                      Conveniently utilize premier metho.
                    </div>
                    <div className="text-[var(--secondaryTextColor)]/70">
                      04 February 2019
                    </div>
                  </div>
                </div>
                <div className="flex border-b mb-7 pb-5 border-b-gray-200">
                  <Image
                    src="/poultryImage4.jpg"
                    sizes="100vw"
                    className="h-[70px] w-[85px] mr-3"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col mb-7">
                    <div className="hover:text-[var(--customColor)] text-[var(--primaryTextColor)] font-semibold mb-2">
                      Conveniently utilize premier metho.
                    </div>
                    <div className="text-[var(--secondaryTextColor)]/70">
                      04 February 2019
                    </div>
                  </div>
                </div>
                <div className="flex border-b mb-7 pb-5 border-b-gray-200">
                  <Image
                    src="/poultryImage5.jpg"
                    sizes="100vw"
                    className="h-[70px] w-[85px] mr-3"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col mb-7">
                    <div className="hover:text-[var(--customColor)] text-[var(--primaryTextColor)] font-semibold mb-2">
                      Conveniently utilize premier metho.
                    </div>
                    <div className="text-[var(--secondaryTextColor)]/70">
                      04 February 2019
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src="/poultryImage6.jpg"
                    sizes="100vw"
                    className="h-[70px] w-[85px] mr-3"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col mb-7">
                    <div className="hover:text-[var(--customColor)] text-[var(--primaryTextColor)] font-semibold mb-2">
                      Conveniently utilize premier metho.
                    </div>
                    <div className="text-[var(--secondaryTextColor)]/70">
                      04 February 2019
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[var(--primaryTextColor)] text-[28px] mb-4 font-bold">
                  Instagram
                </div>
                <div className="grid grid-cols-3 gap-3 w-full">
                  <Image
                    src="/poultryImage14.jpg"
                    sizes="100vw"
                    className="h-[80px] w-[85px]"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <Image
                    src="/poultryImage19.jpg"
                    sizes="100vw"
                    className="h-[80px] w-[85px]"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <Image
                    src="/poultryImage18.jpg"
                    sizes="100vw"
                    className="h-[80px] w-[85px]"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <Image
                    src="/poultryImage17.jpg"
                    sizes="100vw"
                    className="h-[80px] w-[85px]"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <Image
                    src="/poultryImage16.jpg"
                    sizes="100vw"
                    className="h-[80px] w-[85px]"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <Image
                    src="/poultryImage15.jpg"
                    sizes="100vw"
                    className="h-[80px] w-[85px]"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
