import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import courses from './courses';

export default function Curriculum() {
  return (
    <section>
      <h2 className="mb-8 text-center text-4xl font-semibold text-neutral-900">
        Check out the curriculum 👇
      </h2>
      <div className="mb-24 flex space-x-8 overflow-x-auto pb-4 md:mb-48">
        {courses.map(course => (
          <div
            key={course.id}
            className="rounded-xl bg-gradient-to-r from-pink-200 via-fuchsia-300 to-pink-200 p-1"
          >
            <div className="h-full w-80 flex-shrink-0 rounded-lg bg-white px-6 py-8 font-medium">
              <h3 className="text-xl text-neutral-900">{course.name}</h3>
              <p className="text-sm text-neutral-400">{course.courseNumber}</p>
              <p className="mt-4 mb-8">{course.description}</p>
              {course.outcomesUrl ? (
                <Link href={course.outcomesUrl} passHref>
                  <a className="inline-flex items-center">
                    View coursework <ArrowRightIcon className="ml-4" />
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
