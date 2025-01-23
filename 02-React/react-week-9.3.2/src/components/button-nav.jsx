export default function ButtonNav({ title, currentTab, setCurrentTab }) {
  const buttonStyles = {
    padding: 24,
    borderRadius: 20,
    margin: 5,
    backgroundColor: "Black",
    fontSize: 20,
  };

  return (
    <>
      <button
        style={{
          ...buttonStyles,
          color: currentTab === title ? "#4184f3" : "white",
        }}
        onClick={() => setCurrentTab(title)}
      >
        {title}
      </button>
    </>
  );
}
