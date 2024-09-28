import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
	{ id: 1, path: '/about', text: 'About' },
	{ id: 2, path: '/pricing', text: 'Pricing' },
	{ id: 3, path: '/contac', text: 'Contac' },
]

export const Navbar = () => {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link href={'/'} className="flex items-center">
				<HomeIcon className="mr-2" />
				<span>Home</span>
			</Link>
			<div className="flex flex-1"></div>

			{navItems.map(navItem => (
				<ActiveLink key={navItem.id} path={navItem.path} text={navItem.text} />
			))}
		</nav>
	)
}
