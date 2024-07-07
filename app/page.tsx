"use client";
import Image from "next/image";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { motion } from "framer-motion";

const textBlockStyle =
  "flex flex-grow flex-col justify-center space-y-4 overflow-hidden rounded-md bg-gradient-to-br bg-fixed p-5 font-raleway text-xl leading-8 shadow-inner-xl";

const headingStyle = "font-source-serif text-3xl font-medium tracking-tight";

const imageStyle =
  "aspect-square h-fit overflow-hidden rounded-md bg-blue-300 shadow-xl hover:cursor-pointer hover:-translate-y-1 transition-transform size-fit object-cover";

const linkStyle =
  "font-bold transition-colors text-blue-900 hover:text-purple-900";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="mx-4 my-40">
        <Hero />
        <section id="projects" className="space-y-24 pt-24">
          <MachineShopInterface />
          <MachineShopInterface />
          <MachineShopInterface />
          <MachineShopInterface />
          <MachineShopInterface />
          <MachineShopInterface />
        </section>
      </main>
    </>
  );
}

function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-50 h-16 w-screen bg-cool-grey-50 shadow-md backdrop-blur-md">
      <div className="mx-auto mt-5 flex h-fit max-w-[960px] flex-row justify-evenly align-middle font-raleway text-xl font-semibold text-cool-grey-800">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut" }}
      className="mx-auto grid max-w-[960px] grid-cols-3 gap-9"
    >
      {/* Picture of Chase */}
      <div>
        <Image
          src="/images/fjordpic.jpg"
          alt="Picture of Chase Peterson"
          width={1000}
          height={1000}
          className={`${imageStyle} hover:translate-y-0 hover:cursor-default`}
        />
      </div>
      {/* Name & Text */}
      <div className="col-span-2 flex flex-col gap-4">
        <h1 className={headingStyle}>Chase Peterson Portfolio</h1>
        <div className={`${textBlockStyle} bg-blue-300`}>
          <p>
            {"Hi! I'm a software engineer studying "}
            <b className="font-bold">Computer Science at UC San Diego</b>
            {". I have years of experience as a "}
            <b className="font-bold">full-stack developer</b>
            {", with an emphasis on "}
            <b className="font-bold">front-end development and UI/UX design</b>.
          </p>
          <p>
            Below you can find some of my <b>projects and experience</b>.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function MachineShopInterface() {
  return (
    <PhotoProvider>
      <motion.section
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut" }}
        className="mx-auto max-w-[960px]"
      >
        <h1 className={`${headingStyle} mb-4`}>
          <a
            href="http://shop.origingolf.com"
            className="text-yellow-800 transition-colors hover:text-yellow-950"
            target="_blank"
          >
            Machine Shop Interface
          </a>
          {" ~ "}
          Origin Golf
        </h1>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-9">
          <div className="col-span-2 flex flex-col gap-4">
            <div className={`${textBlockStyle} bg-yellow-300`}>
              <p>
                At <b>Origin Golf</b>, I developed an interface to{" "}
                <b>track all active jobs</b> being run in the machine shop. The
                page has a simple and easy-to-use{" "}
                <a
                  href="http://shop.origingolf.com/"
                  className={linkStyle}
                  target="_blank"
                >
                  front-end interface
                </a>{" "}
                with a <b>password-locked edit system</b> for administrators.
              </p>
              <p>
                Along with allowing users to <b>easily view and edit jobs</b>,
                the website also <b>tracks all job history over time</b>. This
                means the full shop history is viewable in a cleanly-designed{" "}
                <a
                  href="http://shop.origingolf.com/history"
                  className={linkStyle}
                  target="_blank"
                >
                  history log
                </a>
                , as well as a{" "}
                <a
                  href="http://shop.origingolf.com/moment"
                  className={linkStyle}
                  target="_blank"
                >
                  moment history
                </a>
                {
                  " page that shows the shop's exact state at any point in the past."
                }
              </p>
              <p>
                All pages are also built with <b>responsive design</b>, and look
                clean on all devices.
              </p>
              <p>
                This tool was primarily built with{" "}
                <b>React (Next.js), JavaScript, and HTML/CSS</b>, with the
                back-end built on <b>Node.js and SQL</b>.
              </p>
            </div>
          </div>
          {/* Pictures */}
          <div className="flex-1 space-y-9">
            <PhotoView src="/images/machineshop/shop.png">
              <Image
                src="/images/machineshop/shop.png"
                alt="Picture of Chase Peterson"
                width={1000}
                height={1000}
                className={imageStyle}
              />
            </PhotoView>
            <PhotoView src="/images/machineshop/saw.png">
              <Image
                src="/images/machineshop/saw.png"
                alt="Picture of Chase Peterson"
                width={1000}
                height={1000}
                className={imageStyle}
              />
            </PhotoView>
          </div>
          <PhotoView src="/images/machineshop/moment.png">
            <Image
              src="/images/machineshop/moment.png"
              alt="Picture of Chase Peterson"
              width={1000}
              height={1000}
              className={imageStyle}
            />
          </PhotoView>
          <PhotoView src="/images/machineshop/history.png">
            <Image
              src="/images/machineshop/history.png"
              alt="Picture of Chase Peterson"
              width={1000}
              height={1000}
              className={imageStyle}
            />
          </PhotoView>
          <PhotoView src="/images/machineshop/historyfilter.png">
            <Image
              src="/images/machineshop/historyfilter.png"
              alt="Picture of Chase Peterson"
              width={1000}
              height={1000}
              className={imageStyle}
            />
          </PhotoView>
        </div>
      </motion.section>
    </PhotoProvider>
  );
}
