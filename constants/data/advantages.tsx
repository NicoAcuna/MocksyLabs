import { Advantage } from "../types"
import Button from "../../components/core/button"
import Profile from "../../assets/icons/Profile"
import Link from "next/link"

export const advantagesData: Array<Advantage> = [
    {
        title: '92%',
        text: 'of businesses say Mosafe has improved their onboarding and training processes by digitising their content.',
        backgroundColor: 'white'
    },
    {
        text: 'Protect your businesses from risks and liabilities, allowing you to focus on their core operations with peace of mind.',
        item: (
            <Button text='Find out more' onClick={() => null} className='btn-variant-white'/>
        ),
        backgroundColor: 'purple-light'
    },
    {
        item: <Profile/>,
        backgroundColor: 'white'
    },
    {
        text: 'Digital safety management system helps businesses improve their safety culture, reduce risks, and save time and money.',
        backgroundColor: 'purple-light'
    }
]