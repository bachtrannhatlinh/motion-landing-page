import React from 'react'
import { cn } from '@/lib/utils'

export default function Layout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('grid grid-cols-2 py-[60px] px-2 lg:px-16 bg-gray-800 text-white gap-20 font-montserrat', className)}>
      {children}
    </div>
  )
}
