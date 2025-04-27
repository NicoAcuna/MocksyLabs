import { JobListing } from "../types";
import JobListingImage from '../../assets/images/job-listing.png'
import CardImage from '../../assets/images/feature-card-1.png'


export const jobListingsData: Array<JobListing> = [
    {
        name: "Full stack developer",
        location: "Brisbane, Australia",
        category: "Engineering",
        title: "We're on the hunt for a multi-talented developer who can rock from the front to the back-end like a boss, especially on mobile. You gotta be a curious cat who's passionate about delivering the goods.",
        image: JobListingImage,
        cardImage: CardImage,
        text: "Check it, Mosafe is the Robin Hood of workplace safety tech. We're bringing the human touch to a space that's been stuck in the dark ages of paperwork. We want to empower teams to take charge of their safety and spread some happiness while we're at it. We're a scrappy little startup that's got big dreams, and we need your help to make it happen.",
        slug: "careers/full-stack-developer-brisbane",
        sections: [
            {
                title: " ",
                content: <div>
                    <p>We're on the hunt for a multi-talented developer who can rock from the front to the back-end like a boss, especially on mobile. You gotta be a curious cat who's passionate about delivering the goods. If you're packing a GitHub or a portfolio site full of projects that'll make our jaws drop, we want to hear from you. We're building a team of rockstars who can ship the best user experience around, so if that sounds like your jam, read on.</p>
                    <br></br>
                    <p>As part of our development crew, you'll be working with both frontend and backend devs, as well as our product manager and designers. You'll be pwning our React and React Native platforms, and for the adventurous, you'll get to work on our infrastructure, API, service, and database layers too.</p>
                </div>
            },
            {
                title: "So what'll you be doing?",
                content: <div>
                    <ul>
                        <li className="list-disc">Crafting beautiful UI's that'll make the competition cry</li>
                        <li className="list-disc">Building our React Native mobile app (iOS and Android, baby!)</li>
                        <li className="list-disc">Developing our React web platform to make our users go "woohoo!"</li>
                        <li className="list-disc">Taking our Brand CMS/CRM web solutions to the next level</li>
                        <li className="list-disc">Plugging into our API and backend services like a pro</li>
                        <li className="list-disc">Optimising backend and ops for smooth operation and peak performance</li>
                        <li className="list-disc">Being data-driven, humble, and always learning</li>
                        <li className="list-disc">Jamming with the team from product ideation to launch</li>
                        <li className="list-disc">Being part of a dynamic and fun workplace that's all about growth</li>

                    </ul>
                </div>
            },
            {
                title: "We've got your back too, peeps. Here's what we're bringing to the table:",
                content: <div>
                    <ul><li className="list-disc">A sweet spot in Brisbane with onsite parking</li>
                        <li className="list-disc">Flexibility in work hours so you can live your best life</li>
                        <li className="list-disc">A young, vibrant team that knows how to party</li>
                        <li className="list-disc">Employee development planning and a training budget to help you level up</li>
                        <li className="list-disc">A Mac-Book and budget for your desk set-up</li>
                        <li className="list-disc">A drinks fridge and snacks bar to keep you fuelled</li>
                        <li className="list-disc">Team tournaments like Ping-Pong, Nerf, Nintendo and even bake-offs</li>
                        <li className="list-disc">Weekly drinks and social events that'll knock your socks off</li>
                        <li className="list-disc">The chance to be part of a scale-up from the beginning</li>
                    </ul>
                    <br></br>
                    <p>
                        Sound like a vibe? </p>
                    <br></br>
                    <p>Hit us up, and let's make some magic happen. 🚀</p>
                </div>

            }
        ]
    },
]