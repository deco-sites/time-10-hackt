import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

function ButtonLogin() {
  return (
    <div class="flex items-center">
      <Button
        as="a"
        variant="icon"
        href="/login"
        aria-label="Log in"
        class="border-[0px]"
      >
        <div class=" border-2 border-[#00CF80] rounded-full p-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </Button>
      <div>
        <Text tone="default-inverse" class="font-bold">
          Olá! Seja Bem-vindo!
        </Text>
        <p class="text-[#00CF80] hover:underline cursor-pointer text-sm	">
          Entre ou Cadastre-se
        </p>
      </div>
    </div>
  );
}

export default ButtonLogin;
