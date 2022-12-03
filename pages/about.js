import { MainLayout } from "../components/layout/MainLayout";
import { DarkLayout } from "../components/layout/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <h1 className={"title"}>About page</h1>
      <p className={"description"}>
        Get started by editing <code className={"Code"}>pages/index.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
