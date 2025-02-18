import { Checkbox, Collapse } from "antd";
import React from "react";

function SideLeft({ categories }) {
  return (
    <div className="w-[25%]">
      {/* <Collapse items={categories} /> */}
      <Collapse
        items={categories.filter.map((item) => {
          return {
            key: item.id,
            label: (
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="ml-2 font-mono">{item.count}</span>
              </div>
            ),
            children: item.values.map((i) => {
              return (
                <div key={i.id}>
                  <Checkbox>
                    <span className="font-medium">{i.value}</span>
                    <span className="font-mono ml-3">{i.count}</span>
                  </Checkbox>
                </div>
              );
            }),
          };
        })}
      />
    </div>
  );
}

export default SideLeft;
