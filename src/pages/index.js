import Head from 'next/head'
import Format from "@/layout/Format";
import FilterBar from "@/components/UI/FilterBar";
import ProductRecommandation from "@/components/ProductRecommandation";
import Swiper from "@/components/UI/Swiper";

export default function Home() {
  return (
    <>
      
      <Format>
        <Swiper/>
        <ProductRecommandation/>
      </Format>
      
    </>
  )
}
