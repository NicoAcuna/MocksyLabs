import React from "react";
import CloudIcon from "../../assets/icons/CloudIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import ShareIcon from "../../assets/icons/ShareIcon";
import TruckIcon from "../../assets/icons/TruckIcon";
import { Benefit } from "../types";

export const enterpriseBenefitsData: Array<Benefit> = [
    {
        title: 'Data-driven decision making',
        text: 'View insights and reports that make business decisions transparent.',
        icon: <ShareIcon />
    },
    {
        title: 'Unite to a purpose',
        text: 'Understand your organisation and create common goals for all your employees to work towards.',
        icon: <TruckIcon color='#A857FC' />
    },
    {
        title: 'Simplify user management',
        text: 'Speed up the onboarding process for new hires with automated, templated induction and employee management.',
        icon: <PhoneIcon />
    },
    {
        title: 'Secure data storage',
        text: 'Protect your work data and employees’ personal information with enterprise-level security.',
        icon: <CloudIcon />
    },
]

export const smeBenefits: Array<Benefit> = [
    {
        title: 'Team reports and insights',
        text: 'See all critical business data and team insights with dashboard reporting and powerful analytics tools.',
        icon: <ShareIcon />
    },
    {
        title: 'Automate manual tasks',
        text: 'Set mundane, repetitive tasks to work with our automation system, so you can set and forget.',
        icon: <TruckIcon color='#A857FC' />
    },
    {
        title: 'Simple integration',
        text: 'Invite your employees to the Mosafe app and they can access everything they need to get started on their mobile device.',
        icon: <PhoneIcon />
    },
    {
        title: 'Scales with your business',
        text: 'As your business grows, Mosafe grows with you. Tailor-made for teams big and small, local and national.',
        icon: <CloudIcon />
    },
]

export const individualBenefits: Array<Benefit> = [
    {
        title: 'Log daily work activity ',
        text: 'Do more than just tick the boxes. Have a visual display of your daily work and safety activity.',
        icon: <ShareIcon />
    },
    {
        title: 'Secure data storage',
        text: 'Store documents and personal information in the Document Vault to view at any time.',
        icon: <TruckIcon color='#A857FC' />
    },
    {
        title: 'Mobile-first design',
        text: 'Tailor-made for you so that everything you need is at your fingertips.',
        icon: <PhoneIcon />
    },
    {
        title: 'Ready-made inspections and forms',
        text: 'Take your work to the next level with guided forms and training schedules.',
        icon: <CloudIcon />
    },
    
]
export const aboutBenefits: Array<Benefit> = [
    {
        title: 'Rethinking workplace safety',
        text: 'We’re inclusive, open and actively engaged with our stakeholders by keeping them involved and in control of their own safety journey. We’re here to put safety to work for everyone.',
        icon: <ShareIcon />
    },
    {
        title: 'Providing flexible and powerful tools',
        text: 'Our candid approach gives us an unmistakeable edge of authenticity. We’re real, honest and genuine in what we do and how we do it to keep everyone who needs to know, in the know.',
        icon: <TruckIcon color='#A857FC' />
    },
    {
        title: 'Sparking joy with safety',
        text: 'Good enough, is just not good enough. The delivery of a consistently exceptional experience for our customers requires intentional attention to detail and a seamless delivery with every interaction.',
        icon: <PhoneIcon />
    },
    
]