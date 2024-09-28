import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'SEO Title page',
	description: 'SEO Description Pricing',
	keywords: ['pricing', 'jesus '],
}

export default function PricingPage() {
	return (
		<>
			<span className="text-7xl">Pricing Page</span>
		</>
	)
}
