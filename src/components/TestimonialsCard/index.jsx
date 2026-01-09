'use client'
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { motion } from 'motion/react'

export default function TestmonialsCard({ text, name, company }) {
    return (
        <motion.li
            initial={{ opacity: 0, scale: .9, y: -15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className="p-5 border border-border-custom rounded-custom ">

            <div className="flex justify-between mb-5">

                <div className="flex mt-4 gap-1 text-[22px] text-amber-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <div className="text-[60px] opacity-50">
                    <BiSolidQuoteAltRight />
                </div>

            </div>

            <p>"{text}"</p>

            <h3 className="mt-5 text-[18px] font-bold">{name}</h3>

            <p className="text-text-muted text-[13px]">{company}</p>

        </motion.li>
    )
}