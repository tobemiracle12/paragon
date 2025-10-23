'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Products() {
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
              <div className="text-white  md:text-[35px] text-[28px] font-bold mb-[8px]">
                Poultry Farm Products
              </div>
              <div className="flex items-center">
                <Link
                  href={'/'}
                  className="text-white text-[17px] mb-[3px] mr-1"
                >
                  Home /
                </Link>
                <div className="text-[var(--customColor)] text[17px]">
                  Products
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[90px] bg-[var(--backgroundColor)]">
        <div className="customContainer">
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-center max-w-[450px]">
              <div className="text-[30px] text-[var(--primaryTextColor)] mb-2 font-bold">
                Poultry Farm Products
              </div>
              <div className="text-[16px] text-[var(--secondaryTextColor)] mb-18">
                Conveniently customize proactive web services for leveraged
                interfaces without Globally
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full md:gap-7 gap-4 mb-9 px-[12px]">
              <div className="flex flex-col items-center shadow-[0_2px_6px_rgba(0,0,0,0.1)] rounded-[15px] bg-[var(--backgroundColor)] p-3 md:p-7">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1 md:text-[20px] text-[17px]">
                  <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]"></i>
                </div>
                <div className="text-[var(--primaryTextColor md:text-[22px]  md:font-bold mb-2 text-center">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through mb-3">
                    $49.99
                  </div>
                </div>
                <div className="flex w-full justify-evenly">
                  <div className="flex justify-center h-[30px] w-[35px] cursor-pointer items-center border border-gray-200 rounded-[5px]">
                    <i className="bi bi-dash text-[var(--primaryTextColor)]"></i>
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[15px]">
                    9
                  </div>
                  <div className="flex justify-center h-[30px] w-[35px] cursor-pointer items-center border border-gray-200 rounded-[5px]">
                    <i className="bi bi-plus text-[var(--primaryTextColor)]"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-[0_2px_6px_rgba(0,0,0,0.1)] rounded-[15px] bg-[var(--backgroundColor)] p-3 md:p-7">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1 md:text-[20px] text-[17px]">
                  <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                  <i className="bi bi-star text-[var(--customColor)]"></i>
                </div>
                <div className="text-[var(--primaryTextColor md:text-[22px] md:font-bold mb-2 text-center">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through mb-3">
                    $49.99
                  </div>
                </div>
                <div className="flex w-full justify-evenly">
                  <div className="flex justify-center h-[30px] w-[35px] cursor-pointer items-center border border-gray-200 rounded-[5px]">
                    <i className="bi bi-dash text-[var(--primaryTextColor)]"></i>
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[15px]">
                    9
                  </div>
                  <div className="flex justify-center h-[30px] w-[35px] cursor-pointer items-center border border-gray-200 rounded-[5px]">
                    <i className="bi bi-plus text-[var(--primaryTextColor)]"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-sm rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage5.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1">
                  <i className="bi bi-star text-[var(--customColor)] mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)] text-[22px]"></i>
                </div>
                <div className="text-[var(--primaryTextColor text-[22px] font-bold mb-2">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through">
                    $49.99
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-sm rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1">
                  <i className="bi bi-star text-[var(--customColor)] mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)] text-[22px]"></i>
                </div>
                <div className="text-[var(--primaryTextColor text-[22px] font-bold mb-2">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through">
                    $49.99
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-sm rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1">
                  <i className="bi bi-star text-[var(--customColor)] mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)] text-[22px]"></i>
                </div>
                <div className="text-[var(--primaryTextColor text-[22px] font-bold mb-2">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through">
                    $49.99
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-sm rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1">
                  <i className="bi bi-star text-[var(--customColor)] mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)] text-[22px]"></i>
                </div>
                <div className="text-[var(--primaryTextColor text-[22px] font-bold mb-2">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through">
                    $49.99
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-sm rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1">
                  <i className="bi bi-star text-[var(--customColor)] mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)] text-[22px]"></i>
                </div>
                <div className="text-[var(--primaryTextColor text-[22px] font-bold mb-2">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through">
                    $49.99
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shadow-sm rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain mb-7"
                  width={0}
                  height={0}
                  alt="real"
                />
                <div className="flex mb-1">
                  <i className="bi bi-star text-[var(--customColor)] mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)]  mr-1 text-[20px]"></i>
                  <i className="bi bi-star text-[var(--customColor)] text-[22px]"></i>
                </div>
                <div className="text-[var(--primaryTextColor text-[22px] font-bold mb-2">
                  Light Brown Eggs
                </div>
                <div className="flex">
                  <div className="text-[var(--customColor)] text-[18px] font-bold mr-3">
                    $29.99
                  </div>
                  <div className="text-[var(--primaryTextColor)] text-[18px] font-bold line-through">
                    $49.99
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="text-[20px] text-white bg-[var(--customColor)] rounded py-[10px] px-[30px]"
              href={'/'}
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
