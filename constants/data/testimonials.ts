import { Testimonial } from "../types";
import HeroImage1 from '../../assets/images/hero-image-1.png'
import HeroImage2 from '../../assets/images/hero-image-2.png'

import AusPostLogo from '../../assets/images/australia-post-logo.png'


export const testimonialsData: Array<Testimonial> = [
    {
        customerName: "Terry Cain",
        customerOccupation: "Team manager",
        customerCompany: "Aus Post",
        companyImage: AusPostLogo,
        image: HeroImage1,
        text: `"I really like Mosafe, it's helped me simplify my work day and manage my team only by exception so I can focus as much as I can on empowering my team to be safe and productive."`,
        starRating: 5
    },
    {
        customerName: "Brian Cooper",
        customerOccupation: "Business owner",
        customerCompany: "Aus Post",
        companyImage: AusPostLogo,
        image: HeroImage2,
        text: '"Not only has Mosafe improved our safety processes and documentation, I can easily monitor trends and track our progress throughout busy periods in the year."',
        starRating: 5
    },
    
]

