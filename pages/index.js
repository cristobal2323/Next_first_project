import { MainLayout } from "../components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className={"title"}>Home page</h1>
      <p className={"description"}>
        Get started by editing <code className={"Code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
