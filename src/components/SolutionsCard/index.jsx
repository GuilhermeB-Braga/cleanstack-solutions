'use client'
import { motion } from 'motion/react'

export default function SolutionsCard({ title, desc, icon }) {
    return (
        <motion.li
            initial={{ opacity: 0, scale: .9, y: -15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className="p-5 border border-border-custom rounded-custom bg-background-light">

            <div
                className="
                grid place-items-center bg-primary text-background-dark w-13 h-13 rounded-custom text-[18px]"
            >

                {icon}

            </div>

            <h3 className="my-5 text-[18px] font-bold">{title}</h3>

            <p>{desc}</p>

        </motion.li>
    )
}