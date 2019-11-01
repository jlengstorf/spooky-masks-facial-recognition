import React, { useEffect } from "react"
import { maskify } from "../util/maskify"

import "./testing.css"

export default () => {
  useEffect(() => {
    maskify([
      "/images/overlay-blue-monster.png",
      "/images/overlay-clown.png",
      "/images/overlay-frankenstein.png",
      "/images/overlay-pumpkin.png",
      "/images/overlay-red-monster.png",
      "/images/overlay-skull.png",
      "/images/overlay-vampire.png",
      "/images/overlay-werewolf.png",
    ])
  }, [])

  return (
    <div>
      <div className="image-container">
        <div className="images">
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="Photo by Michael Dam"
              crossOrigin="anonymous"
            />
            <small>
              <a href="https://unsplash.com/photos/mEZ3PoFGs_k">
                Photo by Michael Dam
              </a>
            </small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1495527400402-c7d3dc332654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="Photo by Cristian Grecu"
              crossOrigin="anonymous"
            />
            <small>
              <a href="https://unsplash.com/photos/_ykb4UBjtGU">
                Photo by Cristian Grecu
              </a>
            </small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1551864490-a587c9f6f5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="Photo by Charisse Kenion"
              crossOrigin="anonymous"
            />
            <small>
              <a href="https://unsplash.com/photos/F0OS7-LO91k">
                Photo by Charisse Kenion
              </a>
            </small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="Photo by Mubarak Show"
              crossOrigin="anonymous"
            />
            <small>
              <a href="https://unsplash.com/photos/Ve7xjKImd28">
                Photo by Mubarak Show
              </a>
            </small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1544549269-414016cccf40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="Photo by Supremelysab"
              crossOrigin="anonymous"
            />
            <small>
              <a href="https://unsplash.com/photos/QK3zruhjawU">
                Photo by Supremelysab
              </a>
            </small>
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="Photo by Ayo Ogunseinde"
              crossOrigin="anonymous"
            />
            <small>
              <a href="https://unsplash.com/photos/sibVwORYqs0">
                Photo by Ayo Ogunseinde
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
