import { memo } from "react";
import { Button } from "./button";
import { Send } from "lucide-react";

export const SendButton = memo(function SendButton({
  handleSubmit,
  isMessageInputEmpty,
}: {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isMessageInputEmpty: boolean;
}) {
  return (
    <Button
      style={{ borderRadius: "50%" }}
      id="send"
      name="send"
      type="button"
      aria-label="Send message"
      onClick={() => {
        handleSubmit();
      }}
      variant={isMessageInputEmpty ? "ghost" : "default"}
      disabled={Boolean(isMessageInputEmpty)}
    >
      <Send
        size={12}
        strokeWidth={1.25}
        color={isMessageInputEmpty ? "grey" : "white"}
      />
    </Button>
  );
});
