import p13 from './p13.jpg';
import p14 from './p14.jpg';
import p15 from './p15.jpg';
import p16 from './p16.jpg';
import p17 from './p17.jpg';
import p18 from './p18.jpg';
import p19 from './p19.jpg';
import p20 from './p20.jpg';
import p21 from './p21.jpg';
import p22 from './p22.jpg';
import p23 from './p23.jpg';
import p24 from './p24.jpg';
import p25 from './p25.jpg';
import p26 from './p26.jpg';
import p27 from './p27.jpg';
import p28 from './p28.jpg';
import p29 from './p29.jpg';
import p30 from './p30.jpg';
import p31 from './p31.jpg';
import p32 from './p32.jpg';
import p33 from './p33.jpg';
import p34 from './p34.jpg';
import p35 from './p35.jpg';
import p36 from './p36.jpg';
import p37 from './p37.jpg';
import p38 from './p38.jpg';
import p5 from './p5.jpg';
import p6 from './p6.jpg';
import p7 from './p7.jpg';
import p8 from './p8.jpg';
import p9 from './p9.jpg';
import p10 from './p10.jpg';
import p11 from './p11.jpg';
import p12 from './p12.jpg';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
let all_product =[
  {
    id:1,
    name:" Kaya women  black and blue sweater",
    category:"Womens",
    image:p13,
    new_price:800.00,
    old_price:950.00,
  },
  {
    id:2,
    name:" Korean beauty white trendy top",
    category:"Womens",
    image:p14,
    new_price:400.00,
    old_price:550.00,
  },
  {
    id:3,
    name:" Ruby white  with black dots top",
    category:"Womens",
    image:p15,
    new_price:400.00,
    old_price:450.00,
  },
  {
    id:4,
    name:" Jipsy plane purple top",
    category:"Womens",
    image:p16,
    new_price:400.00,
    old_price:950.00,
  },
  {
    id:5,
    name:" Zeptoo rainbow top",
    category:"Womens",
    image:p17,
    new_price:400.00,
    old_price:550.00,
  },
  {
    id:6,
    name:" Kanipuram women classic fit and flare Dress",
    category:"Womens",
    image:p18,
    new_price:300.00,
    old_price:550.00,
  }, {
    id:7,
    name:" Kanipuram women  whitec sweater",
    category:"Womens",
    image:p19,
    new_price:400.00,
    old_price:500.00,
  },
  {
    id:8,
    name:" Kanipuram grey full sleeves top",
    category:"Womens",
    image:p20,
    new_price:400.00,
    old_price:550.00,
  },
  {
    id:9,
    name:" Kaya white Floral top",
    category:"Womens",
    image:p21,
    new_price:400.00,
    old_price:900.00,
  }, {
    id:10,
    name:" Money blue white shaded top",
    category:"Womens",
    image:p22,
    new_price:500.00,
    old_price:550.00,
  },
  {
    id:11,
    name:" XXX men's maroon casual shirt",
    category:"Mens",
    image:p23,
    new_price:200.00,
    old_price:500.00,
  },
  {
    id:12,
    name:" Diva associates white and blue shirt",
    category:"Mens",
    image:p24,
    new_price:400.00,
    old_price:500.00,
  }, {
    id:13,
    name:" Riva casual blue shirt",
    category:"Mens",
    image:p25,
    new_price:400.00,
    old_price:550.00,
  },
  {
    id:14,
    name:" Lions brown shirt",
    category:"Mens",
    image:p26,
    new_price:400.00,
    old_price:700.00,
  },
  {
    id:15,
    name:" Kbeauty casual wear shirt",
    category:"Mens",
    image:p27,
    new_price:500.00,
    old_price:950.00,
  },
  {
    id:16,
    name:" pretty casual wear shirt ",
    category:"Mens",
    image:p28,
    new_price:300.00,
    old_price:500.00,
  },
  {
    id:17,
    name:" Maroon casual shirt",
    category:"Mens",
    image:p29,
    new_price:400.00,
    old_price:550.00,
  },
  {
    id:18,
    name:" Pramod white casual shirt",
    category:"Mens",
    image:p30,
    new_price:450.00,
    old_price:650.00,
  },
  {
    id:19,
    name:" Pretty cute frock",
    category:"Kids",
    image:p31,
    new_price:800.00,
    old_price:950.00,
  },
  {
    id:20,
    name:"Cuty beauty white frock ",
    category:"Kids",
    image:p32,
    new_price:300.00,
    old_price:350.00,
  },
  {
    id:21,
    name:" Rayns tshirt with shorts ",
    category:"Kids",
    image:p33,
    new_price:400.00,
    old_price:450.00,
  },
  {
    id:22,
    name:" Kanipuram pink kurta",
    category:"Kids",
    image:p34,
    new_price:300.00,
    old_price:550.00,
  },
  {
    id:23,
    name:" Peace marron white frock",
    category:"Kids",
    image:p35,
    new_price:500.00,
    old_price:650.00,
  },
  {
    id:24,
    name:" Kaya frock Dress",
    category:"Kids",
    image:p36,
    new_price:240.00,
    old_price:300.00,
  },
  {
    id:25,
    name:" Money pink frock",
    category:"Kids",
    image:p37,
    new_price:200.00,
    old_price:300.00,
  },
  {
    id:26,
    name:" oooo frock with coat",
    category:"Kids",
    image:p38,
    new_price:440.00,
    old_price:550.00,
  },
  {
    id:31,
    name:" Deidad women's regular fit top",
    category:"Womens",
    image:p5,
    new_price:400.00,
    old_price:550.00,

  },
  {
    id:32,
    name:" Leriya fashion western top",
    category:"Womens",
    image:p6,
    new_price:300.00,
    old_price:500.00,

  },
  {
    id:33,
    name:"Boldfit pufer jacket for men winter wear ",
    category:"Mens",
    image:p7,
    new_price:500.00,
    old_price:900.00,

  },
  {
    id:34,
    name:" XXXX men's Cruze french terry cotton regular fit zip-up jacket",
    category:"Mens",
    image:p8,
    new_price:500.00,
    old_price:550.00,

  },
  {
    id:35,
    name:"Kaya women black top",
    category:"Womens",
    image:p9,
    new_price:200.00,
    old_price:450.00,

  },
  {
    id:36,
    name:" tira men's formal shirt",
    category:"Mens",
    image:p10,
    new_price:900.00,
    old_price:950.00,

  },
  {
    id:37,
    name:" XXXX men's terry cotton regular fit zip-up jacket",
    category:"Mens",
    image:p11,
    new_price:100.00,
    old_price:200.00,

  },
  {
    id:38,
    name:" XXXX men's red terry cotton regular fit zip-up jacket",
    category:"Mens",
    image:p12,
    new_price:400.00,
    old_price:500.00,

  },
  {
    id:27,
    name:" Kanipuram women classic fit and flare Dress",
    category:"Womens",
    image:p1,
    new_price:400.00,
    old_price:550.00,

  },
  {
    id:28,
    name:" Ruby women casual flower print puff sleeves maxi dress",
    category:"Womens",
    image:p2,
    new_price:300.00,
    old_price:450.00,

  },
  {
    id:29,
    name:"Rytra womens's embroidered regular top",
    category:"Womens",
    image:p3,
    new_price:200.00,
    old_price:300.00,

  },
  {
    id:30,
    name:"Sheeetal Associates women casual puff sleeves floral print peplum top",
    category:"Womens",
    image:p4,
    new_price:100.00,
    old_price:250.00,

  }
];
export default all_product;