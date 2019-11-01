import React, { useEffect } from "react"
import { maskify } from "../util/maskify"

import "./styles.css"

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
    <>
      <header>
        <h1>Machine Learning, Facial Recognition, and Spooky Masks!</h1>
        <p>
          This demo uses{" "}
          <a href="https://github.com/justadudewhohacks/face-api.js">
            face-api.js
          </a>{" "}
          to find faces, then we do some math to determine face size and angle
          so we can put some spooky masks on these folks!
        </p>
      </header>
      <main className="content">
        <div className="grid">
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="A woman wearing a red sweater."
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
              alt="A pile of skulls in a forest."
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
              alt="A woman wearing an orange top."
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
              alt="A man wearing a shoulder bag in a park."
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
              alt="A man sitting under a warning sign."
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
              alt="A man making a face, standing in front of graffiti."
            />
            <small>
              <a href="https://unsplash.com/photos/sibVwORYqs0">
                Photo by Ayo Ogunseinde
              </a>
            </small>
          </div>
        </div>
      </main>

      <footer>
        <p>
          Created with 🎃 by <a href="http://gantlaborde.com">Gant Laborde</a>{" "}
          and
          <a href="https://lengstorf.com">Jason Lengstorf</a>.
        </p>
      </footer>
    </>
  )
}
