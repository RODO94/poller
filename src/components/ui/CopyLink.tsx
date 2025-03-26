import { toast } from "sonner";

type CopyLinkProps = {
  link: string;
  displayText: string;
};

export default function CopyLink({ link, displayText }: CopyLinkProps) {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast(`Copied ${link} to your clipboard`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <p className="underline" onClick={handleCopy}>
      {displayText}
    </p>
  );
}
