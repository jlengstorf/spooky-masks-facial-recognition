import * as faceapi from "face-api.js"

const getOverlayValues = landmarks => {
  const nose = landmarks.getNose()
  const jawline = landmarks.getJawOutline()

  const jawLeft = jawline[0]
  const jawRight = jawline.splice(-1)[0]
  const adjacent = jawRight.x - jawLeft.x
  const opposite = jawRight.y - jawLeft.y
  const jawLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2))

  // Both of these work. The chat believes atan2 is better.
  // I don't know why. (It doesn’t break if we divide by zero.)
  // const angle = Math.round(Math.tan(opposite / adjacent) * 100)
  const angle = Math.atan2(opposite, adjacent) * (180 / Math.PI)
  const width = jawLength * 2.2

  return {
    width,
    angle,
    leftOffset: jawLeft.x - width * 0.27,
    topOffset: nose[0].y - width * 0.47,
  }
}

const getRandomMask = masks => {
  const index = Math.floor(masks.length * Math.random())

  return masks[index]
}

export async function maskify(masks) {
  console.log("Maskify starting...")
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models"),
  ]).catch(error => {
    console.error(error)
  })

  console.log("models loaded")

  const items = document.querySelectorAll(".grid-item")

  items.forEach(async item => {
    const originalImage = item.querySelector("img")
    const scale = originalImage.width / originalImage.naturalWidth

    const handleImage = (oldImage, newImage) => async () => {
      const detection = await faceapi
        .detectSingleFace(newImage, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks(true)

      if (!detection) {
        return
      }

      const overlayValues = getOverlayValues(detection.landmarks)

      const overlay = document.createElement("img")
      overlay.src = getRandomMask(masks)
      overlay.alt = "mask overlay."
      overlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftOffset * scale}px;
        top: ${overlayValues.topOffset * scale}px;
        width: ${overlayValues.width * scale}px;
        transform: rotate(${overlayValues.angle}deg);
      `

      item.appendChild(overlay)
    }

    // To avoid CORS issues we create a cross-origin-friendly copy of the image.
    const image = new Image()
    image.crossOrigin = "Anonymous"
    image.addEventListener("load", handleImage(originalImage, image))
    image.src = originalImage.src
  })
}
