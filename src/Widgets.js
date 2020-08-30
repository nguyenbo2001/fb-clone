import React from 'react'

import './Widgets.css'

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="Page social"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPage-Share-Social-2228494777375270&tabs=timeline&width=200&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1194373504042962"
        width="300"
        height="100%"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"></iframe>
    </div>
  )
}

export default Widgets
