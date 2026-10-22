import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiCompass, FiMail, FiTool, FiUsers } from "react-icons/fi";
import Accordion from "@/components/Accordion";
import PageHero from "@/components/PageHero";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Get Involved | Robotics at BYU",
  description: "Find opportunities to participate in robotics research and community at BYU.",
};

const opportunities = [
  {
    icon: FiCompass,
    label: "Find your direction",
    title: "Explore a lab",
    description: "Interested in research? Find a research lab and faculty member working on a topic that's interesting to you.",
    href: "/research-labs",
    action: "Browse research labs",
  },
  {
    icon: FiBookOpen,
    label: "Meet a mentor",
    title: "Connect with faculty",
    description: "Read about faculty interests before reaching out.",
    href: "/faculty",
    action: "Meet robotics faculty",
  },
  {
    icon: FiTool,
    label: "Spend a summer",
    title: "Join the REU",
    description: "Build research experience through the Robotics Pioneers summer program for undergraduates.",
    href: "/reu",
    action: "Explore the REU",
  },
  {
    icon: FiUsers,
    label: "Build with peers",
    title: "Join a robotics club",
    description: "Turn ideas into working machines alongside student teams focused on autonomous systems, combat, flight, field, and space.",
    href: "/clubs",
    action: "Explore robotics clubs",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get involved"
        subtitle="Bring your curiosity. Find a team, a mentor, and a problem worth solving."
        image="/images/heroes/faqs-hero.jpg"
        position="center 45%"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow">Your next step</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
              There is more than one way in.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you are ready to join a project or just beginning to
              explore robotics, start with the path that fits where you are now.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
            {opportunities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex min-h-[390px] flex-col bg-white p-8 sm:p-10">
                  <Icon aria-hidden="true" className="text-3xl text-[#0047ba]" />
                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-[#0047ba]">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#002e5d]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
                  <Link href={item.href} className="group mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-[#002e5d]">
                    {item.action}
                    <FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f7] py-20 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-4xl">Frequently asked questions</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="bg-[#0047ba] py-16 text-white">
        <div className="container-wide flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6dcf6]">Still have questions?</p>
            <h2 className="mt-3 text-3xl font-bold">Start a conversation.</h2>
          </div>
          <a href="mailto:romanv7@byu.edu" className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-bold text-[#002e5d] transition hover:bg-[#7fbeeb]">
            <FiMail aria-hidden="true" />
            Contact Robotics at BYU
          </a>
        </div>
      </section>
    </>
  );
}
