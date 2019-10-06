import React from "react";
import styled from "styled-components";
import { Pie, Slices, Slice, PieLegend } from "../../components/Chart";

const MyStyledPie = styled.div`
  display: flex;
  flex-direction: reverse-column;

  *:first-child {
    width: 200px;
    margin-right: 2rem;
  }
`;

const Settings: React.FC = () => {
  return (
    <Pie>
      <MyStyledPie>
        <Slices hueShift={180}>
          <Slice value={2} label="111111111" />
          <Slice value={3} label="222222222" />
          <Slice value={5} label="333333333" />
          <Slice value={3} label="444444444" />
          <Slice value={8} label="555555555" />
        </Slices>

        {/* Legend *must* be after your slices */}
        <PieLegend />
      </MyStyledPie>
    </Pie>
  );
};
export default Settings;
