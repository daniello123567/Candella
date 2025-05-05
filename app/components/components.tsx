"use client"
import Image from "next/image"
import { u, images, product, products, addToCart, Cartz, getAllTotal } from './utils'
import { DM_Sans, Geist } from "next/font/google"
import React, { SetStateAction, useEffect, useState } from "react"


const geist = Geist({ subsets: ['latin'] })
const Dm = DM_Sans({ subsets: ['latin'] });

const LogoName = () => {
  return <div className="text-[1rem] font-bold">CANDELLA</div>
}
const Cart = ({ setToggle, currentState, cartStat }: { cartStat: number, currentState: boolean, setToggle: React.Dispatch<SetStateAction<boolean>> }) => {
  return (<div onClick={() => { setToggle(!currentState) }} className="w-[2.75em] cursor-pointer relative border border-[#e5e7eb] flex rounded justify-center items-center h-[2.75em]">
    {cartStat > 0 && <div className="absolute bg-blue-700 text-[0.6875em] top-[-.6em] right-[-.6em] text-white rounded px-[.4em]">{cartStat}</div>}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 transition-all ease-in-out hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
  </div>)
}
const Header = ({ ToggleFunc, currentState, CartLength, setShowSideBar, showSearchBar }: { showSearchBar: boolean, setShowSideBar: React.Dispatch<SetStateAction<boolean>>, CartLength: number, ToggleFunc: React.Dispatch<SetStateAction<boolean>>, currentState: boolean }) => {

  return (<div className="h-[5.0625em] text-center z-50 fixed top-0 left-0 right-0 px-[.92em] bg-[rgb(245,245,245)] border-b border-b-[#0000000D] flex flex-row gap-[0.625em] items-center justify-between w-full ">
    <LogoName />
    <div className="flex items-center gap-4">
      <svg onClick={() => setShowSideBar(!showSearchBar)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
      <Cart cartStat={CartLength} currentState={currentState} setToggle={ToggleFunc} />

    </div>
  </div>)
}

const SearchBar = ({ handleSearch, setShowSideBar, showSearchBar }: { setShowSideBar: React.Dispatch<SetStateAction<boolean>>, showSearchBar: boolean, handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return <div className="flex mt-[1em] w-full h-fit justify-center">

    <div className="fixed rounded-full overflow-hidden flex justify-center items-center z-50 top-[7em] w-[90%]  shadow-sm bg-white/50 backdrop-blur-xl  border-neutral-200 border h-[3em]">
      <div className="w-full h-fit relative">
        <svg onClick={() => setShowSideBar(!showSearchBar)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 transition-all z-50 absolute right-[.9em] ease-in-out hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
        <input onChange={(e) => { handleSearch(e) }} className="placeholder:text-sm relative w-full h-full px-[1.5em] focus:outline-none" placeholder="search" />
      </div>
    </div>
  </div>
}
const Video = () => {
  return (<div className="h-screen bg-blue-500 w-full">
    <img alt='video' className="h-full object-cover w-full" width={500} height={500} src={'https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images//ezgif.com-video-to-gif-converter.gif'}/>
  </div>)
}
const ImageCard = (image: u) => {
  return (<div className="h-[20.375em] lg:h-[11.125em] lg:w-[7.41625em] rounded-[0.25em] bg-blue-500 w-[13.583em]">
    <Image className="w-full h-full rounded-[0.25em]  object-cover" width={500} height={500} src={image.url} alt={image.alt} />
  </div>)
}
const Shop = ({ currentCart, setCart, setShowSideBar, showSearchBar }: { setShowSideBar: React.Dispatch<SetStateAction<boolean>>, showSearchBar: boolean, currentCart: Array<Cartz>, setCart: React.Dispatch<SetStateAction<Array<Cartz>>> }) => {
  const [Allproducts, setproducts] = useState<Array<product>>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  useEffect(() => {
    const Shop = document.getElementById('shop');
    if (searchTerm) {
      const results = Allproducts.filter(product => (product.name.toLowerCase()).includes(searchTerm.toLowerCase()));
      setproducts([...results]);
      Shop?.scrollIntoView({ behavior: 'smooth' })
    } else setproducts([...products]);


  }, [searchTerm])
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }


  return <div id="shop" className="h-fit p-[1.5em] bg-[rgb(245,245,245)]">
    <p className="text-center text-[1.875em] font-[700]">ELEVATING YOUR STYLE GAME</p>
    <p className="text-[0.75em] text-center uppercase mt-[0.625em] leading-[18px] font-[400]">Discover the Perfect Blend of Comfort and Trend with Our Exclusive Collection. Explore Deals on Jeans, Sneakers, and More!</p>
    {showSearchBar && <SearchBar setShowSideBar={setShowSideBar} showSearchBar={showSearchBar} handleSearch={handleSearch} />}

    {Allproducts.length>0?<div className="w-full grid md:grid-cols-3 mt-[3em] lg:gap-12 grid-cols-2 gap-10">
      {Allproducts.map((product: product) => {
        return <Product currentCart={currentCart} setCart={setCart} id={product.id} category={product.category} key={product.id} price={product.price} name={product.name} imageUrl={product.imageUrl} />
      })}
    </div>:<div className={`text-center w-full flex justify-center ${Dm.className}`}>No Result on &quot;{searchTerm}&quot;</div>}
  </div>
}
const Design = () => {
  return (<section className="bg-[rgb(245,245,245)] py-[3.125em] text-[#333333]   w-full ">
    <div className="text-center  flex flex-col justify-center items-center">
      <p className="text-[0.75em] font-[700]">WELCOME TO</p>
      <p className="text-[1.875em]  mt-[0.600em] font-[800] md:text-[2.5em]">CANDELLA</p>
    </div>
    <div className="mt-[3.125em]  lg:animate-none animate-scroll animate-infinite-scroll translate-x-[-2em] overflow-x-hidden flex flex-row w-fit  gap-[1.25em] items-center ">
      {images.map((image: u) => {
        return <ImageCard key={image.alt} url={String(image.url)} alt={image.alt} />
      })}
    </div>
  </section>)
}
const IncreaseQty = (cart: Array<Cartz>, id: number, setCart: React.Dispatch<SetStateAction<Array<Cartz>>>) => {
  const Arr = cart.map((product) => {
    if (product.id == id) {
      return { ...product, quantity: product.quantity += 1}
    } else return product;
  });

  setCart([...Arr]);

}
const DecreaseQty = (cart: Array<Cartz>, id: number, setCart: React.Dispatch<SetStateAction<Array<Cartz>>>) => {
  const DecreasedQtyArr = cart.map((product) => {
    if (product.id == id && product.quantity !== 1) {
      return { ...product, quantity: product.quantity -= 1 };
    } else return product;
  });
  setCart([...DecreasedQtyArr]);
}
const IncrementBtn = ({ id, currentQty, cart, setCart}: {id: number, cart: Array<Cartz>, setCart: React.Dispatch<SetStateAction<Array<Cartz>>>, currentQty: number }) => {
  return (<div className="w-[6.125em] px-[0.7em] flex justify-between items-center border-neutral-200 border rounded-full  h-[2.25em]">
    <button onClick={() => DecreaseQty(cart, id, setCart)} className="h-[1em] flex justify-center items-center  w-[1em]">-</button>
    <span className="h-[1em] flex justify-center items-center  w-[1em]">{currentQty}</span>
    <button onClick={() => IncreaseQty(cart, id, setCart)} className="h-[1em] flex justify-center items-center  w-[1em]">+</button>
  </div>)
}


const ProductBasket = ({ productid, cart, setCart }: { setCart: React.Dispatch<SetStateAction<Array<Cartz>>>, productid: number, cart: Array<Cartz> }) => {
  const productInfo = products.find(prod => prod.id === productid);
  const productInfo2 = cart.find(prod => prod.id === productid);
  if (productInfo && productInfo2) {
    const { name, price, imageUrl, category } = productInfo;
    const { quantity,id } = productInfo2;
    const removeFromCart = (id:number)=>{
        const newCart = cart.filter(product=>product.id!==id);
        setCart([...newCart])

    }
    return <div className={`${geist.className} border-b py-[1em] px-[0.25em] flex justify-between w-full h-[6.0625em] border-[#D4D4D4]`}>
      <div className="w-[14.034375em] flex justify-between flex-row items-start h-full">
        <div className="w-[3.875em] relative bg-yellow-500 rounded-md h-[3.875em]">
          <Image width={500} className="w-full rounded-md h-full object-cover" height={500} src={imageUrl} alt={name} />
         <div onClick={()=>removeFromCart(id)} className="absolute cursor-pointer flex justify-center items-center bg-neutral-500 top-[-.5em] left-[-.4em] w-[1.5em] h-[1.5em] rounded-full ">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mx-[1px] h-4 w-4 text-white dark:text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
         </div>
        </div>
        <div className="w-[9.534375em] flex flex-col text-left">
          <p className="leading-tight">{name}</p>
          <p className="text-sm text-neutral-500">{category}</p>
        </div>
      </div>

      <div className="w-[6.125em] flex flex-col justify-between  text-sm h-full">
        <p>${(price * quantity).toFixed(2)} USD</p>
        <IncrementBtn id={productid} cart={cart} setCart={setCart} currentQty={quantity} />
      </div>

    </div>
  }
}


const NocartYet = ()=>{
  return <div className="h-full flex flex-col justify-center items-center w-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-[5em] transition-all ease-in-out hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
            <p className="text-sm mt-[.8em] font-bold">Cart Is Empty!</p>
  </div>
}
const Basket = ({ cart, setCart, currentState, setState }: { cart: Array<Cartz>, setCart: React.Dispatch<SetStateAction<Array<Cartz>>>, currentState: boolean, setState: React.Dispatch<SetStateAction<boolean>> }) => {
  const [Total,setTotal] = useState<number>(0);
  useEffect(()=>{
    setTotal(getAllTotal(cart));
   },[cart])
  return (

    <div className="flex md:justify-end  md:mr-1.5 justify-center">
      <div className="h-[95%]   overflow-y-auto rounded-[.8em]  z-50 top-[2%] fixed  flex flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white w-[95%] ">
        <div className="flex mb-[1em] justify-between items-center">
          <p className="text-[.9rem] font-semibold "></p>
          <div onClick={() => setState(!currentState)} className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-6 transition-all ease-in-out hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
          </div>
        </div>
        <div className="w-full h-full relative">
        {cart.length > 0 ? cart.map((prod: Cartz) => {
          return <ProductBasket setCart={setCart} cart={cart} productid={prod.id} key={prod.id} />

        }) : <NocartYet/>}
 {cart.length>0&&<div className="absolute bottom-0 w-full">
 <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700"><p>Total</p><p className="text-right text-base text-black dark:text-white">${Total.toFixed(2)}<span className="ml-1 inline">USD</span></p></div>
<button className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100" type="submit">Proceed to Checkout</button>
</div>}
</div>
      </div></div>)
};
const isInCart = (id: number, cart: Array<Cartz> | undefined) => {
  const prod = cart?.find(product => product.id === id);
  if (prod) {
    return true
  } else return false
}
const RemoveFromCart = (id: number, cart: Array<Cartz> | undefined, setCart?: React.Dispatch<SetStateAction<Array<Cartz>>>) => {
  const newArr = cart?.filter(product => product.id !== id);
  if (newArr && setCart)
    setCart([...newArr]);
}
const Product = ({ price, imageUrl, category, name, id, currentCart, setCart }: product) => {
  return <div className=" lg:w-[21.375em] lg:h-[34.25em] flex flex-col w-full lg:justify-between h-[22.25em]">
    <div className="h-[14em] lg:h-[70%] w-full">
      <Image width={500} height={500} alt={name} className="w-full h-full object-cover" src={imageUrl} />
    </div>
    <div className={`h-[8.25em] ${Dm.className} md:p-4 p-[0.5em]`}>
      <p className="text-base md:text-lg  truncate">
        <span className="font-semibold">{name}</span>
        <br></br>
        <span className="text-muted-foreground text-xs">{category}</span>
        <br></br>
        <span className="text-xl font-semibold">${price.toFixed(2)}</span>
      </p>
      <button onClick={() => {
        if (!isInCart(id, currentCart)) {
          addToCart(id, currentCart, setCart);
        } else RemoveFromCart(id, currentCart, setCart)
      }} className="px-4 lg:mt-[.9em] cursor-pointer border text-sm font-semibold hover:opacity-70 transition duration-500 active:scale-75 disabled:pointer-events-none disabled:opacity-50 flex gap-3 justify-center items-center bg-white border-gray-400 py-1.5 rounded-none text-gray-900 max-md:mt-2 max-md:text-xs max-md:w-full">Add{isInCart(id, currentCart) ? 'ed' : ''} to cart</button>
    </div>
  </div>
}
export { Header, Video, Design, Shop, Basket, SearchBar }
