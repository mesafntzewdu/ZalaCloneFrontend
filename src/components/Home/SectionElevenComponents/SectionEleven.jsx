import React from 'react';
const SectionElevenSwiperSlide = React.lazy(() =>
  import('./SectionElevenSwiperSlide.jsx')
);
let Cards = [
  {
    id: 1,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/first.jpg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 2,
        label: 'ERP',
      },
      {
        id: 3,
        label: 'Software',
      },
      {
        id: 4,
        label: 'Updates',
      },
    ],
    date: 'February 14,2024',
  },
  {
    id: 2,
    title: 'ZalaTech to Showcase Software Solutions at GITEX Africa 2024',
    image: '/SectionElevenImages/second.jpeg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 2,
        label: 'Updates',
      },
    ],
    date: 'Jan 14,2023',
  },
  {
    id: 3,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/third.jpeg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 3,
        label: 'Software',
      },
    ],
    date: 'Jul 08,2024',
  },
  {
    id: 4,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/fourth.jpeg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 2,
        label: 'ERP',
      },
      {
        id: 3,
        label: 'Software',
      },
      {
        id: 4,
        label: 'Updates',
      },
    ],
    date: 'February 14,2024',
  },
  {
    id: 5,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/fifth.jpg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 2,
        label: 'ERP',
      },
      {
        id: 3,
        label: 'Software',
      },
      {
        id: 4,
        label: 'Updates',
      },
    ],
    date: 'February 14,2024',
  },
  {
    id: 6,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/six.jpg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 2,
        label: 'ERP',
      },
      {
        id: 3,
        label: 'Software',
      },
      {
        id: 4,
        label: 'Updates',
      },
    ],
    date: 'February 14,2024',
  },
  {
    id: 7,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/seven.jpeg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
      {
        id: 3,
        label: 'Software',
      },
      {
        id: 4,
        label: 'Updates',
      },
    ],
    date: 'February 14,2024',
  },
  {
    id: 8,
    title: 'Exploring the Current ERP Software Development Trends in Ethiopia',
    image: '/SectionElevenImages/eight.jpg',
    subLinks: [
      {
        id: 1,
        label: 'Articles',
      },
    ],
    date: 'February 14,2024',
  },
];

const SectionEleven = () => {

  return (
    <div className="w-full bg-gray-50">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <SectionElevenSwiperSlide slides={Cards} />
      </div>
    </div>
  );
};

export default SectionEleven;
