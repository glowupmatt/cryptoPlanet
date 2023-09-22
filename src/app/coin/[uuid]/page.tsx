import React from "react";

type Props = {
  params: {
    uuid: string;
  };
};

const page = (props: Props) => {
  const {
    params: { uuid },
  } = props;
  return (
    <div>
      <div>{uuid}</div>
    </div>
  );
};

export default page;
