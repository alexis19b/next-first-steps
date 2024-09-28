import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'SEO Title',
	description: 'SEO Description',
	keywords: ['About page', 'Jesus', 'informacion'],
}

export default function ContacPage() {
	return (
		<>
			<span className="text-7xl">Contac Page</span>
		</>
	)
}
