import React from 'react'
import './ComponentsCss/SideBarCss.css'
import SideBarSearch from './SideBarSearch';
import Conversations from './Conversations';
import useFetch from '../FetchData/useFetch';
import WaitingToFetch from './WaitingToFetch';
import { useSelector} from 'react-redux'
import ErrorGettingFriends from './ErrorGettingFriends';
import SideBarSettings from './SideBarSettings';
import NoChatSelected from './NoChatSelected';
function SideBar() {
    const { error, isPending, data: users } = useFetch('http://localhost:4000/users')
    const light = useSelector(state=>state.LightState.value);
    let color = useSelector(state => state.ColorState.second);
    let findNewFriends = useSelector(state => state.FindNewFriendState.value);
  return (
    //Streotype : 
    // MyButton we will pass :
    // 1- icon.
    // 2- color of the button.
    // 3- id of button
    // 4- method that will launch after click on the icon button.
    // 5- value is the argument that the method will use.
    <div className='SideBar' style = {light ? {backgroundColor : color.light} : {backgroundColor : color.dark}}>
        {findNewFriends == false ?
        <>
            <SideBarSettings/>
            <SideBarSearch/>
            { users ? <Conversations users={users} /> : (error) ? <ErrorGettingFriends/> : <WaitingToFetch/> }
        </> 
        :
        <NoChatSelected/>}
    </div>
  )
}

export default SideBar


{/* 



*/}