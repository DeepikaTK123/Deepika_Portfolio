export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-accent animate-spin" />
    </div>
  );
}
