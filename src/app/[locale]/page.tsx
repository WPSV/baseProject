'use client'

import { useTranslations } from "next-intl";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement, reset, incrementByAmount } from "@/store/slices/countSlice";

export default function Page() {
  const t = useTranslations("Home");
  
  const count = useSelector((state: RootState) => state.countSlice.value);
  const dispatch = useDispatch();
  
  return (
    <>
      {t("title")}
      <h1>Count: {count}</h1>
      <button className="" onClick={() => dispatch(increment())}>Increment</button>
      <button className="" onClick={() => dispatch(decrement())}>Decrement</button>
      <button className="" onClick={() => dispatch(reset())}>Reset</button>
      <button className="" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </>
  )
}