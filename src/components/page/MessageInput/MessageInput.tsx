import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store/store";
import { useFormik } from "formik";
import { SendButton } from "@/components/ui/SendButton";

export default function MessageInput() {
  const { addMessage, currentUser } = useStore();
  const { handleSubmit, setFieldValue, values, resetForm } = useFormik({
    initialValues: { message: "" },
    onSubmit: (values) => {
      if (!values.message) return;
      const messageId = String(Math.random().toPrecision(2));
      addMessage(messageId, {
        [messageId]: {
          message: {
            text: values.message,
            date: new Date(Date.now()).toLocaleString(),
            reactions: {
              allReactions: { fire: 0, smile: 0, heart: 0 },
              userReactions: { fire: false, smile: false, heart: false },
            },
          },
          profile: currentUser,
        },
      });
      resetForm();
    },
  });

  const isMessageInputEmpty = Boolean(!values.message);

  return (
    <section className="flex flex-row justify-between w-full px-16 py-4 items-center gap-2.5">
      <label htmlFor="message-input" hidden>
        Add a comment
      </label>
      <Textarea
        style={{ width: "100%", fontSize: "10px", resize: "none" }}
        name="message-input"
        id="message-input"
        aria-live="polite"
        aria-label="Add a comment"
        cols={5}
        value={values.message}
        onChange={(e) => setFieldValue("message", e.target.value)}
        className={
          "text-black py-1.5 px-2.5 min-w-24 relative bg-white rounded-3xl border-[0.50px] border-white"
        }
      />
      <SendButton
        handleSubmit={handleSubmit}
        isMessageInputEmpty={isMessageInputEmpty}
      />{" "}
    </section>
  );
}
