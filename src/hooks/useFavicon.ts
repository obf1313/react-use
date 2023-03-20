/**
 * @descriptor sets favicon of the page.
 * favorite icon
 * @author obf1313
 */
import { useEffect } from 'react'

const useFavicon = (href: string) => {
  useEffect(() => {
    const link: HTMLLinkElement = document.querySelector('link[rel*="icon"]') || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = href
    document.getElementsByTagName('head')[0].appendChild(link)
  }, [href])
}

export default useFavicon
