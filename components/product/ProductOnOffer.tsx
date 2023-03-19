import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
// import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductOnOffer({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller, installments } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group border-solid border-[#e0e0e0] rounded-[10px] border-[1px] h-[487px] overflow-hidden"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            width={220}
            height={220}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={220}
            height={220}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          {seller && (
            <div
              class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2 bg-opacity-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(2px)",
              }}
            >
              <Sizes {...product} />
              {/* <Button as="a" href={product.url}>Visualizar Produto</Button> */}
            </div>
          )}
        </div>

        <div class="flex items-center bg-[#00CF80] w-full h-[45px] text-center justify-center">
            <Icon
                class="text-white fill-white color-[#ffffff] mr-[5px] font-bold w-[25px] h-[25px]"
                color="#ffffff"
                size={20}
                id="Timer"
                strokeWidth={3}
            />
            <p class="text-[#ffffff] uppercase font-bold">Aproveite Já!</p>
        </div>

        <div class="flex flex-col gap-1 py-2 bg-[#040491] h-[200px] text-center py-[10px]">
          <Text
            class="text-[#ffffff] font-bold w-[95%] my-0 mx-auto text-[15.2px]"
            variant="caption"
          >
            {name}
          </Text>
          <div class="flex items-center gap-2 flex-col">
            <Text
              class="font-[15.2px] flex font-sans text-white"
            >
                de: <p class="line-through">{formatPrice(listPrice, offers!.priceCurrency!)}</p>
            </Text>
            <Text class="flex text-white items-center">
                por <p class="font-black text-[20px] mx-[5px]">{formatPrice(price, offers!.priceCurrency!)}</p> à vista
            </Text>
            <Text
                class="text-white"
            >
                {(installments)}
            </Text>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductOnOffer;
