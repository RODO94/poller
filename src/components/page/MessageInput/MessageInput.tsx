import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useStore } from "@/store/store";
import { useState } from "react";

export default function MessageInput() {
  const [message, setMessage] = useState<string>();
  const addMessage = useStore().addMessage;
  const handleSend = () => addMessage(String(Math.random().toPrecision(2)));

  console.log(Boolean(message));
  return (
    <section className="flex flex-row justify-between w-full px-16 py-4 items-center gap-2.5">
      <label htmlFor="message-input" hidden>
        Add a comment
      </label>
      <Textarea
        style={{ width: "100%", fontSize: "10px" }}
        rows={1}
        name="message-input"
        id="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={
          "text-black py-1.5 px-1.5 min-w-24 relative bg-white rounded-3xl border-[0.50px] border-white"
        }
      />
      <Button
        style={{ borderRadius: "50%" }}
        id="send"
        onClick={handleSend}
        variant={!message ? "ghost" : "default"}
        disabled={Boolean(!message)}
      >
        <Send
          size={12}
          strokeWidth={1.25}
          color={!message ? "grey" : "white"}
        />
      </Button>
    </section>
  );
}
