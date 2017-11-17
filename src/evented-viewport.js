const viewport = (options = {}) => {
  const mustard = options.debounce && options.emitter && typeof options.emitter.emit === 'function'

  if (!mustard) {
    throw new Error('evented-viewport: Invalid options passed in.')
  }

  let timeout

  const cache = {}

  const update = () => {
    cache.width = window.innerWidth
    cache.height = window.innerHeight

    options.emitter.emit('resize', cache)
  }

  const resize = () => {
    clearTimeout(timeout)
    timeout = setTimeout(update, options.debounce)
  }

  update()

  window.addEventListener('resize', resize)

  return cache
}

export default viewport
