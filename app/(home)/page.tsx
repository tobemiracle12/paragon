'use client'
import Link from 'next/link'
import Hero from '@/components/Public/Hero'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
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
export default function Home() {
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

      <div className="flex justify-center py-[90px] bg-[var(--backgroundColor)]">
        <div className="customContainer">
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-center max-w-[450px]">
              <div className="text-[30px] text-[var(--primaryTextColor)] mb-2 font-bold">
                Poultry Farm Services
              </div>
              <div className="text-[16px] text-[var(--secondaryTextColor)] mb-18">
                Conveniently customize proactive web services for leveraged
                interfaces without Globally
              </div>
            </div>

            <div className="grid grid-cols-3 w-full gap-7">
              <div className="flex flex-col shadow-lg py-[15px] px-[25px]">
                <div className="flex mb-6 items-center">
                  <Image
                    src="/poultryImage6.jpg"
                    sizes="100vw"
                    className="h-auto w-[70px] object-contain mr-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="text-[var(--primaryTextColor)] text-[20px] font-bold hover:text-[var(--customColor)]">
                    Alternative egg
                  </div>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Continually aggregate frictionle enthusias generate user
                  friendly vortals empowered without globally results.
                </div>
              </div>
              <div className="flex flex-col shadow-lg py-[15px] px-[25px]">
                <div className="flex mb-6 items-center">
                  <Image
                    src="/poultryImage7.jpg"
                    sizes="100vw"
                    className="h-auto w-[70px] object-contain mr-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="text-[var(--primaryTextColor)] text-[20px] font-bold hover:text-[var(--customColor)]"></div>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Continually aggregate frictionle enthusias generate user
                  friendly vortals empowered without globally results.
                </div>
              </div>
              <div className="flex flex-col shadow-lg py-[15px] px-[25px]">
                <div className="flex mb-6 items-center">
                  <Image
                    src="/poultryImage8.jpg"
                    sizes="100vw"
                    className="h-auto w-[70px] object-contain mr-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="text-[var(--primaryTextColor)] text-[20px] font-bold hover:text-[var(--customColor)]">
                    Breeder Management
                  </div>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Continually aggregate frictionle enthusias generate user
                  friendly vortals empowered without globally results.
                </div>
              </div>
              <div className="flex flex-col shadow-lg py-[15px] px-[25px]">
                <div className="flex mb-6 items-center">
                  <Image
                    src="/poultryImage9.jpg"
                    sizes="100vw"
                    className="h-auto w-[70px] object-contain mr-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="text-[var(--primaryTextColor)] text-[20px] font-bold hover:text-[var(--customColor)]">
                    Poultry Climate
                  </div>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Continually aggregate frictionle enthusias generate user
                  friendly vortals empowered without globally results.
                </div>
              </div>
              <div className="flex flex-col shadow-lg py-[15px] px-[25px]">
                <div className="flex mb-6 items-center">
                  <Image
                    src="/poultryImage10.jpg"
                    sizes="100vw"
                    className="h-auto w-[70px] object-contain mr-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="text-[var(--primaryTextColor)] text-[20px] font-bold hover:text-[var(--customColor)]">
                    Residual Treatment
                  </div>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Continually aggregate frictionle enthusias generate user
                  friendly vortals empowered without globally results.
                </div>
              </div>
              <div className="flex flex-col shadow-lg py-[15px] px-[25px]">
                <div className="flex mb-6 items-center">
                  <Image
                    src="/poultryImage11.jpg"
                    sizes="100vw"
                    className="h-auto w-[70px] object-contain mr-4"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="text-[var(--primaryTextColor)] text-[20px] font-bold hover:text-[var(--customColor)]">
                    Exhaust Air Treament
                  </div>
                </div>
                <div className="text-[var(--secondaryTextColor)]">
                  Continually aggregate frictionle enthusias generate user
                  friendly vortals empowered without globally results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////BLOG4 SECTION//////////// */}
      <div className="flex justify-center py-[90px] bg-[var(--secondaryCustomColor)]">
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
            <div className="h-[400px]">
              <Image
                src="/poultryImage12.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage13.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage14.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage15.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage16.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage17.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage18.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
            <div className="h-[400px]">
              <Image
                src="/poultryImage19.jpg"
                sizes="100vw"
                className="h-full w-full object-cover"
                width={0}
                height={0}
                alt="real"
              />
            </div>
          </div>
          <Link
            className="text-[20px] text-white bg-[var(--customColor)] rounded py-[10px] px-[30px]"
            href={'/'}
          >
            LOAD GALLERY
          </Link>
        </div>
      </div>

      {/* /////// STAFF SECTION //////////// */}
      <div className="flex justify-center py-[90px] bg-[var(--backgroundColor)]">
        <div className="customContainer">
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-center max-w-[450px]">
              <div className="text-[30px] text-[var(--primaryTextColor)] mb-2 font-bold">
                Our Team Member
              </div>
              <div className="text-[16px] text-[var(--secondaryTextColor)] mb-18">
                Conveniently customize proactive web services for leveraged
                interfaces without Globally
              </div>
            </div>
            <div className="grid grid-cols-4 w-full gap-7">
              <div className="flex flex-col items-center">
                <div className="h-[250px] w-full mb-4">
                  <Image
                    src="/poultryImage20.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="flex flex-col items-center shadow-lg w-full rounded pb-[25px]">
                  <Link
                    className="text-[var(--primaryTextColor)] text-[20px] font-bold mb-[2px] hover:text-[var(--customColor)]"
                    href={'/'}
                  >
                    Jason Roy
                  </Link>

                  <div className="text-[var(--secondaryTextColor)] mb-3">
                    Manager
                  </div>
                  <div className="flex">
                    <Link
                      className="hover:text-[var(--customColor)]"
                      href={'/'}
                    >
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
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[250px] w-full mb-4">
                  <Image
                    src="/poultryImage21.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="flex flex-col items-center shadow-lg w-full rounded pb-[25px]">
                  <Link
                    className="text-[var(--primaryTextColor)] text-[20px] font-bold mb-[2px] hover:text-[var(--customColor)]"
                    href={'/'}
                  >
                    Jason Roy
                  </Link>

                  <div className="text-[var(--secondaryTextColor)] mb-3">
                    Manager
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <Link
                      className="hover:text-[var(--customColor)]"
                      href={'/'}
                    >
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
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[250px] w-full mb-4">
                  <Image
                    src="/poultryImage22.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="flex flex-col items-center shadow-lg w-full rounded pb-[25px]">
                  <Link
                    className="text-[var(--primaryTextColor)] text-[20px] font-bold mb-[2px] hover:text-[var(--customColor)]"
                    href={'/'}
                  >
                    Jason Roy
                  </Link>

                  <div className="text-[var(--secondaryTextColor)] mb-3">
                    Manager
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <Link
                      className="hover:text-[var(--customColor)]"
                      href={'/'}
                    >
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
              </div>
              <div className="flex relative hover:-top-4 transition-all duration-700 flex-col items-center">
                <div className="h-[250px] w-full">
                  <Image
                    src="/poultryImage23.jpg"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                    width={0}
                    height={0}
                    alt="real"
                  />
                </div>
                <div className="flex flex-col items-center transition-all duration-300 shadow hover:shadow-lg w-full rounded py-[25px]">
                  <Link
                    className="text-[var(--primaryTextColor)] text-[20px] font-bold mb-[2px] hover:text-[var(--customColor)]"
                    href={'/'}
                  >
                    Jason Roy
                  </Link>

                  <div className="text-[var(--secondaryTextColor)] mb-3">
                    Manager
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <Link
                      className="hover:text-[var(--customColor)]"
                      href={'/'}
                    >
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////TESTIMONIAL SECTION//// */}
      <div className="flex justify-center py-[90px] bg-[var(--secondaryCustomColor)]">
        <div className="customContainer">
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-center max-w-[500px]">
              <div className="text-[30px] text-[var(--primaryTextColor)] mb-2 font-bold">
                What Client Say Our Poultry Farm
              </div>
              <div className="text-[16px] text-[var(--secondaryTextColor)] mb-18">
                Conveniently customize proactive web services for leveraged
                interfaces without Globally
              </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-7">
              <div className="flex flex-col items-start shadow-lg py-7 px-6 bg-[var(--backgroundColor)]">
                <div className="flex mb-7">
                  <Image
                    src="/poultryImage20.jpg"
                    sizes="100vw"
                    className="h-auto w-[90px] object-contain mr-5"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col">
                    <div className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] font-bold text-[20px]">
                      Jason Smith
                    </div>
                    <div className="text-[15px] text-[var(--secondaryTextColor)] font-semibold">
                      Founder & CEO
                    </div>
                    <div className="flex text-[15px] font-bold">
                      <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                    </div>
                  </div>
                </div>
                <i className="bi bi-quote mb-2 text-[var(--secondaryTextColor)]/50"></i>
                <div className="text-[var(--secondaryTextColor)] mb-1">
                  Continually Onceptualizef Technically invs Professionally
                  monetizeturkeyf Testingdu Frofessionally
                  oe-enablfunctaizede-come rce Onceptualize Technically
                  initiatives.
                </div>
                <i className="bi bi-quote"></i>
              </div>
              <div className="flex flex-col items-start shadow-lg py-7 px-6 bg-[var(--backgroundColor)]">
                <div className="flex mb-7">
                  <Image
                    src="/poultryImage21.jpg"
                    sizes="100vw"
                    className="h-auto w-[90px] object-contain mr-5"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col">
                    <div className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] font-bold text-[20px]">
                      Jason Smith
                    </div>
                    <div className="text-[15px] text-[var(--secondaryTextColor)] font-semibold">
                      Founder & CEO
                    </div>
                    <div className="flex text-[15px] font-bold">
                      <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                    </div>
                  </div>
                </div>
                <i className="bi bi-quote mb-2 text-[var(--secondaryTextColor)]/50"></i>
                <div className="text-[var(--secondaryTextColor)] mb-1">
                  Continually Onceptualizef Technically invs Professionally
                  monetizeturkeyf Testingdu Frofessionally
                  oe-enablfunctaizede-come rce Onceptualize Technically
                  initiatives.
                </div>
                <i className="bi bi-quote"></i>
              </div>
              <div className="flex flex-col items-start shadow-lg py-7 px-6 bg-[var(--backgroundColor)]">
                <div className="flex mb-7">
                  <Image
                    src="/poultryImage22.jpg"
                    sizes="100vw"
                    className="h-auto w-[90px] object-contain mr-5"
                    width={0}
                    height={0}
                    alt="real"
                  />
                  <div className="flex flex-col">
                    <div className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] font-bold text-[20px]">
                      Jason Smith
                    </div>
                    <div className="text-[15px] text-[var(--secondaryTextColor)] font-semibold">
                      Founder & CEO
                    </div>
                    <div className="flex text-[15px] font-bold">
                      <i className="bi bi-star text-[var(--customColor)] mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                      <i className="bi bi-star text-[var(--customColor)]  mr-1"></i>
                    </div>
                  </div>
                </div>
                <i className="bi bi-quote mb-2 text-[var(--secondaryTextColor)]/50"></i>
                <div className="text-[var(--secondaryTextColor)] mb-1">
                  Continually Onceptualizef Technically invs Professionally
                  monetizeturkeyf Testingdu Frofessionally
                  oe-enablfunctaizede-come rce Onceptualize Technically
                  initiatives.
                </div>
                <i className="bi bi-quote"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////NEWS SECTION//// */}
      <div className="flex justify-center py-[90px] bg-[var(--backgroundColor)]">
        <div className="customContainer">
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-center max-w-[500px]">
              <div className="text-[35px] text-[var(--primaryTextColor)] mb-2 font-bold">
                Our Recent News
              </div>
              <div className="text-[16px] text-[var(--secondaryTextColor)] mb-15">
                Conveniently customize proactive web services for leveraged
                interfaces without Globally
              </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-7">
              <div className="flex flex-col items-start py-7 bg-[var(--backgroundColor)]">
                <Image
                  src="/poultryImage17.jpg"
                  sizes="100vw"
                  className="h-[270px] w-full object-cover mb-5"
                  width={0}
                  height={0}
                  alt="real"
                />
                <Link
                  className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] mb-4 text-[20px] font-bold"
                  href={'/'}
                >
                  Chicken ducklings to help solve Obesity...
                </Link>
                <div className="text-[var(--secondaryTextColor)] mb-4">
                  Conveniently customize proactive web services without
                  Globally. oe-enablfunctaizede-come rce Onceptualize
                  Technically initiatives.
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] font-bold"
                  href={'/'}
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col items-start py-7 bg-[var(--backgroundColor)]">
                <Image
                  src="/poultryImage12.jpg"
                  sizes="100vw"
                  className="h-[270px] w-full object-cover mb-5"
                  width={0}
                  height={0}
                  alt="real"
                />
                <Link
                  className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] mb-4 text-[20px] font-bold"
                  href={'/'}
                >
                  Chicken ducklings to help solve Obesity...
                </Link>
                <div className="text-[var(--secondaryTextColor)] mb-4">
                  Conveniently customize proactive web services without
                  Globally. oe-enablfunctaizede-come rce Onceptualize
                  Technically initiatives.
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] font-bold"
                  href={'/'}
                >
                  Read More
                </Link>
              </div>
              <div className="flex flex-col items-start py-7 bg-[var(--backgroundColor)]">
                <Image
                  src="/poultryImage14.jpg"
                  sizes="100vw"
                  className="h-[270px] w-full object-cover mb-5"
                  width={0}
                  height={0}
                  alt="real"
                />
                <Link
                  className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] mb-4 text-[20px] font-bold"
                  href={'/'}
                >
                  Chicken ducklings to help solve Obesity...
                </Link>
                <div className="text-[var(--secondaryTextColor)] mb-4">
                  Conveniently customize proactive web services without
                  Globally. oe-enablfunctaizede-come rce Onceptualize
                  Technically initiatives.
                </div>
                <Link
                  className="text-[var(--primaryTextColor)] hover:text-[var(--customColor)] font-bold"
                  href={'/'}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////TESTIMONIAL SECTION//// */}
      {/* <div className="flex py-[75px] bg-[var(--secondaryBackground)] justify-center">
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
      </div> */}

      {/* ////PARTNER SECTION//// */}
      <div className="flex py-[90px] bg-[var(--secondaryCustomColor)] justify-center">
        <div className="customContainer">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={0}
            slidesPerView={5}
            slidesPerGroup={1}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <Link href="/" className="">
                <Image
                  src="/poultryImage24.jpg"
                  sizes="100vw"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                  alt="real"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="">
                <Image
                  src="/poultryImage25.jpg"
                  sizes="100vw"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                  alt="real"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="">
                <Image
                  src="/poultryImage26.jpg"
                  sizes="100vw"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                  alt="real"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="">
                <Image
                  src="/poultryImage27.jpg"
                  sizes="100vw"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                  alt="real"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="">
                <Image
                  src="/poultryImage28.jpg"
                  sizes="100vw"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                  alt="real"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/" className="">
                <Image
                  src="/poultryImage28.jpg"
                  sizes="100vw"
                  className="h-auto w-auto"
                  width={0}
                  height={0}
                  alt="real"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex py-[120px] bg-[var(--backgroundColor)] justify-center">
        <div className="customContainer text-center">
          <div className="grid grid-cols-4 gap-5 w-full">
            <div className="flex flex-col items-center  py-20 px-8 border-[3px] border-gray-100/40">
              <Image
                src="/poultryImage29.jpg"
                sizes="100vw"
                className="h-auto w-[65px] mb-3"
                width={0}
                height={0}
                alt="real"
              />
              <div className="text-[var(--primaryTextColor)] text-[20px] hover:text-[var(--customColor)] mb-3 font-bold">
                Products Range
              </div>
              <div className="text-[var(--secondaryTextColor)]">
                Conveniently customize recaptiualize focused inter without
                globally
              </div>
            </div>
            <div className="flex flex-col items-center border-[3px] border-gray-100/40 py-20 px-8">
              <Image
                src="/poultryImage30.jpg"
                sizes="100vw"
                className="h-auto w-[65px] mb-3"
                width={0}
                height={0}
                alt="real"
              />
              <div className="text-[var(--primaryTextColor)] text-[20px] hover:text-[var(--customColor)] mb-3 font-bold">
                Quality Matters
              </div>
              <div className="text-[var(--secondaryTextColor)]">
                Conveniently customize recaptiualize focused inter without
                globally
              </div>
            </div>
            <div className="flex flex-col items-center border-[3px] border-gray-100/40 py-20 px-8">
              <Image
                src="/poultryImage31.jpg"
                sizes="100vw"
                className="h-auto w-[65px] mb-3"
                width={0}
                height={0}
                alt="real"
              />
              <div className="text-[var(--primaryTextColor)] text-[20px] hover:text-[var(--customColor)] mb-3 font-bold">
                Products Range
              </div>
              <div className="text-[var(--secondaryTextColor)]">
                Conveniently customize recaptiualize focused inter without
                globally
              </div>
            </div>
            <div className="flex flex-col items-center border-[3px] border-gray-100/40 py-20 px-8">
              <Image
                src="/poultryImage32.jpg"
                sizes="100vw"
                className="h-auto w-[65px] mb-3"
                width={0}
                height={0}
                alt="real"
              />
              <div className="text-[var(--primaryTextColor)] text-[20px] hover:text-[var(--customColor)] mb-3 font-bold">
                Products Range
              </div>
              <div className="text-[var(--secondaryTextColor)]">
                Conveniently customize recaptiualize focused inter without
                globally
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////// FOOTER SECTION ///// */}
    </div>
  )
}
