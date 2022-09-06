import React from 'react'
import Logo from '../components/icons/Logo'
import LogoGreen from '../components/icons/LogoGreen'
import LogoSimple from '../components/icons/LogoSimple'

export default {
  title: 'Icons',
  component: Logo,
}

export const DefaultLogo = () => <Logo className="h-[100px]" />

export const GreenLogo = () => <LogoGreen className="h-[100px]" />

export const SimpleLogo = () => <LogoSimple className="h-[100px]" />
