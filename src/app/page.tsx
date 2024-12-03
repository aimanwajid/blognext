import Head from "next/head";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Blog</title>
        <meta
          name="description"
          content="A blog about technology, lifestyle, and more!"
        />
      </Head>
      <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
        {/* Background tech icons */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl top-1/3 left-1/4 animate-pulse" />
          <div className="absolute w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl top-1/4 right-1/3 animate-pulse" />
          <div className="absolute w-20 h-20 bg-green-500 opacity-30 rounded-full blur-2xl bottom-1/4 left-1/3 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Welcome to My Tech Blog!
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
          Discover insights and stories about technology, lifestyle, and more.
          Join us as we explore various topics and share valuable information
          that can inspire and inform you.
        </p>
        <p className="text-md md:text-lg text-center text-gray-300 max-w-lg">
          Whether you&apos;re looking for the latest tech trends, lifestyle tips, or
          engaging stories, you&apos;ve come to the right place. Happy reading!
        </p>
        <Link href={"/blog"}>
        <Button buttonText="View All Posts"/>
        </Link>
        <section>
          {/* <RecentPosts /> */}
        </section>

      </main>
    </>
  );
}