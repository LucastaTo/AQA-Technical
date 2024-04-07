import { FC, ElementType, HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  $tt?: string
  as?: ElementType
}

const Text: FC<IProps> = ({ as: Element = 'p', $tt, className, children, ...restProps }) => {
  return (
    <Element className={`${$tt ? `text-${$tt}` : ''} ${className}`} {...restProps}>
      {children}
    </Element>
  )
}

export default Text
