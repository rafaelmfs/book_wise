import logoSVG from '@/assets/Logo.svg'
import Image from 'next/image'

export function Logo() {
  return <Image src={logoSVG} alt='' />
}