import React from 'react'
import { config } from '../config/config.yml'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="container mb-16">
      <hr className="w-1/2 mt-8 mx-auto" />
      <div className="flex flex-row justify-center gap-4">
        <p>{config.author}</p>
        <p>|</p>
        <p>The Netherlands</p>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-2">
        <FaGithub className="h-6 w-6 hover:text-accent cursor-pointer"></FaGithub>
        <FaTwitter className="h-6 w-6 hover:text-accent cursor-pointer"></FaTwitter>
        <FaLinkedin className="h-6 w-6 hover:text-accent cursor-pointer"></FaLinkedin>
      </div>
    </div>
  )
}
