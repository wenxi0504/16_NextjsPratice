// our-domain.com/news/somethingimportant
import React from "react";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  return <h1>The Detail Page</h1>;
}

export default DetailPage;
