import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'SEO Title Abou',
	description: 'SEO Descripcion aboy my page',
	keywords: ['my page', 'about keyword'],
}

export default function AboutPage() {
	return <span className="text-7xl">About Page</span>
}
