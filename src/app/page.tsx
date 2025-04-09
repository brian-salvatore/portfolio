import { classNames } from '@/components/Commons';
import avatarImage from '@/app/assets/avatar.svg';
import homeImage from '@/app/assets/home.svg';
import Image from 'next/image';
import Link from 'next/link';
import LinkInfos from '@/infos/Links';
import RootLayout from '@/components/layouts/RootLayout';
import style from './style.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brian Salvatore | Senior Full Stack Developer & SEO Expert',
  description:
    'As a seasoned Senior Full Stack Developer specializing in SEO and MERN Stack, I offer a proven track record of crafting resilient, intuitive web applications.',
};

export default function Page() {
  return (
    <RootLayout>
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[562px]">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7 text-4xl flex flex-col items-center justify-center">
            <div className="pb-4 text-center">
              <span className={style.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br />
              <br />
              Hi There!
            </div>

            <h1 className="py-2 text-center">
              My name is
              <strong className="font-bold text-black dark:text-white"> Brian Salvatore</strong>
            </h1>

            <div className="py-14">
              <ul className="text-2xl leading-10">
                <li>
                  <strong className="text-black dark:text-white">CEO & Senior</strong> Full-Stack Engineer
                </li>
                <li>
                  <strong className="text-black dark:text-white">MERN & LAMP</strong>
                </li>
                <li>
                  Blockchain, AI, E-commerce & CMS <strong className="text-black dark:text-white">Specialist</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 flex items-center justify-center">
            <Image
              src={homeImage}
              alt="Home"
              className="w-auto max-h-[450px]"
              width={505}
              height={529}
              title="Home"
              priority
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[712px]">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-8 px-10">
            <h2 className="text-4xl uppercase text-center mb-16">
              Let me <span className="text-black dark:text-white">Introduce</span> myself
            </h2>
            <p className="text-xl leading-8">
            I am an experienced CEO & Senior Full-Stack Engineer specializing in MERN & LAMP stacks, Blockchain, AI/ML, E-commerce platforms, and CMS solutions. With a strong background in modern web technologies, I have a proven track record of developing scalable, high-performance applications for various industries.

I have worked extensively with AWS, Docker, Kubernetes, and CI/CD pipelines, ensuring seamless deployment and robust infrastructure. My expertise includes smart contract development, NFT marketplaces, and Web3 solutions, as well as building secure and efficient API architectures.

Passionate about innovation, I am always eager to explore new technologies and optimize system performance.
              <br />
              <br />
              Web Application Development is not only my job, but also my life.
              <br />
              <br />I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.
            </p>
          </div>
          <div className="md:col-span-4 flex items-center justify-center px-10 pt-10">
            <Image
              src={avatarImage}
              className="w-auto"
              alt="Avatar"
              width="645"
              height="500"
              title="Avatar"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[256px]">
        <div className="grid md:grid-cols-2">
          <div className="px-10">
            <h3 className="text-3xl capitalize text-center text-black dark:text-white pb-5">
                Scalable, High-performance Web Application
            </h3>
            <p className="text-xl leading-8">
                As a Web Application Engineer, I have successfully designed and developed scalable, high-performance web applications using modern frameworks like MERN and LAMP stacks. 
            </p>
            <p className="text-xl leading-8">
                My expertise in cloud infrastructure, API development, and security optimization has helped businesses enhance their digital presence and streamline operations. I am passionate about building innovative, user-centric solutions that drive efficiency and growth.
            </p>
          </div>
          <div className="px-10">
            <h3 className="text-3xl capitalize text-center text-black dark:text-white pb-5">
                Secure Blockchain Solutions, High-Performance E-commerce Platforms
            </h3>
            <p className="text-xl leading-8">
                As a Blockchain, AI, E-commerce & CMS Specialist, I have successfully developed secure blockchain solutions, AI-driven applications, and high-performance e-commerce platforms that enhance user engagement and business efficiency.
            </p>
            <p className="text-xl leading-8">
                With expertise in smart contracts, NFT marketplaces, AI automation, and scalable CMS solutions, I have helped businesses innovate and optimize their digital operations. My focus is on building cutting-edge, secure, and user-friendly solutions that drive long-term success.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-2 sm:px-6 lg:px-8 pt-28 min-h-[256px]">
        <div className="py-14 flex flex-col gap-5 justify-center">
          <h2 className="text-4xl uppercase text-center">FIND ME ON</h2>
          <p className="text-center">
            Feel free to <span className="text-black dark:text-white">connect</span> with me
          </p>
          <ul className="home-about-social-links text-center">
            {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
              <li className={style.socialIcons} key={`intro-social-icon-${idx}`}>
                <Link
                  className={classNames(`title-tooltip`, style.homeSocialIcons)}
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <DarkIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </RootLayout>
  );
}
