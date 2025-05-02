import { render, screen } from '@testing-library/react'
import StaffCard from '../StaffCard'

describe('StaffCard', () => {
  const mockStaffInfo = {
    id: 1,
    name: 'John Doe',
    role: 'Developer',
    email: 'john@example.com',
    status: 'Active',
    lastLogin: '2025-05-01',
    driveUsage: '500MB',
    device: 'Laptop'
  }

  it('renders staff information correctly', () => {
    render(<StaffCard staffInfo={mockStaffInfo} />)
    
    expect(screen.getByText('Name:')).toBeInTheDocument()
    expect(screen.getByText(mockStaffInfo.name)).toBeInTheDocument()
    expect(screen.getByText('Role:')).toBeInTheDocument()
    expect(screen.getByText(mockStaffInfo.role)).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText(mockStaffInfo.email)).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText(mockStaffInfo.status)).toBeInTheDocument()
    expect(screen.getByText('Last Login:')).toBeInTheDocument()
    expect(screen.getByText(mockStaffInfo.lastLogin)).toBeInTheDocument()
    expect(screen.getByText('Storage Used:')).toBeInTheDocument()
    expect(screen.getByText(mockStaffInfo.driveUsage)).toBeInTheDocument()
  })

  it('applies hover styles through className', () => {
    const { container } = render(<StaffCard staffInfo={mockStaffInfo} />)
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('hover:bg-gray-700')
  })
})