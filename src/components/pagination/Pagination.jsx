import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ length, page }) {
    page = parseInt(page);

    return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/?page=${page > 1 ? page - 1 : page}`} />
        </PaginationItem>
        <PaginationItem>
          {page > 1 && <PaginationLink href={`/?page=${page-1}`}>{page - 1}</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            {page *1 < length && <PaginationLink href={`/?page=${page+1}`}>{page + 1}</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`/?page=${page < length ? page + 1 : page}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
