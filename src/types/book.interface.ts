export interface IBook {
  id: string
  volumeInfo: IVolumeInfo
}

export interface IVolumeInfo {
  authors?: string[]
  imageLinks?: {
    thumbnail: string
    smallThumbnail: string
  }
  categories?: string[]
  pageCount?: number
  description?: string
  language?: string
  title?: string
  publishedDate?: string
  averageRating?: number
  infoLink?: string
}
