'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProductDetails() {
  return (
    <>
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
              <div className="text-white md:text-[35px] text-[30px] font-bold mb-[8px] text-center">
                Poultry Farm Products Details
              </div>
              <div className="flex items-center">
                <Link
                  href={'/'}
                  className="text-white text-[17px] mb-[3px] mr-1"
                >
                  Home /
                </Link>
                <div className="text-[var(--customColor)] text[17px]">
                  Products Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[120px] bg-[var(--backgroundColor)]">
        <div className="customContainer">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 max-w-[900px] gap-6 bg-[var(--secondaryCustomColor)] py-7 items-center px-5">
              <div className="flex flex-col">
                <Image
                  src="/poultryImage40.jpg"
                  sizes="100vw"
                  className="h-[350px] w-[450px] bg-[var(--backgroundColor)]"
                  width={0}
                  height={0}
                  alt="real"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[var(--primaryTextColor)] text-[20px] font-bold mb-2">
                  Product Text here
                </div>
                <div className="flex">
                  <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)] mb-3"></i>
                </div>
                <div className="text-[25px] text-[var(--primaryTextColor)] font-bold mb-1">
                  $ 340.00
                </div>
                <div className="text-[25px] text-[var(--primaryTextColor)] mb-1 font-bold">
                  Product Description
                </div>
                <div className="text-[var(--secondaryTextColor)] mb-5">
                  Energistia an deliver atactica metrcs after avsionary Apropria
                  trnsition enterpris an sources applications emerging psd
                  template communities.
                </div>
                <Link
                  href={'/'}
                  className="text-white bg-[var(--customColor)] text-center py-3"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
