import { Input } from "../../../components/ui/input";

export default function MessageInput() {
  return (
    <div>
      <label htmlFor="message-input" hidden>
        Add a comment
      </label>
      <Input type="multiline" name="message-input" />;
    </div>
  );
}
