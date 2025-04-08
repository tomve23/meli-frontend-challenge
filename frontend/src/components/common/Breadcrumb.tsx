import { Fragment } from 'react';
import {
  Breadcrumb as UiBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Breadcrumb = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => {
  return (
    <UiBreadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
            {index < items.length - 1 ? (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink>{item}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>{item}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </UiBreadcrumb>
  );
};

export default Breadcrumb;
