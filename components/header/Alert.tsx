import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const location = "São Paulo-SP";

function Alert() {
  return (
    <div class="bg-[#040491] h-8">
      <div>
        <Text class="text-[#fff] text-sm">
          Ofertas para <span class="text-[#00CF80]">{location}</span>
        </Text>
        <button class="bg-[#00CF80] text-[#040491] ml-1 rounded-full px-2 text-sm">
          alterar
        </button>
      </div>
      {
        /*   <Slider class="bg-badge gap-6 scrollbar-none">
        {alerts.map((alert) => (
          <Text
            class="flex justify-center items-center w-screen h-[38px]"
            variant="caption"
            tone="default-inverse"
          >
            {alert}
            salkjsikakosk
          </Text>
        ))}
      </Slider>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} /> */
      }
    </div>
  );
}

export default Alert;
