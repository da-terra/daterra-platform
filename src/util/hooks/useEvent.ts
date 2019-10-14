import { useEffect } from "react";

const useEvent = (
  ref: React.RefObject<null>,
  event: string,
  callback: EventListenerOrEventListenerObject
) =>
  useEffect(() => {
    const current = ref.current;

    if (current == null) {
      return;
    }

    (current! as HTMLElement).addEventListener(event, callback);

    return () => (current! as HTMLElement).removeEventListener(event, callback);
  }, [ref, event, callback]);

export default useEvent;
