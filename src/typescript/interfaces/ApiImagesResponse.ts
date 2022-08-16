interface ApiImageResponse {
  id: string
  width: number
  height: number
  url: string
}

type ApiGalleryResponse = ApiImageResponse[]

export default ApiGalleryResponse
