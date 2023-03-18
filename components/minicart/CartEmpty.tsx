import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

interface CartEmptyProps {
  onClick: () => void;
}

function CartEmpty({ onClick }: CartEmptyProps) {
    return (
        <div class="flex flex-col p-1">
        <div>
          <div class="flex border-1 border-slate-400 p-4 justify-between	">
            <Text class="font-bold text-[#222]">Meus Pedidos</Text>
            <Icon
              class="text-gray-400"
              size={20}
              id="ChevronRight"
              strokeWidth={3}
            />
          </div>
          <div class="flex border-x-1 border-b-1 border-slate-400 p-4 justify-between	">
            <Text class="font-bold text-[#222]">Meus Dados</Text>
            <Icon
              class="text-gray-400"
              size={20}
              id="ChevronRight"
              strokeWidth={3}
            />
          </div>
        </div>
        <div class="flex flex-col py-5">
          <Text
            variant="heading-3"
            tone="default"
            class="uppercase font-bold	text-center"
          >
            Seu carrinho está vazio
          </Text>
          <Text className="text-center text-sm my-3">
            Para continuar comprando, navegue pelas categorias do site ou faça uma
            busca pelo seu produto.
          </Text>
          <button
            class="bg-green text-white h-[48px] uppercase rounded font-bold"
            onClick={onClick}
          >
            Escolher produtos
          </button>
        </div>
      </div>
 )
}

export default CartEmpty;
