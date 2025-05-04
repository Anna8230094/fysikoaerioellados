let requirementCount = 3;
let criteriaCount = 3;
let customerCount = 3;

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

  document.getElementById("addToTheTableBtn").addEventListener("click", () => {
    const tbody = document.querySelector("table.table tbody");
    const newRow = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = customerCount++;
    const nameCell = document.createElement("td");
    nameCell.textContent = `Customer ${customerCount - 1}`;
    newRow.appendChild(idCell);
    newRow.appendChild(nameCell);
    tbody.appendChild(newRow);
  });
});