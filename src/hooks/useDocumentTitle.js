import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    const defaultTitle = 'OWN KARMA — Not worn to be seen. Worn to stand correctly.'
    document.title = title ? `${title} | OWN KARMA` : defaultTitle
  }, [title])
}
export default useDocumentTitle
