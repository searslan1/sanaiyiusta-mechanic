export interface Review {
  id: string
  appointmentId: string
  mechanicId: string
  userId: string
  rating: number
  comment: string
  serviceType: string
  createdAt: Date
}

export interface ReviewSummary {
  averageRating: number
  totalReviews: number
  ratingDistribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
}
