import brokerCDImg from "../assets/img/brokercd.jpeg";
import moneyMarketImg from "../assets/img/moneymarket.jpeg";
import tbillImg from "../assets/img/tbill.jpeg";
export const PRODUCTS = [
  {
    id: 0,
    name: "Certificate of deposite",
    image: brokerCDImg,
    featured: false,
    description:
      "A certificate of deposit (CD) is a type of financial instrument offered by banks and credit unions that allows individuals to earn a fixed rate of interest on their deposited funds over a specific period of time. CDs are considered a low-risk investment option as they are insured by the Federal Deposit Insurance Corporation (FDIC) up to a certain amount.",
  },
  {
    id: 1,
    name: "Money Market",
    image: moneyMarketImg,
    featured: false,
    description:
      "A money market fund is a type of mutual fund that invests in short-term, low-risk securities such as government bonds, commercial paper, and certificates of deposit. Money market funds are designed to provide investors with a relatively safe and liquid investment option that offers a slightly higher return than a traditional savings account.",
  },
  {
    id: 2,
    name: "Government issues",
    image: tbillImg,
    featured: true,
    description:
      "Government debt, also known as public debt or sovereign debt, refers to the amount of money that a government owes to its creditors. Governments borrow money to finance their operations, such as building infrastructure, providing social services, and funding their military.",
  },
];
