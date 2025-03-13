// Base response structure for all success responses
export interface ApiResponse<T> {
    status: 'success';
    message: string;
    data: T;
  }
  
  // Service Category interface
  export interface ServiceCategory {
    _id: string;
    name: string;
    description: string;
    deletedAt: string | null;
    assignedServices: any[]; // Define type if available
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  