import { useEffect } from "react";

const useEvent = <T extends Event>(
  ref: React.RefObject<HTMLElement | null>,
  event: string,
  callback: (event: T) => void
) =>
  useEffect(() => {
    const current = ref.current;

    if (current == null) {
      return;
    }

    current.addEventListener(event, callback as any);

    return () => current.removeEventListener(event, callback as any);
  }, [ref, event, callback]);

export default useEvent;
