// ========== ИНИЦИАЛИЗАЦИЯ САЙТА (Site Initialization) ==========
document.addEventListener('DOMContentLoaded', function() {
  // ========== ВЫПАДАЮЩИЙ СПИСОК (Dropdown) ==========
  const dropdown = document.querySelector('.custom-dropdown');
  const hiddenSystemInput = document.getElementById('systemType');
  if (dropdown) {
    const selected = dropdown.querySelector('.dropdown__selected');
    const options = dropdown.querySelector('.dropdown__options');
    const arrow = dropdown.querySelector('.dropdown__arrow');

    if (selected && options) {
      selected.addEventListener('click', () => {
        const isOpen = dropdown.classList.toggle('open');
        options.style.display = isOpen ? 'block' : 'none';
        selected.classList.toggle('open', isOpen);
      });

      options.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
          selected.textContent = e.target.textContent;
          if (hiddenSystemInput) hiddenSystemInput.value = e.target.textContent;
          options.style.display = 'none';
          dropdown.classList.remove('open');
          selected.classList.remove('open');

          // Анимация выбора
          e.target.style.backgroundColor = 'rgba(67, 171, 240, 0.2)';
          setTimeout(() => {
            e.target.style.backgroundColor = '';
          }, 300);
        }
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          options.style.display = 'none';
          dropdown.classList.remove('open');
          selected.classList.remove('open');
        }
      });
    }
  }

  // ========== ФАЙЛ (File Attachment trigger) ==========
  const attachTrigger = document.getElementById('attachTrigger');
  const attachmentInput = document.getElementById('attachment');
  if (attachTrigger && attachmentInput) {
    attachTrigger.addEventListener('click', () => {
      attachmentInput.click();
    });
  }

  // ========== ПОЛЗУНОК ПРОГРЕССА (Progress Range) ==========
  const progressRange = document.getElementById('progressRange');
  const percentageElement = document.getElementById('percentage');

  function updateProgress() {
    if (!progressRange || !percentageElement) return;
    const value = progressRange.value;
    percentageElement.textContent = value + '%';

    // Анимация изменения процентов
    percentageElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
      percentageElement.style.transform = 'scale(1)';
    }, 200);
  }

  if (progressRange && percentageElement) {
    progressRange.addEventListener('input', updateProgress);
    updateProgress();
  }

  // ========== ПЛАВНАЯ ПРОКРУТКА (Smooth Scroll) ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return; // игнорируем пустые якоря
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== АНИМАЦИЯ ПРИ СКРОЛЛЕ (Scroll Animations) ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  console.log('Сайт успешно загружен!');

  // Добавляем плавное появление контента
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});