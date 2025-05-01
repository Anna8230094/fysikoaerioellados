let requirementCount = 3;
let criteriaCount = 3;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addRequirementBtn").addEventListener("click", () => {
    const container = document.getElementById("extraRequirements");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Requirement ${requirementCount++}`;
    input.className = "form-control mb-6";
    container.appendChild(input);
  });

  document.getElementById("addCriteriaBtn").addEventListener("click", () => {
    const container = document.getElementById("extraCriteria");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Criteria ${criteriaCount++}`;
    input.className = "form-control mb-6";
    container.appendChild(input);
  });
});
