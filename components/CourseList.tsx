"use client";

import { useMemo, useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiInfo,
} from "react-icons/fi";
import type { Course } from "@/utils/types";

type SortField = "department" | "level" | "name";
type SortDirection = "ascending" | "descending";
type DepartmentFilter = Course["department"] | "all";
type LevelFilter = Course["level"] | "all";

type CourseListProps = {
  courses: Course[];
};

const levelLabel: Record<Course["level"], string> = {
  undergraduate: "Undergraduate",
  graduate: "Graduate",
};

export default function CourseList({ courses }: CourseListProps) {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("ascending");
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState<DepartmentFilter>("all");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(() => new Set());

  const sortedCourses = useMemo(() => {
    const direction = sortDirection === "ascending" ? 1 : -1;
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

    return courses.filter((course) => {
      const matchesSearch = !normalizedQuery ||
        course.title.toLocaleLowerCase().includes(normalizedQuery) ||
        course.courseNumber.toLocaleLowerCase().includes(normalizedQuery);
      const matchesDepartment = departmentFilter === "all" || course.department === departmentFilter;
      const matchesLevel = levelFilter === "all" || course.level === levelFilter;

      return matchesSearch && matchesDepartment && matchesLevel;
    }).sort((first, second) => {
      const firstValue = sortField === "name" ? first.title : first[sortField];
      const secondValue = sortField === "name" ? second.title : second[sortField];
      const comparison = firstValue.localeCompare(secondValue);

      return comparison !== 0
        ? comparison * direction
        : first.title.localeCompare(second.title) * direction;
    });
  }, [courses, departmentFilter, levelFilter, searchQuery, sortDirection, sortField]);

  function toggleCourseDetails(courseNumber: string) {
    setExpandedCourses((current) => {
      const next = new Set(current);

      if (next.has(courseNumber)) {
        next.delete(courseNumber);
      } else {
        next.add(courseNumber);
      }

      return next;
    });
  }

  return (
    <div className="mt-14">
      <div className="mb-5 space-y-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="course-search" className="text-sm font-semibold text-slate-600">
              Search courses
            </label>
            <input
              id="course-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Name or course number"
              className="w-full border border-slate-300 bg-white px-3 py-2 text-sm text-[#002e5d] outline-none transition placeholder:text-slate-400 focus:border-[#0047ba] focus:ring-2 focus:ring-[#7fbeeb]/50 sm:w-64"
            />
          </div>
          <p className="text-sm font-semibold text-slate-500" aria-live="polite">
            {sortedCourses.length} of {courses.length} robotics-related courses
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <label htmlFor="department-filter" className="text-sm font-semibold text-slate-600">
              Department
            </label>
            <select
              id="department-filter"
              value={departmentFilter}
              onChange={(event) => setDepartmentFilter(event.target.value as DepartmentFilter)}
              className="border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#002e5d] outline-none transition focus:border-[#0047ba] focus:ring-2 focus:ring-[#7fbeeb]/50"
            >
              <option value="all">All departments</option>
              <option value="CS">Computer Science</option>
              <option value="ECE">Electrical & Computer Engineering</option>
              <option value="ME">Mechanical Engineering</option>
            </select>
            <label htmlFor="level-filter" className="ml-2 text-sm font-semibold text-slate-600">
              Level
            </label>
            <select
              id="level-filter"
              value={levelFilter}
              onChange={(event) => setLevelFilter(event.target.value as LevelFilter)}
              className="border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#002e5d] outline-none transition focus:border-[#0047ba] focus:ring-2 focus:ring-[#7fbeeb]/50"
            >
              <option value="all">All levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="course-sort" className="text-sm font-semibold text-slate-600">
            Sort by
          </label>
          <select
            id="course-sort"
            value={sortField}
            onChange={(event) => setSortField(event.target.value as SortField)}
            className="border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#002e5d] outline-none transition focus:border-[#0047ba] focus:ring-2 focus:ring-[#7fbeeb]/50"
          >
            <option value="name">Name</option>
            <option value="department">Department</option>
            <option value="level">Level</option>
          </select>
          <button
            type="button"
            onClick={() => setSortDirection((current) => current === "ascending" ? "descending" : "ascending")}
            className="inline-flex items-center gap-2 border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#002e5d] transition hover:border-[#0047ba] hover:bg-[#e8f3fb] focus:outline-none focus:ring-2 focus:ring-[#7fbeeb]/50"
            aria-label={`Sort ${sortDirection === "ascending" ? "descending" : "ascending"}`}
            title={`Sort ${sortDirection === "ascending" ? "descending" : "ascending"}`}
          >
            {sortDirection === "ascending" ? <FiArrowUp aria-hidden="true" /> : <FiArrowDown aria-hidden="true" />}
            {sortDirection === "ascending" ? "Ascending" : "Descending"}
          </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
        {sortedCourses.length === 0 ? (
          <p className="px-5 py-8 text-center text-slate-600">
            No courses match those search and filter settings.
          </p>
        ) : sortedCourses.map((course) => {
          const isExpanded = expandedCourses.has(course.courseNumber);
          const detailsId = `course-context-${course.courseNumber.replace(/[^a-zA-Z0-9]/g, "-")}`;

          return (
            <article key={course.courseNumber} className="border-b border-slate-100 last:border-b-0">
              <div className="flex flex-col gap-4 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:gap-6">
                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded bg-[#e8f3fb] px-3 py-1.5 font-mono text-sm font-bold tracking-wide text-[#0047ba]">
                  <FiBookOpen aria-hidden="true" />
                  {course.courseNumber}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[#002e5d] sm:text-lg">{course.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{course.department}</span>
                    <span className="rounded-full bg-[#e8f3fb] px-2.5 py-1 text-[#0047ba]">{levelLabel[course.level]}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  <span className="rounded-full border border-[#b9e3fb] bg-[#e8f7ff] px-3 py-1 text-xs font-semibold text-[#0064a6]">
                    {course.whenOffered}
                  </span>
                  {course.syllabusUrl && (
                    <a
                      href={course.syllabusUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-[#0047ba] px-3 py-1 text-xs font-bold text-[#0047ba] transition hover:bg-[#e8f3fb] focus:outline-none focus:ring-2 focus:ring-[#7fbeeb]/50"
                    >
                      Syllabus
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => toggleCourseDetails(course.courseNumber)}
                    className="inline-flex items-center gap-1.5 rounded px-3 py-1 text-xs font-bold text-[#002e5d] transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#7fbeeb]/50"
                  >
                    <FiInfo aria-hidden="true" />
                    Robotics context
                    {isExpanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div id={detailsId} className="border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-5">
                  <p className="max-w-4xl text-sm leading-6 text-slate-600">
                    <span className="font-bold text-[#002e5d]">Robotics connection: </span>
                    {course.relationshipToRobotics}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
