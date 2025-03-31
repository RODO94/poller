import { type ReactionTracker } from "@/types/chat";

export default function ReactionTracker({
  reactions: { fire, smile, heart },
}: {
  reactions: ReactionTracker;
}) {
  /**
   * A reaction tracker should take in a list
   * of reactions and display the relevant
   * emojis and a total of the number
   * of reactions a message has
   * received
   */
  const total = fire + heart + smile;
  return (
    <div className="px-1 py-0.5 bg-neutral-600 bg-opacity-50 rounded-lg inline-flex justify-start items-center gap-0.5 ">
      {fire ? <img src="src\assets\fire.svg" alt="fire emoji" /> : null}
      {smile ? <img src="src\assets\smile.svg" alt="smile emoji" /> : null}
      {heart ? <img src="src\assets\heart.svg" alt="heart emoji" /> : null}
      <p className="text-[8px] pl-1">{total > 0 ? total : null}</p>
    </div>
  );
}
