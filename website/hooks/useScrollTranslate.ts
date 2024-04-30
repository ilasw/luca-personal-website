import {interpolate} from "popmotion";
import {useElementTransform} from "@vueuse/motion";
import {useScroll} from "@vueuse/gesture";

type UseScrollTranslateProps = {
  minScrollPercentage?: number,
  maxScrollPercentage?: number
}

export function useScrollTranslate(props: UseScrollTranslateProps) {
  const {
    minScrollPercentage = 0,
    maxScrollPercentage = 100
  } = props;
  const wrapperEl = ref<HTMLElement>();
  const element = ref<HTMLElement>();
  const mapper = interpolate([0, 100], [`${minScrollPercentage}%`, `-${maxScrollPercentage}%`]);
  const {transform} = useElementTransform(element);

  useScroll(
      (state) => {
        const {xy: [x, y]} = state;

        if (wrapperEl?.value) {
          const percentage = calculateScrolledPercentage(wrapperEl.value);
          transform.translateX = mapper(percentage);
        }
      },
      {
        domTarget: window
      }
  )

  return {element, wrapperEl};
}

function calculateScrolledPercentage(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const windowScroll = window.scrollY;

  const isBeforeElement = rect.top > innerHeight;
  const isAfterElement = rect.bottom - innerHeight < 0;

  if (isBeforeElement || isAfterElement) {
    return isBeforeElement ? 0 : 100;
  } else {
    const startPoint = rect.top + windowScroll - innerHeight;
    const endPoint = startPoint + rect.height;
    return (windowScroll - startPoint) / (endPoint - startPoint) * 100;
  }
}