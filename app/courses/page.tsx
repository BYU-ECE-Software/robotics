import PageHero from "@/components/PageHero";
import { courses } from "@/data/courses";
import CourseList from "@/components/CourseList";

export const metadata = {
  title: "Courses | Robotics at BYU",
  description: "Explore BYU courses connected to robotics, autonomy, and intelligent systems.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Courses"
        subtitle="Build a robotics path across engineering, computing, and intelligent systems."
        image="/images/heroes/hero-default.jpg"
        position="center 48%"
      />

      <section className="relative overflow-hidden bg-[#f2f5f7] py-20 sm:py-28">
        <div aria-hidden="true" className="absolute -right-28 top-16 size-80 rounded-full bg-[#7fbeeb]/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-36 bottom-0 size-96 rounded-full bg-[#0047ba]/10 blur-3xl" />

        <div className="container-wide relative">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow">Academic pathways</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#002e5d] sm:text-4xl">
                Learn robotics from every angle.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Robotics brings mechanics, electronics, computation, and autonomy together.
              Use this collection as a starting point, and confirm schedules and prerequisites
              in the current BYU catalog before registering.
            </p>
          </div>

          <CourseList courses={courses} />
        </div>
      </section>
    </>
  );
}
