function SelectButton({ member, onSelect }) {
  return (
    <button type="button" onClick={() => onSelect(member)}>
      Select {member.name}
    </button>
  );
}

export default function Test() {
  const member = { id: 1, name: "Aline" };

  function handleSelect(selectedMember) {
    console.log("Selected:", selectedMember.name);
  }

  return <SelectButton member={member} onSelect={handleSelect} />;
}
