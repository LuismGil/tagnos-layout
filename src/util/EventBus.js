let events = []
/**
 */
export default class EventBus {
  /**
   * Initialize a new event bus instance.
   */
  constructor () {
    this.bus = document.createElement('fakeelement')
  }

  /**
   * Add an event listener.
   */
  addEventListener (event, callback) {
    this.bus.addEventListener(event, callback)
  }

  /**
   * Remove an event listener.
   */
  removeEventListener (event, callback) {
    this.bus.removeEventListener(event, callback)
  }

  /**
   * Dispatch an event.
   */
  dispatchEvent (event, detail = {}) {
    let index = events.findIndex((item) => item.type === event)
    if (index !== -1) {
      events.detail = detail
      this.bus.dispatchEvent(events[index])
      return
    }
    let customEvent = new CustomEvent(event, { detail })
    events.push(customEvent)
    this.bus.dispatchEvent(customEvent)
  }
}
