import React from 'react'
import * as FiIcons from "react-icons/fi"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: "Single Player",
        path: '/singleplayer',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: "Multi Player",
        path: '/multiplayer',
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
    {
        title: "Leaderboard",
        path: '/leaderboard',
        icon: <MdIcons.MdOutlineLeaderboard />,
        cName: 'nav-text'
    },
    {
        title: "Settings",
        path: '/settings',
        icon: <FiIcons.FiSettings />,
        cName: 'nav-text'
    }
]
