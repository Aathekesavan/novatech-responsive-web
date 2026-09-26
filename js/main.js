/**
 * NovaTech E-Commerce - UI Scripts
 * Course: Full Stack Development (Task 1)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  let overlay = document.querySelector('.mobile-overlay');

  if (!overlay && navMenu) {
    overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);
  }

  if (menuToggle && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    };

    menuToggle.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
  }

  // 2. Product Detail Thumbnail Gallery Switcher
  const mainPreviewImg = document.querySelector('.main-preview-img');
  const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');

  if (mainPreviewImg && thumbnailBtns.length > 0) {
    thumbnailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbnailBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const newSrc = btn.getAttribute('data-img-src');
        if (newSrc) {
          mainPreviewImg.src = newSrc;
          mainPreviewImg.alt = btn.querySelector('img')?.alt || 'Product image';
        }
      });
    });
  }

  // 3. Tab Switching on Product Detail Page
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-pane');

  if (tabBtns.length > 0 && tabContents.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => {
          c.style.display = 'none';
          c.classList.remove('active');
        });

        btn.classList.add('active');
        const activePane = document.getElementById(targetId);
        if (activePane) {
          activePane.style.display = 'block';
          activePane.classList.add('active');
        }
      });
    });
  }

  // 4. Interactive Accordion (FAQ on contact.html)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const currentItem = header.parentElement;
        const isActive = currentItem.classList.contains('active');

        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
          item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
          currentItem.classList.add('active');
        }
      });
    });
  }

  // 5. Quantity Stepper Functionality
  const steppers = document.querySelectorAll('.quantity-stepper');
  steppers.forEach(stepper => {
    const decBtn = stepper.querySelector('.stepper-dec');
    const incBtn = stepper.querySelector('.stepper-inc');
    const input = stepper.querySelector('.stepper-input');

    if (decBtn && incBtn && input) {
      decBtn.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        if (val > 1) {
          input.value = val - 1;
          input.dispatchEvent(new Event('change'));
        }
      });

      incBtn.addEventListener('click', () => {
        let val = parseInt(input.value, 10) || 1;
        if (val < 99) {
          input.value = val + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  });

  // 6. Interactive Toast Notification for "Add to Cart"
  window.showToast = (message) => {
    let toast = document.getElementById('nova-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'nova-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: #0f172a;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';

    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
    }, 2800);
  };

  // Add click listeners to Add to Cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartBadge = document.querySelector('.cart-count-badge');
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.getAttribute('data-name') || 'Item';
      if (cartBadge) {
        let count = parseInt(cartBadge.textContent, 10) || 0;
        cartBadge.textContent = count + 1;
      }
      showToast(`✓ "${productName}" added to your cart!`);
    });
  });
});
