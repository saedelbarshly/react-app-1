
import { v4 as uuid } from 'uuid'
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] =[
    {
        id: uuid(),
        title: '2024 Cool Cars - Coolest Cars, SUVs',
        description:'Technically the next James Bond film will have four Aston Martins on screen: A DBS Superleggera,a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders',
        imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp',
        price: '$400,000',
        colors: ['#FF0032', '#2563eb', '#FF6E31'],
        category: {
            name: 'Bugatti verfon',
            imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp'
        }
    },
    {
        id: uuid(),
        title: '2024 Cool Cars - Coolest Cars, SUVs',
        description: 'Technically the next James Bond film will have four Aston Martins on screen: A DBS Superleggera,a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders',
        imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp',
        price: '$400,000',
        colors: ['#FF0032', '#2563eb', '#FF6E31'],
        category: {
            name: 'Bugatti verfon',
            imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp'
        }
    },
    {
        id: uuid(),
        title: '2024 Cool Cars - Coolest Cars, SUVs',
        description: 'Technically the next James Bond film will have four Aston Martins on screen: A DBS Superleggera,a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders',
        imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp',
        price: '$400,000',
        colors: ['#FF0032', '#2563eb', '#FF6E31'],
        category: {
            name: 'Bugatti verfon',
            imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp'
        }
    },
    {
        id: uuid(),
        title: '2024 Cool Cars - Coolest Cars, SUVs',
        description: 'Technically the next James Bond film will have four Aston Martins on screen: A DBS Superleggera,a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders',
        imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp',
        price: '$400,000',
        colors: ['#FF0032', '#2563eb', '#FF6E31'],
        category: {
            name: 'Bugatti verfon',
            imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp'
        }
    },
    {
        id: uuid(),
        title: '2024 Cool Cars - Coolest Cars, SUVs',
        description: 'Technically the next James Bond film will have four Aston Martins on screen: A DBS Superleggera,a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders',
        imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp',
        price: '$400,000',
        colors: ['#FF0032', '#2563eb', '#FF6E31'],
        category: {
            name: 'Bugatti verfon',
            imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp'
        }
    },
    {
        id: uuid(),
        title: '2024 Cool Cars - Coolest Cars, SUVs',
        description: 'Technically the next James Bond film will have four Aston Martins on screen: A DBS Superleggera,a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders',
        imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp',
        price: '$400,000',
        colors: ['#FF0032', '#2563eb', '#FF6E31'],
        category: {
            name: 'Bugatti verfon',
            imageURL: 'https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp'
        }
    },
] 

export const fromInputList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text",
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text",
    },
    {
        id: "image",
        name: "imageURL",
        label: "Product Image URL",
        type: "text",
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text",
    },
];

export const colors: string[] = [
    '#FF0032',
    '#2563eb', 
    '#FF6E31', 
    '#FFB045', 
    '#4285F4', 
    '#34A853', 
    '#FBBC05', 
    '#EA4335', 
    '#0F9D58', 
    '#5E95D9', 
]


export const categories: ICategory[] = [
    {
      id: uuid(),
      name: 'Wade Cooper',
      imageURL:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Arlene Mccoy',
      imageURL:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Devon Webb',
      imageURL:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Tom Cook',
      imageURL:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Tanya Fox',
      imageURL:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Hellen Schmidt',
      imageURL:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Caroline Schultz',
      imageURL:
        'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Mason Heaney',
      imageURL:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Claudie Smitham',
      imageURL:
        'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: uuid(),
      name: 'Emil Schaefer',
      imageURL:
        'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]