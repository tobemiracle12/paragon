'use client'
import Link from 'next/link'
import Hero from '@/components/Public/Hero'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {} from 'lucide-react'
import HeroSearchBar from '@/components/Public/HeroSearchBar'
export default function Contact() {
  return (
    <div>
      {/* ///////CONTACT SECTION//////////// */}
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
                Poultry Farm Contact us
              </div>
              <div className="flex items-center">
                <Link
                  href={'/'}
                  className="text-white text-[17px] mb-[3px] mr-1"
                >
                  Home /
                </Link>
                <div className="text-[var(--customColor)] text-[17px]">
                  Contact us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////CONTACT SECTION2 //// */}
      <div className="flex py-[60px] bg-[var(--BackgroundColor)] justify-center">
        <div className="customContainer">
          <div className="md:bg-[var(--secondaryCustomColor)] bg-transparent md:p-[40px] px-[10px]">
            <div className="grid md:grid-cols-2 mb-10 w-full gap-9">
              <div className="flex flex-col items-start">
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border border-gray-200 outline-0 text-black rounded"
                  />
                </div>
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="p-3 border border-gray-200 outline-0 text-black rounded"
                  />
                </div>
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="p-3 border border-gray-200 outline-0 text-black rounded"
                  />
                </div>
                <div className="contactInput">
                  <label className="mb-1" htmlFor="">
                    Message
                  </label>

                  <textarea
                    placeholder="Your Name"
                    className="p-3 border border-gray-200 outline-0 text-black rounded resize-none min-h-[200px]"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className="text-white py-3 px-3 bg-green-500 hover:bg-green-700 tansition transition duration-300 rounded-[5px]">
                  Send Message
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col mb-5">
                  <div className="flex">
                    <div className="t mr-4 text-[var(#808080)]">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="text-black text-[15px]">Phone</div>
                  </div>
                  <div className="text-[var(#808080)] pl-9 leading-5 text-[15px]">
                    +123-456-789
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <div className="flex">
                    <div className="t mr-4 text-[var(#808080)]">
                      <i className="bi bi-phone-fill"></i>
                    </div>
                    <div className="text-black text-[15px]">Mobile</div>
                  </div>
                  <div className="text-[var(#808080)] pl-9 leading-5 text-[15px]">
                    +123-456-789
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <div className="flex">
                    <div className="t mr-4 text-[var(#808080)]">
                      <i className="bi bi-fuel-pump-fill"></i>
                    </div>
                    <div className="text-black text-[15px]">Fax</div>
                  </div>
                  <div className="text-[var(#808080)] pl-9 leading-5 text-[15px]">
                    +123-456-789
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <div className="flex">
                    <div className="t mr-4 text-[var(#808080)]">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="text-black text-[15px]">Email</div>
                  </div>
                  <div className="text-[var(#808080)] pl-9 leading-5 text-[15px]">
                    sales@yourwebsite.com
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <div className="flex">
                    <div className="t mr-4 text-[var(#808080)]">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="text-black text-[15px]">Address</div>
                  </div>
                  <div className="text-[var(#808080)] pl-9 leading-5 text-[15px]">
                    3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-full h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254106.01784629122!2d7.09168786206372!3d5.654186360056148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10428e19657129ff%3A0x9431a596167553d9!2sImo!5e0!3m2!1sen!2sng!4v1759995760046!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
