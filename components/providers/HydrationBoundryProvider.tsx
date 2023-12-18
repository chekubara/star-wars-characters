import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
  queryClient: QueryClient;
}

const HydrationBoundryProvider = ({ children, queryClient }: Props) => {
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default HydrationBoundryProvider;
