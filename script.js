document.getElementById("smartGoalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const specific = document.getElementById("specific").value;
  const measurable = document.getElementById("measurable").value;
  const achievable = document.getElementById("achievable").value;
  const relevant = document.getElementById("relevant").value;
  const timebound = document.getElementById("timebound").value;

  document.getElementById("resultSpecific").textContent = specific;
  document.getElementById("resultMeasurable").textContent = measurable;
  document.getElementById("resultAchievable").textContent = achievable;
  document.getElementById("resultRelevant").textContent = relevant;
  document.getElementById("resultTimebound").textContent = timebound;

  document.getElementById("result").classList.remove("hidden");
});
