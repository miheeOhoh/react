import { Bottom } from "@/components/shared";
import Header from "@/layouts/home/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header title={"test"}/>
      {children}
      <Bottom />
    </>
  );
};

export default Layout;
