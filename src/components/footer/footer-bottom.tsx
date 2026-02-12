interface FooterBottomProps {
  year: number;
}

export const FooterBottom = ({ year }: FooterBottomProps) => {
  return (
    <div className="mt-10 pt-5 border-t border-white/5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
      <span>© {year} Himanshu Pandey</span>
      <span>
        Built with{" "}
        <span className="text-gray-300">React • Next.js • Tailwind • AI</span>
      </span>
    </div>
  );
};
