import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed({ posts }) {
  return (
    <div className=" items-center flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Start of Stories */}
        <Stories />
        {/* End of Stories */}

        {/* Start of InputBox */}
        <InputBox />
        {/* End of InputBox */}

        {/* Start of Posts */}
        <Posts posts={posts} />
        {/* End of Posts */}
      </div>
    </div>
  );
}

export default Feed;
