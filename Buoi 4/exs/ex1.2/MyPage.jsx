import React, { Suspense } from "react";

const MyFeature = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./MyFeature"));
      }, 3000);
    })
);

function MyPage() {
  return (
    <>
      <h1>My Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFeature />
      </Suspense>
    </>
  );
}

export default MyPage;
