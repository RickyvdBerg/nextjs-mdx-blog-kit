import React from 'react'
import { config } from '../config/config.yml'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="container mb-16">
      <hr className="w-1/2 mt-8 mx-auto" />
      <div className="flex flex-row justify-center gap-4">
        <p className="text-right w-1/3">{config.author}</p>
        <p className="text-center w-2">|</p>
        <p className="text-left w-1/3">The Netherlands</p>
      </div>

      <div className="flex flex-row justify-center gap-4 pt-2">
        <a href="https://github.com/RickyvdBerg">
          <FaGithub className="h-6 w-6 hover:text-accent cursor-pointer"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/ricky-van-den-berg-56425b126/">
          <FaEnvelope className="h-6 w-6 hover:text-accent cursor-pointer"></FaEnvelope>
        </a>
        <a href="https://www.linkedin.com/in/ricky-van-den-berg-56425b126/">
          <FaLinkedin className="h-6 w-6 hover:text-accent cursor-pointer"></FaLinkedin>
        </a>
      </div>
    </div>
  )
}
