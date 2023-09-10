import './header.scss'
import Image from 'next/image'
import portrait from '../../public/portrait.png'
import downArrow from '@/svgs/down-arrow.svg'

export const Header = () => (
      <header className='flex flex-col items-center'>
        <h1>Benjamin Knox</h1>
        <h2>A Blend of Professionalism and Authenticity</h2>
        <Image 
          className='portrait'
          width={219.45}
          src={portrait}
          alt="Picture of the Benjamin Knox"
        />
        <Image 
          className='down-arrow'
          alt="down arrow"
          src={downArrow}
        />
      </header>
    )
