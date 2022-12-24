import React from 'react'
import * as FiIcons from "react-icons/fi"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: "SinglePlayer",
        path: '/singleplayer',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: "MultiPlayer",
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
