import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ length, page, search }) {
  page = parseInt(page);
  const path = search ? `/?search=${search}&page=` : "/?page=";

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href={`${path}${page > 1 ? page - 1 : page}`}
            aria-label="Previous page"
          />
        </PaginationItem>

        {/* Link to 10 Pages Back */}
        {page > 10 && (
          <>
            <PaginationItem>
              <PaginationLink href={`${path}${page - 10}`} aria-label={`Page ${page - 10}`}>
                {page - 10}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {/* Link to 2 Pages Back */}
        {page > 2 && (
          <PaginationItem>
            <PaginationLink href={`${path}${page - 2}`} aria-label={`Page ${page - 2}`}>
              {page - 2}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Link to Previous Page */}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink href={`${path}${page - 1}`} aria-label={`Page ${page - 1}`}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Current Page */}
        <PaginationItem>
          <PaginationLink href="#" className="rounded-full" isActive aria-label={`Current page ${page}`}>
            {page}
          </PaginationLink>
        </PaginationItem>

        {/* Link to Next Page */}
        {page < length && (
          <PaginationItem>
            <PaginationLink href={`${path}${page + 1}`} aria-label={`Page ${page + 1}`}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Link to 2 Pages Ahead */}
        {page + 1 < length && (
          <PaginationItem>
            <PaginationLink href={`${path}${page + 2}`} aria-label={`Page ${page + 2}`}>
              {page + 2}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* Link to 10 Pages Ahead */}
        {page + 10 <= length && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${path}${page + 10}`} aria-label={`Page ${page + 10}`}>
                {page + 10}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href={`${path}${page < length ? page + 1 : page}`}
            aria-label="Next page"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
