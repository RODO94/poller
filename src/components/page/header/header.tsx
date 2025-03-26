import CopyLink from "@/components/ui/CopyLink";

export default function Header() {
  const textColumnStyles = "flex flex-col";
  return (
    <header className="bg-none flex flex-row justify-between items-center px-2 py-4 text-small">
      <article className="flex flex-col">
        <p>
          Made by <strong>Rory Doak</strong>
        </p>
        <CopyLink
          link="https://github.com/RODO94/poller"
          displayText="Project repo"
        />
      </article>
      <div className="bg-amber-200 w-[25vw] h-3 rounded-md" />
      <article className={textColumnStyles}>
        <CopyLink
          link="rory.doak@gmail.com"
          displayText="rory.doak@gmail.com"
        />
        <CopyLink
          link="https://github.com/RODO94"
          displayText="Github profile"
        />
      </article>
    </header>
  );
}
