import { useReducer, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const initialCarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
  rotation: 0
};

const prev = (length, current) => (current - 1 + length) % length;
const next = (length, current) => (current + 1) % length;
const threshold = target => {
  const width = target.clientWidth;
  return width / 3;
};

const transitionTime = 600;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

const carouselReducer = (state, action) => {
  switch (action.type) {
    case "jump":
      return { ...state, desired: action.desired };
    case "next":
      return { ...state, desired: next(action.length, state.active) };
    case "prev":
      return { ...state, desired: prev(action.length, state.active) };
    case "done":
      return { ...state, offset: NaN, active: state.desired };
    case "drag":
      return { ...state, offset: action.offset };
    case "auto":
      return {
        ...state,
        desired: next(action.length, state.active),
        rotation: state.rotation + 1
      };
    default:
      return state;
  }
};

function swiped(e, dispatch, length, dir) {
  const t = threshold(e.event.target);
  const d = dir * e.deltaX;

  if (d >= t) {
    dispatch({
      type: dir > 0 ? "next" : "prev",
      length
    });
  } else {
    dispatch({
      type: "drag",
      offset: 0
    });
  }
}

const useCarousel = (length, interval, delay) => {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: "drag",
        offset: -e.deltaX
      });
    },
    onSwipedLeft(e) {
      swiped(e, dispatch, length, 1);
    },
    onSwipedRight(e) {
      swiped(e, dispatch, length, -1);
    },
    trackMouse: true,
    trackTouch: true
  });

  useEffect(() => {
    const id = setTimeout(
      () => dispatch({ type: "auto", length }),
      state.rotation === 0 ? interval + delay : interval
    );
    return () => clearTimeout(id);
  }, [state.offset, state.active, state.rotation, delay, interval, length]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style = {
    transform: "translateX(0)",
    width: `${100 * (length + 2)}%`,
    left: `-${(state.active + 1) * 100}%`
  };

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir =
      (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (100 * (pref || dir)) / (length + 2);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  return [state.active, action => dispatch(action), handlers, style];
};

export default useCarousel;
