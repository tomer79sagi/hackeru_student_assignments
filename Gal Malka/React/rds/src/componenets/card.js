import React from 'react'
import './card.css'
import * as Biicons from "react-icons/bi"
import * as Giicons from "react-icons/gi"

export default function Card(props) {
  return (
    <div className='card'>
        <div className='card-content'>
            {props.text}
            <div>
              {props.icon == "shield" ? <Biicons.BiShieldAlt2 className='icon' /> : null}
              {props.icon == "gun" ? <Giicons.GiPistolGun className='icon' /> : null}
              {props.icon == "reload" ? <Giicons.GiMachineGunMagazine className='icon' /> : null}
              {props.value}
            </div>
        </div>
    </div>
  )
}
