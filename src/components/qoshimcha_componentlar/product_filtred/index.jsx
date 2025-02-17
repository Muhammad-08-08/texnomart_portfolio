import { useState } from "react";
import Sorting01Icon from "../../../assets/sorting-01-stroke-rounded";
import Sorting02Icon from "../../../assets/sorting-02-stroke-rounded";

function SortButton({ name, currentSort, setCurrentSort }) {
  const [tartibi, setTartibi] = useState(false);
  return (
    <div
      onClick={() => {
        setCurrentSort(name);
        setTartibi(!tartibi);
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
  const [hozirgiQiymat, setHozirgiQiymat] = useState("narx");

  function onChange(name) {
    setHozirgiQiymat(name);
  }

  return (
    <div className="flex gap-4">
      <SortButton
        name={"narx"}
        setCurrentSort={onChange}
        currentSort={hozirgiQiymat}
      />
      <SortButton
        name={"ommabopligi"}
        setCurrentSort={onChange}
        currentSort={hozirgiQiymat}
      />
      <SortButton
        name={"rating"}
        setCurrentSort={onChange}
        currentSort={hozirgiQiymat}
      />
      <SortButton
        name={"yangi kelganlar"}
        setCurrentSort={onChange}
        currentSort={hozirgiQiymat}
      />
    </div>
  );
}

export default ProductFiltred;
