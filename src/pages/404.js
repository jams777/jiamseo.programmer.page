import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/SEO"
import Button from "../components/Button/Button"

const error = () => {
  return (
    <>
      <Seo title="Error" />
      <Layout>
        <div className="section">
          <div className="container container__tight">
            <h1>미안해요.</h1>
            <h3>이 페이지는 더이상 존재하지 않아요~</h3>
            <p>
              다른 메뉴를 선택해주세요
            </p>
            <Button text="돌아가기" to="/" as={Link} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default error
