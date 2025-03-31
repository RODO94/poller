import { MessageId, type Emojis } from "@/types/chat";
import { Flame, Smile, Heart } from "lucide-react";
import { JSX } from "react";
import { useStore } from "@/store/store";

export default function Emoji({
  messageId,
  emoji,
  isActive,
}: {
  messageId: MessageId;
  emoji: Emojis;
  isActive: boolean;
  outlineIcon: boolean;
}) {
  /**
   * An emoji should be a set of emojis
   * that you can select via a prop
   * and you can choose a variant of
   * outline or filled
   */

  /**
   * Right now when you action an emoji
   * it refreshes the whole chat history
   * because that's how I update state because emoji's
   * are entangled with the message, rather than having a relation
   * to one
   *
   */

  const addEmoji = useStore().addEmoji;
  const removeEmoji = useStore().removeEmoji;

  const emojiStroke = isActive ? "yellow" : "grey";
  const emojiSet: Record<Emojis, JSX.Element> = {
    fire: <Flame size={"12"} stroke={emojiStroke} />,
    heart: <Heart size={"12"} stroke={emojiStroke} />,
    smile: <Smile size={"12"} stroke={emojiStroke} />,
  };

  return (
    <div
      onClick={() =>
        isActive ? removeEmoji(emoji, messageId) : addEmoji(emoji, messageId)
      }
      style={{ padding: "0 0", width: "12px", height: "12px" }}
    >
      {emojiSet[emoji]}
    </div>
  );
}
