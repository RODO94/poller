import ChatCard from "../../ui/ChatCard";
import { useStore } from "../../../store/store";
import { type Chat } from "../../../types/chat";

export default function Chat() {
  const messageIdList = useStore((state) => state.messageIdList);
  return (
    <section
      className={`px-12 py-2.5 inline-flex flex-col justify-center items-start gap-4`}
    >
      {messageIdList.map((id) => {
        return <ChatCard key={Math.random()} id={id} />;
      })}
    </section>
  );
}
