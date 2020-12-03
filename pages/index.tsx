import Head from 'next/head';

import Shell from '../components/Shell';

export default function Home() {
  return (
    <Shell>
      <Head>
        <title>Jennifer Spick</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold" style={{ color: '#333333' }}>
          Hey, I'm Jen
        </h1>
        <h3 className="text-xl w-4/5 text-center pt-4 text-gray-700">
          I’m a sexy bitch and you better hire me before I fuck up your life,
          bitch.
        </h3>
      </div>
      <div className="flex justify-center ">
        <button className="bg-indigo-500 text-white text-lg m-4 py-2 px-4 rounded hover:bg-indigo-600">
          <a href="/about">More about me</a>
        </button>
        <button className="bg-indigo-500 text-white text-lg m-4 py-2 px-4 rounded hover:bg-indigo-600">
          <a href="/contact">Get in touch</a>
        </button>
      </div>
    </Shell>
  );
}
