import Image from "next/image";
import { FiArrowUpRight, FiCalendar, FiCheck, FiDollarSign, FiMapPin } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import nextConfig from "@/next.config";
import ComingSoonPage from "@/components/states/ComingSoonPage";

export const metadata = {
  title: "Robotics Pioneers REU | Robotics at BYU",
  description: "A 10-week summer robotics research experience for undergraduate students at BYU.",
};

const benefits = [
  "$7,000 salary stipend for the 10-week program",
  "An additional settling-in stipend to help with housing and initial costs",
  "Potential travel funding to present research at a regional or national conference",
];

const applicationItems = [
  "Your overall and major GPA",
  "A digital transcript; an official transcript is not required",
  "Your top four advisor or project-area choices and why they interest you",
  "Short responses about your academic goals, interest in BYU, and contribution to a collaborative cohort",
  "A one-page résumé",
  "Contact information for at least two references",
];

const timeline = [
  ["February 9, 2026", "Applications due"],
  ["February", "Zoom interviews"],
  ["Late February", "Recommendation letters due"],
  ["Mid-March", "First offers sent"],
  ["End of March", "Initial decisions requested"],
  ["April", "Additional offers sent as needed"],
];

export default function ReuPage() {
  return (
    <ComingSoonPage pageName="REU Info Page"/>
//     <>
//       <PageHero
//         title="Robotics Pioneers REU"
//         subtitle="A summer of ambitious research, practical discovery, and preparation for what comes next."
//         image="/images/droneChurch2.jpg"
//         position="center 45%"
//         height="560px"
//       >
//         <a
//           href="https://reu.byu.edu"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-bold text-[#002e5d] transition hover:bg-[#7fbeeb]"
//         >
//           Visit the application site
//           <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//         </a>
//       </PageHero>

//       <section className="bg-white py-20 sm:py-28">
//         <div className="container-wide grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
//           <div>
//             <p className="eyebrow">Research experience for undergraduates</p>
//             <div className="mt-5 h-1 w-16 bg-[#0047ba]" />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
//               Ten weeks that can shape what comes next.
//             </h2>
//             <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
//               <p>
//                 The NSF-funded Robotics Pioneers program brings non-BYU
//                 undergraduates to Provo to participate in real-world robotics research.
//               </p>
//               <p>
//                 Participants work alongside faculty and research teams on
//                 projects ranging from underwater autonomy and aerial mapping to
//                 multi-robot systems and soft robotics for extreme environments.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="container-wide mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
//           <div className="bg-[#f5f7f9] p-7 sm:p-9">
//             <FiCalendar aria-hidden="true" className="text-3xl text-[#0047ba]" />
//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Program dates</p>
//             <p className="mt-2 text-xl font-bold text-[#002e5d]">May 11 – July 17, 2026</p>
//           </div>
//           <div className="bg-[#f5f7f9] p-7 sm:p-9">
//             <FiDollarSign aria-hidden="true" className="text-3xl text-[#0047ba]" />
//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Stipend</p>
//             <p className="mt-2 text-xl font-bold text-[#002e5d]">$7,000 plus support</p>
//           </div>
//           <div className="bg-[#f5f7f9] p-7 sm:p-9">
//             <FiMapPin aria-hidden="true" className="text-3xl text-[#0047ba]" />
//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Location</p>
//             <p className="mt-2 text-xl font-bold text-[#002e5d]">BYU · Provo, Utah</p>
//           </div>
//         </div>
//       </section>

//       <section className="grid bg-[#002e5d] text-white lg:grid-cols-2">
//         <div className="relative min-h-[420px] lg:min-h-[620px]">
//           <Image
//             src={`/images/article/boat.jpg`}
//             alt="Autonomous underwater robots deployed near a research boat"
//             fill
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             className="object-cover"
//           />
//         </div>
//         <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
//           <div className="max-w-xl">
//             <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7fbeeb]">What participants receive</p>
//             <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">Support for serious exploration.</h2>
//             <ul className="mt-8 space-y-5">
//               {benefits.map((benefit) => (
//                 <li key={benefit} className="flex gap-4 leading-7 text-white/80">
//                   <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#7fbeeb] text-[#002e5d]">
//                     <FiCheck aria-hidden="true" />
//                   </span>
//                   {benefit}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#f2f5f7] py-20 sm:py-28">
//         <div className="container-wide grid gap-14 lg:grid-cols-2 lg:gap-20">
//           <div>
//             <p className="eyebrow">Application details</p>
//             <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-4xl">Prepare your application.</h2>
//             <p className="mt-5 leading-7 text-slate-600">
//               Applications for the 2026 cohort were due February 9, 2026. The application includes:
//             </p>
//             <ul className="mt-7 space-y-4">
//               {applicationItems.map((item) => (
//                 <li key={item} className="flex gap-3 leading-7 text-slate-700">
//                   <FiCheck aria-hidden="true" className="mt-1 shrink-0 text-[#0047ba]" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-white p-7 shadow-sm sm:p-10">
//             <p className="eyebrow">2026 timeline</p>
//             <ol className="mt-7 border-l border-slate-200">
//               {timeline.map(([date, event]) => (
//                 <li key={event} className="relative pb-7 pl-7 last:pb-0">
//                   <span className="absolute -left-[5px] top-1 size-[9px] rounded-full bg-[#0047ba] ring-4 ring-white" />
//                   <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0047ba]">{date}</p>
//                   <p className="mt-1 font-semibold text-[#002e5d]">{event}</p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-20 sm:py-28">
//         <div className="container-wide grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
//           <div>
//             <p className="eyebrow">Eligibility</p>
//             <h2 className="mt-4 text-3xl font-bold text-[#002e5d] sm:text-4xl">Who can participate?</h2>
//           </div>
//           <div className="divide-y divide-slate-200 border-y border-slate-200">
//             <EligibilityItem title="Citizenship">
//               Because the program is funded by the National Science Foundation,
//               applicants must be U.S. citizens or permanent residents.
//             </EligibilityItem>
//             <EligibilityItem title="Academic level">
//               Applicants must be enrolled as undergraduates at an accredited
//               U.S. college or university with at least one semester remaining after the program.
//             </EligibilityItem>
//             <EligibilityItem title="Visiting student requirements">
//               Admitted participants must qualify as BYU visiting students,
//               including a minimum 2.5 GPA, enrollment in research credit, and completion of required interviews.
//             </EligibilityItem>
//             <EligibilityItem title="BYU Honor Code">
//               Participants agree to BYU&apos;s Code of Conduct and Honor Code.
//               Students of all faiths, as well as students who do not associate with a religion, are welcome to apply.
//             </EligibilityItem>
//           </div>
//         </div>
//       </section>

//       <section className="relative isolate overflow-hidden bg-[#0047ba] py-20 text-center text-white">
//         <div className="container-wide">
//           <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b6dcf6]">Robotics Pioneers</p>
//           <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] sm:text-5xl">Ready to build research experience?</h2>
//           <a href="https://reu.byu.edu" target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-bold text-[#002e5d] transition hover:bg-[#7fbeeb]">
//             Visit reu.byu.edu
//             <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//           </a>
//         </div>
//       </section>
    // </>
  );
}

// function EligibilityItem({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <article className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
//       <h3 className="font-bold text-[#002e5d]">{title}</h3>
//       <p className="leading-7 text-slate-600">{children}</p>
//     </article>
//   );
// }
