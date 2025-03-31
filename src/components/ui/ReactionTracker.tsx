import { type ReactionTracker } from "@/types/chat";

export default function ReactionTracker({
  reactions: { fire, smile, heart },
}: {
  reactions: ReactionTracker;
}) {
  const testId = Math.random().toPrecision(2);
  const total = fire + heart + smile;
  return (
    <div
      data-testid={`reaction-tracker-${testId}`}
      className="px-1 py-0.5 bg-neutral-600 bg-opacity-50 rounded-lg inline-flex justify-start items-center gap-0.5 "
    >
      {fire ? (
        <img
          data-testid={`reaction-fire-${testId}`}
          src="src\assets\fire.svg"
          alt="fire emoji"
        />
      ) : null}
      {smile ? (
        <img
          data-testid={`reaction-smile-${testId}`}
          src="src\assets\smile.svg"
          alt="smile emoji"
        />
      ) : null}
      {heart ? (
        <img
          data-testid={`reaction-heart-${testId}`}
          src="src\assets\heart.svg"
          alt="heart emoji"
        />
      ) : null}
      <p className="text-[8px] pl-1">{total > 0 ? total : null}</p>
    </div>
  );
}
