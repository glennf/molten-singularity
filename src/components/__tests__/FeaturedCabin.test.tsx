import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FeaturedCabin from '../FeaturedCabin'

describe('FeaturedCabin', () => {
    it('renders the main heading', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText(/The Crystal/i)).toBeInTheDocument()
        expect(screen.getByText(/Sanctuary/i)).toBeInTheDocument()
    })

    it('renders the cabin of the month badge', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText('Cabin of the Month')).toBeInTheDocument()
    })

    it('renders amenity details', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText('Heated interior')).toBeInTheDocument()
        expect(screen.getByText('Glass Roof')).toBeInTheDocument()
        expect(screen.getByText('Private Sauna')).toBeInTheDocument()
        expect(screen.getByText('Wildlife')).toBeInTheDocument()
    })

    it('renders call to action buttons', () => {
        render(<FeaturedCabin />)
        expect(screen.getByRole('button', { name: /Book/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /View Floor Plans/i })).toBeInTheDocument()
    })

    it('renders location and availability info', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText('Tromsø, Norway')).toBeInTheDocument()
        expect(screen.getByText('Feb 2025')).toBeInTheDocument()
    })
})
