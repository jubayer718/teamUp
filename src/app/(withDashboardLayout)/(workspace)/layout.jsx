import React from 'react';
import WorkSpace from "../../../components/Shared/MyWorkSpace/WorkSpace"

const WorkSpaceLayout = ({ children }) => {
  return (
    <div>

      <WorkSpace />
    //main content
      <div>
       
            {children}
      
      </div>
    </div>
  );
};

export default WorkSpaceLayout;