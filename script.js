document.getElementById("smartGoalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const smartGoal = document.getElementById("smartGoal").value;
  const stepsTimeframe = document.getElementById("stepsTimeframe").value;
  const challenges = document.getElementById("challenges").value;
  const strategies = document.getElementById("strategies").value;
  const tools = document.getElementById("tools").value;
  const people = document.getElementById("people").value;
  const progress = document.getElementById("progress").value;

  document.getElementById("resultSmartGoal").textContent = smartGoal;
  document.getElementById("resultStepsTimeframe").textContent = stepsTimeframe;
  document.getElementById("resultChallenges").textContent = challenges;
  document.getElementById("resultStrategies").textContent = strategies;
  document.getElementById("resultTools").textContent = tools;
  document.getElementById("resultPeople").textContent = people;
  document.getElementById("resultProgress").textContent = progress;

  document.getElementById("result").classList.remove("hidden");
});
