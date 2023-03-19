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
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
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

export default function BannnerGrid({
  itemsPerLine,
  banners = [],
}: Props) {
  return (
   
      <section class="w-full px-4 md:px-0 mx-auto mb-1">
        <div
          class={`grid gap-4 md:gap-6 grid-cols-${
            itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "2"
          } md:grid-cols-${
            itemsPerLine && itemsPerLine.desktop
              ? itemsPerLine.desktop
              : banners.length
          }`}
        >
          {banners.map(({ href, srcDesktop }) => (
            <a
              href={href}
              class={`overflow-hidden`}
            >
              <Picture>
                <Source
                    class="w-full"
                    media="(min-width: 768px) (max-width: 100%)"
                    src={srcDesktop ? srcDesktop : ''}
                />
                <img
                  class="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={srcDesktop}
                  decoding="async"
                  loading="lazy"
                  alt="PreBanner"
                />
              </Picture>
            </a>
          ))}
        </div>
      </section>
  );
}
