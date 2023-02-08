import { useRef } from 'react'
import React from 'react'
import ClipboardJS from 'clipboard'

function CopyPaste() {
  const textAreaRef = useRef(null)

  React.useEffect(() => {
    new ClipboardJS('.btn-copy', {
      text: function(trigger) {
        return trigger.getAttribute('aria-label')
      }
    })
  }, [])

  const pasteFromClipboard = (e) => {
    e.preventDefault()
    navigator.clipboard
      .readText()
      .then((text) => {
        textAreaRef.current.value = text
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const copyToClipboard = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{ color: 'white' }}>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          ref={textAreaRef}
          id="name"
          className="form-control mb-2"
        />
        <button
          className="btn btn-outline-warning m-2 btn-copy"
          data-clipboard-target="#name"
          onClick={copyToClipboard}
        >
          Copy
        </button>
        <button
          className="btn btn-outline-info m-2"
          onClick={pasteFromClipboard}
        >
          Paste
        </button>
      </form>
    </div>
  )
}

export default CopyPaste
