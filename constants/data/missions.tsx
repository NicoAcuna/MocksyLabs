import { Mission } from "../types"
import Button from "../../components/core/button"
import Profile from "../../assets/icons/Profile"
import MissionImage from '../../assets/images/feature-section-2.png'

export const missionsData: Array<Mission> = [
    {
        index: '01',
        image: MissionImage,
        title: 'Be inclusive and involved at every level',
        text: 'We’re inclusive, open and actively engaged with our stakeholders by keeping them involved and in control of their own safety journey. We’re here to put safety to work for everyone.',
        link: '/features/document-management-system',
        linkText: 'Find out more'
    },
    {
        index: '02',
        image: MissionImage,
        title: 'Real and genuine: we own our work',
        text: 'Our candid approach gives us an unmistakeable edge of authenticity. We’re real, honest and genuine in what we do and how we do it to keep everyone who needs to know, in the know.',
        link: '/features/document-management-system',
        linkText: 'Find out more'
    },
    {
        index: '03',
        image: MissionImage,
        title: 'It’s important to sweat the small stuff',
        text: 'Good enough, is just not good enough. The delivery of a consistently exceptional experience for our customers requires intentional attention to detail and a seamless delivery with every interaction.',
        link: '/features/document-management-system',
        linkText: 'Find out more'
    },
    
]