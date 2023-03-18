import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

import Icon from "./Icon.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  isCart?: boolean;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
};

const styles = {
  "sidebar-right": "animate-slide-left sm:ml-auto",
  "sidebar-left": "animate-slide-right",
  center: "",
};

const IconLogin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="#fff"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
    />
  </svg>
);

const Modal = ({
  isCart,
  open,
  mode = "sidebar-right",
  onClose,
  children,
  loading,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);
  const variant = styles[mode];

  useEffect(() => {
    if (ref.current?.open === true && open === false) {
      document.getElementsByTagName("body").item(0)?.removeAttribute(
        "no-scroll",
      );
      ref.current.close();
    } else if (ref.current?.open === false && open === true) {
      document.getElementsByTagName("body").item(0)?.setAttribute(
        "no-scroll",
        "",
      );
      ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full sm:max-w-lg w-full max-h-full h-full backdrop ${variant} ${
        props.class ?? ""
      }`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "DIALOG" && onClose?.()}
    >
      <section class="h-full bg-default flex flex-col">
        <header class="flex flex-col bg-[#040491]">
          <div class="flex p-3 justify-between">
            <div class='flex'>
            {isCart
              ? (
                <Button variant="icon" onClick={onClose}>
                  <Icon
                    class="text-white"
                    size={30}
                    id="ChevronRight"
                    strokeWidth={1}
                  />
                </Button>
              )
              : (
                <Button variant="icon">
                  <IconLogin />
                </Button>
              )}

            <div class="flex flex-col pl-2">
              <Text class="text-white text-sm">
                Seja Bem Vindo à Novo Mundo
              </Text>
              <Text class="text-white font-bold text-base">
                Já é cadastrado?
              </Text>
            </div>
            </div>
            {!isCart && (
            <Button variant="icon" onClick={onClose}>
              <Icon
                class="text-white"
                size={30}
                id="ChevronLeft"
                strokeWidth={1}
              />
            </Button>
          )}
          </div>
        </header>
        <div class="overflow-y-auto h-full flex flex-col">
          {loading === "lazy" ? lazy.value && children : children}
        </div>
      </section>
    </dialog>
  );
};

export default Modal;
