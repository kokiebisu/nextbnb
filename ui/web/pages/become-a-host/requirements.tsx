import Router from "next/router";

import { Layout } from "@layout";
import { Prototype, $Prototype } from "@prototype/create";

const RequirementsPage = () => {
  const proceed = () => {
    setTimeout(() => {
      Router.push("/become-a-host/rules");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/phone");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype title="Booking settings" variant={$Prototype.REQUIREMENTS} />
      }
      percentage={80}
      next={proceed}
      back={revert}
    />
  );
};

export default RequirementsPage;
