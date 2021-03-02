import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import path from 'path'

let dom
let container
let fullDom
let eventListenerCallback

describe('index.html', () => {
  beforeEach((done) => {
    JSDOM.fromFile(path.resolve(__dirname, './index.html'), { runScripts: 'dangerously', resources: "usable", includeNodeLocations: true }).then(builtDom => {
        container = builtDom.window.document.body
        dom = builtDom.serialize()
        fullDom = builtDom
    }).then(() => done())
  })

  afterEach(() => {
    fullDom.window.document.removeEventListener('DOMContentLoaded', eventListenerCallback)
  })

  it('renders a heading element', () => {
    expect(container.querySelector('h1')).not.toBeNull()
    expect(getByText(container, 'Pun Generator')).toBeInTheDocument()
  })

  it('renders a button element', () => {
    expect(container.querySelector('button')).not.toBeNull()
    expect(getByText(container, 'Click me for a terrible pun')).toBeInTheDocument()
  })

  it('renders a new paragraph via JavaScript when the button is clicked', () => {
    const button = getByText(container, 'Click me for a terrible pun')

    eventListenerCallback = () => {
      fireEvent.click(button)
      let generatedParagraphs = container.querySelectorAll('#pun-container p')
      expect(generatedParagraphs.length).toBe(1)

      fireEvent.click(button)
      generatedParagraphs = container.querySelectorAll('#pun-container p')
      expect(generatedParagraphs.length).toBe(2)

      fireEvent.click(button)
      generatedParagraphs = container.querySelectorAll('#pun-container p')
      expect(generatedParagraphs.length).toBe(3)
  }
    
    fullDom.window.document.addEventListener('DOMContentLoaded', eventListenerCallback);
  })

  it('should create a new H2 element', () => {
    eventListenerCallback = () => {
      const hTwo = getByText(container, "Hi There")
      expect(hTwo).not.toBeNull();
      expect(hTwo).toBeInTheDocument()
    }
    fullDom.window.document.addEventListener('DOMContentLoaded', eventListenerCallback)
  })

  it('should be able to test jQuery', () => {
    eventListenerCallback = () => {
      const hTwo = getByText(container, "Yo yo yo")
      expect(hTwo).not.toBeNull();
      expect(hTwo).toBeInTheDocument()
    }
    fullDom.window.document.addEventListener('DOMContentLoaded', eventListenerCallback)
  })
})
