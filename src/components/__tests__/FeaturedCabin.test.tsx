import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FeaturedCabin from '../FeaturedCabin'

describe('FeaturedCabin', () => {
    it('renders the main heading', () => {
        render(<FeaturedCabin />)
        const heading = screen.getByRole('heading', { level: 2 })
        // The heading should contain "Krystallhelligdommen" without a space
        expect(heading.textContent).toMatch(/Krystallhelligdommen/)
    })

    it('renders the cabin of the month badge', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText('Månedens hytte')).toBeInTheDocument()
    })

    it('renders amenity details', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText('Oppvarmet interiør')).toBeInTheDocument()
        expect(screen.getByText('Glasstak')).toBeInTheDocument()
        expect(screen.getByText('Privat badstue')).toBeInTheDocument()
        expect(screen.getByText('Dyreliv')).toBeInTheDocument()
    })

    it('renders call to action buttons', () => {
        render(<FeaturedCabin />)
        expect(screen.getByRole('button', { name: /Bestill/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Se plantegninger/i })).toBeInTheDocument()
    })

    it('renders location and availability info', () => {
        render(<FeaturedCabin />)
        expect(screen.getByText('Tromsø, Norge')).toBeInTheDocument()
        expect(screen.getByText('Feb 2025')).toBeInTheDocument()
    })
})
