import { SNLightBulb } from '@icongo/sn';
import aboutImage from '@/app/assets/about.svg';
import Image from 'next/image';
import RootLayout from '@/components/layouts/RootLayout';
import Skills from '@/components/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brian Salvatore | I'm glad to meet you",
  description:
    'With a simple communication, a clean and optimized code convention, a high quality development for collaboration and maintenance, and a keeping schedules for a project.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
    type: 'website',
    images: '/avatar.webp',
  },
};

export default function Page() {
  return (
    <RootLayout>
      <section className="about container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 mt-28">
          <div className="md:col-span-7 flex flex-col items-center">
            <h1 className="pb-20 text-center text-4xl">
              I&apos;m <strong className="text-black dark:text-white">Brian Salvatore</strong>, really glad to meet{' '}
              <strong className="text-black dark:text-white">you</strong>
            </h1>

            <p className="text-xl leading-8">
              Hi, everyone, I&apos;m <span className="text-black dark:text-white">Brian Salvatore</span>.<br />
              I&apos;m <span className="text-black dark:text-white">Senior Full-Stack Engineer,  Blockchain, AI</span> and{' '}
              <span className="text-black dark:text-white">E-commerce & CMS Specialist</span>
              <br />
              <br />With 8+ years of experience, &apos; I have a strong background in e-commerce platforms, CMS development, and smart contracts, delivering high-performance, secure, and innovative solutions.
              <br />
              <br />I prioritize clear communication, clean code, high-quality development, and meeting deadlines, always seeking to learn new technologies, analyze challenges, and collaborate on impactful solutions.
            </p>
          </div>

          <div className="md:col-span-5 flex items-center justify-center">
            <Image
              src={aboutImage}
              alt="About"
              className="w-auto max-h-[450px] mt-16"
              width={600}
              height={529}
              title="About"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-4xl mt-24 flex flex-row justify-center gap-4">
          <SNLightBulb />
          <strong className="text-black dark:text-white">Skills</strong>
        </div>

        <Skills />

        <div className="text-xl leading-8 lg:w-1/2 px-10 mt-28 mx-auto">
          <p>
            I provide reliable and high-quality services in areas such as Requirement Analysis, Architectural Design, Database Modeling, Front-end/Back-end Development, and Ongoing Maintenance.
          </p>
          <p>
            I focus on rapid progress, top-notch quality, and regular updates, while also offering collaborative idea support to ensure the success of the project.
          </p>
          
        </div>
      </section>
    </RootLayout>
  );
}
