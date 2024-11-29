import React from "react";
import { Radio } from "antd";
function Condition(params) {
  let key = 0;
  const conds = [];

  for (let i = 0; i < params.conds.length; i++) {
    const cond = params.conds[i];
    conds.push(
      <Radio.Button key={key++} value={cond.value}>
        {cond.lable}
      </Radio.Button>
    );
  }
  function handleChange(e) {
    console.log(e);
  }
  return (
    <Radio.Group buttonStyle="solid" onChange={handleChange}>
      {conds}
    </Radio.Group>
  );
}

export default Condition;
