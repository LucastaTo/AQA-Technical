export const formatDate = (
  date: Date | string,
  isFormatText: boolean = true,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  },
  locale: string = 'en-US'
): string => {
  const today = new Date()
  const inputDate = new Date(date)

  if (
    isFormatText &&
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  ) {
    return 'Today'
  } else {
    return inputDate.toLocaleDateString(locale, options)
  }
}

export const formatTime = (time: string, includeSeconds: boolean = false): string => {
  const parts = time.split(':').map((part) => parseInt(part))

  if (parts.length !== 3 || parts.some(isNaN)) {
    return ''
  }

  const [hours, minutes, seconds] = parts

  if (includeSeconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  } else {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }
}
