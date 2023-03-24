import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import Icon from "$store/components/ui/Icon.tsx"

interface Props {
  skuId: string;
  sellerId: string;
}

function AddToCartButton({ skuId, sellerId }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button {...props} class="w-[220px] h-[55px] text-[18.2px] uppercase rounded-[30px] bg-[#008280] text-white font-bold" aria-label="Next Button">
      <Icon id="CartShopping" width={50} height={50} strokeWidth={2} fill="#fff" />
      Comprar
    </Button>
  );
}

export default AddToCartButton;
