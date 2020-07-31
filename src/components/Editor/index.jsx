import React, { useState, useEffect } from 'react'

import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'

const editorInstance = (jsonData) => {
  
  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'editor',

    /**
    * Enable autofocus
    */
    // autofocus: true,

    logLevel: 'VERBOSE',

    /**
    * Available Tools list.
    * Pass Tool's class or Settings object for each Tool you want to use
    */
    tools: {
      header: {
        class: Header,
        config: {
          levels: [1, 2, 3],
          defaultLevel: 1
        },
        shortcut: 'ctrl+shift+h',
        inlineToolbar: true
      },
      list: {
        class: List,
        shortcut: 'ctrl+shift+l',
        inlineToolbar: true
      },
      // highlight: {
      //   class: Highlight,
      //   inlineToolbar: true,
      // },
    },

    placeholder: 'Add your notes here',

    /**
    * Previously saved data that should be rendered
    */
    // data: jsonData,

    /**
      * onChange callback
      */
    onChange: (data) => { console.log("new data", data) }

  })
}

export default function Editor() {

  useEffect(() => {
    editorInstance()
  }, [])


  return (
    <div className="mt-10 p-4 rounded-lg bg-white shadow-xl">
      <div id="editor" className="p-4"></div>
    </div>
  )

}