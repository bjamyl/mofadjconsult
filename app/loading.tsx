export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-24" aria-label="Loading" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-navy" />
    </div>
  );
}
