import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx"
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

// import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front] = images ?? [];

  return (
    <Container class="py-0 sm:py-10">
      {/* Breadcrumb */}
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />
      <h1>
        <Text class="lg:text-[32px] mt-[20px] flex font-bold max-md:text-[25px]">{name}</Text>
      </h1>
      {/* Code and name */}
      <div class="mt-4">
        <div>
          <Text tone="subdued" variant="caption">
            Cod. do Produto: {gtin}
          </Text>
        </div>
      </div>
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row lg:overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2 w-[48.7%] max-md:w-full max-md:overflow-visible">
          {[front].map((img, index) => (
            <Image
              // style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="flex-auto px-4 sm:px-0 ">
          <div class="flex text-[#222]">
            Produto vendido por <p class="text-[#040491] ml-[5px] font-bold">{(seller)}</p>
          </div>
          {/* Prices */}
          <div class="mt-4 border-[#e0e0e0] border-[1px] px-[10px] py-[10px]">
            <div class="flex flex-row gap-2 items-center">
              <p class="text-[#040491] font-extrabold text-[30px] tracking-tighter">{formatPrice(price, offers!.priceCurrency!)}</p> à vista
            </div>
            <div class="text-[16px] text-[#222] flex">
              ou <p class="font-bold mx-[5px]">{formatPrice(price, offers!.priceCurrency!)}</p> em até
            </div>
            <div class="text-[16px] text-[#222] flex">
              {installments}
            </div>
          </div>
          {/* Add to Cart and Favorites button */}
          <div class="mt-4 flex flex-col gap-2">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
