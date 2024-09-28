interface Paging {
  page: number
  rowsPerPage: number
  totalRows: number
  totalPages: number
}

interface ResponseStatus {
  code: number
  description: string
}

interface ResponseEntity<T> {
  status: ResponseStatus //embedded interface
  data: T
}

class SingleResponse<T> implements ResponseEntity<T> {
  status!: ResponseStatus
  data!: T
}

class PagedResponse<T> implements ResponseEntity<T> {
  status!: ResponseStatus
  data!: T
  paging!: Paging
}
