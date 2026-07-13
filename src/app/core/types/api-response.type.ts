export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    totalItems?: number;
    currentPage?: number;
    itemsPerPage?: number;
    totalPages?: number;
  };
}
