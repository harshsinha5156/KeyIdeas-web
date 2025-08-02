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