declare module 'slot-text/react' {
  import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react'

  export interface SlotOptions {
    direction?: 'up' | 'down'
    stagger?: number
    duration?: number
    exitOffset?: number
    easing?: string
    bounce?: number
    color?: string | ((index: number, total: number) => string)
    colorFade?: number
    skipUnchanged?: boolean
    interrupt?: boolean
  }

  export interface SlotTextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
    text: string
    options?: SlotOptions
  }

  export const SlotText: ForwardRefExoticComponent<SlotTextProps & RefAttributes<HTMLSpanElement>>
}
