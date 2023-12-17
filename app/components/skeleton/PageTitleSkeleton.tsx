const PageTitleSkeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse h-[32px] mb-4">
      <div className="h-[24px] bg-secondary rounded-full w-50 mb-4 opacity-20"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default PageTitleSkeleton;
