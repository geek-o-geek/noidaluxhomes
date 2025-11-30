"use client";
import Link from "next/link";

export default function BlogHome() {
  const posts = [
    {
      slug: "sector-150-noida-best-residential-location",
      title: "Why Sector 150 Noida Is the Best Location for Luxury Living",
      excerpt:
        "Noida’s greenest and lowest-density sector is now the most sought-after destination for luxury homebuyers and investors.",
      image: "/brochure_images/page_14.jpg",
      readTime: "5 min read",
      category: "Location Guide",
    },
    {
      slug: "samriddhi-daksh-avenue-review",
      title: "Samriddhi Daksh Avenue – Complete Project Review",
      excerpt:
        "A detailed project review covering amenities, floor plans, connectivity and what makes this 1980 sq ft luxury 3BHK stand out.",
      image: "/brochure_images/page_02.png",
      readTime: "7 min read",
      category: "Project Review",
    },
    {
      slug: "noida-real-estate-trends-2025",
      title: "Noida Real Estate Trends to Watch in 2025",
      excerpt:
        "Upcoming infrastructure, metro expansions and market shifts shaping the Noida property market.",
      image: "/brochure_images/page_04.jpg",
      readTime: "6 min read",
      category: "Market Insight",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Real Estate Insights & Luxury Property Guides
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Expert articles, market analysis, and curated guides to help you make
          smarter property decisions in Noida & NCR.
        </p>
      </header>

      {/* Featured Banner */}
      <section className="mb-14">
        <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
          <img
            src="/brochure_images/page_03.png"
            alt="Featured Cover"
            className="w-full h-[380px] object-cover brightness-95"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-md text-white text-sm">
                Featured
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                The Rise of Premium Low-Density Living in Noida
              </h2>

              <p className="text-gray-200 mt-2 max-w-xl">
                Why modern buyers are moving towards green, luxury communities.
              </p>

              <Link
                href="/blog/sector-150-noida-best-residential-location"
                className="inline-block mt-4 bg-white text-gray-900 px-5 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-5">
                <p className="text-sm text-indigo-600 font-semibold mb-1">
                  {post.category}
                </p>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed text-[15px]">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  <span className="group-hover:text-primary">Read →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
