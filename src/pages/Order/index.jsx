import { AppliactionSection } from "./component/AppliactionSection";
import { DurationSelector } from "./component/DurationSection";
import { useOrderData } from "./hook/useOrder";

const Order = () => {
  const {
    application,
    duration,
    total,
    loading,
    info,
    setDuration,
    setInfo,
    handleOrder,
  } = useOrderData();

  return (
    <main className="w-full min-h-screen bg-background flex flex-col md:flex-row justify-center md:gap-12 py-12">
      <AppliactionSection
        application={application}
        info={info}
        setInfo={setInfo}
      />
      <DurationSelector
        duration={duration}
        setDuration={setDuration}
        total={total}
        handleOrder={handleOrder}
        loading={loading}
      />
    </main>
  );
};

export default Order;
