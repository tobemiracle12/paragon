'use client'
import Link from 'next/link'
import Hero from '@/components/Public/Hero'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CameraIcon } from '@heroicons/react/24/solid'
import { BsCamera, BsCameraFill } from 'react-icons/bs'
import {
  BathIcon,
  BedDouble,
  Heart,
  LandPlot,
  ShowerHead,
  ShowerHeadIcon,
  VideoIcon,
} from 'lucide-react'
import FeatureHomes from '@/components/Public/FeatureHomes'
export default function Home() {
  const testimonials = [
    {
      picture: '/TestiImage1.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
    {
      picture: '/TestiImage2.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
    {
      picture: '/TestiImage3.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
    {
      picture: '/TestiImage3.jpg',
      content:
        'This is the best place to buy and sell anything real estate related and you get it at one piece. They are so sincere.',
      name: 'Liza Bryan',
      position: 'Real Estate Owner',
    },
  ]
  return (
    <div>
      <Hero />

      {/* ///////BLOG3 SECTION//////////// */}
      <div className="flex justify-center bg-[var(--backgroundColor)] py-[75px]">
        <div className="customContainer">
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/poultryImage2.jpg"
              sizes="100vw"
              className="h-full w-full object-contain"
              width={0}
              height={0}
              alt="real"
            />
            <div className="flex flex-col items-start">
              <div className="text-[40px] text-[var(--primaryTextColor)] font-bold mb-6">
                Welcome to Our Poultry And Egg Farm.
              </div>
              <div className="text-[var(--secondaryTextColor)] mb-6">
                Continually productize compelling quality for packed with Elated
                productize compelling quality for packed with all Elated
                ThemSetting up to website and creating pages.
              </div>
              <div className="flex flex=col ">
                <div className="text-[var(--customColor)] mr-2">
                  <i className="bi bi-check2-square"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)] mb-3">
                  We are providing different services
                </div>
              </div>
              <div className="flex flex=col ">
                <div className="text-[var(--customColor)] mr-2">
                  <i className="bi bi-check2-square"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)] mb-3">
                  We are providing different services
                </div>
              </div>
              <div className="flex flex=col">
                <div className="text-[var(--customColor)] mr-2">
                  <i className="bi bi-check2-square"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)] mb-3">
                  We are providing different services
                </div>
              </div>
              <div className="flex flex=col ">
                <div className="text-[var(--customColor)] mr-2">
                  <i className="bi bi-check2-square"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)] mb-3">
                  We are providing different services
                </div>
              </div>
              <div className="flex flex=col">
                <div className="text-[var(--customColor)] mr-2">
                  <i className="bi bi-check2-square"></i>
                </div>
                <div className="text-[var(--secondaryTextColor)] mb-6">
                  We are providing different services
                </div>
              </div>
              <div className="text-white text-[15px] rounded bg-[var(--customColor)] px-[22px] py-[13px] font-bold">
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////BLOG1 SECTION//////////// */}
      <div className="flex justify-center py-[90px] bg-[var(--secondaryCustomColor)]">
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
            <div className="grid grid-cols-4 w-full gap-7 mb-9">
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage4.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage5.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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
              <div className="flex flex-col items-center shadow-lg rounded-[15px] bg-[var(--backgroundColor)] py-7 px-6">
                <Image
                  src="/poultryImage3.jpg"
                  sizes="100vw"
                  className="h-full w-full object-contain bg-[var(--secondaryTextColor)] mb-7"
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

      {/* ///////BLOG2 SECTION//////////// */}
      <FeatureHomes />

      {/* ////TESTIMONIAL SECTION//// */}
      <div className="flex py-[75px] bg-[var(--secondaryBackground)] justify-center">
        <div className="customContainer">
          <div className="flex testimony flex-col justify-center text-center">
            <div className="text-[30px] text-[var(--secondaryTextColor)] font-semibold mb-5">
              Words From Our Customers
            </div>
            <div className="t"></div>
            <div className="text mb-12">
              We honoured to have these amzaing Customers
            </div>

            <Swiper
              modules={[Pagination]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={30}
              slidesPerView={3}
              className="w-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="text-start">
                    <div className="flex relative p-3 flex-col justify-start max-w-[350px] bg-white py-[20px] mb-7">
                      <div className="text mb-4">{item.content}</div>
                      <div className="space-x-1">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="w-5 h-5 bg-white rotate-45 absolute -bottom-[10px]"></div>
                    </div>
                    <div className="flex">
                      <Image
                        src={item.picture}
                        sizes="100vw"
                        className="h-[50px] mr-2 object-cover rounded-full w-[50px]"
                        width={0}
                        height={0}
                        alt="real"
                      />
                      <div>
                        <div className="text-lg font-bold text-black">
                          {item.name}
                        </div>
                        <div className="">{item.position} </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ////PARTNER SECTION//// */}
      <div className="flex py-[60px] bg-white">
        <div className="customContainer">
          <div className="flex items-center space-x-12">
            <Link href="/" className="block justify-center pl-[170px]">
              <Image
                src="/partner1.png"
                sizes="100vw"
                className="h-auto w-[400px]"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
            <Link href="/" className="block justify-center">
              <Image
                src="/partner2.png"
                sizes="100vw"
                className="h-auto w-[450px]"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
            <Link href="/" className="block justify-center">
              <Image
                src="/partner3.png"
                sizes="100vw"
                className="h-auto w-[430px]"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
            <Link href="/" className="block justify-center">
              <Image
                src="/partner4.png"
                sizes="100vw"
                className="h-auto w-[250px]"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
            <Link href="/" className="block justify-center">
              <Image
                src="/partner5.png"
                sizes="100vw"
                className="h-auto w-[250px]"
                width={0}
                height={0}
                alt="real"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
