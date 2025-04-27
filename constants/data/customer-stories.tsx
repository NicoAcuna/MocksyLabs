import { CustomerStory } from "../types";
import CardImage from "../../assets/images/feature-card-1.png";
import CustomerStoryImage from "../../assets/images/customer-stories-1.png";
import FeatureSectionImage1 from "../../assets/images/feature-section-1.png";
import FeatureSectionImage2 from "../../assets/images/feature-section-2.png";
import VideoImage from "../../assets/images/video-image.png";

export const customerStoriesData: Array<CustomerStory> = [
//   {
//     // name: "Australia Post Brisbane depots reduced incidents by 20%",
//     // slug: "/customer-stories/australia-post",
//     // cardImage: CardImage,
//     // image: CustomerStoryImage,
//     // text: "See how businesses have integrated  Mosafe into their workflows to manage safety. ",
//     // title: "Australia Post Brisbane depots reduced incidents by 20%",
//     // pageTitle: "Australia Post - Mosafe",
//     // companyDetails: {
//     //   text: "Australia Post is an international transport and logistics organisation  with teams across Australia",
//     //   url: "https://www.google.com",
//     //   location: "Brisbane, Australia",
//     //   industry: "Transport and logistics",
//     //   featuresUsed: [
//     //     {
//     //       text: "Real-time analytics",
//     //       slug: "/features/real-time-insights",
//     //     },
//     //     {
//           text: "Workspaces",
//           slug: "/features/workspaces",
//         },
//       ],
//     },
//     sections: [
//       {
//         title: "What can this feature do for you?",
//         content: (
//           <div>
//             Bring a spring upon her cable holystone blow the man down spanker
//             Shiver me timbers to go on account lookout wherry doubloon chase.
//             Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
//             transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
//             boom jib rum gangway. Case shot Shiver me timbers gangplank crack
//             Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
//             jib scourge of the seven seas boatswain schooner gaff booty Jack Tar
//             transom spirits.
//           </div>
//         ),
//       },
//       {
//         title: "What can this feature do for you?",
//         content: (
//           <div>
//             Bring a spring upon her cable holystone blow the man down spanker
//             Shiver me timbers to go on account lookout wherry doubloon chase.
//             Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
//             transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
//             boom jib rum gangway. Case shot Shiver me timbers gangplank crack
//             Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
//             jib scourge of the seven seas boatswain schooner gaff booty Jack Tar
//             transom spirits.
//           </div>
//         ),
//       },
//       {
//         title: "Creating your account",
//         content: (
//           <div>
//             <p className="mb-6">
//               Bring a spring upon her cable holystone blow the man down spanker
//               Shiver me timbers to go on account lookout wherry doubloon chase.
//               Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
//               transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
//               boom jib rum gangway. Case shot Shiver me timbers gangplank crack
//               Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
//               jib scourge of the seven seas boatswain schooner gaff booty Jack
//               Tar transom spirits.
//             </p>
//             <img src={VideoImage.src} />
//           </div>
//         ),
//       },
//       {
//         title: "Editing your personal details",
//         content: (
//           <ol className="list-disc pl-4">
//             <li className="my-1">Name and password</li>
//             <li className="my-1">Contact details</li>
//             <li className="my-1">Workspace details</li>
//           </ol>
//         ),
//       },
//     ],
//   },
//   {
//     name: "Beestons increased productivity 10x",
//     slug: "/customer-stories/australia-post",
//     cardImage: CardImage,
//     image: CustomerStoryImage,
//     text: "See how businesses have integrated  Mosafe into their workflows to manage safety. ",
//     title: "Beestons increased productivity 10x",
//     pageTitle: "Beestons - Mosafe",
//     companyDetails: {
//       text: "Australia Post is an international transport and logistics organisation  with teams across Australia",
//       url: "https://www.google.com",
//       location: "Birsbane, Australia",
//       industry: "Transport and logistics",
//       featuresUsed: [
//         {
//           text: "Real-time analytics",
//           slug: "/features/real-time-insights",
//         },
//         {
//           text: "Workspaces",
//           slug: "/features/workspaces",
//         },
//       ],
//     },
//     sections: [
//       {
//         title: "What can this feature do for you?",
//         content: (
//           <div>
//             Bring a spring upon her cable holystone blow the man down spanker
//             Shiver me timbers to go on account lookout wherry doubloon chase.
//             Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
//             transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
//             boom jib rum gangway. Case shot Shiver me timbers gangplank crack
//             Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
//             jib scourge of the seven seas boatswain schooner gaff booty Jack Tar
//             transom spirits.
//           </div>
//         ),
//       },
//       {
//         title: "What can this feature do for you?",
//         content: (
//           <div>
//             Bring a spring upon her cable holystone blow the man down spanker
//             Shiver me timbers to go on account lookout wherry doubloon chase.
//             Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
//             transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
//             boom jib rum gangway. Case shot Shiver me timbers gangplank crack
//             Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
//             jib scourge of the seven seas boatswain schooner gaff booty Jack Tar
//             transom spirits.
//           </div>
//         ),
//       },
//       {
//         title: "What can this feature do for you?",
//         content: (
//           <div>
//             Bring a spring upon her cable holystone blow the man down spanker
//             Shiver me timbers to go on account lookout wherry doubloon chase.
//             Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet
//             transom heave to. Trysail Sail ho Corsair red ensign hulk smartly
//             boom jib rum gangway. Case shot Shiver me timbers gangplank crack
//             Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke
//             jib scourge of the seven seas boatswain schooner gaff booty Jack Tar
//             transom spirits.
//           </div>
//         ),
//       },
//     ],
//   },
// ];
];
