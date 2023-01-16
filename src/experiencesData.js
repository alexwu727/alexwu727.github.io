const educations = [
    {
        id: '1',
        name: 'Santa Clara University',
        date: 'Dec 2022',
        content: 'experience 1 is blah blah blah...'
    },
    {
        id: '2',
        name: 'Soochow University',
        date: 'June 2019',
        content: 'experience 2 is blah blah blah...'
    }
];

const works = [
    {
        id: '3',
        name: 'Poshmark',
        date: 'Dec 2022',
        content: 'experience 1 is blah blah blah...'
    },
    {
        id: '4',
        type: 'education',
        name: 'Soochow University',
        date: 'June 2019',
        content: 'experience 2 is blah blah blah...'
    },
    {
        id: '5',
        type: 'work',
        name: 'Poshmark',
        date: '2021',
        content: 'experience 3 is blah blah blah...'
    },
    {
        id: '6',
        type: 'work',
        name: 'Experience 4',
        date: 'July 2018',
        content: 'experience 4 is blah blah blah...'
    }
];

const experiences = { educations: educations, works: works }

export default experiences;