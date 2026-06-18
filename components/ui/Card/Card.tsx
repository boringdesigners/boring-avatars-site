import { ReactNode } from 'react'

interface Props {
  title: string
  description?: string
  footer?: ReactNode
  children: ReactNode
}

export default function Card({ title, description, footer, children }: Props) {
  return (
    <div className="p m-auto my-8 w-full max-w-3xl rounded-md border border-zinc-700">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-2xl font-medium">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      {footer && <div className="rounded-b-md border-t border-zinc-700 bg-zinc-900 p-4 text-zinc-500">{footer}</div>}
    </div>
  )
}
