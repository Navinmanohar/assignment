import React from 'react'
import "./loder.css"
export default function Loder() {
  return (
    <>
    <div className="containerloder html">
      <div className="lineloder" />
      <div className="lineloder d1" />
      <div className="lineloder d2" />
      <div className="lineloder d3" />
      <div className="lineloder d4" />
      <div className="lineloder d5" />
      <br />
      <div className="captionloder">
        <p style={{ display: "inline-block" }}>Loading</p>
        <div className="dot">.</div>
        <div className="dot">.</div>
        <div className="dot">.</div>
      </div>
    </div>
  </>
 
  )
}
