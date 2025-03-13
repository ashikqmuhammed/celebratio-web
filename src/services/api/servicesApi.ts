import { ApiResponse, ServiceCategory } from "../types/services";

export async function getServiceCategories(): Promise<ApiResponse<ServiceCategory[]>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/celeb-services/categories`, {
      next: { revalidate: 60 }, // ISR for freshness
    }); 
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
}