import React from "react";
import Chart, { Pie, Slice } from "../../components/Chart";
import SolidButton from "../../components/general/Button";

const Landing: React.FC = () => {
  const MyPie = (
    <Chart>
      <Pie total={1}>
        <Slice value={0.05} strokeColor="black" strokeWidth={2} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />

        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
        <Slice value={0.05} />
      </Pie>
    </Chart>
  );

  return (
    <div>
      <SolidButton to="/settings">Hallo</SolidButton>

      {MyPie}
    </div>
  );
};

export default Landing;
