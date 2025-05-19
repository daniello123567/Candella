"use client"
import { Header,Video,Design,Shop, Basket } from "./components/components"
import { useState } from "react"
import { Cartz } from "./components/utils"
const Footer = ()=>{
  return (<>
  <footer className="text-sm text-neutral-500 dark:text-neutral-400">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700"><div>
      <p className="flex items-center gap-2 text-black md:pt-1 dark:text-white" >
    <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[30px] w-[30px] rounded-lg">
      C</div>
    <span className="uppercase">CANDELLA stores.</span>
    </p></div><nav><ul><li>
        <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="">Terms &amp; Conditions</a></li><li>
      <p className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 text-black dark:text-neutral-300" >Home</p></li><li>
      <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="">About</a></li><li>
        <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="">Shipping &amp; Return Policy</a></li><li>
          <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="">Privacy Policy</a></li><li>
          <a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300" href="">FAQ</a></li></ul></nav><div className="md:ml-auto">
            </div></div><div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                <p>© 2023-2025 Candella, Inc. All rights reserved.</p>
                <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block"/>
                </div></div>
              </footer></>)
}
export default function Home(){
  const [ToggleCart,setToggleCart] = useState<boolean>(false)
  const [cart,setCart] = useState<Array<Cartz>>([]);
  const [showSearchBar,setShowSideBar] = useState<boolean>(false)
   return <div className="pt-[5em] w-full overflow-hidden">
     <Header showSearchBar={showSearchBar} setShowSideBar={setShowSideBar} CartLength={cart.length} currentState={ToggleCart}  ToggleFunc={setToggleCart}/>
{/*      <Video/> */}
     <Design/>
     <Shop showSearchBar={showSearchBar} setShowSideBar={setShowSideBar} setCart={setCart} currentCart={cart}/>
     {ToggleCart&&<Basket setCart={setCart} cart={cart} setState={setToggleCart} currentState={ToggleCart}/>}


 <Footer/>
   </div>
};
