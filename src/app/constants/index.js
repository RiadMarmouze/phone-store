import { facebook, instagram, twitter } from "@/assets";

export const reviews = [
    {
        imgURL: "",
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: "",
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

// ----------------------------------------------------


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "iPhone 13", link: "/iphone-13" },
            { name: "iPhone 13 Pro", link: "/iphone-13-pro" },
            { name: "iPhone 13 Mini", link: "/iphone-13-mini" },
            { name: "iPhone SE (2nd Gen)", link: "/iphone-se" },
            { name: "iPhone 12", link: "/iphone-12" },
            { name: "iPhone 12 Pro Max", link: "/iphone-12-pro-max" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@store.com", link: "mailto:customer@store.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

//-------------------------------------------------------------------------------------------


export const specialProductsSections = ["Phones", "Accessoires"]

export const specialProductsIds = [
    ["IP-11PM-01", "IP-11PM-02", "IP-11Pr-01"],
    ["APL-APP-01", "APL-SSE-01"],
]

export const newRelease = {
    id:"IP-11PM-01",
    countDown:"20:05:20"
}

export const allProducts = [
    {
        Id: "IP-11PM-01",//uid
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro Max",
        Color: "MIdnight Green",
        
        Storage: 64,
        Ram: 4,
        State: 9,
        Battery: 77,
        Description: "",

        Unlocked: "Libéré",
        Box: false,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 74000.0,
        SellPrice: 78000.0,
        Profit: 4000.0,
    },
    {
        Id: "IP-11PM-02",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro Max",
        Color: "MIdnight Green",
        
        Storage: 256,
        Ram: 4,
        State: 10,
        Battery: 76,
        Description: "",

        Unlocked: "Libéré",
        Box: true,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 81000.0,
        SellPrice: 85000.0,
        Profit: 4000.0,
    },
    {
        Id: "IP-11Pr-01",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro",
        Color: "MIdnight Green",
        
        Storage: 64,
        Ram: 4,
        State: 10,
        Battery: 88,
        Description: "",

        Unlocked: "Libéré",
        Box: false,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 77000.0,
        SellPrice: 75000.0,
        Profit: 2000.0,
    },
    {
        Id: "IP-11-01",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11",
        Color: "Black",
        
        Storage: 64,
        Ram: 4,
        State: 9,
        Battery: 86,
        Description: "",

        Unlocked: "Libéré",
        Box: true,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 58000.0,
        SellPrice: 64000.0,
        Profit: 6000.0,
    },
    {
        Id: "IP-11PM-03",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro Max",
        Color: "MIdnight Green",

        Storage: 46,
        Ram: 4,
        State: 10,
        Battery: 91,
        Description: "",
    
        Unlocked: "Libéré",
        Box: false,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 85000.0,
        SellPrice: 91500.0,
        Profit: 6500.0,
    },
    {
        Id: "APL-SSE-01",
        Category: "Smartwatch",
        Brand: "Apple",
        Model: "Watch Series SE",
        Color: "",

        Storage: -1,
        Ram: -1,
        State: -1,
        Battery: -1,
        Description: "Nulla cillum reprehenderit laborum voluptate nisi do. Veniam proident ullamco in deserunt est ea ut deserunt sit exercitation. Officia ipsum culpa laborum anim adipisicing.",
        
        Unlocked: "",
        Box: false,      

        Availability: 0,
        Offer: 40,
        PurchasePrice: 3950.0,
        SellPrice: 4000.0,
        Profit: 50.0
    },
    {
        Id: "APL-APP-01",
        Category: "Headphones",
        Brand: "Apple",
        Model: "Airpods Pro",
        Color: "",

        Storage: -1,
        Ram: -1,
        State: -1,
        Battery: -1,
        Description: "Ullamco mollit ex deserunt eiusmod sit commodo esse nostrud adipisicing. Cillum commodo incididunt cillum irure fugiat. Reprehenderit magna consectetur commodo in.",

        Unlocked: "",
        Box: false,

        Availability: 0,
        Offer: 10,
        PurchasePrice: 3950.0,
        SellPrice: 4000.0,
        Profit: 50.0
    }   
]
export const offersProducts = [
    {
        Id: "APL-SSE-01",
        Category: "Smartwatch",
        Brand: "Apple",
        Model: "Watch Series SE",
        Color: "",

        Storage: -1,
        Ram: -1,
        State: -1,
        Battery: -1,
        Description: "Nulla cillum reprehenderit laborum voluptate nisi do. Veniam proident ullamco in deserunt est ea ut deserunt sit exercitation. Officia ipsum culpa laborum anim adipisicing.",
        
        Unlocked: "",
        Box: false,      

        Availability: 0,
        Offer: 40,
        PurchasePrice: 3950.0,
        SellPrice: 4000.0,
        Profit: 50.0
    },
    {
        Id: "APL-APP-01",
        Category: "Headphones",
        Brand: "Apple",
        Model: "Airpods Pro",
        Color: "",

        Storage: -1,
        Ram: -1,
        State: -1,
        Battery: -1,
        Description: "Ullamco mollit ex deserunt eiusmod sit commodo esse nostrud adipisicing. Cillum commodo incididunt cillum irure fugiat. Reprehenderit magna consectetur commodo in.",

        Unlocked: "",
        Box: false,

        Availability: 0,
        Offer: 10,
        PurchasePrice: 3950.0,
        SellPrice: 4000.0,
        Profit: 50.0
    }
]
export const phoneProducts = [
    {
        Id: "IP-11PM-01",//uid
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro Max",
        Color: "MIdnight Green",
        
        Storage: 64,
        Ram: 4,
        State: 9,
        Battery: 77,
        Description: "",

        Unlocked: "Libéré",
        Box: false,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 74000.0,
        SellPrice: 78000.0,
        Profit: 4000.0,
    },
    {
        Id: "IP-11PM-02",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro Max",
        Color: "MIdnight Green",
        
        Storage: 256,
        Ram: 4,
        State: 10,
        Battery: 76,
        Description: "",

        Unlocked: "Libéré",
        Box: true,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 81000.0,
        SellPrice: 85000.0,
        Profit: 4000.0,
    },
    {
        Id: "IP-11Pr-01",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro",
        Color: "MIdnight Green",
        
        Storage: 64,
        Ram: 4,
        State: 10,
        Battery: 88,
        Description: "",

        Unlocked: "Libéré",
        Box: false,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 77000.0,
        SellPrice: 75000.0,
        Profit: 2000.0,
    },
    {
        Id: "IP-11-01",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11",
        Color: "Black",
        
        Storage: 64,
        Ram: 4,
        State: 9,
        Battery: 86,
        Description: "",

        Unlocked: "Libéré",
        Box: true,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 58000.0,
        SellPrice: 64000.0,
        Profit: 6000.0,
    },
    {
        Id: "IP-11PM-03",
        Category: "Smartphone",
        Brand: "Apple",
        Model: "iPhone 11 Pro Max",
        Color: "MIdnight Green",

        Storage: 46,
        Ram: 4,
        State: 10,
        Battery: 91,
        Description: "",
    
        Unlocked: "Libéré",
        Box: false,

        Availability: 0,
        Offer: 0,
        PurchasePrice: 85000.0,
        SellPrice: 91500.0,
        Profit: 6500.0,
    },
]