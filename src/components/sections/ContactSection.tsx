import React from 'react'
import Button from '../shared/Button'
import Inputs from '../shared/Inputs'
import SocialMedia from '../shared/SocialMedia'

import { FaLinkedin, FaInstagram } from 'react-icons/Fa'
import { FiGithub } from 'react-icons/Fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { AiFillPhone } from 'react-icons/ai'
import { motion } from 'framer-motion'

import Link from 'next/link'

const ContactSection = () => {
  return (
    <section
      className="bg-primaryBgColor text-textColor min-h-screen pt-32 px-[9%] pb-5 flex flex-col"
      id="contato"
    >
      <div className="sm:flex">
        <motion.div
          className="flex flex-col basis-[40%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-5xl font-bold mb-10">
            Fale <span className="text-mainColor">Comigo</span>
          </h1>
          <Link href="/" className="flex mb-8">
            <RiSendPlaneFill className="text-mainColor" size={20} />
            <p className="text-base ml-2">email@julio.com</p>
          </Link>
          <Link href="/" className="flex mb-10">
            <AiFillPhone className="text-mainColor" size={20} />
            <p className="text-base ml-2">telefone 9990003</p>
          </Link>
          <div className="flex mb-10 gap-3">
            <SocialMedia
              href="https://www.linkedin.com/in/julio-de-jesus/"
              icon={<FaLinkedin size={20} />}
            />
            <SocialMedia
              href="https://github.com/Julio189"
              icon={<FiGithub size={20} />}
            />
            <SocialMedia
              href="https://www.instagram.com/julio_tech.1/"
              icon={<FaInstagram size={20} />}
            />
          </div>
        </motion.div>
        <motion.div
          className="basis-[55%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            action="#"
            className="w-full md:max-w-[43rem] mx-auto items-center"
          >
            <div
              id="box"
              className="relative flex flex-col md:flex-row justify-between flex-wrap"
            >
              <Inputs id="name" type="text" placeholder="Full Name" />
              <Inputs id="emailAdress" type="text" placeholder="Email Adress" />
            </div>

            <div id="box" className="relative flex justify-between flex-wrap">
              <Inputs id="number" type="number" placeholder="Mobile Number" />
              <Inputs
                id="emailSubject"
                type="text"
                placeholder="Email Subject"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                cols={30}
                rows={10}
                placeholder=" "
                required
                className="w-full h-full p-4 text-white bg-transparent rounded-md border-2 border-[#20bbf8] outline-none placeholder:text-white hover:bg-[#112e42] transition peer"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-white duration-150 transform -translate-y-3 scale-75 top-[10px] z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                Your Message
              </label>
            </div>

            <div className="items-center mx-auto justify-center flex mt-4">
              <Button cover name="Sumit" href="#" />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
