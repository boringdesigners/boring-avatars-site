import React from 'react'
import { Button } from '@/components/ui/Button'
import Avatar from 'boring-avatars'
import './styles.css'

/** @param {{ name: any; colors: any; variant: any; img: any; square?: boolean }} props */
const ExampleProfile = ({ name, colors, variant, img, square }) => {
  return (
    <div className="card">
      <div className="profile-avatar-wrapper">
        <header>
          <img src={img} alt="background" />
        </header>
        <div>
          <Avatar name={name} size="72" variant={variant} colors={colors} square={square} />
          <h4>{name}</h4>
          <small>1.2M followers · 451 following</small>
          <Button>Follow</Button>
        </div>
      </div>
    </div>
  )
}

export default ExampleProfile
