import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";
import SearchInput from "./SearchInput.tsx";
import ButtonLogin from "./ButtonLogin.tsx";

const location = "São Paulo-SP";

function Navbar({ items }: {
  items: INavItem[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-col h-full border-b-1 border-default w-full px-2 gap-2 bg-[#040491]`}
      >
        <div class="flex flex-row items-center h-full justify-between w-full">
          <div class="flex items-center ">
            <HeaderButton variant="menu" />
            <img
              src="https://novomundo.vtexassets.com/arquivos/v2-logo-novo-mundo.png?v=20230314100853"
              alt="Novo Mundo"
              class="block w-[200px] mr-6 object-contain	"
            />
          </div>
          <HeaderButton variant="cart" />
        </div>

        <div class="flex">
          <input
            type="text"
            placeholder="Procure por código, nome, marca..."
            class="w-full h-[48px] rounded-l-full text-base focus:outline-none	focus:ring-0 focus:ring-transparent "
          />
          <button class="rounded-r-full bg-[#00CF80] text-[#fff] px-5 text-base	h-[48px] focus:outline-none	focus:ring-0 focus:ring-transparent">
            <Icon
              id="MagnifyingGlass"
              width={24}
              height={24}
              strokeWidth={0.01}
              class="text-[#fff]"
            />
          </button>
        </div>
        <div class="flex justify-center items-center text-xs pb-2">
          <p class="text-[#fff]">
            Ofertas para <span class="text-[#00CF80]">{location}</span>
          </p>
          <button class="bg-[#00CF80] text-[#040491] ml-1 rounded-full px-2 focus:outline-none focus:ring-0 focus:ring-transparent">
            alterar
          </button>
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-col justify-between items-center border-b-1 border-default w-full pl-2 pr-3 bg-[#040491] ">
        <div class="flex flex-col  max-w-[1200px] m-auto w-full justify-between">
          <div class="py-3 flex justify-between">
            <img
              src="https://novomundo.vtexassets.com/arquivos/v2-logo-novo-mundo.png?v=20230314100853"
              alt="Novo Mundo"
              class="block w-[300px] mr-6 object-contain	"
            />
            <SearchInput />
            <ButtonLogin />
            <div class="pl-8">
            <HeaderButton variant="cart" />
            </div>
          </div>

          <div class="flex">
            <div class="flex-auto flex justify-center">
              <ul class="flex-auto flex justify-center">
                {items.map((item) => <NavItem item={item} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
