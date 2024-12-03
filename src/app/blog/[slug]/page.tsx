// src/app/blog/[slug]/page.tsx
"use client";
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';
import Image from 'next/image';
import CommentSection from '@/components/CommentSection';
import Button from '@/components/Button';
import Link from 'next/link';

interface Post {
  id : number;
  slug: string;
  imageUrl: string;
  title: string;
  content: string;
}

const BlogPost: FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  useEffect(() => {
    if (!slug) {
      router.push('/404'); // Redirect to a 404 page if slug is not found
    }
  }, [slug, router]);
  {/* To add blogs dynamically */ }

  const posts: Post[] = [
    {
      id : 1,
      slug: 'exploring-latest-technology',
      imageUrl: '/post-1.jpg',
      title: 'The Future of Technology: What to Expect in 2024',
      content: `
      <div class="max-w-4xl mx-auto px-4">
        
        <p class="text-lg leading-relaxed mb-6">
            Technology is evolving at a breakneck speed, influencing nearly every aspect of our lives. From artificial intelligence (AI) and machine learning (ML) to blockchain and quantum computing, the innovations we are witnessing today will shape the future in unimaginable ways. In this blog post, we will explore the most significant technological advancements that are set to transform industries and redefine our daily lives in 2024 and beyond.
        </p>
        
        <h2 class="text-3xl font-semibold mt-6 mb-3">Artificial Intelligence and Machine Learning: A Deep Dive</h2>
        <p class="text-lg leading-relaxed mb-6">
            AI and ML are no longer buzzwords; they are integral parts of our everyday existence. Businesses leverage these technologies to enhance customer experiences, streamline operations, and analyze vast amounts of data. In 2024, we will witness a surge in AI applications across various sectors.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">1. Healthcare</h3>
        <p class="text-lg leading-relaxed mb-4">
            AI is revolutionizing the healthcare sector by enabling predictive analytics. With AI, doctors can analyze patient data more effectively, leading to early diagnosis and personalized treatment plans. Machine learning algorithms can predict disease outbreaks, helping governments allocate resources more efficiently.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">2. Finance</h3>
        <p class="text-lg leading-relaxed mb-4">
            In the finance industry, AI is transforming risk assessment and fraud detection. Machine learning models can analyze transactions in real time, identifying suspicious activities faster than traditional methods. This trend will continue to evolve in 2024, with AI playing a critical role in financial decision-making.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">3. Transportation</h3>
        <p class="text-lg leading-relaxed mb-6">
            The transportation sector is embracing AI to improve safety and efficiency. Autonomous vehicles are on the brink of becoming mainstream, and AI-powered traffic management systems will optimize road usage, reducing congestion and emissions.
        </p>
        
        <h2 class="text-3xl font-semibold mt-6 mb-3">The Rise of 5G and Beyond</h2>
        <p class="text-lg leading-relaxed mb-6">
            The rollout of 5G networks is set to revolutionize connectivity. With faster speeds and lower latency, 5G will enable a multitude of applications that were previously impractical.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">1. Smart Cities</h3>
        <p class="text-lg leading-relaxed mb-4">
            5G will facilitate the development of smart cities, where connected devices will communicate seamlessly to improve urban living. From smart traffic lights to energy-efficient buildings, the possibilities are endless.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">2. Internet of Things (IoT)</h3>
        <p class="text-lg leading-relaxed mb-4">
            The expansion of 5G will accelerate the growth of IoT devices. From smart homes to wearable technology, the interconnectivity will enhance user experiences and provide valuable data for companies to analyze consumer behavior.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">3. Remote Work and Learning</h3>
        <p class="text-lg leading-relaxed mb-6">
            The COVID-19 pandemic has shifted our perceptions of remote work and learning. With 5G, virtual reality (VR) and augmented reality (AR) applications will become more accessible, enhancing remote collaboration and education.
        </p>
        
        <h2 class="text-3xl font-semibold mt-6 mb-3">Blockchain Technology: Beyond Cryptocurrency</h2>
        <p class="text-lg leading-relaxed mb-6">
            While blockchain technology is best known for powering cryptocurrencies, its applications extend far beyond that realm. In 2024, we will see an increased adoption of blockchain across various industries.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">1. Supply Chain Management</h3>
        <p class="text-lg leading-relaxed mb-4">
            Blockchain's ability to provide transparent and immutable records will revolutionize supply chain management. Companies can track products from origin to destination, ensuring authenticity and reducing fraud.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">2. Healthcare Data Management</h3>
        <p class="text-lg leading-relaxed mb-4">
            Blockchain can enhance the security and interoperability of health records. Patients can control who accesses their data, fostering trust between healthcare providers and patients.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">3. Digital Identity Verification</h3>
        <p class="text-lg leading-relaxed mb-6">
            As online fraud becomes more prevalent, blockchain can serve as a secure method for identity verification. Users can manage their digital identities, reducing the risk of identity theft.
        </p>
        
        <h2 class="text-3xl font-semibold mt-6 mb-3">Quantum Computing: The Next Frontier</h2>
        <p class="text-lg leading-relaxed mb-6">
            Quantum computing is poised to become one of the most transformative technologies of the 21st century. By harnessing the principles of quantum mechanics, these computers can solve complex problems that are currently beyond the capabilities of classical computers.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">1. Drug Discovery</h3>
        <p class="text-lg leading-relaxed mb-4">
            In the pharmaceutical industry, quantum computing can accelerate drug discovery by simulating molecular interactions at an unprecedented scale. This advancement could lead to breakthroughs in treating diseases that currently have no cure.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">2. Cryptography</h3>
        <p class="text-lg leading-relaxed mb-4">
            Quantum computing poses both a threat and an opportunity for cybersecurity. While it could render current encryption methods obsolete, it also offers the potential for developing new cryptographic techniques that are far more secure.
        </p>
        
        <h3 class="text-2xl font-semibold mt-4 mb-2">3. Optimization Problems</h3>
        <p class="text-lg leading-relaxed mb-6">
            Industries that rely on complex optimization, such as logistics and finance, will benefit from quantum computing. These machines can analyze numerous variables simultaneously, leading to more efficient solutions.
        </p>
        
        <h2 class="text-3xl font-semibold mt-6 mb-3">Conclusion: Embracing the Future of Technology</h2>
        <p class="text-lg leading-relaxed mb-6">
            As we explore the latest advancements in technology, it becomes clear that the future holds tremendous potential. From AI and 5G to blockchain and quantum computing, these innovations will reshape our world in profound ways. Embracing these changes is essential for businesses and individuals alike, as they navigate the challenges and opportunities that lie ahead.
        </p>
      </div>
      `
    }, 
    {
      id : 2,
      slug: "front-end-to-headless-cms",
      title: "My Front-End Journey: HTML to Headless CMS",
      imageUrl: "/post-2.jpeg",
      content: `
      <div class="max-w-4xl mx-auto px-4 mt-10">

            <p class="text-lg leading-relaxed mb-4">Front-end development has been an exciting journey for me. Starting with the basics of HTML, I quickly fell in love with creating beautiful and functional web pages. Over time, my skills evolved, leading me to explore various frameworks and technologies.</p>

            <p class="text-lg leading-relaxed mb-4">As I ventured deeper into the world of web development, I discovered the power of headless CMSs, which allowed for more flexibility and control over content management. This transition has significantly improved my workflow and enabled me to build dynamic websites with ease.</p>

            <p class="text-lg leading-relaxed mb-4">In this blog post, I will share my experiences, the challenges I faced, and the lessons I learned along the way.</p>

            <h2 class="text-2xl font-semibold mt-6 mb-2">Key Lessons Learned</h2>

            <ul class="list-disc pl-6 text-lg leading-relaxed mb-4">
                <li>Embrace continuous learning and stay updated with industry trends.</li>
                <li>Practice coding regularly to enhance your skills.</li>
                <li>Experiment with different tools and technologies to find what works best for you.</li>
            </ul>

            <p class="text-lg leading-relaxed mb-4">I hope my journey inspires aspiring developers to explore the exciting world of front-end development!</p>

        </div>`
    },
    {
      id : 3,
      slug: "web-development-best-practices-2024",
      title: "Web Development Best Practices for 2024",
      imageUrl: "/post-3.jpg",
      content: `
       <div class="max-w-4xl mx-auto px-4 mt-10">
            <h1 class="text-3xl font-bold mb-4">Web Development Best Practices for 2024</h1>

            <p class="text-lg leading-relaxed mb-4">As technology continues to evolve, it's crucial for web developers to adopt best practices to create high-quality and performant websites. In this post, I will outline some essential practices that every developer should follow in 2024.</p>
            <h2 class="text-2xl font-semibold mt-6 mb-2">1. Prioritize Performance</h2>

            <p class="text-lg leading-relaxed mb-4">Performance is key to user experience. Optimize images, minify CSS and JavaScript, and leverage browser caching to ensure your website loads quickly.</p>
            <h2 class="text-2xl font-semibold mt-6 mb-2">2. Focus on Accessibility</h2>

            <p class="text-lg leading-relaxed mb-4">Creating accessible websites is not only a best practice but also a legal requirement in many jurisdictions. Use semantic HTML, provide alt text for images, and ensure keyboard navigation works seamlessly.</p>
            <h2 class="text-2xl font-semibold mt-6 mb-2">3. Implement Responsive Design</h2>

            <p class="text-lg leading-relaxed mb-4">With the increasing variety of devices, responsive design is crucial. Use flexible grid layouts, media queries, and responsive images to provide an optimal experience on all screen sizes.</p>

            <p class="text-lg leading-relaxed mb-4">By following these best practices, developers can build websites that not only meet user expectations but also stand out in a competitive market.</p>
        </div>`
    }

  ];

  const post = posts.find((post) => post.slug === slug);


  if (!post) {
    return <p className="text-center mt-10">Post not found</p>;
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 mt-10">
        <p>Post not found. Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h1 className="text-4xl font-bold mb-6 text-black">{post.title}</h1>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={450}
          className="object-cover w-full h-96 mb-6 rounded-lg"
        />
        <div className="text-lg leading-relaxed text-black" dangerouslySetInnerHTML={{ __html: post.content }} />
        <CommentSection />        
        <Link href={"/blog"}>
        <Button  buttonText='Back to Post'/>
        </Link>
      </div>
    </main>
  );
};

export default BlogPost;