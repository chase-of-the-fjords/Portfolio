"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const textBlockStyle =
  "flex flex-grow flex-col justify-center space-y-2 lg:space-y-4 overflow-hidden rounded-md bg-gradient-to-br bg-fixed p-5 font-raleway text-lg lg:text-xl leading-6 lg:leading-8 shadow-inner-xl";

const headingStyle =
  "font-source-serif text-2xl sm:text-3xl font-medium tracking-tight";

const imageStyle =
  "aspect-square h-fit overflow-hidden rounded-md bg-blue-300 shadow-xl hover:cursor-pointer hover:-translate-y-1 transition-transform size-fit object-cover";

const linkStyle =
  "font-bold transition-colors text-blue-900 hover:text-purple-900";

const navbarLinkStyle =
  "text-cool-grey-700 hover:text-cool-grey-900 transition-colors";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="mx-4 my-32 md:my-40">
        <Hero />
        <section id="projects" className="mt-4 space-y-24 pt-20">
          <MachineShopInterface />
          <OrdersPage />
          <GameJams />
        </section>
        <section id="contact" className="mt-4 space-y-24 pt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 150) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed left-0 z-50 h-16 w-screen bg-cool-grey-50 shadow-md backdrop-blur-md transition-[top] ${show ? "top-0" : "-top-20"}`}
    >
      <div className="mx-auto mt-5 hidden h-fit max-w-[960px] flex-row justify-evenly align-middle font-raleway text-xl font-semibold min-[450px]:flex">
        <a href="#" className={navbarLinkStyle}>
          Home
        </a>
        <a href="#projects" className={navbarLinkStyle}>
          Projects
        </a>
        <a href="#experience" className={navbarLinkStyle}>
          Experience
        </a>
        <a href="#contact" className={navbarLinkStyle}>
          Contact
        </a>
      </div>
      <div className="min-[450px]:hidden">
        <a
          href="#"
          className="absolute left-4 top-5 font-raleway text-xl font-semibold text-cool-grey-900"
        >
          Chase Peterson
        </a>
        <div className="absolute right-4 top-5 font-raleway">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="text-lg font-medium text-cool-grey-600 hover:text-cool-grey-900">
                Menu
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-left font-raleway">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="#">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#projects">Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#experience">Experience</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#contact">Contact</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
      className="mx-auto grid max-w-[960px] grid-cols-1 text-center md:grid-cols-4 md:gap-9 md:text-left lg:grid-cols-3"
    >
      {/* Picture of Chase */}
      <div className="mx-auto w-fit">
        <Image
          src="/images/fjordpic.jpg"
          alt="Picture of Chase Peterson"
          width={1000}
          height={1000}
          className={`${imageStyle} mb-3 w-36 !rounded-full hover:translate-y-0 hover:cursor-default md:w-auto`}
        />
      </div>
      {/* Name & Text */}
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2">
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
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-3 md:gap-9">
          <div className="col-span-3 col-start-1 flex flex-col gap-2 sm:col-span-5 md:col-span-2 md:col-start-1 md:row-span-2 md:aspect-square md:gap-4">
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
                back-end built on <b>Node.js and MySQL</b>.
              </p>
            </div>
          </div>
          {/* Pictures */}
          <PhotoView src="/images/machineshop/shop.png">
            <Image
              src="/images/machineshop/shop.png"
              alt="A picture of the machine shop interface"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/machineshop/saw.png">
            <Image
              src="/images/machineshop/saw.png"
              alt="A picture of the machine shop interface with the saw selected"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/machineshop/moment.png">
            <Image
              src="/images/machineshop/moment.png"
              alt="A picture of the moment shop interface for the machine shop"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/machineshop/history.png">
            <Image
              src="/images/machineshop/history.png"
              alt="A picture of the machine shop history page"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/machineshop/historyfilter.png">
            <Image
              src="/images/machineshop/historyfilter.png"
              alt="A picture of the machine shop history page, filtering for Brother C"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
        </div>
      </motion.section>
    </PhotoProvider>
  );
}

function GameJams() {
  return (
    <PhotoProvider>
      <motion.section
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut" }}
        className="mx-auto max-w-[960px]"
      >
        <h1 className={`md:grid md:grid-cols-3 ${headingStyle} mb-4 md:gap-9`}>
          <a
            href="http://chaseplays.itch.io"
            className="text-purple-800 transition-colors hover:text-purple-950 md:col-span-2 md:col-start-2"
            target="_blank"
          >
            Game Jams
          </a>
        </h1>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-3 md:gap-9">
          <div className="col-span-3 col-start-1 flex flex-col gap-2 sm:col-span-5 md:col-span-2 md:col-start-2 md:row-span-2 md:aspect-square md:gap-4">
            <div className={`${textBlockStyle} bg-purple-300`}>
              <p>
                Since middle school, {"I've"} participated in many game jams,
                mostly using a custom-built game engine made in <b>Java</b>. In
                these game jams, I was required to design and develop my own
                game in <b>48 hours</b>, testing my abilities to quickly work
                and adapt as needed to reach the deadline.
              </p>
              <p>
                Some of my favorite are{" "}
                <a
                  href="http://chaseplays.itch.io/timeless"
                  className={linkStyle}
                  target="_blank"
                >
                  Timeless
                </a>
                ,{" "}
                <a
                  href="http://chaseplays.itch.io/dimmer"
                  className={linkStyle}
                  target="_blank"
                >
                  Dimmer
                </a>
                , and{" "}
                <a
                  href="http://chaseplays.itch.io/thematterathand"
                  className={linkStyle}
                  target="_blank"
                >
                  The Matter at Hand
                </a>
                . These, and all my other games, are available to play on my{" "}
                <a
                  href="http://chaseplays.itch.io"
                  className={linkStyle}
                  target="_blank"
                >
                  itch.io page
                </a>
                .
              </p>
              <p>
                Using my experience from these game jams, I also led a team in
                October 2023 to create a bullet hell game named{" "}
                <a
                  href="http://chaseplays.itch.io/spellthief"
                  className={linkStyle}
                  target="_blank"
                >
                  Spellthief
                </a>{" "}
                in 2 weeks for the TritonWare game jam at UCSD. This was made in{" "}
                <b>Godot</b>, and I assisted with the programming, music,
                design, and overall direction for the project.
              </p>
            </div>
          </div>
          {/* Pictures */}
          <PhotoView src="/images/jams/spellthief.png">
            <Image
              src="/images/jams/spellthief.png"
              alt="A screenshot of Spellthief"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full md:row-start-1`}
            />
          </PhotoView>
          <PhotoView src="/images/jams/timeless.jpg">
            <Image
              src="/images/jams/timeless.jpg"
              alt="A screenshot of Timeless"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/jams/matterathand.jpg">
            <Image
              src="/images/jams/matterathand.jpg"
              alt="A screenshot of The Matter at Hand"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/jams/dimmer.jpg">
            <Image
              src="/images/jams/dimmer.jpg"
              alt="A screenshot of Dimmer"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/jams/looparena.jpg">
            <Image
              src="/images/jams/looparena.jpg"
              alt="A screenshot of Loop Arena"
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
        </div>
      </motion.section>
    </PhotoProvider>
  );
}

function OrdersPage() {
  return (
    <PhotoProvider>
      <motion.section
        initial={{ y: -50, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut" }}
        className="mx-auto max-w-[960px]"
      >
        <h1 className={`md:grid md:grid-cols-3 ${headingStyle} mb-4 md:gap-9`}>
          <span className="md:col-span-2 md:col-start-2">
            <a
              href="http://admin.origingolf.com/orders"
              className="text-blue-800 transition-colors hover:text-blue-950"
              target="_blank"
            >
              Orders Page
            </a>
            {" ~ "}
            Origin Golf
          </span>
        </h1>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-3 md:gap-9">
          <div className="col-span-3 col-start-1 flex flex-col gap-2 sm:col-span-5 md:col-span-2 md:col-start-2 md:row-span-2 md:aspect-square md:gap-4">
            <div className={`${textBlockStyle} bg-blue-300`}>
              <p>
                At <b>Origin Golf</b>, I also developed a page to track the{" "}
                <b>orders from clients</b>. Where the machine shop interface
                tracked the individual machine programs being run on each part,
                this page tracks the orders put in by companies, and the{" "}
                <b>quantities ordered and delivered</b>.
              </p>
              <p>
                Beyond the basic information, {"there's"} also a{" "}
                <b>priority system</b> built in to organize orders by their
                relative importance. Companies also have their own{" "}
                <b>creation and edit forms</b> with a priority system. All
                changes to orders are tracked and viewable on the{" "}
                <a
                  href="http://admin.origingolf.com/orders/history"
                  className={linkStyle}
                  target="_blank"
                >
                  order history page
                </a>
                .
              </p>
              <p>
                Just like the machine shop interface, the orders page has{" "}
                <b>responsive design</b> and looks clean on all devices.
              </p>
              <p>
                This tool was primarily built with{" "}
                <b>React (Next.js), TypeScript, and HTML/CSS</b>, with the
                back-end built on <b>Node.js and MySQL</b>.
              </p>
            </div>
          </div>
          {/* Pictures */}
          <PhotoView src="/images/orders/orders.png">
            <Image
              src="/images/orders/orders.png"
              alt="A screenshot of the orders page."
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full md:row-start-1`}
            />
          </PhotoView>
          <PhotoView src="/images/orders/edit.png">
            <Image
              src="/images/orders/edit.png"
              alt="A screenshot of the orders page in edit mode."
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/orders/editorder.png">
            <Image
              src="/images/orders/editorder.png"
              alt="A screenshot of an order being edited on the orders page."
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/orders/createcompany.png">
            <Image
              src="/images/orders/createcompany.png"
              alt="A screenshot of a company being created on the orders page."
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
          <PhotoView src="/images/orders/history.png">
            <Image
              src="/images/orders/history.png"
              alt="A screenshot of the history page for the orders page."
              width={1000}
              height={1000}
              className={`${imageStyle} col-span-1 row-span-1 w-full`}
            />
          </PhotoView>
        </div>
      </motion.section>
    </PhotoProvider>
  );
}

function Contact() {
  const contactLinkStyle =
    "text-xl sm:text-3xl font-semibold text-yellow-300 transition-colors hover:text-yellow-500";

  return (
    <motion.section
      initial={{ y: -50, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut" }}
      className="mx-auto max-w-[960px]"
    >
      <h1 className={`${headingStyle} mb-4 text-center`}>Contact</h1>
      {/* Grid */}
      <div
        className={`flex h-80 flex-col justify-center gap-y-8 overflow-hidden rounded-md bg-cool-grey-500 p-3 font-raleway shadow-inner-xl sm:p-5`}
      >
        <p className="mx-auto text-center font-raleway text-lg text-cool-grey-50 sm:text-2xl">
          The fastest way to reach me is at my email
          <br />
          <a
            className={contactLinkStyle}
            href="mailto:chase@chasepeterson.dev"
            target="_blank"
          >
            chase@chasepeterson.dev
          </a>
        </p>
        <p className="mx-auto text-center font-raleway text-lg text-cool-grey-50 sm:text-2xl">
          You can also find me on
          <br />
          <a
            className={contactLinkStyle}
            href="https://github.com/chase-of-the-fjords/"
            target="_blank"
          >
            GitHub
          </a>
          {", "}
          <a
            className={contactLinkStyle}
            href="https://www.linkedin.com/in/cepeterson/"
            target="_blank"
          >
            LinkedIn
          </a>
          {", and "}
          <a
            className={contactLinkStyle}
            href="https://www.instagram.com/chase.of.the.fjords/"
            target="_blank"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <h5 className="mx-auto my-8 w-fit font-raleway text-lg font-medium">
      © Chase Peterson {new Date().getFullYear()}
    </h5>
  );
}
