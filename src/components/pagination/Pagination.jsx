import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ length, page , search }) {
    page = parseInt(page);
    const path = search ? '/?search=' + search + '&page=' : '/?page=';
    return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`${path}${page > 1 ? page - 1 : page}`} />
        </PaginationItem>
        <PaginationItem>
          {page > 2 && <PaginationLink href={`${path}${page-1}`}>{page - 2}</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
          {page > 1 && <PaginationLink href={`${path}${page-1}`}>{page - 1}</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
            {page *1 < length && <PaginationLink href={`${path}${page+1}`}>{page + 1}</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
            {page *1 < length && <PaginationLink href={`${path}${page+1}`}>{page + 2}</PaginationLink>}
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${path}${page < length ? page + 1 : page}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
