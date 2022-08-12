// our-domain.com/news/somethingimportant
import React from "react";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  console.log(router.query.newsId);

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
