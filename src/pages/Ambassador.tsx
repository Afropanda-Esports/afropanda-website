// import { motion } from 'framer-motion';
// import { Shield, Star, Trophy, Gift, Users, Target, Crown, Award } from 'lucide-react';
// import SectionHeader from '../components/SectionHeader';
// // import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// export default function AmbassadorPage() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   const levels = [
//     {
//       title: "Rookie Ambassador",
//       icon: <Shield className="w-8 h-8" />,
//       level: 1,
//       requirements: "Complete 5 community events",
//       rewards: ["Exclusive Discord role", "Ambassador badge", "Monthly gaming credits"]
//     },
//     {
//       title: "Elite Ambassador",
//       icon: <Star className="w-8 h-8" />,
//       level: 2,
//       requirements: "Host 3 community tournaments",
//       rewards: ["Premium gaming gear", "Tournament priority access", "Content creation support"]
//     },
//     {
//       title: "Legendary Ambassador",
//       icon: <Crown className="w-8 h-8" />,
//       level: 3,
//       requirements: "Mentor 10 new players",
//       rewards: ["Sponsored streaming setup", "Event organizing opportunities", "Revenue sharing"]
//     }
//   ];

//   const achievements = [
//     {
//       title: "Community Champion",
//       icon: <Users className="w-6 h-6" />,
//       description: "Grow your community to 1000+ followers",
//       xp: 500
//     },
//     {
//       title: "Tournament Titan",
//       icon: <Trophy className="w-6 h-6" />,
//       description: "Successfully host 5 tournaments",
//       xp: 750
//     },
//     {
//       title: "Content Creator",
//       icon: <Target className="w-6 h-6" />,
//       description: "Produce 20 pieces of gaming content",
//       xp: 600
//     },
//     {
//       title: "Mentor Master",
//       icon: <Award className="w-6 h-6" />,
//       description: "Help 50 new players improve their skills",
//       xp: 800
//     }
//   ];

//   return (
//     <div className="bg-[#191825]">
//       {/* Hero Section */}
//       <motion.section
//         className="relative h-[60vh] flex items-center justify-center"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInUp}
//       >
//         <div className="absolute inset-0 bg-[#CC5500]/10" />
//         <div className="relative z-10 text-center space-y-4 max-w-4xl mx-auto px-4">
//           <motion.h1
//             className="text-5xl md:text-6xl font-bold text-white"
//             variants={fadeInUp}
//           >
//             Become an AfroPanda Ambassador
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-300"
//             variants={fadeInUp}
//           >
//             Level up your influence, earn rewards, and shape the future of African esports
//           </motion.p>
//         </div>
//       </motion.section>

//       {/* Ambassador Levels */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             sectionHeader="Ambassador Levels"
//             subSectionHeader="Your Journey"
//             headerDescription="Progress through ranks and unlock exclusive rewards"
//           />
//           <motion.div
//             className="grid md:grid-cols-3 gap-8 mt-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               visible: {
//                 transition: {
//                   staggerChildren: 0.2
//                 }
//               }
//             }}
//           >
//             {levels.map((level, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#222035] p-8 rounded-xl relative overflow-hidden group"
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="absolute top-0 right-0 bg-[#CC5500] text-white px-4 py-1 rounded-bl-lg">
//                   Level {level.level}
//                 </div>
//                 <div className="text-[#CC5500] mb-4">{level.icon}</div>
//                 <h3 className="text-2xl font-bold text-white mb-4">{level.title}</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-sm font-semibold text-[#CC5500] mb-2">Requirements:</h4>
//                     <p className="text-gray-300">{level.requirements}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-[#CC5500] mb-2">Rewards:</h4>
//                     <ul className="text-gray-300 space-y-1">
//                       {level.rewards.map((reward, i) => (
//                         <li key={i} className="flex items-center">
//                           <Gift className="w-4 h-4 mr-2 text-[#CC5500]" />
//                           {reward}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section className="py-20 bg-[#222035]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             sectionHeader="Achievements"
//             subSectionHeader="Unlock Your Potential"
//             headerDescription="Complete challenges and earn experience points"
//           />
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               visible: {
//                 transition: {
//                   staggerChildren: 0.1
//                 }
//               }
//             }}
//           >
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-[#191825] p-6 rounded-xl hover:bg-[#CC5500]/10 transition-colors duration-300"
//                 variants={fadeInUp}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="text-[#CC5500]">{achievement.icon}</div>
//                   <div className="text-[#CC5500] font-bold">{achievement.xp} XP</div>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
//                 <p className="text-[#a5a5ac]">{achievement.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       {/* <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="bg-[#191825] border-[#CC5500]/20">
//             <CardHeader>
//               <CardTitle className="text-3xl font-bold text-white text-center">
//                 Ambassador Benefits
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="grid md:grid-cols-2 gap-8">
//               <motion.div
//                 className="space-y-6"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="text-[#CC5500]">
//                     <Trophy className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Exclusive Access</h3>
//                     <p className="text-[#a5a5ac]">Get early access to tournaments, events, and new features</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="text-[#CC5500]">
//                     <Gift className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Monthly Rewards</h3>
//                     <p className="text-[#a5a5ac]">Earn gaming credits, merchandise, and exclusive items</p>
//                   </div>
//                 </div>
//               </motion.div>
//               <motion.div
//                 className="space-y-6"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeInUp}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="text-[#CC5500]">
//                     <Users className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Community Leadership</h3>
//                     <p className="text-[#a5a5ac]">Shape the future of African esports and mentor new players</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="text-[#CC5500]">
//                     <Target className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Growth Opportunities</h3>
//                     <p className="text-[#a5a5ac]">Access networking events and career development resources</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </CardContent>
//           </Card>
//         </div>
//       </section> */}

//       {/* CTA Section */}
//       <motion.section
//         className="py-20 bg-[#CC5500]/10"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//       >
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-4xl font-bold text-white mb-6">Ready to Level Up?</h2>
//           <p className="text-[#a5a5ac] mb-8">
//             Join our ambassador program and become a leader in the African esports community.
//             Start your journey today!
//           </p>
//           <div className="flex justify-center gap-4">
//             <button className="bg-[#CC5500] text-white px-8 py-3 rounded-lg hover:bg-[#CC5500]/80 transition-colors duration-300">
//               Apply Now
//             </button>
//             <button className="border border-[#CC5500] text-white px-8 py-3 rounded-lg hover:bg-[#CC5500]/10 transition-colors duration-300">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

import { AmbassadorHero } from "../components/Ambassador";

export default function Ambassador() {
  return (
    <>
      <AmbassadorHero />
    </>
  );
}
