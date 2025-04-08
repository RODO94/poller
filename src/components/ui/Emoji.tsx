import { MessageId, type Emojis } from "@/types/chat";
import { Flame, Smile, Heart } from "lucide-react";
import { JSX, memo } from "react";
import { useStore } from "../../store/store";

export const Emoji = memo(function Emoji({
  messageId,
  emoji,
  isActive,
}: {
  messageId: MessageId;
  emoji: Emojis;
  isActive: boolean;
  outlineIcon: boolean;
}) {
  const addEmoji = useStore().addEmoji;
  const removeEmoji = useStore().removeEmoji;

  const emojiStroke = isActive ? "yellow" : "grey";
  const emojiSet: Record<Emojis, JSX.Element> = {
    fire: (
      <Flame
        data-testid={`${messageId}-fire-icon`}
        size={"12"}
        stroke={emojiStroke}
      />
    ),
    heart: (
      <Heart
        data-testid={`${messageId}-heart-icon`}
        size={"12"}
        stroke={emojiStroke}
      />
    ),
    smile: (
      <Smile
        data-testid={`${messageId}-smile-icon`}
        size={"12"}
        stroke={emojiStroke}
      />
    ),
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
});
