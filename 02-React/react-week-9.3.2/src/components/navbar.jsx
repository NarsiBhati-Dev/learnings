import ButtonNav from "./button-nav";

export default function Navbar({ index, title, currentTab, setCurrentTab }) {
  return (
    <>
      <ButtonNav
        key={index}
        title={title}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </>
  );
}
