import "../../App.css"; // Import your CSS

const AnimatedSVG = () => (
  <div className="w-full h-full absolute -top-64 -z-10">
    <svg
      viewBox="0 1 1000 1500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    >
      <path
        d="M191 356C191 456.453 480 466.601 480 682.5C480 855.22 480 1167.1 480 1376"
        stroke="url(#gradient)"
        strokeDasharray="250 200 150 400"
        className="dash-animation-1"
      />
      <path
        d="M501 454V1389.5"
        stroke="url(#gradient)"
        strokeDasharray="200 150 250 150"
        className="dash-animation-2"
      />
      <path
        d="M811 500.107C811 600.561 522 554.601 522 770.5C522 943.22 522 1176.1 522 1385"
        stroke="url(#gradient)"
        strokeDasharray="400 200 150 250"
        className="dash-animation-3"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="501.5"
          y1="300"
          x2="501.5"
          y2="1400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" stopColor="currentColor" />
          <stop offset="0.149999" stopColor="currentColor" />
          <stop
            offset="0.759999"
            stopOpacity="0.335295"
            stopColor="currentColor"
          />
          <stop offset="1" stopOpacity="0" stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default AnimatedSVG;

// import React from "react";

// function Try() {
//   return (
//     <div className="w-full h-screen relative">
//       <svg
//         viewBox="0 0 1000 1500"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute inset-0 -z-10 hidden size-full  text-midnight/20 lg:block"
//         stroke="currentColor"
//         strokeWidth="1"
//         strokeLinejoin="round"
//       >
//         <path
//           d="M191 356C191 456.453 480 466.601 480 682.5C480 855.22 480 1167.1 480 1376"
//           stroke="url(#gradient)"
//           strokeDasharray="250 200 150 400"
//           className="animate-[2s_dash_linear_reverse_infinite]"
//         ></path>
//         <path
//           d="M501 454V1389.5"
//           stroke="url(#gradient)"
//           strokeDasharray="200 150 250 150"
//           className="animate-[2s_dash_linear_0.5s_reverse_infinite]"
//         ></path>
//         <path
//           d="M811 500.107C811 600.561 522 554.601 522 770.5C522 943.22 522 1176.1 522 1385"
//           stroke="url(#gradient)"
//           strokeDasharray="400 200 150 250"
//           className="animate-[2s_dash_linear_0.75s_reverse_infinite]"
//         ></path>
//         <defs>
//           <linearGradient
//             id="gradient"
//             x1="501.5"
//             y1="300"
//             x2="501.5"
//             y2="1400"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopOpacity="0" stopColor="currentColor"></stop>
//             <stop offset="0.149999" stopColor="currentColor"></stop>
//             <stop
//               offset="0.759999"
//               stopOpacity="0.335295"
//               stopColor="currentColor"
//             ></stop>
//             <stop offset="1" stopOpacity="0" stopColor="currentColor"></stop>
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }

// export default Try;

// function Try() {
//   return (
//     <div>
//       <section
//         id="roadmap"
//         className="container relative isolate grid scroll-mt-5 justify-center py-2-4"
//       >
//         <header className="grid max-w-prose gap-2 mx-auto max-w-prose justify-items-center text-center ">
//           <p className="text-balance rounded-lg bg-white px-1 text-sm font-regular text-midnight">
//             Let’s work together, wherever you are along the journey
//           </p>{" "}
//           <h2 className="text-xl text-balance">A Typical Project Roadmap</h2>{" "}
//         </header>{" "}
//         <ul className="mt-2-4 grid gap-9 sm:grid-cols-3 sm:items-start">
//           <li className="grid justify-items-center gap-1 rounded-lg border border-white bg-gradient-to-b from-white to-white/0 p-2 text-center backdrop-blur-sm sm:[&amp;:nth-child(2)]:mt-2-4 sm:[&amp;:nth-child(3)]:mt-3-5">
//             <svg className="aspect-square w-4">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#sparkles"></use>
//             </svg>{" "}
//             <h3 className="font-regular">Greenfield Idea</h3>{" "}
//             <p className="text-xs">
//               Youre at the very beginning of something new and need to validate
//               important assumptions towards target groups, conversion funnels
//               and business goals.
//             </p>{" "}
//           </li>
//           <li className="grid justify-items-center gap-1 rounded-lg border border-white bg-gradient-to-b from-white to-white/0 p-2 text-center backdrop-blur-sm sm:[&amp;:nth-child(2)]:mt-2-4 sm:[&amp;:nth-child(3)]:mt-3-5">
//             <svg className="aspect-square w-4">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#exclude-square"></use>
//             </svg>{" "}
//             <h3 className="font-regular">Existing Concept</h3>{" "}
//             <p className="text-xs">
//               Youre past the green field and have a wireframe or a design of a
//               new feature, landing page, etc and would like to validate that you
//               thought of everything and that users will understand how to use
//               it.
//             </p>{" "}
//           </li>
//           <li className="grid justify-items-center gap-1 rounded-lg border border-white bg-gradient-to-b from-white to-white/0 p-2 text-center backdrop-blur-sm sm:[&amp;:nth-child(2)]:mt-2-4 sm:[&amp;:nth-child(3)]:mt-3-5">
//             <svg className="aspect-square w-4">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#arrow-split"></use>
//             </svg>{" "}
//             <h3 className="font-regular">Revalidation of existing product</h3>{" "}
//             <p className="text-xs">
//               Youre running an established app or website and know that youd
//               like to improve on that but dont know exactly where to start or
//               what to prioritize.
//             </p>{" "}
//           </li>
//         </ul>{" "}
//         <ul className="relative mt-3-5 grid max-w-screen-xs gap-11 justify-self-center">
//           <li className="grid gap-1 rounded-lg bg-white/50 p-2 shadow-lg backdrop-blur sm:flex">
//             <svg className="aspect-square w-4 shrink-0">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#sparkles"></use>
//             </svg>{" "}
//             <div className="flow">
//               <h3 className="font-regular">Tell us your idea</h3>{" "}
//               <p className="text-xs">
//                 We start off with an inital consultation where we hear about
//                 your idea, we gather your business goals and learn more about
//                 your target audience
//               </p>
//             </div>{" "}
//           </li>
//           <li className="grid gap-1 rounded-lg bg-white/50 p-2 shadow-lg backdrop-blur sm:flex">
//             <svg className="aspect-square w-4 shrink-0">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#cube-with-dot"></use>
//             </svg>{" "}
//             <div className="flow">
//               <h3 className="font-regular">Planning the project</h3>{" "}
//               <p className="text-xs">
//                 We prepare a project roadmap spanning over the course of three
//                 weeks, we make sure to include sensible milestones, possible
//                 difficulties and expected deliverables
//               </p>
//             </div>{" "}
//           </li>
//           <li className="grid gap-1 rounded-lg bg-white/50 p-2 shadow-lg backdrop-blur sm:flex">
//             <svg className="aspect-square w-4 shrink-0">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#headset"></use>
//             </svg>{" "}
//             <div className="flow">
//               <h3 className="font-regular">Regular updates and Feedback</h3>{" "}
//               <p className="text-xs">
//                 Weekly touchpoints for project updates and feedback, ensuring
//                 alignment at each phase.
//               </p>
//             </div>{" "}
//           </li>
//           <li className="grid gap-1 rounded-lg bg-white/50 p-2 shadow-lg backdrop-blur sm:flex">
//             <svg className="aspect-square w-4 shrink-0">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#repeat-once"></use>
//             </svg>{" "}
//             <div className="flow">
//               <h3 className="font-regular">Iterative Sprints</h3>{" "}
//               <p className="text-xs">
//                 Structured review sessions with all stakeholders after each
//                 milestone to incorporate feedback.
//               </p>
//             </div>{" "}
//           </li>
//           <li className="grid gap-1 rounded-lg bg-white/50 p-2 shadow-lg backdrop-blur sm:flex">
//             <svg className="aspect-square w-4 shrink-0">
//               <use href="https://www.dinghy.studio/_app/immutable/assets/icons.BOZcFYiM.svg#handshake"></use>
//             </svg>{" "}
//             <div className="flow">
//               <h3 className="font-regular">
//                 Final presentation &amp; Handover
//               </h3>{" "}
//               <p className="text-xs">
//                 A conclusive presentation of all deliverables, followed by a
//                 handover process.
//               </p>
//             </div>{" "}
//           </li>
//         </ul>{" "}
//         <svg
//           viewBox="0 0 1000 1500"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute inset-0 -z-10 hidden size-full  text-midnight/20 lg:block"
//           stroke="currentColor"
//           strokeWidth="1"
//           strokeLinejoin="round"
//         >
//           <path
//             d="M191 356C191 456.453 480 466.601 480 682.5C480 855.22 480 1167.1 480 1376"
//             stroke="url(#gradient)"
//             strokeDasharray="250 200 150 400"
//             className="animate-[2s_dash_linear_reverse_infinite]"
//           ></path>
//           <path
//             d="M501 454V1389.5"
//             stroke="url(#gradient)"
//             strokeDasharray="200 150 250 150"
//             className="animate-[2s_dash_linear_0.5s_reverse_infinite]"
//           ></path>
//           <path
//             d="M811 500.107C811 600.561 522 554.601 522 770.5C522 943.22 522 1176.1 522 1385"
//             stroke="url(#gradient)"
//             strokeDasharray="400 200 150 250"
//             className="animate-[2s_dash_linear_0.75s_reverse_infinite]"
//           ></path>
//           <defs>
//             <linearGradient
//               id="gradient"
//               x1="501.5"
//               y1="300"
//               x2="501.5"
//               y2="1400"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopOpacity="0" stopColor="currentColor"></stop>
//               <stop offset="0.149999" stopColor="currentColor"></stop>
//               <stop
//                 offset="0.759999"
//                 stopOpacity="0.335295"
//                 stopColor="currentColor"
//               ></stop>
//               <stop offset="1" stopOpacity="0" stopColor="currentColor"></stop>
//             </linearGradient>
//           </defs>
//         </svg>
//       </section>
//     </div>
//   );
// }

// export default Try;
