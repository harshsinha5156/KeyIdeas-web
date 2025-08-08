 
        function shiftRowLeft(rowId) {
            const row = document.getElementById(rowId);
            if (row && row.children.length > 0) {
                const first = row.children[0];
                row.appendChild(first); // move first to end
            }
        }

        function swapColumnsBetweenRows(rowId1, rowId2) {
            const row1 = document.getElementById(rowId1);
            const row2 = document.getElementById(rowId2);

            if (row1 && row2 && row1.children.length > 0 && row2.children.length > 0) {
                const temp1 = row1.children[0];
                const temp2 = row2.children[0];

                row1.removeChild(temp1);
                row2.removeChild(temp2);

                row1.insertBefore(temp2, row1.children[0]);
                row2.insertBefore(temp1, row2.children[0]);
            }
        }

        // Only run animations on desktop sizes
        function handleAnimations() {
            if (window.innerWidth >= 768) {
                setInterval(() => {
                    shiftRowLeft('row1');
                    shiftRowLeft('row3');
                    swapColumnsBetweenRows('row2', 'row3');
                }, 2000);
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', handleAnimations);
        window.addEventListener('resize', function() {
            // You might want to add logic to clear intervals when resizing
            // and reinitialize if needed
        });

        // /=================================///////////////////=========================================


        // Comprehensive IT consulting Section
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            
            function handleTabClick(button) {
                const tabId = button.getAttribute('data-tab');
                const content = document.getElementById(tabId);
                
                if (window.innerWidth > 991) {
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
                    content.style.display = isActive ? 'none' : 'block';
                }
            }
            
            // Add click event to all buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    handleTabClick(this);
                });
            });
            
            // Initialize first tab as active on desktop
            if (window.innerWidth > 991) {
                tabButtons[0].classList.add('active');
                document.getElementById('tab1').classList.add('active');
            } else {
                // On mobile, close all tabs initially
                document.querySelectorAll('.tab-content-box').forEach(box => {
                    box.style.display = 'none';
                });
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 991) {
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


        // ==========================Customized IT consulting======================//////////============
    //       document.getElementById('showMoreBtn').addEventListener('click', function() {
    //     const gridContainer = this.closest('section').querySelector('.grid');
    //     gridContainer.classList.toggle('mobile-expanded');
        
    //     const chevron = document.getElementById('chevron');
    //     chevron.classList.toggle('rotate-180');
        
    //     this.querySelector('span').textContent = 
    //         gridContainer.classList.contains('mobile-expanded') ? 'Show Less' : 'Show More';
    // });

    // ==========================================================================


     // Show/hide mobile or desktop layout based on screen size
        function toggleLayout() {
            const desktopElements = document.querySelectorAll('.desktop-flex-col');
            const mobileElements = document.querySelectorAll('.mobile-layout, .mobile-first-row, .mobile-second-row');
            
            if (window.innerWidth > 768) {
                // Show desktop layout
                desktopElements.forEach(el => el.style.display = 'flex');
                mobileElements.forEach(el => el.style.display = 'none');
            } else {
                // Show mobile layout
                desktopElements.forEach(el => el.style.display = 'none');
                mobileElements.forEach(el => el.style.display = 'block');
            }
        }
        
        // Run on load and resize
        window.addEventListener('load', toggleLayout);
        window.addEventListener('resize', toggleLayout);