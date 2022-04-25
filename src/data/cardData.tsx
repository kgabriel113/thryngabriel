import React from 'react';
import { Domain, PhoneVertical, ServerCluster, Test, LineChart, System } from "grommet-icons";

export interface IExperience{
    id: number,
    icon: JSX.Element,
    name: string,
    language: string,
    duration: string,
    description: string
}

export const data: IExperience[] = [
    {
        id: 0,
        icon: <Domain size="large" />,
        name: 'Web',
        language: 'React, TypeScript, ASP.NET, Django',
        duration: '1.5 years',
        description: 'I love web dev. Frameworks I am familiar with are React, .NET, Django, and Node.'
    },
    {
        id: 1,
        icon: <PhoneVertical size='large' />,
        name: 'Mobile',
        language: 'Android (Kotlin), React Native',
        duration: '2 years',
        description: 'My first co-op was native Android development for a startup called Ergonomyx. I spent a year learning hands-on and bringing a real application from scratch to production.'
    },
    {
        id: 2,
        icon: <ServerCluster size='large' />,
        name: 'Database',
        language: 'PostgreSQL, MongoDB, ORM frameworks',
        duration: '1.5 years',
        description: 'I love databases and I have worked with them directly or indirectly for my entire career. For my first co-op, I drove the migration of NoSQL data in MongoDB to PostgreSQL.'
    },
    {
        id: 3,
        icon: <Test size='large' />,
        name: 'Data Science',
        language: 'Scikitlearn (Python)',
        duration: '6 months',
        description: 'One of my interests from school is machine learning. I have taken two ML-related classes, Data Mining and Music Information Retrieval, each of which had a group project deliverable as part of the course. Currently, I am enrolled in the AI4Good machine learning bootcamp.'
    },
    {
        id: 4,
        icon: <LineChart size='large' />,
        name: 'Data Visualization',
        language: 'D3.js, React, TypeScript',
        duration: '3 months',
        description: 'For my second co-op, I used D3.js for the visualization of oceanography data in a React webapp.'
    },
    {
        id: 5,
        icon: <System size='large' />,
        name: 'Embedded Systems',
        language: 'Arduino (C++)',
        duration: '9 months',
        description: "I developed Arduino code for my company's Bluetooth sit-and-stand desk and under-desk bike."
    },
];
