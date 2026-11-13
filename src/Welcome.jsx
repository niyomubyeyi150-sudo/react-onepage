function useFunction(a, b) {
  return a + b;
}

function WelcomeToReact() {
  const learner = "Aline";
  const sum = useFunction(2, 3);
  return (
    <>
      <h1>
        Hello, {learner}! the sum is {sum}
      </h1>
    </>
  );
}

export default WelcomeToReact;
