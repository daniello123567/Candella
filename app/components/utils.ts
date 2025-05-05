import { SetStateAction } from "react";

type u = {
  url: string,
  alt: string
}
const images: Array<u> = [
  { url: 'https://i.pinimg.com/736x/05/04/49/050449e7a4a31aa71f5a908e712b8d62.jpg', alt: 'woman in black cloth' },
  { url: 'https://framerusercontent.com/images/xLauhR5pIcD3jSEfJsZjrCzc8.png?scale-down-to=1024', alt: 'woman in black ' },
  { url: 'https://sourcingjournal.com/wp-content/uploads/2022/06/marcelo-burlon-county-of-milan-mens-ss23-028.jpeg', alt: 'woman in black-' },
  { url: 'https://framerusercontent.com/images/Xm41plWll9uX9U8FI66MvvFFHzg.png?scale-down-to=1024', alt: '23' },
  { url: 'https://i.pinimg.com/736x/d4/56/2c/d4562c920910e3121a2d228fd55d5028.jpg', alt: '2-' },
  { url: 'https://framerusercontent.com/images/6V5Ya6DiTUPrbKLquU43nXdLtrk.png?scale-down-to=1024', alt: '24' },
  { url: 'https://i.pinimg.com/236x/77/f0/3f/77f03f794193fbb11b7ad98c8c7b0d2c.jpg', alt: '25f' },
  { url: 'https://framerusercontent.com/images/sSBESgjiJWd6cwKIAmP9jb0mAY.png?scale-down-to=1024', alt: '25' },
  { url: 'https://framerusercontent.com/images/OJDNbGuzVk6A8Iq5bPpN5YtOa8.png', alt: '26' },
  { url: 'https://framerusercontent.com/images/jxfdnRKBIg3NgooyzFvJ8h4Q8Ow.png?scale-down-to=1024', alt: '27' },
  { url: 'https://framerusercontent.com/images/df5MKiO9s4Enl3fzukyit80.png?scale-down-to=1024', alt: '28' },
  { url: 'https://framerusercontent.com/images/dOwh3KUyFEZINS7C79VAPWph28M.png?scale-down-to=1024', alt: '29' },
  { url: 'https://framerusercontent.com/images/w2y9F3Ob15aIghBkLtfHEAHKoqI.png?scale-down-to=1024', alt: '30' },
];
type product = {
  id: number,
  price: number,
  imageUrl: string,
  category: string,
  name: string,
  currentCart?: Array<Cartz>,
  setCart?: React.Dispatch<SetStateAction<Array<Cartz>>>
}

const products: Array<product> = [
  {
    id: 1,
    price: 1000,
    imageUrl: 'https://i.pinimg.com/736x/22/25/11/2225119ae6356d0390975f3c431bf49e.jpg',
    category: 'clothing',
    name: 'Colorful style dress'
  },
  {
    id: 2,
    price: 540,
    imageUrl: 'https://i.pinimg.com/736x/b9/08/a5/b908a5040570e4bc5be5f724d80ff82f.jpg',
    category: 'shoes',
    name: 'Cool street sneakers'
  },
  {
    id: 3,
    price: 899,
    imageUrl: 'https://i.pinimg.com/474x/9c/bb/0b/9cbb0b3b291714561ed6ae50c45f320a.jpg',
    category: 'clothing',
    name: 'Hoodie'
  },
  {
    id: 4,
    price: 50,
    imageUrl: 'https://framerusercontent.com/images/w2y9F3Ob15aIghBkLtfHEAHKoqI.png?scale-down-to=1024',
    category: 'clothing',
    name: 'Fashion Designed'
  },
  {
    id: 5,
    price: 100,
    imageUrl: 'https://www.stylingoutfits.com/wp-content/uploads/2024/09/Radiant-Red-The-Bold-Statement.jpg',
    category: 'clothing',
    name: 'Rainbow Dress'
  },
  {
    id: 6,
    price: 304,
    imageUrl: 'https://i.pinimg.com/736x/05/04/49/050449e7a4a31aa71f5a908e712b8d62.jpg',
    category: 'clothing',
    name: 'Cool Male Dress'
  },
  {
    id: 7,
    price: 278,
    imageUrl: 'https://i.pinimg.com/originals/db/75/8f/db758fe555d2f1426726589d1eafaf65.jpg',
    category: 'clothing',
    name: 'Yoruba Lace Dress'
  },
  {
    id: 8,
    price: 210,
    imageUrl: 'https://i.pinimg.com/736x/4a/1b/f2/4a1bf2ce23a5fc761a460fed47d0e03c.jpg',
    category: 'clothing',
    name: 'African Clothing - agbada'
  },
  {
    id: 9,
    price: 999,
    imageUrl: 'https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20729lf.905.jpg',
    category: 'clothing',
    name: 'White Female Dress'
  },
  {
    id: 10,
    price: 12000,
    imageUrl: 'https://i.pinimg.com/736x/86/da/3b/86da3be2cff60e372db21e39c467b304.jpg',
    category: 'clothing',
    name: 'Baggy Hoody'
  },
];
type Cartz = {
  id: number,
  quantity: number,
}
const addToCart = (idOfProduct: number, currentCart: Array<Cartz> | undefined, setCartFunc: React.Dispatch<SetStateAction<Array<Cartz>>> | undefined) => {
  if (currentCart && setCartFunc)
    setCartFunc([...currentCart, { id: idOfProduct, quantity: 1 }]);
}

type V = {totalPrice:number}
const getAllTotal = (cart: Array<Cartz>) => {
  const stuffs:Array<V> = [];
  cart.forEach((item) => {
    products.find((product)=>{
      if(product.id===item.id){
        stuffs.push({totalPrice:item.quantity*product.price})
      }
    })
  });
 let sum:number=0;
 for(let i =0;i<stuffs.length;i++){
  sum+=stuffs[i].totalPrice;
 }
 return sum;
}
export { images, type u, type product, products, type Cartz, addToCart, getAllTotal }
