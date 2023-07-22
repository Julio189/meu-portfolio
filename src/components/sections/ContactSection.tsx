import React, { useState } from 'react'
import Inputs from '../shared/Inputs'
import SocialMedia from '../shared/SocialMedia'

import { FaLinkedin, FaInstagram } from 'react-icons/Fa'
import { FiGithub } from 'react-icons/Fi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { AiFillPhone } from 'react-icons/ai'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import Link from 'next/link'

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = (e: any) => {
    e.preventDefault()
    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos')
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailjs
      .send(
        'service_tj1oerm',
        'template_6gssksd',
        templateParams,
        'HE-_D0B8aC_kgTj7-',
      )
      .then(
        (response) => {
          console.log('Email Enviado', response.status, response.text)
          setName('')
          setEmail('')
          setMessage('')
        },
        (err) => {
          console.log('Erro', err)
        },
      )
  }
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
          <div className="flex mb-8">
            <RiSendPlaneFill className="text-mainColor" size={20} />
            <p className="text-base ml-2">julio.c.jesus@hotmail.com</p>
          </div>
          <div className="flex mb-10">
            <AiFillPhone className="text-mainColor" size={20} />
            <p className="text-base ml-2">(11)97570-1286</p>
          </div>
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
            onSubmit={handleSend}
            className="w-full mx-auto items-center"
          >
            <div id="box" className="relative w-full">
              <Inputs
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                type="text"
                placeholder="Nome"
              />
              <Inputs
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <textarea
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                cols={30}
                rows={10}
                placeholder=" "
                required
                className="w-full h-full p-4 text-white bg-transparent rounded-md border-2 border-[#20bbf8] outline-none placeholder:text-white hover:bg-[#112e42] transition peer"
              ></textarea>
              <label className="absolute text-sm text-white duration-150 transform -translate-y-3 scale-75 top-[10px] z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                Sua Mensagem
              </label>
            </div>

            <div className="items-center mx-auto justify-center flex mt-4">
              <Inputs type="submit" value="Enviar" button />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
