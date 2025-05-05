import type { Review, ReviewSummary } from "@/types/review"

// Sample reviews data
export const reviews: Review[] = [
  {
    id: "rev-001",
    appointmentId: "apt-20230410",
    mechanicId: "mehmet-usta",
    userId: "user-001",
    rating: 5,
    comment:
      "Çok profesyonel ve işinin ehli bir usta. Aracımın motor sorununu hızlıca tespit etti ve uygun fiyata çözdü. Kesinlikle tavsiye ederim.",
    serviceType: "Motor Bakımı",
    createdAt: new Date("2023-04-15"),
  },
  {
    id: "rev-002",
    appointmentId: "apt-20230325",
    mechanicId: "mehmet-usta",
    userId: "user-002",
    rating: 5,
    comment:
      "Şanzıman sorunu yaşıyordum, birçok yere götürdüm çözemediler. Ahmet usta sorunu hemen buldu ve çözdü. Çok teşekkürler.",
    serviceType: "Şanzıman Bakımı",
    createdAt: new Date("2023-03-02"),
  },
  {
    id: "rev-003",
    appointmentId: "apt-20230212",
    mechanicId: "mehmet-usta",
    userId: "user-003",
    rating: 4,
    comment: "İşini iyi yapıyor, fiyatlar biraz yüksek ama kaliteli iş çıkarıyor. Tekrar tercih ederim.",
    serviceType: "Elektronik Arıza Tespiti",
    createdAt: new Date("2023-02-18"),
  },
  {
    id: "rev-004",
    appointmentId: "apt-20230101",
    mechanicId: "mehmet-usta",
    userId: "user-004",
    rating: 5,
    comment: "Aracımın elektronik sorununu çözdü. Çok ilgili ve bilgili bir usta. Teşekkürler.",
    serviceType: "Elektronik Arıza Tespiti",
    createdAt: new Date("2023-01-05"),
  },
]

// Function to get reviews for a specific mechanic
export function getMechanicReviews(mechanicId: string): Review[] {
  return reviews
    .filter((review) => review.mechanicId === mechanicId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

// Function to get review summary for a specific mechanic
export function getMechanicReviewSummary(mechanicId: string): ReviewSummary {
  const mechanicReviews = getMechanicReviews(mechanicId)

  if (mechanicReviews.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    }
  }

  const totalRating = mechanicReviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = totalRating / mechanicReviews.length

  const ratingDistribution = mechanicReviews.reduce(
    (dist, review) => {
      dist[review.rating as keyof typeof dist]++
      return dist
    },
    { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
  )

  return {
    averageRating,
    totalReviews: mechanicReviews.length,
    ratingDistribution,
  }
}

// Function to check if a user has already reviewed an appointment
export function hasUserReviewedAppointment(userId: string, appointmentId: string): boolean {
  return reviews.some((review) => review.userId === userId && review.appointmentId === appointmentId)
}

// Function to add a new review
export function addReview(review: Omit<Review, "id" | "createdAt">): Review {
  const newReview: Review = {
    ...review,
    id: `rev-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
  }

  // In a real app, this would be saved to a database
  reviews.push(newReview)

  return newReview
}
