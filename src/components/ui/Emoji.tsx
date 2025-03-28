import { type Emojis } from "@/types/chat";

export default function Emoji({
  emoji,
  outlineIcon,
}: {
  emoji: Emojis;
  outlineIcon: boolean;
}) {
  /**
   * An emoji should be a set of emojis
   * that you can select via a prop
   * and you can choose a variant of
   * outline or filled
   */
  return <p>{emoji + "  " + outlineIcon}</p>;
}
