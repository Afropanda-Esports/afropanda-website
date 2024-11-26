import { gaming } from "../../assets";

export default function Influence() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-28 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Level Up Your Influence in Gaming
            </h2>
            <p className="text-[#a5a5ac]">
              Join the AfroPanda Ambassador Program and develop leadership,
              community engagement, and social media skills. Collaborate with
              passionate gamers while leaving your mark in the esports world.
            </p>

            <a
              href="#how-to-start"
              className="flex hover:underline leading-6 text-[#CC5500]  "
            >
              Learn more
            </a>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img src={gaming} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
