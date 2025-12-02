import { useState, useRef, useEffect } from "react";

export type CardProps = {
  title: string;
  description?: string;
  image: string;
  tags?: string[];
  href?: string;
};

export function Card({
  title,
  description,
  image,
  tags = [],
  href,
}: CardProps) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Close when tapping outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // We wrap <a> or <div> but we still want tap behavior
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      ref={cardRef}
      // DESKTOP hover works via group
      // MOBILE tap toggles `open`
      onClick={(e: React.MouseEvent) => {
        if (window.innerWidth < 768) {
          e.preventDefault(); // prevent link on first tap
          setOpen((o) => !o);
        }
      }}
      className="group relative block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover transition-all duration-500 group-hover:scale-110"
      />

      {/* DEFAULT CAPTION (shown until hover OR mobile open) */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-black/40 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 ${open ? "opacity-0" : "opacity-100 group-hover:opacity-0"} `}
      >
        {title}
      </div>

      {/* OVERLAY (desktop hover OR mobile open) */}
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-black/60 p-6 text-white backdrop-blur-sm transition-all duration-300 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"} `}
      >
        {/* TAGS */}
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={`stagger translate-y-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium opacity-0 ${open ? `opacity-100 delay-[${i * 100}ms]` : `group-hover:opacity-100 group-hover:delay-[${i * 100}ms]`} `}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* TITLE */}
        <h3
          className={`text-lg font-semibold ${open ? "opacity-100 delay-100" : "opacity-0 group-hover:opacity-100 group-hover:delay-100"} `}
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p
            className={`mt-2 text-sm text-gray-200 ${open ? "opacity-100 delay-200" : "opacity-0 group-hover:opacity-100 group-hover:delay-200"} `}
          >
            {description}
          </p>
        )}

        {/* CTA */}
        {href && (
          <span
            className={`mt-4 inline-block text-sm font-medium ${open ? "opacity-100 delay-300" : "opacity-0 group-hover:opacity-100 group-hover:delay-300"} `}
          >
            Learn more →
          </span>
        )}
      </div>
    </Wrapper>
  );
}
