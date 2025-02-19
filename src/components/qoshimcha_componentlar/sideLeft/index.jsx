import { Button, Checkbox, Collapse } from "antd";
import React, { useState } from "react";

function SideLeft({ categories }) {
  const [extend, setExtend] = useState(false);
  return (
    <div className="w-[25%]">
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
            children: (
              <div>
                {extend === false && item.values.length > 10
                  ? item.values.slice(0, 10).map((i) => {
                      return (
                        <div key={i.id}>
                          <Checkbox>
                            <span className="font-medium">{i.value}</span>
                            <span className="font-mono ml-3">{i.count}</span>
                          </Checkbox>
                        </div>
                      );
                    })
                  : item.values.map((i) => {
                      return (
                        <div key={i.id}>
                          <Checkbox>
                            <span className="font-medium">{i.value}</span>
                            <span className="font-mono ml-3">{i.count}</span>
                          </Checkbox>
                        </div>
                      );
                    })}
                <Button
                  onClick={() => {
                    setExtend(!extend);
                  }}
                  style={{ marginTop: 10 }}
                  type="primary"
                >
                  {extend ? "yopish" : "ko'proq ko'rsatish"}
                </Button>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}

export default SideLeft;
