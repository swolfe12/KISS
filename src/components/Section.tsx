import type { SectionLayout } from "../content/types";

interface SectionProps {
  layout?: SectionLayout;
  className?: string;
  children: React.ReactNode;
}
export function Section({
  layout = "full",
  className = "",
  children,
}: SectionProps) {
  const layoutClasses: Record<SectionLayout, string> = {
    full: "relative overflow-hidden bg-white px-6 py-24 sm:px-12 sm:py-16 lg:px-24 lg:py-24", // full-width, no margins
    float:
      "my-24 mx-auto sm:mx-auto max-w-7xl rounded-2xl shadow-xl px-4 sm:px-8 py-24 w-[90%] sm:w-[70%]", // floating container
    edge: "my-24", // no side padding, full bleed bg
    tight: "my-16 px-6 max-w-5xl mx-auto", // smaller vertical spacing
    none: "", // truly raw
    wide: "my-32 px-6 max-w-[1400px] mx-auto", // wider layout
    split:
      "my-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16",
  };

  return (
    <section className={`${layoutClasses[layout]} ${className}`}>
      {children}
    </section>
  );
}
