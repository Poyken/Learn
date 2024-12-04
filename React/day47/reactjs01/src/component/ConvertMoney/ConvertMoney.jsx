import VndToUsd from "./VndToUsd";
import UsdToVnd from "./UsdToVnd";
import { useState } from "react";
export default function ConvertMoney() {
  const [vnd, setVnd] = useState(0);
  const [usd, setUsd] = useState(0);
  const handleChangeVnd = (e) => {
    const vnd = e.target.value;
    const usd = vnd / 23000;
    setUsd(usd);
    setVnd(vnd);
  };
  const handleChangeUsd = (e) => {
    const usd = e.target.value;
    const vnd = usd * 23000;
    setUsd(usd);
    setVnd(vnd);
  };
  return (
    <div>
      <VndToUsd onChange={handleChangeVnd} vnd={vnd}></VndToUsd>
      <UsdToVnd onChange={handleChangeUsd} usd={usd}></UsdToVnd>
    </div>
  );
}
