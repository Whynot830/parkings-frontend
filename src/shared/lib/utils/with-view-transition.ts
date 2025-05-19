export const withViewTransition = (
  updateFn: () => void
): ReturnType<typeof document.startViewTransition> | Promise<void> => {
  if (typeof document.startViewTransition === 'function') {
    return document.startViewTransition(() => {
      updateFn()
    })
  } else {
    updateFn()
    return Promise.resolve()
  }
}
