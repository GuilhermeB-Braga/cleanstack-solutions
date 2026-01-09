'use client'
import { useState } from "react"
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { motion } from 'motion/react'

export default function AccordionQuestion({ question, answer }) {

    const [open, setOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: .9, y: -15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className="border border-border-custom rounded-xl bg-background-light cursor-pointer duration-200 hover:bg-background-light"
            onClick={() => setOpen(!open)}
        >

            <div
                className={`
                            flex gap-5 px-5 py-3 items-center rounded-xl justify-between font-bold
                            ${open ? 'rounded-b-none' : ''}
                        `}
            >

                <p>{question}</p>

                {open ? <RxCaretUp /> : <RxCaretDown />}

            </div>

            {open && (

                <div
                    className="p-5 rounded-b-xl">

                    <p className="text-text-muted">{answer}</p>

                </div>
            )}

        </motion.div>
    )
}