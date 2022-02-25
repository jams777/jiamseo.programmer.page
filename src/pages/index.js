import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Donny에 대해서"
          subTitle="도니에 대해서 궁금하신가요? 지금 어떠한 일을 하고 있을까요? 과거엔 무슨일을 했을까요? "
        />
        <BasicTextModule
          title="현재의 직업"
          content="현재 하고 있는 일에 대해서 설명해드릴게요~"
          link="/products"
          linkText="Donny 직업"
        />
        {/*
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        */}
        <Features
          title="과거의 직업"
          introduction="과거에 어떠한 일을 했는 지 설명해드릴게요~"
        />
        <LatestPosts
          title="도니의 일정"
          introduction="도니의 일정에 대해서 알려드릴게요~"
        />
      </Layout>
    </>
  )
}

export default Index
