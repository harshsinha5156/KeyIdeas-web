// Disable responsiveness
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1920, user-scalable=no');

        // =================== Comprehensive IT consulting Section

           const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content-box");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
        document.getElementById(btn.dataset.tab).scrollIntoView({ behavior: 'smooth' });
      });
    });

    // ===========================================

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });



    // ==============================

    
  
  function shiftRowLeft(rowId) {
    const row = document.getElementById(rowId);
    const first = row.children[0];
    row.appendChild(first); // move first to end
  }

  function swapColumnsBetweenRows(rowId1, rowId2) {
    const row1 = document.getElementById(rowId1);
    const row2 = document.getElementById(rowId2);

    if (row1.children.length > 0 && row2.children.length > 0) {
      const temp1 = row1.children[0];
      const temp2 = row2.children[0];

      row1.removeChild(temp1);
      row2.removeChild(temp2);

      row1.insertBefore(temp2, row1.children[0]);
      row2.insertBefore(temp1, row2.children[0]);
    }
  }

  setInterval(() => {
    shiftRowLeft('row1');              // Row 1 shifts left
    shiftRowLeft('row3');              // Row 3 shifts left
    swapColumnsBetweenRows('row2', 'row3'); // Swap 1st boxes between row 2 & 3
  }, 1000);
