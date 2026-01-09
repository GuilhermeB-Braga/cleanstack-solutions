'use client'
import { motion } from 'motion/react'

export default function MetricCard({ data, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .9, y: -15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className="
        grid place-items-center px-10 py-7.5 bg-background-light border border-border-custom rounded-custom">

            <p className="text-[32px] font-bold">{data}</p>

            <p className="text-[14px] text-text-muted">{desc}</p>

        </motion.div>
    )
}