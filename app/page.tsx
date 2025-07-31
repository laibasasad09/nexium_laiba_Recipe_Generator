import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-amber-100 via-orange-50 to-lime-100 text-gray-800 font-serif px-6 md:px-24 lg:px-48 py-16">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-md">Recipe Generator</h1>
        <p className="text-2xl mt-4 italic text-green-600">&ldquo;Cook with Confidence, Create with AI.&rdquo;</p>
      </section>

      {/* Image Section */}
      <div className="w-full h-auto rounded-xl overflow-hidden shadow-lg mb-14">
        <Image
          src="/assets/kitchen-1.avif"
          alt="Recipe Generator"
          sizes="100vw"
          width={1200}
          height={700}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* About / Intro */}
      <section className="bg-white/80 rounded-xl shadow-md p-8 mb-14 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Discover Delicious Recipes with AI Magic</h2>
        <p className="text-xl leading-relaxed">
          Transform your ingredients into gourmet meals with just a few clicks! Our app uses cutting-edge AI technology to generate personalized recipes based on what you have at home.
          Plus, enjoy stunning AI-generated images to inspire your culinary creations.
        </p>
        <Link
          href="/create"
          className="inline-block mt-6 bg-green-600 hover:bg-green-800 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          🍳 Get Started
        </Link>
      </section>

      {/* How It Works */}
      <section id="how_it_works" className="bg-lime-100 rounded-xl shadow-inner p-8 mb-14">
        <h2 className="text-3xl font-bold text-green-700 mb-6">How It Works</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li><strong>Input Your Ingredients:</strong> Just type what you have in your kitchen.</li>
          <li><strong>Generate a Recipe:</strong> Let our AI build the perfect recipe for you.</li>
          <li><strong>Visualize the Dish:</strong> See AI-generated photos of your meal.</li>
          <li><strong>Cook & Enjoy:</strong> Follow the steps and enjoy your food!</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section id="why_choose_us" className="bg-amber-100 rounded-xl shadow-inner p-8 mb-14">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li><strong>AI-Powered Creativity:</strong> Endless combinations from your kitchen.</li>
          <li><strong>Stunning Images:</strong> Visuals that make your recipe come alive.</li>
          <li><strong>Beginner-Friendly:</strong> No cooking skills needed — just follow along.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white/80 rounded-xl shadow-md p-8 mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6">What Our Users Say</h2>
        <div className="space-y-6 text-lg italic text-gray-700">
          <p>&quot;This app has revolutionized my cooking! I never knew what to do with my leftover ingredients until now.&quot; — <span className="font-semibold">Jamine, Home Chef</span></p>
          <p>&quot;I love how it turns my random ingredients into amazing meals.&quot; — <span className="font-semibold">Jamie, Home Chef</span></p>
          <p>&quot;The AI-generated images are amazing! It&apos;s like having a personal chef and food photographer in one.&quot; — <span className="font-semibold">Sarah, Food Enthusiast</span></p>
        </div>
      </section>
    </main>
  );
}



  