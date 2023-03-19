import { useUI } from "../../sdk/useUI.ts";
import Button from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";

export function SearchButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="search icon button"
      onClick={() => {
        displaySearchbar.value = !displaySearchbar.peek();
      }}
    >
      <Icon
        id="MagnifyingGlass"
        width={22}
        height={22}
        strokeWidth={0.1}
        class="text-[#040491]"
      />
    </Button>
  );
}

function SearchInput() {
  return (
    <div class="bg-[#040491] h-10 hidden sm:flex text-xs">
      <div class="mr-[-40px] mt-[7px] z-10">
        <SearchButton />
      </div>
      <input
        type="text"
        placeholder="Procure por código, nome, marca..."
        class="w-[400px] h-[48px] pl-10 rounded-l-full text-base focus:outline-none	focus:ring-0 focus:ring-transparent "
      />
      <button class="rounded-r-full bg-[#00CF80] text-[#fff] px-5 text-base	h-[48px] focus:outline-none	focus:ring-0 focus:ring-transparent">
        Buscar
      </button>
    </div>
  );
}

export default SearchInput;
