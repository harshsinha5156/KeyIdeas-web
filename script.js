// Disable responsiveness
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1920, user-scalable=no');

        // =================== Comprehensive IT consulting Section

            document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            
            // Function to handle tab/accordion toggle
            function handleTabClick(button) {
                const tabId = button.getAttribute('data-tab');
                const content = document.getElementById(tabId);
                
                if (window.innerWidth > 991.98) {
                    // Desktop behavior - traditional tabs
                    if (!button.classList.contains('active')) {
                        // Remove active class from all buttons and content
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        document.querySelectorAll('.tab-content-box').forEach(box => {
                            box.classList.remove('active');
                        });
                        
                        // Add active class to clicked button and content
                        button.classList.add('active');
                        content.classList.add('active');
                    }
                } else {
                    // Mobile behavior - accordion
                    const isActive = button.classList.contains('active');
                    
                    // Toggle current button
                    button.classList.toggle('active');
                    content.style.display = isActive ? 'none' : 'flex';
                }
            }
            
            // Add click event to all buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    handleTabClick(this);
                });
            });
            
            // Initialize first tab as active on desktop
            if (window.innerWidth > 991.98) {
                tabButtons[0].classList.add('active');
                document.getElementById('tab1').classList.add('active');
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 991.98) {
                    // Switch to desktop mode
                    document.querySelectorAll('.tab-content-box').forEach(box => {
                        box.style.display = '';
                    });
                    
                    // Make sure one tab is always active on desktop
                    const activeTab = document.querySelector('.tab-button.active');
                    if (!activeTab) {
                        tabButtons[0].classList.add('active');
                        document.getElementById('tab1').classList.add('active');
                    }
                } else {
                    // Switch to mobile mode - close all initially
                    tabButtons.forEach(button => {
                        button.classList.remove('active');
                    });
                    document.querySelectorAll('.tab-content-box').forEach(box => {
                        box.style.display = 'none';
                    });
                }
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



    // ==========================================

    
  
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
