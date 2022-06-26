import {Button} from '../../components'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    function themeChanger() {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;
        
        if (currentTheme === 'dark') {
            return (
            <Button className='rounded-full flex items-center justify-center' onClick={() => setTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                </svg>
            </Button> 
            )
        }else{
            return (
                <Button className='rounded-full flex items-center justify-center' onClick={() => setTheme('dark')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </Button>  
            )
        }
    }

    return(
        <header className="fixed flex flex-row h-fit w-full border-b-2 border-gray-300 dark:border-gray-800 items-center justify-around p-3 bg-black dark:bg-gray-700 bg-opacity-5">
            <div>
                <Link href={'/'}><a className='text-4xl'>Lucas S. Dias</a></Link>
            </div>
            <div className='space-x-5'>
                <Link href={'#about'}><Button>Sobre mim</Button></Link>
                <Link href={'#skills'}><Button>Habilidades</Button></Link>
                <Link href={'#projects'}><Button>Projetos</Button></Link>
                <Link href={'#contact'}><Button>Contato</Button></Link>
            </div>
            <div>
                {themeChanger()}
            </div>
        </header>
    )
}