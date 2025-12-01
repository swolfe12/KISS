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
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="group relative block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover transition-all duration-500 group-hover:scale-110"
      />

      {/* DEFAULT CAPTION */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:opacity-0">
        {title}
      </div>

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        {/* TAGS */}
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={`group-hover:stagger translate-y-1 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium opacity-0 group-hover:delay-${i * 100} `}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* TITLE */}
        <h3 className="group-hover:stagger font-semibolddata-[hidden]:opacity-0 text-lg group-hover:delay-100 data-[hidden]:translate-y-1 group-hover:data-[hidden]:translate-y-0 group-hover:data-[hidden]:opacity-100">
          {title}
        </h3>

        {/* DESCRIPTION */}
        {description && (
          <p className="group-hover:stagger mt-2 text-sm text-gray-200 group-hover:delay-200 data-[hidden]:translate-y-1 data-[hidden]:opacity-0 group-hover:data-[hidden]:translate-y-0 group-hover:data-[hidden]:opacity-100">
            {description}
          </p>
        )}

        {/* CTA */}
        {href && (
          <span className="group-hover:stagger mt-4 inline-block text-sm font-medium group-hover:delay-300 data-[hidden]:translate-y-1 data-[hidden]:opacity-0 group-hover:data-[hidden]:translate-y-0 group-hover:data-[hidden]:opacity-100">
            Learn more →
          </span>
        )}
      </div>
    </Wrapper>
  );
}
