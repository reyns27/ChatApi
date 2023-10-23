import React from 'react'
import ChatHeader from './components/ChatHeader'
import { ChatList } from './components/ChatList'
import { ChatMessage } from './components/ChatMessage'

const DashboardChat = () => {
    return (
        <div className="container mx-auto shadow-lg rounded-lg ">
            <ChatHeader />
            {/* Chatting */}
            <div className="flex flex-row justify-between bg-white">
                <ChatList />
                <ChatMessage />
            </div>
        </div>
    )
}

export default DashboardChat
