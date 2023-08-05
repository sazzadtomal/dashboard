import React, {useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';
import avatar from '../data/avatar.jpg';
import { useStateContext } from '../contexts/ContextProvider';



const Navbar = () => {

  
  const {currentColor,activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}=useStateContext();
  useEffect(()=>{
    const handleSize=()=>{
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize);

    handleSize();

    return ()=>{
      window.removeEventListener("resize", handleSize)
    }
  },[])


  useEffect(()=>{
      if(screenSize<=900){
        setActiveMenu(false)
      }
      else{
        setActiveMenu(true)
      }
  },[screenSize])




  const NavButton=({title, customFunc,icon,color,dotColor})=>{
       return (<TooltipComponent title={title}>
        <button type='button' onClick={customFunc} style={{color:color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
          <span className='absolute inline-flex rounded-full h-2 w-2 right-2 pt-2' style={{ background: dotColor }}></span>
          {icon}
        </button>
       </TooltipComponent>)
  }


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" color={currentColor} icon={<AiOutlineMenu/>} customFunc={()=>{
        setActiveMenu((prevActiveMenu)=>!prevActiveMenu)
      }}/>
      <div className='flex'>
      <NavButton title="Cart" color={currentColor} icon={<FiShoppingCart/>} customFunc={()=>{
          handleClick("cart")
      }}/>
      <NavButton dotColor="#03C9D7" title="Chat" color={currentColor} icon={<BsChatLeft/>} customFunc={()=>{
          handleClick("chat")
      }}/>
      <NavButton dotColor="#03C9D7" title="Notifications" color={currentColor} icon={<RiNotification3Line/>} customFunc={()=>{
          handleClick("notification")
      }}/>


      <TooltipComponent content="Profile" position='BottomCenter'>
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={()=>{}}>
          <img src={avatar} className='rounded-full w-8 h-8 '/>
          <p><span className='text-gray-400 text-14'>Hi</span>
             <span className='text-gray-400 font-bold  ml-1 text-14'>Micheal</span></p>
             <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>
            {isClicked.cart && <Cart/>}
            {isClicked.chat && <Chat/>}
            {isClicked.notification && <Notification/>}
            {isClicked.userProfile && <UserProfile/>}


      </div>
    </div>
  )
}

export default Navbar