import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
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

function DescriptionPDP({ page }: { page: ProductDetailsPage }) {
  const {
    product,
  } = page;
  const {
    description
  } = product;

  return (
    <Container class="py-0 sm:py-10">
        {/* Description card */}
        <div class="mt-4 sm:mt-6">
            {description && (
            <details>
                <summary class="font-heading-2 text-heading-2 text-default">Descrição</summary>
                <div class="ml-2 mt-2">{description}</div>
            </details>
            )}
        </div>
    </Container>
  );
}

function Description({ page }: Props) {
  if (page) {
    return <DescriptionPDP page={page} />;
  }

  return <NotFound />;
}

export default Description;
