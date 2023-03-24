import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
  /**
   * @description Width Desktop Banner
   */
  widhtDesktop: string;
  /**
   * @description Height Desktop Banner
   */
  heightDesktop: string;
  /**
   * @description Width Mobile Banner
   */
  widhtMobile: string;
  /**
   * @description Height Mobile Banner
   */
  heightMobile: string;
}

export interface Props {
  itemsPerLine: {
    mobile?: number;
    desktop?: number;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    mobile?: number;
    desktop?: number;
  };
  banners: Banner[];
}

export default function BannnerPromotions({
  itemsPerLine,
  borderRadius,
  widhtDesktop,
  heightDesktop,
  widhtMobile,
  heightMobile,
  banners = [],
}: Props) {
  return (
    <section class="w-full px-4 md:px-[7px] mx-auto mt-[15px] mb-[15px] justify-around flex">
    <div
        class={`grid gap-4 md:gap-6 grid-cols-${
        itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "1"
        } md:grid-cols-${
        itemsPerLine && itemsPerLine.desktop
            ? itemsPerLine.desktop
            : banners.length
        }`}
    >
        {banners.map(({ href, srcMobile, srcDesktop, alt }) => (
        <a
            href={href}
            aria-label="Button"
            class={`overflow-hidden ${
            borderRadius?.mobile && `rounded-[${borderRadius.mobile}px]`
            } ${
            borderRadius?.desktop
                ? `sm:rounded-[${borderRadius.desktop}px]`
                : `sm:rounded-none`
            }`}
        >
            <Picture>
            <Source
                media="(min-width: 768px)"
                src={srcDesktop ? srcDesktop : srcMobile}
                width={widhtDesktop}
                height={heightDesktop}
            />
            <img
                class="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={srcDesktop}
                alt={alt}
                decoding="async"
                loading="lazy"
                width={widhtMobile}
                height={heightMobile}
            />
            </Picture>
        </a>
        ))}
    </div>
    </section>
  );
}
