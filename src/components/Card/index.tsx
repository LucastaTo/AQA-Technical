import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface ICardCommonProps {
  className?: string
  children: ReactNode
}

interface ICardProps extends ICardCommonProps {
  className?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
}

export const Card: FC<ICardProps> = ({ children, className, color, ...restProps }) => {
  return (
    <div
      className={classNames(
        className,
        'border',
        'rounded',
        {
          'border-primary': color === 'primary',
          'border-secondary': color === 'secondary',
          'border-success': color === 'success',
          'border-warning': color === 'warning',
          'border-danger': color === 'danger',
          'border-info': color === 'info'
        },
        'w-full p-3 bg-[#facbcbb3] border border-gray-200 rounded-2xl shadow sm:p-3 md:p-3 dark:bg-gray-800 dark:border-gray-700'
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

interface ICardImageProps {
  src: string
  alt?: string
  className?: string
  isTop?: boolean
  isBottom?: boolean
}

export const CardImage: FC<ICardImageProps> = ({ src, alt, className, isTop, isBottom, ...restProps }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(className, {
        'rounded-t': isTop,
        'rounded-b': isBottom
      })}
      {...restProps}
    />
  )
}

interface ICardBodyProps extends ICardCommonProps {}

export const CardBody: FC<ICardBodyProps> = ({ children, className, ...restProps }) => {
  return (
    <div className={classNames(className)} {...restProps}>
      {children}
    </div>
  )
}

interface ICardTitleProps extends ICardCommonProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const CardTitle: FC<ICardTitleProps> = ({ children, className, as, ...restProps }) => {
  const Tag = as || 'h2'
  return (
    <Tag className={classNames(className)} {...restProps}>
      {children}
    </Tag>
  )
}
