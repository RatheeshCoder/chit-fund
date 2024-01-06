// Home page slider 

import HomeSlider1 from '../asset/imgs/NewImg (2).jpg'
import HomeSlider2 from '../asset/imgs/NewImg (7).jpg'
import HomeSlider3 from '../asset/imgs/NewImg (8).jpg'

// import gallaryImg1 from '../asset/imgs/186597-lichfl.jpg'
import gallaryImg2 from '../asset/imgs/Customer meetups 1.jpg'
import gallaryImg3 from '../asset/imgs/Customer meetups 10.jpg'
import gallaryImg4 from '../asset/imgs/Customer meetups 2.jpg'
import gallaryImg5 from '../asset/imgs/Customer meetups 3.jpg'
import gallaryImg6 from '../asset/imgs/Customer meetups 4.jpg'
import gallaryImg7 from '../asset/imgs/Customer meetups 5.jpg'
import gallaryImg8 from '../asset/imgs/Customer meetups 6(1).jpg'
import gallaryImg9 from '../asset/imgs/Customer meetups 6.jpg'
import gallaryImg10 from '../asset/imgs/Customer meetups 7.jpg'
import gallaryImg11 from '../asset/imgs/Customer meetups 8.jpg'
import gallaryImg12 from '../asset/imgs/Customer meetups 9.jpg'
import gallaryImg13 from '../asset/imgs/Pongal Celebrations 1.jpg'
import gallaryImg14 from '../asset/imgs/Pongal Celebrations 3.jpg'
import gallaryImg15 from '../asset/imgs/Pongal Celebrations 4.jpg'
import gallaryImg16 from '../asset/imgs/Pongal Celebrations 5.jpg'
import gallaryImg17 from '../asset/imgs/Pongal Celebrations 7.jpg'
import gallaryImg18 from '../asset/imgs/Pongal Celebrations 8.jpg'
import gallaryImg19 from '../asset/imgs/3-year (1).jpeg'
import gallaryImg20 from '../asset/imgs/3-year (10).jpeg'
import gallaryImg21 from '../asset/imgs/3-year (11).jpeg'
import gallaryImg22 from '../asset/imgs/3-year (2).jpeg'
import gallaryImg23 from '../asset/imgs/3-year (3).jpeg'
import gallaryImg24 from '../asset/imgs/3-year (4).jpeg'
import gallaryImg25 from '../asset/imgs/3-year (5).jpeg'
import gallaryImg26 from '../asset/imgs/3-year (6).jpeg'
import gallaryImg27 from '../asset/imgs/3-year (7).jpeg'
import gallaryImg28 from '../asset/imgs/3-year (8).jpeg'
import gallaryImg29 from '../asset/imgs/3-year (9).jpeg'

// gallery dataset

// abouts as Company profile
import companyProfile1 from '../asset/imgs/NewImg (12).jpg'
import companyProfile2 from '../asset/imgs/NewImg (3).jpg'
import companyProfile3 from '../asset/imgs/NewImg (6).jpg'


// blog dataset

import blogimg1 from '../asset/imgs/Case Study Education_.jpg'
import blogimg2 from '../asset/imgs/Case Study Own Vehicle_.webp'
import blogimg3 from '../asset/imgs/Case Study Insurance_.jpg'

import BenefitImg1 from '../asset/imgs/BenefitImg (1).jpg'
import BenefitImg2 from '../asset/imgs/BenefitImg (4).jpg'
import BenefitImg3 from '../asset/imgs/BenefitImg (3).jpg'
import BenefitImg4 from '../asset/imgs/BenefitImg (2).jpg'
import BenefitImg5 from '../asset/imgs/BenefitImg (5).jpg'




import growcardimg from '../asset/imgs/grow-growth-hand-svgrepo-com.svg'
import flexcardimg from '../asset/imgs/Flex.png'
import trustcardimg from '../asset/imgs/Trust.png'
import theivecardimg from '../asset/imgs/Thrive.png'


import ProfessionalImg from '../asset/imgs/ProfessionalImg.png'
import ServicesImg from '../asset/imgs/ServicesImg.png'
import ProfitImg from '../asset/imgs/profitsImg.png'
import SolutionsImg from '../asset/imgs/solutionImg.png'
import FeaturesSection from '../components/AboutUs/Values/FeaturesSection'
import { carousel } from '@material-tailwind/react'


import galleryhero1 from '../asset/imgs/gallery/3-year (1).jpg'
import galleryhero2 from '../asset/imgs/gallery/3-year (11).jpg'
import galleryhero3 from '../asset/imgs/gallery/3-year (5).jpg'
import galleryhero4 from '../asset/imgs/gallery/3-year (8).jpg'
import galleryhero5 from '../asset/imgs/gallery/Customer meetups 1.jpg'
import galleryhero6 from '../asset/imgs/gallery/Customer meetups 6.jpg'
import galleryhero7 from '../asset/imgs/gallery/Pongal Celebrations 1.jpg'
import galleryhero8 from '../asset/imgs/gallery/Pongal Celebrations 7.jpg'
import galleryhero9 from '../asset/imgs/gallery/Pongal Celebrations 4.jpg'
import galleryhero10 from '../asset/imgs/gallery/Pongal Celebrations 8.jpg'

// Gallery start data

export const gallaryImg = [

  { id: 1, url:galleryhero1 },
  { id: 2, url: galleryhero2 },
  { id: 3, url: galleryhero3 },
  { id: 4, url: galleryhero4 },
  { id: 5, url: galleryhero5 },
  { id: 6, url: galleryhero6},
  { id: 7, url: galleryhero7 },
  { id: 8, url: galleryhero8 },
  { id: 9, url: galleryhero9 },
  { id: 10, url: galleryhero10 },
]


// Gallery photo data

const photoData = [
  // { id: 1, url: gallaryImg1, category: 'CustomerMeetups' },
  { id: 2, url: gallaryImg2, category: 'CustomerMeetups' },
  { id: 3, url: gallaryImg3, category: 'CustomerMeetups' },
  { id: 4, url: gallaryImg4, category: 'CustomerMeetups' },
  { id: 5, url: gallaryImg5, category: 'CustomerMeetups' },
  { id: 6, url: gallaryImg6, category: 'CustomerMeetups' },
  { id: 7, url: gallaryImg7, category: 'CustomerMeetups' },
  { id: 8, url: gallaryImg8, category: 'CustomerMeetups' },
  { id: 9, url: gallaryImg9, category: 'CustomerMeetups ' },
  { id: 10, url: gallaryImg10, category: 'CustomerMeetups' },
  { id: 11, url: gallaryImg11, category: 'CustomerMeetups' },
  { id: 12, url: gallaryImg12, category: 'CustomerMeetups' },
  { id: 13, url: gallaryImg13, category: 'FestivalCelebrations' },
  { id: 14, url: gallaryImg14, category: 'FestivalCelebrations' },
  { id: 15, url: gallaryImg15, category: 'FestivalCelebrations' },
  { id: 16, url: gallaryImg16, category: 'FestivalCelebrations' },
  { id: 17, url: gallaryImg17, category: 'FestivalCelebrations' },
  { id: 18, url: gallaryImg18, category: 'FestivalCelebrations' },
  { id: 19, url: gallaryImg19, category: 'anniversary' },
  { id: 20, url: gallaryImg20, category: 'anniversary' },
  { id: 21, url: gallaryImg21, category: 'anniversary' },
  { id: 22, url: gallaryImg22, category: 'anniversary' },
  { id: 23, url: gallaryImg23, category: 'anniversary' },
  { id: 24, url: gallaryImg24, category: 'anniversary' },
  { id: 25, url: gallaryImg25, category: 'anniversary' },
  { id: 26, url: gallaryImg26, category: 'anniversary' },
  { id: 27, url: gallaryImg27, category: 'anniversary' },
  { id: 28, url: gallaryImg28, category: 'anniversary' },
  { id: 29, url: gallaryImg29, category: 'anniversary' },



];

export default photoData;


// Blog data

const blogData = {
  1: {
    title: 'Education – Schools & Colleges ....',
    image: blogimg1,
    title_content: 'The Transformative Journey of Education: Nurturing Knowledge, Skills, and Opportunities',
    heading_content: 'The Power of Education: Nurturing Knowledge and Skills for a Bright Future',

    content1: "Education marks a pivotal stage in an individual's life, paving the way for personal growth and future opportunities. It is an important journey where students, parents, and educators collaborate to nurture knowledge and skills. In schools and colleges across the nation, diverse academic curricula, extracurricular activities, and aspirations guide the learning experience.",
    content2: "Let's consider the costs associated with a typical school or college education in Coimbatore. Tuition, textbooks, and educational materials account for a significant portion of educational expenses. Beyond these, uniforms, stationery, and various academic and extracurricular necessities are essential.",
    content3: "In India, education is a significant commitment that parents strive to fulfill. Understanding this, families begin saving for their children's education. Various factors play a role in determining the cost of education. Regardless of the scale, preparing for your child's education entails careful financial planning.",
    content4: "Getting ready for your child's academic journey? Ensure these checklists before embarking on the educational path:\n\n- Share your current financial status transparently.\n- Consider how to manage finances post-marriage (whether to combine or maintain separately).\n- Identify and prioritize mutual educational goals.\n- Develop a post-education expenditure plan.\n- Consult with a financial advisor to chart your financial course.\n- Create an educational budget and adhere to it.\n- Establish an emergency fund to address unexpected educational expenses.\n- Enhance financial literacy and build trust in your financial partnership.\n- Compare spending habits and expectations in supporting your child's education.\n- Determine roles and responsibilities for financial management.",
    content5: "Did you know that everyone has inherent financial attitudes?",
    content6: "Major challenges that parents and students may face are often tied to financial aspects, not just academic concerns. These challenges might relate to how tuition fees are paid, how educational expenses are managed, or the capacity to save for future educational endeavors. Conversations surrounding these financial aspects are vital, and they are at the core of addressing educational needs effectively.",
    content7: "Join VanMoh ChitFunds and transform these conversations into educational savings, ensuring you can meet your child's academic aspirations with a well-planned financial approach."

    ,
  },
  2: {
    title: 'Owning A Vehicle – Bikes & Cars ....',
    image: blogimg2,
    title_content: 'Unlocking Your Vehicle Ownership Dreams: A Comprehensive Financial Guide',
    heading_content: 'Financial Considerations for Vehicle Ownership in Coimbatore',

    content1: "Acquiring your own vehicle is a significant achievement, symbolizing personal mobility and convenience. This journey encompasses diverse preferences and financial considerations, as individuals explore various vehicle options to meet their specific needs and desires.",
    content2: "Let's consider the costs associated with owning a vehicle in Coimbatore, whether it's a car, a motorcycle, or another mode of transportation. The expenses include the vehicle's purchase price, insurance, fuel, maintenance, and regular servicing. Additional costs may involve licensing, registration, and any desired accessories.",
    content3: "In India, owning a vehicle is often a cherished aspiration, and individuals plan and save to realize this dream. The overall cost of vehicle ownership depends on factors such as the vehicle type, brand, and financing options. Regardless of the specific vehicle you aim to own, sound financial planning is essential to turn your ownership dreams into reality.",
    content4: "Preparing to acquire your own vehicle? Prioritize these checklists before making your purchase:\n\n- Assess your current financial standing with transparency.\n- Allocate a portion of your budget for vehicle-related expenses.\n- Define the vehicle type, brand, and features that align with your needs.\n- Create a comprehensive budget that includes the purchase and ongoing costs.\n- Explore financing possibilities if necessary, and consider seeking advice from a financial advisor.\n- Build a contingency fund for unexpected vehicle-related expenses.\n- Enhance your financial knowledge and make well-informed decisions.\n- Compare various vehicle options and tailor your choice to your preferences.\n- Decide on roles and responsibilities for managing vehicle-related finances.",
    content5: "Did you know that everyone possesses an inherent financial attitude? One common challenge individuals face after acquiring a vehicle is effectively managing the associated expenses. It's not just about the initial purchase; it involves financing, maintaining, and ensuring the vehicle aligns with your long-term financial goals. Conversations about these financial aspects are pivotal and are at the core of your ability to enjoy the benefits of vehicle ownership.",
    content6: "Partner with VanMoh ChitFunds to transform these conversations into savings, enabling you to realize your aspiration of owning a vehicle with a well-structured financial strategy."


  },
  3: {
    title: 'Life Insurance – For You & Your Loved One’s ....',
    image: blogimg3,
    title_content: 'Ensuring Financial Security and Peace of Mind: The Importance of Life Insurance in Coimbatore ',
    heading_content: 'Understanding Life Insurance Types and Considerations in Coimbatore',

    content1: "Life insurance is a crucial financial tool that provides peace of mind, security, and support to individuals and their loved ones. It represents a promise of financial protection and a safety net for the uncertainties of life.",
    content2: "Consider the significance of life insurance and its associated considerations:",
    content3: "Life insurance offers various types and plans, each designed to cater to specific needs and goals. It is an important decision that involves weighing options and planning for the future. Here's a brief overview of life insurance in Coimbatore:",
    content4: "Types of Life Insurance:\n\n- Term Life Insurance: Provides coverage for a specific term and is often more affordable.\n- Whole Life Insurance: Offers lifelong protection with a savings component.\n- Unit-Linked Insurance Plans (ULIPs): Combine insurance coverage with investment opportunities.",
    content5: "Factors to Consider:\n\n- Assess your financial needs, including future expenses and outstanding liabilities.\n- Choose the right type of life insurance that aligns with your goals and budget.\n- Determine the appropriate coverage amount to secure your family's financial future.\n- Understand the premium structure and payment frequency.\n- Evaluate additional features and riders to enhance your policy's benefits.\n- Ensure clear communication with your insurance provider to meet your unique requirements.",
    content6: "Selecting the right life insurance plan is a significant decision, and it's crucial to take the time to assess your specific needs and financial circumstances. It offers a safeguard against unexpected events and provides financial stability for your family's well-being.",
    content7: "At VanMoh ChitFunds, we understand the importance of securing your family's future. We offer a range of life insurance products tailored to your unique needs, providing the peace of mind that comes from knowing your loved ones are protected. Our expert advisors are here to assist you in making informed choices and guiding you toward a financially secure future. Join us and transform these conversations into a solid foundation for your family's financial stability with a well-planned life insurance strategy."


  },
};

export { blogData };


// Servies small fund data

export const small_fund = [
  {
    id: 1,
    amount: ' 10,000',
    timeline: '304 days',
    youpay: '-',
    youget: '-',
    monthlypay: '1000',
    dailypay: '50',
    weeklypay: 250,
    additionalInfo: {
      tableData: [
        ["Inst.no", "10,000"],
        ['1', '-'],
        ['2', '8,000'],
        ['3', '8,100'],
        ['4', '8,200'],
        ['5', '8,400'],
        ['6', '8,600'],
        ['7', '8,800'],
        ['8', '9,400'],
        ['9', '10,200'],
        ['10', '11,000'],


      ],
    },
  },
  {
    id: 2,
    amount: ' 20,000',
    timeline: '304 days',
    youpay: '-',
    youget: '-',
    monthlypay: '2000',
    dailypay: '50',
    weeklypay: 500,
    additionalInfo: {
      tableData: [
        ["Inst.no", "20,000"],
        ['1', '-'],
        ['2', '16,000'],
        ['3', '16,200'],
        ['4', '16,400'],
        ['5', '16,800'],
        ['6', '17,200'],
        ['7', '17,600'],
        ['8', '18,800'],
        ['9', '20,400'],
        ['10', ' 22,000'],
      ],
    },
  },
  {
    id: 3,
    amount: ' 50,000',
    timeline: '304 days',
    youpay: '-',
    youget: '-',
    monthlypay: '5000',
    dailypay: '250',
    weeklypay: 1250,
    additionalInfo: {
      tableData: [
        ["Inst.no", "50,000"],
        ['1', '-'],
        ['2', '40,000'],
        ['3', '40,500'],
        ['4', '41,000'],
        ['5', '42,000'],
        ['6', '43,000'],
        ['7', '44,000'],
        ['8', '47,000'],
        ['9', '51,000'],
        ['10', ' 55,000'],
      ],
    },
  },


];

// Servies avg fund data

export const avg_fund = [
  {
    id: 1,
    amount: ' 3,00,000',
    timeline: '912  days',
    youpay: '-',
    youget: '-',
    monthlypay: '10000',
    weeklypay: '2500',
    dailypay: '400',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', 230000],
        ['3', 221500],
        ['4', 233000],
        ['5', 234500],
        ['6', 236000],
        ['7', 237000],
        ['8', 239000],
        ['9', 240000],
        ['10', 242000],
        ['11', 245000],
        ['12', 248000],
        ['13', 251000],
        ['14', 254000],
        ['15', 257000],
        ['16', 260000],
        ['17', 263000],
        ['18', 266000],
        ['19', 269000],
        ['20', 275000],
        ['21', 280000],
        ['22', 290000],
        ['23', 300000],
        ['24', 310000],
        ['25', 320000],
        ['26', 330000],
        ['27', 345000],
        ['28', 360000],
        ['29', 375000],
        ['30', 390000],

      ],
    },
  },
  {
    id: 2,
    amount: ' 6,00,000',
    timeline: '912  days',
    youpay: '-',
    youget: '-',
    monthlypay: '5000',
    dailypay: '800',
    weeklypay: '20000',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', 460000],
        ['3', 463000],
        ['4', 466000],
        ['5', 469000],
        ['6', 472000],
        ['7', 474000],
        ['8', 478000],
        ['9', 480000],
        ['10', 484000],
        ['11', 490000],
        ['12', 496000],
        ['13', 502000],
        ['14', 508000],
        ['15', 514000],
        ['16', 520000],
        ['17', 526000],
        ['18', 532000],
        ['19', 538000],
        ['20', 550000],
        ['21', 560000],
        ['22', 580000],
        ['23', 600000],
        ['24', 620000],
        ['25', 640000],
        ['26', 660000],
        ['27', 690000],
        ['28', 720000],
        ['29', 750000],
        ['30', 780000],

      ],
    },
  }

];

// Servies high fund data

export const high_fund = [
  {
    id: 1,
    amount: ' 10,00,000',
    timeline: '1216 days',
    youpay: '-',
    youget: '-',
    monthlypay: '25,000',
    dailypay: '1000',
    weeklypay: '6250',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', 800000],
        ['3', 805000],
        ['4', 810000],
        ['5', 815000],
        ['6', 820000],
        ['7', 825000],
        ['8', 830000],
        ['9', 835000],
        ['10', 840000],
        ['11', 845000],
        ['12', 850000],
        ['13', 865000],
        ['14', 870000],
        ['15', 875000],
        ['16', 880000],
        ['17', 885000],
        ['18', 890000],
        ['19', 895000],
        ['20', 900000],
        ['21', 905000],
        ['22', 910000],
        ['23', 915000],
        ['24', 920000],
        ['25', 925000],
        ['26', 930000],
        ['27', 935000],
        ['28', 940000],
        ['29', 945000],
        ['30', 950000],
        ['31', 960000],
        ['32', 970000],
        ['33', 1000000],
        ['34', 1070000],
        ['35', 1115000],
        ['36', 1180000],
        ['37', 1250000],
        ['38', 1310000],
        ['39', 1360000],
        ['40', 1400000],

      ],
    },
  },
];

// Servies mid fund data

export const mid_fund = [
  {
    id: 1,
    amount: ' 50,000',
    timeline: '608 days',
    youpay: '-',
    youget: '-',
    monthlypay: '2500',
    dailypay: '125',
    weeklypay: '625',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', '41,250'],
        ['3', '41,500'],
        ['4', '41,750'],
        ['5', '42,000'],
        ['6', '42,250'],
        ['7', '42,500'],
        ['8', '43,000'],
        ['9', '43,500'],
        ['10', '44,000'],
        ['11', '44,500'],
        ['12', '45,000'],
        ['13', '46,000'],
        ['14', '47,500'],
        ['15', '49,000'],
        ['16', '50,500'],
        ['17', '52,000'],
        ['18', '54,000'],
        ['19', '56,500'],
        ['20', '60,000'],


      ],
    },
  },

  {
    id: 2,
    amount: ' 1,00,000',
    timeline: '608 days',
    youpay: '-',
    youget: '-',
    monthlypay: '5000',
    dailypay: '250',
    weeklypay: '1250',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', '82,500'],
        ['3', '83,000'],
        ['4', '83,500'],
        ['5', '84,000'],
        ['6', '84,500'],
        ['7', '85,000'],
        ['8', '86,000'],
        ['9', '87,000'],
        ['10', '88,000'],
        ['11', '89,000'],
        ['12', '90,000'],
        ['13', '92,000'],
        ['14', '95,000'],
        ['15', '98,000'],
        ['16', '1,01,000'],
        ['17', '1,04,000'],
        ['18', '1,08,000'],
        ['19', '1,13,000'],
        ['20', '1,20,000'],


      ],
    },
  },

  {
    id: 3,
    amount: ' 2,00,000',
    timeline: '608 days',
    youpay: '-',
    youget: '-',
    monthlypay: '10000',
    dailypay: '500',
    weeklypay: '250',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', '1,65,000'],
        ['3', '1,66,000'],
        ['4', '1,67,000'],
        ['5', '1,68,000'],
        ['6', '1,69,000'],
        ['7', '1,70,000'],
        ['8', '1,72,000'],
        ['9', '1,74,000'],
        ['10', '1,76,000'],
        ['11', '1,78,000'],
        ['12', '1,80,000'],
        ['13', '1,84,000'],
        ['14', '1,90,000'],
        ['15', '1,96,000'],
        ['16', '2,02,000'],
        ['17', '2,08,000'],
        ['18', '2,16,000'],
        ['19', '2,26,000'],
        ['20', '2,40,000'],


      ],
    },
  },

  {
    id: 4,
    amount: ' 3,00,000',
    timeline: '608 days',
    youpay: '-',
    youget: '-',
    monthlypay: '15000',
    dailypay: '750',
    weeklypay: '3750',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', '2,47,500'],
        ['3', '2,49,000'],
        ['4', '2,50,500'],
        ['5', '2,52,000'],
        ['6', '2,53,000'],
        ['7', '2,55,000'],
        ['8', '2,58,000'],
        ['9', '2,61,000'],
        ['10', '2,64,000'],
        ['11', '2,67,000'],
        ['12', '2,70,000'],
        ['13', '2,76,000'],
        ['14', '2,85,000'],
        ['15', '2,94,000'],
        ['16', '3,03,000'],
        ['17', '3,12,000'],
        ['18', '3,24,000'],
        ['19', '3,39,000'],
        ['20', '3,60,000'],


      ],
    },
  },

  {
    id: 5,
    amount: ' 5,00,000',
    timeline: '608 days',
    youpay: '-',
    youget: '-',
    monthlypay: '25000',
    dailypay: '1250',
    weeklypay: '6250',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', '4,12,500'],
        ['3', '4,15,000'],
        ['4', '4,17,500'],
        ['5', '4,20,000'],
        ['6', '4,22,500'],
        ['7', '4,25,000'],
        ['8', '4,30,000'],
        ['9', '4,35,000'],
        ['10', '4,40,000'],
        ['11', '4,45,000'],
        ['12', '4,50,000'],
        ['13', '4,60,000'],
        ['14', '4,75,000'],
        ['15', '4,90,000'],
        ['16', '5,05,000'],
        ['17', '5,20,000'],
        ['18', '5,40,000'],
        ['19', '5,65,000'],
        ['20', '6,00,000'],


      ],
    },
  },

  {
    id: 6,
    amount: ' 10,00,000',
    timeline: '608 days',
    youpay: '-',
    youget: '-',
    monthlypay: '50000',
    dailypay: '2500',
    weeklypay: '12500',
    additionalInfo: {
      tableData: [
        ["Inst.no", "Price Amount"],
        ['1', '-'],
        ['2', '8,25,000'],
        ['3', '8,30,000'],
        ['4', '8,35,000'],
        ['5', '8,40,000'],
        ['6', '8,45,000'],
        ['7', '8,50,000'],
        ['8', '8,60,000'],
        ['9', '8,70,000'],
        ['10', '8,80,000'],
        ['11', '8,90,000'],
        ['12', '9,00,000'],
        ['13', '9,20,000'],
        ['14', '9,50,000'],
        ['15', '9,80,000'],
        ['16', '10,10,000'],
        ['17', '10,40,000'],
        ['18', '10,80,000'],
        ['19', '11,30,000'],
        ['20', '12,00,000'],


      ],
    },
  },


];

// Job data

export const jobData = [
  {
    id: 1,
    title: "HR admin",
    office: "Coimbatore",
    experience: "Experience: 5+ Years",
    description: "We are looking for a talented frontend developer to join our team and work on cutting-edge web applicatio....",
  },
  {
    id: 2,
    title: "Customer Relationship Manager(Female)",
    office: "Coimbatore",
    experience: "Experience: 5+ Years",
    description: "We are seeking a skilled UI/UX designer with a strong understanding of React to help create v....",
  },
  {
    id: 3,
    title: "Collection Manager",
    office: "Coimbatore",
    experience: "Experience: 5+ Years",
    description: "We are hiring a full-stack developer proficient in React to work on end-to....",
  },
  {
    id: 4,
    title: "Field Sales Manager ",
    office: "Coimbatore",
    experience: "Experience: 5+ Years",
    description: "Join our backend development team and work on building robust and sca....",
  },
  {
    id: 5,
    title: "Business Development executive",
    office: "Coimbatore",
    experience: "Experience: 5+ Years",
    description: "We are looking for a product manager to lead the development and relea....",
  },
  {
    id: 6,
    title: "Collection executive",
    office: "Coimbatore",
    experience: "Experience: 5+ Years",
    description: "Join our quality assurance team and help ensure the high qual....",
  },
  {
    id: 7,
    title: "Collection Manager",
    office: "Karamadai",
    experience: "Experience: 5+ Years",
    description: "We are hiring a DevOps engineer with experience in deplo....",
  },
  {
    id: 8,
    title: "Field Sales Manager",
    office: "Karamadai",
    experience: "Experience: 5+ Years",
    description: "Join our mobile app development team and work on Reac....",
  },
  {
    id: 9,
    title: "Business Development executives",
    office: "Karamadai",
    experience: "Experience: 5+ Years",
    description: "We're seeking a data analyst to work with React-bas....",
  },
  {
    id: 10,
    title: "Collection executives",
    office: "Karamadai",
    experience: "Experience: 5+ Years",
    description: "Join our customer support team and assist users of our React-powere....",
  },
  {
    id: 11,
    title: "Collection Manager",
    office: "Coonoor",
    experience: "Experience: 5+ Years",
    description: "Join our customer support team and assist users of our React-powere....",
  },
  {
    id: 12,
    title: "Field sales executives",
    office: "Coonoor",
    experience: "Experience: 5+ Years",
    description: "Join our customer support team and assist users of our React-powere....",
  },
  {
    id: 13,
    title: "Collection executives",
    office: "Coonoor",
    experience: "Experience: 5+ Years",
    description: "Join our customer support team and assist users of our React-powere....",
  },
];

// Company branch data

export const BranchData = [
  {
    id: "1",
    location: "Race Course",
    address: "1437, Ground floor Red Rose Chambers, Trichy road (Opp to welcome ITC hotel, Race course) Coimbatore-641018",
    link: "https://maps.app.goo.gl/EzD6GxfBn2mUy8HV7"
  },
  {
    id: "2",
    location: "Gounder Mills",
    address: "G11 Ground floor IndusInd bank Mayura complex, Gounder mills Coimbatore-641029",
    link: "https://maps.app.goo.gl/saPrN7RZu4JYdc5z5"
  },
  {
    id: "3",
    location: "Karamadai",
    address: "4/4, Krishna towers SRK nagar, teachers colony, Karamadai Coimbatore-641104",
    link: "https://maps.app.goo.gl/HVvpj7mi82G3xeoZ8"
  },
  {
    id: "4",
    location: "Connor",
    address: "7/1, 1st floor SS Sekar complex, Mount Road, Coonoor The Nilgiris-643102",
    link: "https://maps.app.goo.gl/KaTBZd6LdtXv9K35A"
  }
];

// My Team data

// export const people = [
//   {
//     id: 1,
//     image: img1,
//     name: "Haryy Stamper",
//     title: "manager",

//   },
//   {
//     id: 2,
//     image: img2,
//     name: "James Gun",
//     title: "Project Manager",
//   },
//   {
//     id: 3,
//     image: img3,
//     name: "Michael Mosely",
//     title: "Product Manager",
//   },
// ]


// FAQs data
export const faqsList = [
  {
    q: "What is a chitfund, and how does it work at Vanmoh ?",
    a: "  Vanmoh Chitfunds operates as a community-driven savings platform. Participants contribute a fixed amount monthly, and one member receives the total sum through a monthly auction."
  },
  {
    q: " How can I join a chitfund group at Vanmoh?",
    a: " Joining is easy! Simply register on our platform, explore available chitfund groups, and choose one that aligns with your financial goals. Follow the on-screen instructions to become a member.    "
  },
  {
    q: "What are the benefits of joining a chitfund at Vanmoh?    ",
    a: "Enjoy high returns, transparent processes, and a community-driven approach. Vanmoh Chitfunds provide a platform for financial growth, flexibility, and exciting monthly rewards.    "
  },
  {
    q: " Can I participate in more than one chitfund group simultaneously?    ",
    a: "Yes, you can! Vanmoh allows participants to join multiple chitfund groups based on their preferences and financial capacities.    "
  },
  {
    q: "How are the auction winners determined?    ",
    a: "Winners are selected through a transparent lucky draw system during the monthly auction. Every participant has an equal chance to receive the prize amount.    "
  },
]

// Features data
export const featuresData = [
  {
    iconType: 'AccountBalanceIcon',
    title: 'High Interest Loan & Low Interest Returns',

  },
  {
    iconType: 'AccountBalanceIcon',
    title: 'Upto 4% of Returns',

  },
  {
    iconType: 'AccountBalanceIcon',
    title: 'Tedious Disbursement Process',

  },
  {
    iconType: 'AccountBalanceIcon',
    title: 'More Security Documents for Loan',

  },
  {
    iconType: 'SavingsIcon',
    title: 'Low Interest Loan & High Interest Returns',

  },
  {
    iconType: 'SavingsIcon',
    title: 'Upto 12% of Returns',

  },
  {
    iconType: 'SavingsIcon',
    title: 'Simple Disbursement Process',

  },
  {
    iconType: 'SavingsIcon',
    title: 'Unsecure Loan',

  },
];


// Home page four card
export const FourCards = [
  {
    title: "Grow",
    content: " Cultivate wealth with Vanmoh chitfunds. Invest smartly, reap benefits.",
    imageSrc: growcardimg,

  },
  {
    title: "Flex",
    content: " Flexible chitfund plans tailored for your financial freedom.",
    imageSrc: flexcardimg,
  },
  {
    title: "Trust",
    content: "Transparent chitfund management fostering trust and financial clarity.",
    imageSrc: trustcardimg,
  },
  {
    title: "Thrive",
    content: "Join a community where financial growth and benefits thrive.",
    imageSrc: theivecardimg,
  },
];


// Key Features data
export const keyFeaturesData = [
  {
    title: 'Professional Excellence',
    description: 'Choose us for unmatched professionalism, ensuring trust and integrity in every financial step.',
    icon: ProfessionalImg
  },
  {
    title: 'Effortless, Doorstep Services',
    description: 'Enjoy seamless chitfund experiences with free documentation and convenient doorstep services.',
    icon: ServicesImg
  },
  {
    title: 'Unlock 20% Profit Growth',
    description: 'Opt for our savings scheme and guarantee a substantial 20% profit, maximising your financial gains',
    icon: ProfitImg
  },
  {
    title: 'Tech-Driven, App-Powered Solutions',
    description: "Experience the future of finance with our technology-driven approach, leveraging advanced apps and software for a secure and transparent financial journey",
    icon: SolutionsImg
  },
];


// Company profile details data
export const CompanyProfiles = [
  {
    id: 1,
    title: "Empowering Dreams, Enriching Lives Since 2020.",
    content:
      "Embark on a journey with Vanmoh Chitfunds, your trusted companion since September 11, 2020. We're not just about chitfunds; we're your friendly guide to stress-free financial growth. Our commitment to honesty and openness makes growing your money with us a seamless experience.",
    imageUrl: companyProfile1,
  },
  {
    id: 2,
    title: "Simplifying Finance for You.",
    content:
      "Vanmoh Chitfunds, born on September 11, 2020, is on a mission to simplify chitfund matters. Say goodbye to complicated finance talk – we're here to make growing your savings easy and fun. With fancy technology and a commitment to simplicity, managing your money becomes a breeze.",
    imageUrl: companyProfile2,
  },
  {
    id: 3,
    title: "Where Dreams Soar Since 2020.",
    content:
      "Vanmoh Chitfunds invites you to a future where dreams find a home. Operating strategically from Racecourse, Thudiyalur, Karamadai, and Coonoor, we bring chitfund solutions closer to you. Join us in a journey where dreams get a chance, and lives get a lift, since 2020.",
    imageUrl: companyProfile3,
  },

];



// Our team data
export const teamData = [
  {
    id: 1,
    name: 'Kannan Mohan',
    role: 'Managing Director',
    description: `"My goal is to make Vanmoh Chitfunds a trusted partner in your chitfund journey, ensuring 
    simplicity and prosperity for every subscriber." - Kannan Mohan `,
    image: 'https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',


  },
  {
    id: 2,
    name: 'Vanitha Mohan',
    role: 'Chairman',
    description: `"As Chairman, my commitment is to uphold the values that define Vanmoh Chitfunds -
    transparency, integrity, and dedication to your chitfund success." - Vanitha Mohan `,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',


  },

];


// About page Features Data
export const featuresDatas = [
  {
    id: 1,
    title: 'Integrity',
    content: `Our foundation rests on the pillars of honesty and ethical conduct. We believe in doing what 
    is right, even when no one is watching. This principle extends to every aspect of our 
    operations, ensuring the trust and confidence of our valued subscribers.`,
  },
  {
    id: 2,
    title: 'Transparency',
    content: `Transparency is more than a buzzword for us; it's a promise. We are dedicated to providing 
    clear, honest, and easily understandable information. From our chitfund processes to our 
    communication, we strive to be open and straightforward in all our dealings.`,
  },
  {
    id: 3,
    title: 'Customer-Centricity',
    content: `Our subscribers are at the heart of everything we do. We are committed to understanding 
    their needs, anticipating their concerns, and consistently delivering chitfund solutions that 
    exceed expectations. Our customer-centric approach ensures a personalised and rewarding 
    experience for every subscriber.`,
  },
];

// Comparisons Data
export const ComparisonsCards = [
  { id: 1, title: 'Community-Driven Growth ', description: 'Fosters collaboration for collective financial growth.' },
  { id: 2, title: 'Flexible Contribution', description: `Allows varying monthly contributions, accommodating diverse financial capacities.` },
  { id: 3, title: 'Equal Chance of Winning ', description: `Provides an equitable chance for all participants to receive the prized amount.` },
  { id: 4, title: 'Transparent Process ', description: `Follows a clear monthly auction process, ensuring transparency` },
  { id: 5, title: 'No Interest Rates ', description: `Eliminates the need for high-interest rates common in traditional savings methods` },
  { id: 6, title: 'Variety of Schemes', description: `Offers diverse schemes to cater to  individual financial goals and preferences. ` },
  { id: 7, title: 'Regulated by Chit Fund Act ', description: `Governed by a regulatory framework,  ensuring legal and secure operations. ` },
  { id: 8, title: 'No External Borrowing ', description: `Participants can access funds without  resorting to external borrowing.` },
  { id: 9, title: 'Financial Education', description: `Provides financial education through blogs  ` },
];


// Home page carousel data
export const CarouselImg = [
  {
    imageUrl: HomeSlider1,

  },
  {
    imageUrl: HomeSlider2,

  },
  {
    imageUrl: HomeSlider3,

  },
];




// data.js

// data.js

export const Benefitoptions = ['Unity in Savings', 'Crystal Clear Processes', 'Tailored to You', 'Luck is Fair', 'Guidance Beyond Savings'];

export const Benefitcontent = {
  'Unity in Savings': {
    image: BenefitImg1,
    data: [
      {
        id: 1, title: ` Vanmoh Chitfunds brings people together for shared financial growth. Your savings journey becomes a community effort, where everyone benefits from collective prosperity` },

    ],
  },
  'Crystal Clear Processes': {
    image: BenefitImg2,
    data: [
      {
        id: 2, title: ` No hidden tricks here! Vanmoh is all about clear and simple processes. Your savings are handled transparently, ensuring you always know where your money is and how it's working for you` },

    ],
  },
  'Tailored to You': {
    image: BenefitImg3,
    data: [
      {
        id: 3, title: `Your savings, your way. Vanmoh understands that one size doesn't fit all. We offer flexible savings options designed to suit your unique financial goals and preferences` },

    ],
  },
  'Luck is Fair': {
    image: BenefitImg4,
    data: [
      {
        id: 4, title: `In Vanmoh Chitfunds, luck is impartial. Our lucky draw system ensures everyone has an equal chance to be rewarded. It's a fair game where every participant stands a shot at success.`},

    ],
  },
  'Guidance Beyond Savings': {
    image: BenefitImg5,
    data: [
      {
        id: 5, title: ` Vanmoh is not just about chitfunds; it's about your financial well-being. We offer personalized guidance to empower you on your journey, making sure you have the support you need to achieve your financial dreams` },

    ],
  },
};



// data for the serveies img
export const imageServies = [
  { id: 1, src: "https://source.unsplash.com/collection/1346951/150x150?sig=1", alt: "Image 1" },
  { id: 2, src: "https://source.unsplash.com/collection/1346951/150x150?sig=2", alt: "Image 2" },
  { id: 3, src: "https://source.unsplash.com/collection/1346951/150x150?sig=3", alt: "Image 3" },
  { id: 4, src: "https://source.unsplash.com/collection/1346951/150x150?sig=4", alt: "Image 4" },
  { id: 5, src: "https://source.unsplash.com/collection/1346951/150x150?sig=5", alt: "Image 5" },
  { id: 6, src: "https://source.unsplash.com/collection/1346951/150x150?sig=6", alt: "Image 6" },
];




// data for the chit process
export const ChitProces = [
  {
    title: 'Monthly Contributions',
    content: 'Members contribute a fixed sum monthly',
  },
  {
    title: ' Auction Process',
    content: `The 'pot' is auctioned monthly`,
  },
  {
    title: 'Prize Distribution',
    content: 'A participant is prized through a lucky draw, ensuring equitable benefits from the chitfund.',
  },
];

