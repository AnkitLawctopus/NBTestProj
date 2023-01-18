import {
    getPost,
} from "../utils/wordpress";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Page = ({ post }) =>{
return(
<div>
<h2> {post[0].title.rendered} </h2><br />
<div style={{fontFamily:"Inter"}}>
        <div
            dangerouslySetInnerHTML={{
            __html: post[0].content.rendered.replace(/style=/g,""),
            }}
        ></div>
</div>
</div>
)
}


export default Page;

export async function getServerSideProps({ params }) {
    const data = await getPost(params.slug);
    console.log(data);
    return { props: { post: data } };
  }