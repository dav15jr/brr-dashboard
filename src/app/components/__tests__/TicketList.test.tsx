import { render, screen } from '@testing-library/react'
import TicketList from '../TicketList'

describe('TicketList', () => {
  const mockTicket = {
    id: 1,
    user: 'Jane Smith',
    issue: 'Software Installation',
    description: 'Need Microsoft Office installed',
    status: 'open',
    created: '2025-05-01'
  }

  it('renders ticket information correctly', () => {
    render(<TicketList ticketList={mockTicket} />)
    
    expect(screen.getByText('Issue:')).toBeInTheDocument()
    expect(screen.getByText(mockTicket.issue)).toBeInTheDocument()
    expect(screen.getByText('Description:')).toBeInTheDocument()
    expect(screen.getByText(mockTicket.description)).toBeInTheDocument()
    expect(screen.getByText('User:')).toBeInTheDocument()
    expect(screen.getByText(mockTicket.user)).toBeInTheDocument()
    expect(screen.getByText('Status:')).toBeInTheDocument()
    expect(screen.getByText(mockTicket.status)).toBeInTheDocument()
    expect(screen.getByText('Created:')).toBeInTheDocument()
    expect(screen.getByText(mockTicket.created)).toBeInTheDocument()
  })

  it('applies correct status color for open tickets', () => {
    render(<TicketList ticketList={mockTicket} />)
    const statusElement = screen.getByText(mockTicket.status)
    expect(statusElement).toHaveClass('bg-red-500')
    expect(statusElement).toHaveClass('text-white')
  })

  it('applies different status color for in-progress tickets', () => {
    const inProgressTicket = { ...mockTicket, status: 'in progress' }
    render(<TicketList ticketList={inProgressTicket} />)
    const statusElement = screen.getByText(inProgressTicket.status)
    expect(statusElement).toHaveClass('bg-yellow-500')
    expect(statusElement).toHaveClass('text-white')
  })

  it('applies correct status color for resolved tickets', () => {
    const resolvedTicket = { ...mockTicket, status: 'resolved' }
    render(<TicketList ticketList={resolvedTicket} />)
    const statusElement = screen.getByText(resolvedTicket.status)
    expect(statusElement).toHaveClass('bg-green-500')
    expect(statusElement).toHaveClass('text-white')
  })
})