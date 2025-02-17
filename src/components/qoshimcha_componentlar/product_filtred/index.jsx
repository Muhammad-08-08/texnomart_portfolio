import { useState } from "react";
import Sorting01Icon from "../../../assets/sorting-01-stroke-rounded";
import Sorting02Icon from "../../../assets/sorting-02-stroke-rounded";
import useMyStore from "../../component_home_page/zustand/useMyStore";

function SortButton({ name, currentSort, setCurrentSort }) {
  const state = useMyStore();
  const { tartibi } = state;
  return (
    <div
      onClick={() => {
        setCurrentSort(name);
        useMyStore.setState({
          tartibi: !state.tartibi,
        });
      }}
      className="border flex gap-2 px-2 py-1 rounded-md cursor-pointer"
    >
      <p className="cursor-pointer">{name}</p>
      <span>
        {currentSort === name ? (
          <>{tartibi ? <Sorting01Icon /> : <Sorting02Icon />}</>
        ) : null}
      </span>
    </div>
  );
}
function ProductFiltred() {
  const state = useMyStore();

  function onChange(name) {
    useMyStore.setState({
      hozirgiQiymat: name,
    });
  }

  return (
    <div className="flex gap-4">
      <SortButton
        name={"price"}
        setCurrentSort={onChange}
        currentSort={state.hozirgiQiymat}
      />
      <SortButton
        name={"order_count"}
        setCurrentSort={onChange}
        currentSort={state.hozirgiQiymat}
      />
      <SortButton
        name={"rating"}
        setCurrentSort={onChange}
        currentSort={state.hozirgiQiymat}
      />
      <SortButton
        name={"yangi kelganlar"}
        setCurrentSort={onChange}
        currentSort={state.hozirgiQiymat}
      />
    </div>
  );
}

export default ProductFiltred;
