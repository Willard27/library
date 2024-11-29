import React from "react";
import { Radio } from "antd";
function Condition(params) {
  const conds = params.conds;

  function handleChange(e) {
    console.log(e);
  }
  return (
    <Radio.Group buttonStyle="solid" onChange={handleChange}>
      {conds.map((cond) => (
        <Radio.Button key={cond.id} value={cond.value}>
          {cond.lable}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}

export default Condition;
