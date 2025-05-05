import { type Mechanic, mechanics } from "@/data/mechanics"
import type { VehicleInfo } from "@/contexts/vehicle-context"

// Function to get mechanics based on vehicle make
export function getMechanicsByVehicle(vehicleInfo: VehicleInfo): Mechanic[] {
  const { make } = vehicleInfo
  const makeLower = make.toLowerCase()

  // Define vehicle categories
  const germanCars = ["volkswagen", "bmw", "mercedes", "audi", "porsche", "opel"]
  const japaneseCars = ["toyota", "honda", "nissan", "mazda", "mitsubishi", "subaru"]
  const koreanCars = ["hyundai", "kia"]
  const americanCars = ["ford", "chevrolet", "cadillac", "jeep", "dodge"]

  // Find mechanics with expertise in the vehicle's make
  let filteredMechanics: Mechanic[] = []

  if (germanCars.includes(makeLower)) {
    filteredMechanics = mechanics.filter((m) => m.expertise.some((e) => e.toLowerCase().includes("alman")))
  } else if (japaneseCars.includes(makeLower)) {
    filteredMechanics = mechanics.filter((m) => m.expertise.some((e) => e.toLowerCase().includes("japon")))
  } else if (koreanCars.includes(makeLower)) {
    filteredMechanics = mechanics.filter((m) => m.expertise.some((e) => e.toLowerCase().includes("kore")))
  } else if (americanCars.includes(makeLower)) {
    filteredMechanics = mechanics.filter((m) => m.expertise.some((e) => e.toLowerCase().includes("amerikan")))
  }

  // If no specific mechanics found for this make, return all mechanics
  if (filteredMechanics.length === 0) {
    filteredMechanics = mechanics
  }

  // Sort by rating and availability
  return filteredMechanics
    .sort((a, b) => {
      // First sort by availability
      if (a.available && !b.available) return -1
      if (!a.available && b.available) return 1
      // Then by rating
      return b.rating - a.rating
    })
    .slice(0, 3) // Return top 3
}

// Mock function to get mechanics based on problem (replace with actual implementation)
function getMechanicsByProblem(problem: string): Mechanic[] {
  // This is a placeholder - implement your logic here to fetch mechanics
  // based on the problem description.  For example, you might filter the
  // 'mechanics' array based on keywords in the 'problem' string and the
  // mechanic's 'expertise'.

  const problemLower = problem.toLowerCase()

  return mechanics.filter((m) => m.expertise.some((e) => e.toLowerCase().includes(problemLower)))
}

// Function to combine problem and vehicle information for better recommendations
export function getRecommendedMechanics(problem: string, vehicleInfo?: VehicleInfo | null): Mechanic[] {
  // Get mechanics based on problem
  const problemMechanics = getMechanicsByProblem(problem)

  // If we have vehicle info, get mechanics based on vehicle
  if (vehicleInfo) {
    const vehicleMechanics = getMechanicsByVehicle(vehicleInfo)

    // Find mechanics that appear in both lists (best match)
    const bestMatches = problemMechanics.filter((pm) => vehicleMechanics.some((vm) => vm.id === pm.id))

    // If we have best matches, return those
    if (bestMatches.length > 0) {
      return bestMatches
    }

    // Otherwise, prioritize problem-based mechanics
    return problemMechanics
  }

  // If no vehicle info, just return problem-based mechanics
  return problemMechanics
}
