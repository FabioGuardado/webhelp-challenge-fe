type PaginatedResponse<Item> = {
  items: Item[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export default PaginatedResponse;
