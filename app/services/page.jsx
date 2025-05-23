"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in building responsive, user-focused web applications using modern technologies like JavaScript, React, Node.js, and more. With a strong emphasis on clean code, performance, and accessibility, I craft digital experiences that are both functional and engaging—from single-page applications to full-stack solutions",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "I create intuitive, responsive interfaces using modern frameworks like React and Vue. With a focus on performance, accessibility, and pixel-perfect design, I turn complex ideas into seamless user experiences that work across all devices.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "I build robust, scalable backend systems using technologies like Node.js, Express, and PostgreSQL. My focus is on creating secure APIs, efficient data handling, and seamless integration with frontend applications to deliver fast, reliable web experiences.",
    href: "",
  },
  {
    num: "04",
    title: "API Development",
    description:
      "I build robust, scalable backend systems using technologies like Node.js, Express, Python, and Django. My focus is on creating secure APIs, efficient data handling, and seamless integration with frontend applications to deliver fast, reliable web experiences",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
